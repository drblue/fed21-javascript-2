import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import JokeWithPunchline from '../components/JokeWithPunchline'
import { getRandomJoke } from '../services/DadJokesAPI'

const buttonTexts = [
	"Ugh.",
	"🤦🏻‍♂️",
	"omg dad.",
	"you are the worst",
	"seriously",
	"stop it.",
	"please stop",
	"that was the worst one",
]

const RandomDadJokePage = () => {
	const [buttonText, setButtonText] = useState()
	const {
		data,
		error,
		isError,
		isFetching,
		isIdle,
		isLoading,
		isSuccess,
		refetch,
		status,
	} = useQuery('random-joke', getRandomJoke)

	useEffect(() => {
		setButtonText(buttonTexts[Math.floor(Math.random() * buttonTexts.length)])
	}, [data])

	return (
		<Container className="py-3">
			<pre className="bg-light py-2 px-3">
				isError: {isError ? 'true' : 'false'}<br />
				isFetching: {isFetching ? 'true' : 'false'}<br />
				isIdle: {isIdle ? 'true' : 'false'}<br />
				isLoading: {isLoading ? 'true' : 'false'}<br />
				isSuccess: {isSuccess ? 'true' : 'false'}<br />
				status: {status}
			</pre>

			<h1>Random Dad Joke</h1>

			{isLoading && (<p>Loading dad joke...</p>)}

			{isError && (<p>An error occurred: {error.message}</p>)}

			{data && data.body.map(joke => (
				<JokeWithPunchline key={joke._id} joke={joke} />
			))}

			<div className="d-flex justify-content-center">
				<Button variant="primary" onClick={refetch} disabled={isFetching}>
					{buttonText ?? 'Moar!'}
				</Button>
			</div>
		</Container>
	)
}

export default RandomDadJokePage
