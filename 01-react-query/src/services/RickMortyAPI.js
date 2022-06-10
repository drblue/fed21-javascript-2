import axios from 'axios'

const BASE_URL = 'https://rickandmortyapi.com/api'
const FAKE_DELAY = 3000

const get = async (endpoint) => {
	const response = await axios.get(BASE_URL + endpoint)

	FAKE_DELAY && await new Promise(r => setTimeout(r, FAKE_DELAY))

	return response.data
}

export const getCharacters = ({ queryKey }) => {
	const [_key, page] = queryKey

	return get(`/character?page=${page}`)
}

export default {
	getCharacters,
}
