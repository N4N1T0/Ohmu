// Locale Imports
import { siteLocale } from '@/constants/site-data'

// UI components
import { Button } from '@/components/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

// Assets libraries
import { ChevronDown } from 'lucide-react'

/**
 * Renders a popover component for selecting different locales.
 *
 * @param {Object} props - The component props.
 * @param {('es' | 'en' | 'de' | 'fr')} props.locale - The current locale.
 * @return {JSX.Element} The popover component.
 */
const LocalePopover = ({
	locale,
}: { locale: 'es' | 'en' | 'de' | 'fr' }): JSX.Element => {
	// Find the current locale in the siteLocale array.
	const currentLocale = siteLocale.find(({ locale: l }) => l === locale)

	// Filter out the current locale and get the other locales.
	const otherLocales = siteLocale.filter(({ locale: l }) => l !== locale)

	// Render the popover component.
	return (
		// TODO fix animation of the chevron
		<Popover>
			{/* Trigger for the popover */}
			<PopoverTrigger asChild>
				<Button className='border-gold bg-white text-navy hover:bg-gold uppercase border rounded-full [&[data-state=open]>svg]:rotate-180 ease-out duration-100'>
					{/* Display the name of the current locale */}
					{currentLocale?.name}
					<ChevronDown />
				</Button>
			</PopoverTrigger>
			{/* Content of the popover */}
			<PopoverContent className='border-gold w-fit'>
				<nav aria-label='language selection'>
					<ul role='menu'>
						{/* Map through the other locales and render a list item for each */}
						{otherLocales.map(({ name, locale: l }) => (
							<li key={name} role='presentation'>
								<a
									href={l}
									role='menuitem'
									className='block py-2 px-5 text-sm text-gray-900 transition duration-150 hover:bg-gold hover:text-gray-800 rounded-full'
								>
									{/* Display the name of each locale */}
									{name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</PopoverContent>
		</Popover>
	)
}

export default LocalePopover
