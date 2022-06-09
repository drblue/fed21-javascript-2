import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getJokeByType } from '../services/DadJokesAPI'

const JokePage = () => {
	const { type } = useParams()
	const { isLoading, isError, error, data } = useQuery(['joke', type], () => {
		return getJokeByType(type)
	})

	if (!type) {
		return (
			<Container className="py-3">
				<Alert variant="warning">You have to specify the type of jokes to see!</Alert>
			</Container>
		)
	}

	return (
		<Container className="py-3">

			<h1>Random General Joke</h1>

			{isLoading && (<p>Loading joke...</p>)}

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

export default JokePage
