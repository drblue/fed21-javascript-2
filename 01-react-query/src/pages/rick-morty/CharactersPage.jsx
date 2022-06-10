import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useQuery } from 'react-query'
import CharacterCard from '../../components/CharacterCard'
import { getCharacters } from '../../services/RickMortyAPI'

const CharactersPage = () => {
	const { data, error, isError, isLoading } = useQuery('rm-characters', getCharacters)

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
				<Row>
					{data.results.map(character => (
						<Col lg={3} md={4} sm={6} key={character.id}>
							<CharacterCard character={character} />
						</Col>
					))}
				</Row>
			)}
		</Container>
	)
}

export default CharactersPage
