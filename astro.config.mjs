import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import million from 'million/compiler'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		million.vite({
			mode: 'react',
			server: true,
			auto: true,
		}),
	],
	output: 'static',
	adapter: vercel(),
})
