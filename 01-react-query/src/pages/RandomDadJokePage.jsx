import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getRandomJoke } from '../services/DadJokesAPI'

const RandomDadJokePage = () => {
	const { isLoading, isError, error, data } = useQuery('random-dad-joke', getRandomJoke)

	return (
		<Container className="py-3">

			<h1>Random Dad Joke</h1>

			{isLoading && (<p>Loading dad joke...</p>)}

			{isError && (<p>An error occurred: {error.message}</p>)}

			{data && data.body.map(joke => (
				<div key={joke._id} className="text-center my-5">
					<p className="h3">{joke.setup}</p>
					<p className="h4">{joke.punchline}</p>
				</div>
			))}
		</Container>
	)
}

export default RandomDadJokePage
