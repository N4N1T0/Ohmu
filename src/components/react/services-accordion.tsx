import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { services } from '@/constants/site-data'

const ServicesAccordion = () => {
	return (
		<Accordion type='single' collapsible>
			{services.map(({ title, description }, index) => (
				<AccordionItem value={title} key={title}>
					<AccordionTrigger>{title}</AccordionTrigger>
					<AccordionContent>{description}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

export default ServicesAccordion
