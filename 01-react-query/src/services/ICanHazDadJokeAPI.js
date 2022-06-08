import axios from 'axios'

export const getRandomDadJoke = async () => {
	const response = await axios.get('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json',
		},
	})

	return response.data
}

export default {
	getRandomDadJoke,
}
