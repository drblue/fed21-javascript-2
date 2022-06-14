import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import SWAPI from '../services/SWAPI'
import WarningAlert from '../components/alerts/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import Pagination from '../components/Pagination'
import PersonCard from '../components/PersonCard'
import SearchForm from '../components/SearchForm'

const PeoplePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
	const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
	const query = searchParams.get('query') ?? ''

	const { data, error, isError, isLoading, isSuccess } = useQuery(['people', { page, query }], SWAPI.getPeople)

	const handleSearch = async query => {
		setSearchParams({ query, page: 1 })
	}

	return (
		<Container className="py-3">
			<h1 className="mb-3">People</h1>

			<div className="my-4">
				<SearchForm onSearch={handleSearch} />
			</div>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			<div>
				{isSuccess && data.results && (
					<>
						{query && (<p>Showing search results for '{query}'...</p>)}
						<Row>
							{data.results.map((person, i) => (
								<Col lg={4} md={6} sm={12} key={i}>
									<PersonCard person={person} />
								</Col>
							))}
						</Row>

						<Pagination
							page={page}
							numPages={Math.ceil(data.count/10)}
							hasPreviousPage={data.previous}
							hasNextPage={data.next}
							onPreviousPage={() => setSearchParams({ query, page: page - 1})}
							onNextPage={() => setSearchParams({ query, page: page + 1})}
						/>
					</>
				)}

			</div>
		</Container>
	)
}

export default PeoplePage
