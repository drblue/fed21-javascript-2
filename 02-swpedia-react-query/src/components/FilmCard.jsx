import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from '../helpers'

const FilmCard = ({ film }) => {
	const filmId = getIdFromUrl(film.url)

	return (
		<Card className="mb-3">
			<Card.Header>{film.title}</Card.Header>
			<Card.Body>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<strong>Episode</strong> {film.episode_id}
					</ListGroup.Item>
					<ListGroup.Item>
						<strong>Released</strong> {film.release_date}
					</ListGroup.Item>
					<ListGroup.Item>
						{film.characters.length} <strong>characters</strong>
					</ListGroup.Item>
				</ListGroup>

				<div className="mt-3">
					<Button as={Link} to={`/films/${filmId}`} variant="primary">Read more</Button>
				</div>
			</Card.Body>
		</Card>
	)
}

export default FilmCard
