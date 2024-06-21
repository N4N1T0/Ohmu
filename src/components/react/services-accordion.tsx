import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { services } from '@/constants/site-data'

const ServicesAccordion = ({ locale }: { locale: 'es' | 'en' | 'rs' }) => {
	return (
		<Accordion type='single' collapsible className='mt-10'>
			{services[locale as keyof typeof services].map(
				({ title, description, image }, index) => (
					<AccordionItem value={title} key={title}>
						<AccordionTrigger className='text-6xl uppercase flex py-10'>
							<div className='flex items-center gap-4'>
								<span className='text-3xl text-gold mr-5 md:mr-10'>
									0{index + 1}
								</span>
								{title}
							</div>
						</AccordionTrigger>
						<AccordionContent className='mx-24'>
							<img
								src={image.src}
								alt={title}
								title={`${title} Showcase`}
								className='w-full rounded-[2rem] object-fit'
							/>
							<div>{description}</div>
						</AccordionContent>
					</AccordionItem>
				),
			)}
		</Accordion>
	)
}

export default ServicesAccordion
