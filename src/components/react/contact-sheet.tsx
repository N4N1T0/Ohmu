// Icons
import { ArrowUpRight } from 'lucide-react'

// Components
import FormContact from '@/components/react/form-contact'

// Data
import { ourLinks } from '@/constants/site-data'
import { uiInfo } from '@/constants/ui-locale'

// UI
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

/**
 * ContactSheet component.
 * Renders a sheet with contact information and a form for user to submit their contact details.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The trigger element for the sheet.
 * @param {'es' | 'en' | 'de' | 'fr'} props.locale - The locale for the UI text.
 * @returns {JSX.Element} The rendered ContactSheet component.
 */
const ContactSheet = ({
	children,
	locale,
	selectedService = '',
}: {
	children: React.ReactNode
	locale: 'es' | 'en' | 'de' | 'fr'
	selectedService?: string
}): JSX.Element => {
	// Retrieve UI text based on locale
	const uiText = uiInfo[locale as keyof typeof uiInfo]

	return (
		<Sheet>
			{/* Render the trigger element */}
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent className='flex flex-col justify-between overflow-y-scroll overflow-x-hidden'>
				<SheetHeader className='border-b border-navy/30 pb-5'>
					<SheetTitle className='text-2xl md:text-3xl uppercase text-navy font-medium text-left'>
						{/* Render the contact sheet header */}
						{uiText['contact-sheet-header']}
					</SheetTitle>
				</SheetHeader>
				{/* Render the contact form */}
				<FormContact locale={locale} selectedService={selectedService} />
				<SheetFooter className='border-t border-navy/30 pt-5 flex flex-col text-navy'>
					<p className='text-xl md:text-2xl uppercase font-medium mb-3'>
						{/* Render the contact sheet footer */}
						{uiText['contact-sheet-footer']}
					</p>
					{/* Render the contact links */}
					{ourLinks.map((link) => (
						<a
							key={link.label}
							href={link.link}
							className='hover:text-gold text-xs md:text-base mt-1'
						>
							{link.label}
							<ArrowUpRight
								color='currentColor'
								className='ml-1 inline-block size-4 md:size-5'
							/>
						</a>
					))}
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default ContactSheet
