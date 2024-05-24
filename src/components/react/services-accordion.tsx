import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { services } from '@/constants/site-data'

const ServicesAccordion = () => {
	return (
		<Accordion type='single' collapsible className='mt-10'>
			{services.map(({ title, description }, index) => (
				<AccordionItem value={title} key={title}>
					<AccordionTrigger className='text-6xl uppercase flex py-10'>
						<div className='flex items-center gap-4'>
							<span className='text-3xl text-gold'>0{index + 1}</span>
							{title}
						</div>
					</AccordionTrigger>
					<AccordionContent>{description}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

export default ServicesAccordion
