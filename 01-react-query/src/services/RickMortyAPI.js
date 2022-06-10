import axios from 'axios'

const BASE_URL = 'https://rickandmortyapi.com/api'

const get = async (endpoint) => {
	const response = await axios.get(BASE_URL + endpoint)
	return response.data
}

export const getCharacters = ({ queryKey }) => {
	const [_key, page] = queryKey

	return get(`/character?page=${page}`)
}

export default {
	getCharacters,
}
