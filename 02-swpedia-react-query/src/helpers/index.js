/**
 * Extract ID from SWAPI url
 */

export const getIdFromUrl = (url) => {
	// eslint-disable-next-line no-unused-vars
	const [_endpoint, id] = url
		.replace(import.meta.env.VITE_SWAPI_BASE_URL || 'https://swapi.dev/api/', '')
		.slice(0, -1)
		.split('/')

	return id
}
