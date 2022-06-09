import { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import JokeWithPunchline from '../components/JokeWithPunchline'
import { getJokeByType } from '../services/DadJokesAPI'

const JokePage = () => {
	const [joke, setJoke] = useState()
	const { type } = useParams()
	const { isLoading, isError, error, data } = useQuery(['joke', type], getJokeByType)

	const getRandomJoke = () => {
		const randomJokeIndex = Math.floor(Math.random() * data.body.length)
		setJoke(data.body[randomJokeIndex])
	}

	if (!type) {
		return (
			<Container className="py-3">
				<Alert variant="warning">You have to specify the type of jokes to see!</Alert>
			</Container>
		)
	}

	useEffect(() => {
		if (!data) {
			return
		}

		getRandomJoke()
	}, [data])

	return (
		<Container className="py-3">

			<h1>Random {type} joke</h1>

			{isLoading && (<p>Loading joke...</p>)}

			{isError && (<p>An error occurred: {error.message}</p>)}

			{joke && (
				<JokeWithPunchline joke={joke} />
			)}

			<div className="d-flex justify-content-center">
				<Button variant="primary" onClick={getRandomJoke}>MOAR 🤣!!</Button>
			</div>
		</Container>
	)
}

export default JokePage
