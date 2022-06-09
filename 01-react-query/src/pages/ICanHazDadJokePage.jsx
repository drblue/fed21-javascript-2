import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getRandomDadJoke } from '../services/ICanHazDadJokeAPI'

const ICanHazDadJokePage = () => {
	const { isLoading, isError, error, data } = useQuery('i-can-haz-dad-joke', getRandomDadJoke)

	return (
		<Container className="py-3">

			<h1>Random Dad Joke</h1>

			{isLoading && (<p>Loading dad joke...</p>)}

			{isError && (<p>An error occurred: {error.message}</p>)}

			{data && (
				<div className="h3 text-center my-5">
					{data.joke}
				</div>
			)}
		</Container>
	)
}

export default ICanHazDadJokePage
