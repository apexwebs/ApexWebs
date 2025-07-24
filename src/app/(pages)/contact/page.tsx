"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const validateKenyanPhone = (phone: string) => {
  // Kenyan phone numbers: +2547XXXXXXXX or 07XXXXXXXX
  const regex = /^(\+254|0)7\d{8}$/;
  return regex.test(phone);
};

const validateEmail = (email: string) => {
  // Simple email regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// This page has been removed as per project requirements. Please use the modal contact form instead.
export default function ContactPage() {
  return null;
}