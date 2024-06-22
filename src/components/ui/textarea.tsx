import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					'flex min-h-[80px] w-full rounded-2xl border border-navy/70 bg-white placeholder:text-navy px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 focus:outline-gold',
					className,
				)}
				rows={5}
				ref={ref}
				{...props}
			/>
		)
	},
)
Textarea.displayName = 'Textarea'

export { Textarea }
