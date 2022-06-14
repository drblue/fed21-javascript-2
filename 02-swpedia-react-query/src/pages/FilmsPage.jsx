import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useQuery } from 'react-query'
import SWAPI from '../services/SWAPI'
import WarningAlert from '../components/alerts/WarningAlert'
import FilmCard from '../components/FilmCard'
import LoadingSpinner from '../components/LoadingSpinner'
import Pagination from '../components/Pagination'

const FilmsPage = () => {
	const [page, setPage] = useState(1)
	const { data, error, isError, isLoading, isSuccess } = useQuery(['films', { page }], SWAPI.getFilms)

	return (
		<Container className="py-3">
			<h1 className="mb-3">Films</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			<div>
				{isSuccess && (
					<>
						<Row>
							{data.results.map((film, i) => (
								<Col lg={4} md={6} sm={12} key={i}>
									<FilmCard film={film} />
								</Col>
							))}
						</Row>

						<Pagination
							page={page}
							numPages={Math.ceil(data.count / 10)}
							hasPreviousPage={data.previous}
							hasNextPage={data.next}
							onPreviousPage={() => setPage(currentPage => currentPage - 1)}
							onNextPage={() => setPage(currentPage => currentPage + 1)}
						/>
					</>
				)}
			</div>
		</Container>
	)
}

export default FilmsPage
