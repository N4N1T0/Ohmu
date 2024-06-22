import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { uiInfo, navItems } from '@/constants/site-data'

const MobileNavbarSheet = ({
	children,
	locale,
}: { children: React.ReactNode; locale: 'es' | 'en' | 'rs' }) => {
	const uiText = uiInfo[locale as keyof typeof uiInfo]
	return (
		<Sheet>
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent side='left'>
				<SheetHeader className='border-b border-navy/30 pb-5'>
					<SheetTitle className='text-2xl md:text-3xl uppercase text-navy font-medium text-left'>
						{uiText['mobile-navbar-sheet-header']}
					</SheetTitle>
				</SheetHeader>
				<nav className='mt-5'>
					<ul className='space-y-3'>
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
