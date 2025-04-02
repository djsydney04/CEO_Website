'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-[#545454] text-white hover:bg-[#444444]': variant === 'default',
            'border border-[#545454] text-[#545454] hover:bg-[#545454] hover:text-white': variant === 'outline',
            'text-[#545454] hover:bg-gray-100': variant === 'ghost',
          },
          {
            'text-sm px-3 py-1.5': size === 'sm',
            'text-base px-4 py-2': size === 'md',
            'text-lg px-6 py-3': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
) 