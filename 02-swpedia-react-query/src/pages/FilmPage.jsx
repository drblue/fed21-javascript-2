import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import WarningAlert from '../components/alerts/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import { getIdFromUrl } from '../helpers'
import SWAPI from '../services/SWAPI'

const FilmPage = () => {
	const { id } = useParams()
	const { data, error, isError, isLoading, isSuccess } = useQuery(['film', { id }], SWAPI.getFilm)
	const navigate = useNavigate()

	return (
		<Container className="py-3">

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{isSuccess && (
				<Card>
					<Card.Header className="h5">{data.title}</Card.Header>
					<Card.Body>
						<Card.Title>Attributes</Card.Title>
						<dl className="row">
							<dt className="col-sm-3">Episode</dt>
							<dd className="col-sm-9">{data.episode_id}</dd>

							<dt className="col-sm-3">Director</dt>
							<dd className="col-sm-9">{data.director}</dd>

							<dt className="col-sm-3">Producer</dt>
							<dd className="col-sm-9">{data.producer}</dd>

							<dt className="col-sm-3">Release date</dt>
							<dd className="col-sm-9">{data.release_date}</dd>
						</dl>

						<Card.Title>Links</Card.Title>
						<dl className="row">
							<dt className="col-sm-3">Characters</dt>
							<dd className="col-sm-9">
								<ul className="list-group">
									{data.characters.map(url => {
										const id = getIdFromUrl(url);
										return (
											<li className="list-group-item" key={id}>
												<Link to={`/people/${id}`}>Character {id} &raquo;</Link>
											</li>
										)
									})}
								</ul>
							</dd>
						</dl>

						<Button variant="secondary" onClick={() => navigate(-1)}>&laquo; Back</Button>
					</Card.Body>
				</Card>
			)}
		</Container>
	)
}

export default FilmPage
