import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// // 
// npx shadcn-ui@latest add aspect-ratio
// npx shadcn-ui@latest add badge
// npx shadcn-ui@latest add button
// npx shadcn-ui@latest add card
// npx shadcn-ui@latest add form
// npx shadcn-ui@latest add input
// npx shadcn-ui@latest add label
// npx shadcn-ui@latest add radio-group
// npx shadcn-ui@latest add select
// npx shadcn-ui@latest add sheet
// npx shadcn-ui@latest add slider
// npx shadcn-ui@latest add tabs
// npx shadcn-ui@latest add toast
