import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useQuery } from 'react-query'
import CharacterCard from '../../components/CharacterCard'
import { getCharacters } from '../../services/RickMortyAPI'

const CharactersPage = () => {
	const [page, setPage] = useState(1)
	const { data, error, isError, isLoading, isPreviousData } = useQuery(['rm-characters', page], getCharacters, {
		keepPreviousData: true,
	})

	console.log("data", data)

	return (
		<Container className="py-3">
			<h1>Rick & Morty Characters</h1>

			{isLoading && (<p className="my-3">Loading characters...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>ERROR! DANGER WILL ROBINSON!</h3>
					<p>{error.message}</p>
				</Alert>)
			}

			{data?.results && (
				<>
					<Row>
						{data.results.map(character => (
							<Col lg={3} md={4} sm={6} key={character.id}>
								<CharacterCard character={character} />
							</Col>
						))}
					</Row>

					<div className="pagination d-flex justify-content-between align-items-center mt-4">
						<Button
							disabled={isPreviousData || !data.info.prev}
							onClick={() => setPage(currentPage => currentPage - 1)}
							variant="primary"
						>Previous Page</Button>

						<span>Page: {page}/{data.info.pages}</span>

						<Button
							disabled={isPreviousData || !data.info.next}
							onClick={() => setPage(currentPage => currentPage + 1)}
							variant="primary"
						>Next Page</Button>
					</div>
				</>
			)}
		</Container>
	)
}

export default CharactersPage
