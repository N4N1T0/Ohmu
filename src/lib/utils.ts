// Package Imports
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Generates a class name by merging multiple class values.
 *
 * @param {ClassValue[]} inputs - An array of class values.
 * @return {string} The merged class name.
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs))
}

/**
 * Converts a given text into a slug by performing the following transformations:
 * - Converts the text to lowercase.
 * - Replaces all whitespace characters with hyphens.
 * - Removes all non-word and non-hyphen characters.
 * - Replaces multiple consecutive hyphens with a single hyphen.
 * - Removes any leading or trailing hyphens.
 *
 * @param {string} text - The text to be slugified.
 * @return {string} The slugified version of the input text.
 */
export function slugify(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
}

/**
 * Finds the locale in a given URL by splitting the URL into segments and finding the first segment that starts with 'en' or is an empty string.
 *
 * @param {string} url - The URL to search for the locale.
 * @return {string | undefined} The locale found in the URL, or undefined if no locale is found.
 */
export function findLocale(url: string): string | undefined {
	const segments = url.split('/')
	const locale = segments.find(
		(segment) =>
			segment.startsWith('en') || segment.startsWith('en') || segment === '',
	)
	return locale
}

export function projectTextArray(text: string): string[] {
	return text.split('-')
}

export function resultsTextArray(text: string): string[] {
	return text.split('%')
}
