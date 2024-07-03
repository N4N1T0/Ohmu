// React Imports
import React from 'react'

// Importing UI components
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

// Assets Imports
import { Check } from 'lucide-react'

// Locale Imports
import { uiInfo } from '@/constants/ui-locale'

// Constants Imports
import { services } from '@/constants/servicios'

// React components Imports
import ContactSheet from '@/components/react/contact-sheet'

const ServicesAccordion = React.memo(
	({ locale }: { locale: 'es' | 'en' | 'de' | 'fr' }) => {
		const uiText = uiInfo[locale as keyof typeof uiInfo]
		const serviceData = services[locale as keyof typeof services]

		return (
			<Accordion type='single' collapsible className='mt-10'>
				{serviceData.map(({ title, description, image, advantages }, index) => (
					<AccordionItem value={title} key={title}>
						<AccordionTrigger
							className='text-xl md:text-6xl uppercase flex py-5 md:py-10'
							moreicon={uiText['services-moreIcon']}
						>
							<div className='flex items-center gap-1 md:gap-4'>
								<span className='text-3xl text-gold mr-5 md:mr-10'>
									0{index + 1}
								</span>
								{title}
							</div>
						</AccordionTrigger>
						<CustomAccordionContent
							image={image}
							title={title}
							description={description}
							advantages={advantages}
							locale={locale}
							contactButton={uiText['contact-sheet-button']}
							isLeft={index % 2 === 0}
						/>
					</AccordionItem>
				))}
			</Accordion>
		)
	},
)

const CustomAccordionContent = React.memo(
	({
		image,
		title,
		description,
		advantages,
		isLeft,
		contactButton,
		locale,
	}: {
		image: ImageMetadata
		title: string
		description: string
		advantages: string[]
		isLeft: boolean
		contactButton: string
		locale: 'es' | 'en' | 'de' | 'fr'
	}) => {
		return (
			<AccordionContent
				className={`${
					isLeft
						? 'flex-col-reverse md:flex-row-reverse'
						: 'flex-col md:flex-row'
				} mx-8 md:mx-16 lg:mx-24 flex gap-10 pb-5 md:pb-10 lg:pb-20`}
			>
				<img
					src={image.src}
					alt={title}
					title={`${title} Showcase`}
					className='rounded-[2rem] object-cover aspect-square flex-1 w-full md:w-1/2'
				/>
				<div className='flex-auto flex flex-col my-auto'>
					<h4 className='text-xl md:text-3xl uppercase'>{description}</h4>
					<ul className='mt-5 space-y-3 text-gray-300'>
						{advantages.map((advantage) => (
							<li key={advantage}>
								<Check className='inline mr-2 text-gold' />
								{advantage}
							</li>
						))}
					</ul>
					<ContactSheet locale={locale} selectedService={title}>
						<button
							type='button'
							className='w-full mt-5 block rounded-full text-navy bg-gold px-5 py-2.5 text-sm font-medium shadow-gold shadow-sm uppercase transition-all duration-150 hover:scale-105 hover:shadow-md'
						>
							{contactButton}
						</button>
					</ContactSheet>
				</div>
			</AccordionContent>
		)
	},
)

export default ServicesAccordion
