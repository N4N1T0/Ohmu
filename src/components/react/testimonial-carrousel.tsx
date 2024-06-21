import { testimonials } from '@/constants/testimonials'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

const TestimonialsCarrousel = () => {
	return (
		<Carousel className='w-[80%] mr-10'>
			<CarouselContent className='w-full'>
				{testimonials.map((item) => (
					<CarouselItem key={item.name} className='uppercase text-ivory'>
						<p className='text-5xl font-semibold uppercase leading-tight'>
							{item.text}
						</p>
						<hr className='border-ivory mt-10' />
						<div className='w-full py-5 flex justify-between items-center'>
							<h4 className='text-xl font-semibold'>{item.name}</h4>
							<h6>{item.role}</h6>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

export default TestimonialsCarrousel
