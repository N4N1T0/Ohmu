// Component imports
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// UI imports
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

// Data imports
import { uiForm, services } from '@/constants/site-data'

// Library imports
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const FormContact = ({ locale }: { locale: 'es' | 'en' | 'rs' }) => {
	const formUiText = uiForm[locale as keyof typeof uiForm]

	const formSchema = z.object({
		name: z
			.string()
			.min(2, { message: formUiText['contact-name-error'] })
			.max(50),
		email: z.string().email({ message: formUiText['contact-email-error'] }),
		phone: z.string().min(2, formUiText['contact-phone-error']),
		services: z.string(),
		message: z.string().min(10).max(500),
	})

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			services: '',
			message: '',
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 my-4'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='uppercase text-navy ml-2'>
								{formUiText['contact-name']}
							</FormLabel>
							<FormControl>
								<Input
									placeholder={formUiText['contact-name-placeholder']}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='uppercase text-navy ml-2'>
								{formUiText['contact-email']}
							</FormLabel>
							<FormControl>
								<Input
									placeholder={formUiText['contact-email-placeholder']}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='uppercase text-navy ml-2'>
								{formUiText['contact-phone']}
							</FormLabel>
							<FormControl>
								<Input
									placeholder={formUiText['contact-phone-placeholder']}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='services'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='uppercase text-navy ml-2'>
								{formUiText['contact-services']}
							</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue
											placeholder={formUiText['contact-services-placeholder']}
										/>
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{services[locale as keyof typeof services].map((service) => (
										<SelectItem
											key={`${service.title}-form`}
											value={service.title}
										>
											{service.title}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='uppercase text-navy ml-2'>
								{formUiText['contact-message']}
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder={formUiText['contact-message-placeholder']}
									className='resize-none'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type='submit'
					className='bg-navy uppercase hover:bg-gold hover:text-navy text-white w-full tracking-widest'
				>
					{formUiText['contact-submit']}
				</Button>
			</form>
		</Form>
	)
}

export default FormContact
