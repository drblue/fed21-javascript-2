import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getIdFromUrl } from '../helpers'
import WarningAlert from '../components/alerts/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import SWAPI from '../services/SWAPI'

const PersonPage = () => {
	const { id } = useParams()
	const { data, error, isError, isLoading, isSuccess } = useQuery(['person', { id }], SWAPI.getPerson)
	const navigate = useNavigate()

	return (
		<Container className="py-3">

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{isSuccess && (
				<Card>
					<Card.Header className="h5">{data.name}</Card.Header>
					<Card.Body>
						<Card.Title>Attributes</Card.Title>
						<dl className="row">
							<dt className="col-sm-3">Gender</dt>
							<dd className="col-sm-9">{data.gender}</dd>

							<dt className="col-sm-3">Birth year</dt>
							<dd className="col-sm-9">{data.birth_year}</dd>

							<dt className="col-sm-3">Height</dt>
							<dd className="col-sm-9">{data.height} cm</dd>

							<dt className="col-sm-3">Mass</dt>
							<dd className="col-sm-9">{data.mass} kg</dd>

							<dt className="col-sm-3">Hair color</dt>
							<dd className="col-sm-9">{data.hair_color}</dd>

							<dt className="col-sm-3">Skin color</dt>
							<dd className="col-sm-9">{data.skin_color}</dd>

							<dt className="col-sm-3">Eye color</dt>
							<dd className="col-sm-9">{data.eye_color}</dd>
						</dl>

						<Card.Title>Links</Card.Title>
						<dl className="row">
							<dt className="col-sm-3">Films</dt>
							<dd className="col-sm-9">
								<ul className="list-group">
									{data.films.map(url => {
										const id = getIdFromUrl(url);
										return (
											<li className="list-group-item" key={id}>
												<Link to={`/films/${id}`}>Film {id} &raquo;</Link>
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

export default PersonPage
