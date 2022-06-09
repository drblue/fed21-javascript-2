import axios from 'axios'

axios.defaults.baseURL = 'https://dad-jokes.p.rapidapi.com'
axios.defaults.headers = {
	'X-RapidAPI-Key': import.meta.env.VITE_DAD_JOKES_API_KEY,
	'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
}

export const getRandomJoke = async () => {
	const response = await axios.get('/random/joke')
	return response.data
}

export default {
	getRandomJoke
}
