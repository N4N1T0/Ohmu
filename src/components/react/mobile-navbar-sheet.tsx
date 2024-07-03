// Imports from @/components/ui
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'

// Imports from @/constants/site-data
import { navItems } from '@/constants/site-data'
import { uiInfo } from '@/constants/ui-locale'

/**
 * MobileNavbarSheet component renders a sheet component with a left side drawer
 * that contains a list of navigation items.
 *
 * @param {Object} props - The props object containing the children and locale.
 * @param {React.ReactNode} props.children - The trigger element for the sheet.
 * @param {('es' | 'en' | 'de' | 'fr')} props.locale - The locale for the UI text.
 * @return {JSX.Element} The sheet component with the navigation items.
 */
const MobileNavbarSheet = ({
	children,
	locale,
}: {
	children: React.ReactNode
	locale: 'es' | 'en' | 'de' | 'fr'
}): JSX.Element => {
	// Get the UI text based on the locale.
	const uiText = uiInfo[locale as keyof typeof uiInfo]

	return (
		<Sheet>
			{/* Render the sheet trigger element. */}
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent side='left'>
				<SheetHeader className='border-b border-navy/30 pb-5'>
					{/* Render the sheet header with the mobile navbar sheet header text. */}
					<SheetTitle className='text-2xl md:text-3xl uppercase text-navy font-medium text-left'>
						{uiText['mobile-navbar-sheet-header']}
					</SheetTitle>
				</SheetHeader>
				<nav className='mt-5'>
					<ul className='space-y-3'>
						{/* Render the navigation items. */}
						{navItems.map((item) => (
							<li
								key={item.label}
								className='hover:text-gold text-xl md:text-2xl uppercase text-navy font-medium text-left'
							>
								<a href={item.href} target='_blank' rel='noopener noreferrer'>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNavbarSheet
