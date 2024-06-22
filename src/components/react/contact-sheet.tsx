import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from '@/components/ui/sheet'
import { ArrowUpRight } from 'lucide-react'
import { uiInfo, ourLinks } from '@/constants/site-data'
import FormContact from '@/components/react/form-contact'

const ContactSheet = ({
	children,
	locale,
}: { children: React.ReactNode; locale: 'es' | 'en' | 'rs' }) => {
	const uiText = uiInfo[locale as keyof typeof uiInfo]

	return (
		<Sheet>
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent className='flex flex-col justify-between overflow-y-scroll overflow-x-hidden'>
				<SheetHeader className='border-b border-navy/30 pb-5'>
					<SheetTitle className='text-2xl md:text-3xl uppercase text-navy font-medium text-left'>
						{uiText['contact-sheet-header']}
					</SheetTitle>
				</SheetHeader>
				<FormContact locale={locale} />
				<SheetFooter className='border-t border-navy/30 pt-5 flex flex-col text-navy'>
					<p className='text-xl md:text-2xl uppercase font-medium mb-3'>
						{uiText['contact-sheet-footer']}
					</p>
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
