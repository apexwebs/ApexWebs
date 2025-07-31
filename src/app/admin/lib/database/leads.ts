// src/app/admin/lib/database/leads.ts
// Service layer for lead management in the admin portal
// Provides CRUD operations and lead scoring logic

import { sql } from '@vercel/postgres'

export interface Lead {
  id: number
  name: string
  email: string
  phone?: string
  company?: string
  project_type: string
  budget_range?: string
  timeline?: string
  message: string
  lead_score: number
  status: string
  source: string
  assigned_to?: number
  priority: string
  created_at: Date
  updated_at: Date
}

export class LeadService {
  static async getAll(filters?: {
    status?: string
    priority?: string
    assigned_to?: number
    dateFrom?: Date
    dateTo?: Date
  }): Promise<Lead[]> {
    let query = `SELECT * FROM leads WHERE 1=1`
    const params = []
    if (filters?.status) {
      query += ` AND status = $${params.length + 1}`
      params.push(filters.status)
    }
    if (filters?.priority) {
      query += ` AND priority = $${params.length + 1}`
      params.push(filters.priority)
    }
    if (filters?.assigned_to) {
      query += ` AND assigned_to = $${params.length + 1}`
      params.push(filters.assigned_to)
    }
    if (filters?.dateFrom) {
      query += ` AND created_at >= $${params.length + 1}`
      params.push(filters.dateFrom)
    }
    if (filters?.dateTo) {
      query += ` AND created_at <= $${params.length + 1}`
      params.push(filters.dateTo)
    }
    query += ` ORDER BY created_at DESC`
    const { rows } = await sql.query(query, params)
    return rows as Lead[]
  }

  static async getById(id: number): Promise<Lead | null> {
    const { rows } = await sql`SELECT * FROM leads WHERE id = ${id}`
    return rows[0] as Lead || null
  }

  static async updateStatus(id: number, status: string, userId: number): Promise<void> {
    await sql`
      UPDATE leads 
      SET status = ${status}, 
          updated_at = NOW(),
          assigned_to = ${userId}
      WHERE id = ${id}
    `
    // Log the status change
    await sql`
      INSERT INTO interactions (lead_id, type, content, created_by)
      VALUES (${id}, 'status_change', ${`Status changed to ${status}`}, ${userId})
    `
  }

  static async calculateLeadScore(leadData: Partial<Lead>): Promise<number> {
    let score = 0
    // Budget scoring
    if (leadData.budget_range === '500k+') score += 25
    else if (leadData.budget_range === '200k-500k') score += 20
    else if (leadData.budget_range === '50k-200k') score += 15
    else if (leadData.budget_range === '<50k') score += 10
    // Timeline scoring
    if (leadData.timeline === 'urgent') score += 20
    else if (leadData.timeline === '1-month') score += 15
    else if (leadData.timeline === '2-3-months') score += 10
    else if (leadData.timeline === 'flexible') score += 5
    // Project type scoring
    if (leadData.project_type === 'custom-web-app') score += 20
    else if (leadData.project_type === 'api-integration') score += 15
    else if (leadData.project_type === 'website') score += 10
    // Company presence scoring
    if (leadData.company) score += 10
    // Message quality scoring (simple length check)
    if (leadData.message && leadData.message.length > 100) score += 10
    else if (leadData.message && leadData.message.length > 50) score += 5
    return Math.min(score, 100) // Cap at 100
  }

  static async updateLeadScore(id: number): Promise<void> {
    const lead = await this.getById(id)
    if (!lead) return
    const newScore = await this.calculateLeadScore(lead)
    await sql`
      UPDATE leads 
      SET lead_score = ${newScore}, updated_at = NOW()
      WHERE id = ${id}
    `
  }
}
