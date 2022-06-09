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
	const { isLoading, isError, error, data, refetch } = useQuery('random-joke', getRandomJoke)

	useEffect(() => {
		setButtonText(buttonTexts[Math.floor(Math.random() * buttonTexts.length)])
	}, [data])

	return (
		<Container className="py-3">

			<h1>Random Dad Joke</h1>

			{isLoading && (<p>Loading dad joke...</p>)}

			{isError && (<p>An error occurred: {error.message}</p>)}

			{data && data.body.map(joke => (
				<JokeWithPunchline key={joke._id} joke={joke} />
			))}

			<div className="d-flex justify-content-center">
				<Button variant="primary" onClick={refetch}>
					{buttonText ?? 'Moar!'}
				</Button>
			</div>
		</Container>
	)
}

export default RandomDadJokePage
