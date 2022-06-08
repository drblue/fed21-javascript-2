import axios from 'axios'

export const getRandomDadJoke = async () => {
	const response = await axios.get('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json',
		},
	})

	await new Promise(r => setTimeout(r, 3000))

	return response.data
}

export default {
	getRandomDadJoke,
}
