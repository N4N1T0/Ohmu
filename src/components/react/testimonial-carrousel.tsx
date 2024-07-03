// React imports
import { testimonials } from '@/constants/testimonials'

// UI Imports
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

/**
 * Renders a Testimonials Carousel component with testimonials data.
 *
 * @return {JSX.Element} The Testimonials Carousel component JSX
 */
const TestimonialsCarrousel = (): JSX.Element => {
	return (
		<Carousel
			opts={{
				loop: true,
			}}
			className='w-full md:w-[80%] mr-0 md:mr-10'
		>
			<CarouselContent className='w-full'>
				{testimonials.map((item) => (
					<CarouselItem key={item.name} className='uppercase text-ivory'>
						<p className='text-xl md:text-2xl 2xl:text-5xl font-semibold uppercase leading-tight'>
							{item.text}
						</p>
						<hr className='border-ivory mt-10' />
						<div className='w-full py-5 flex justify-between items-center text-navy'>
							<h4 className='text-xl font-semibold'>{item.name}</h4>
							<h6>{item.role}</h6>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className='hidden md:flex' />
			<CarouselNext className='hidden md:flex' />
		</Carousel>
	)
}

export default TestimonialsCarrousel
