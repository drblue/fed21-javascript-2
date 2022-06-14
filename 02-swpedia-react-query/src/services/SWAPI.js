/**
 * The Star Wars API service
 *
 * <https://swapi.dev>
 * API: <https://swapi.dev/api>
 * Reference: <https://swapi.dev/documentation>
 */

import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_SWAPI_BASE_URL || 'https://swapi.dev/api/'

const get = async (endpoint) => {
	const response = await axios.get(endpoint)

	return response.data
}

const getResource = async (resource, page = 1, query = null) => {
	return get(`/${resource}/?page=${page}&query=${query}`)
}

/**
 * Get films
 *
 * @param {number} page Page of films to get
 * @returns Promise
 */
export const getFilms = async ({ queryKey }) => {
	const [_key, { page }] = queryKey
	return getResource('films', page)
}

/**
 * Get a single film
 *
 * @param {number} id Film ID
 * @returns Promise
 */
export const getFilm = async ({ queryKey }) => {
	const [_key, { id }] = queryKey
	return get(`/films/${id}/`)
}

/**
 * Get people
 *
 * @param {number} page Page of people to get
 * @returns Promise
 */
export const getPeople = async ({ queryKey }) => {
	const [_key, { page, query }] = queryKey
	return get(`/people/?page=${page}&search=${query}`)
}

/**
 * Get a single person
 *
 * @param {number} id Person ID
 * @returns Promise
 */
export const getPerson = async ({ queryKey }) => {
	const [_key, { id }] = queryKey
	return get(`/people/${id}/`)
}

/**
 * Get planets
 *
 * @param {number} page Page of planets to get
 * @returns Promise
 */
export const getPlanets = async (page = 1) => {
	return get(`/planets/?page=${page}`)
}

/**
 * Get a single planet
 *
 * @param {number} id Planet ID
 * @returns Promise
 */
export const getPlanet = async (id = 1) => {
	return get(`/planets/${id}/`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getFilms,
	getFilm,
	getPeople,
	getPerson,
}
