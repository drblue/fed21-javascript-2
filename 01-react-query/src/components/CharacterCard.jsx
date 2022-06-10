import Card from 'react-bootstrap/Card'

const CharacterCard = ({ character }) => {
	return (
		<Card className="mb-4">
			<Card.Img variant="top" src={character.image} />
			<Card.Body>
				<Card.Title>{character.name}</Card.Title>
				<Card.Text>
					{character.status} - {character.species}
				</Card.Text>
				{/* <Button variant="primary">Go somewhere</Button> */}
			</Card.Body>
		</Card>
	)
}

export default CharacterCard
