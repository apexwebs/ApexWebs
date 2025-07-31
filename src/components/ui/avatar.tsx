import * as React from "react"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Avatar({ children, className, ...props }: AvatarProps) {
  return (
    <div
      className={
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 " +
        (className || "")
      }
      {...props}
    >
      {children}
    </div>
  )
}
