import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getCharacters } from '../../services/RickMortyAPI'

const CharactersPage = () => {
	const { data, error, isError, isLoading } = useQuery('rm-characters', getCharacters)

	console.log("got me some data?", data)

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
				<ul>
					{data.results.map(character => (
						<li key={character.id}>{character.name}</li>
					))}
				</ul>
			)}
		</Container>
	)
}

export default CharactersPage
