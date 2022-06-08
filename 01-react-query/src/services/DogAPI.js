import axios from 'axios'

export const getRandomDog = async () => {
	const response = await axios.get('https://dog.ceo/api/breeds/image/random')

	return response.data
}

export default {
	getRandomDog,
}
