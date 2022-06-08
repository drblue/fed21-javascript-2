import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useQuery, useQueryClient } from 'react-query'
import { getRandomDog } from '../services/DogAPI'

const RandomDogPage = () => {
	const { data, error, isError, isLoading, refetch } = useQuery('random-dog', getRandomDog)

	// Below code is overkill, thanks Nikola 😧...
	/*
	const queryClient = useQueryClient()

	const handleGetMoarDoggos = () => {
		queryClient.invalidateQueries('random-dog')
	}
	*/

	return (
		<Container className="py-3">
			<h1>Random doggo</h1>

			<div className="text-center">
				{isLoading && <p className="my-3">Loading 🐶...</p>}

				{isError && (
					<Alert variant='warning'>Sorry, tried to get 🐶 but API returned 🐱 ({error})</Alert>
				)}

				{data && (
					<div className="my-3">
						<img src={data.message} className="img-fluid w-50" />
					</div>

				)}

				<Button variant="primary" onClick={refetch}>Moar doggos 🐶!</Button>
			</div>
		</Container>
	)
}

export default RandomDogPage
