import Spinner from 'react-bootstrap/Spinner'
import { useIsFetching } from 'react-query'

const GlobalFetchingSpinner = () => {
	const isFetching = useIsFetching()

	return isFetching ? (
		<div id="fetching-spinner">
			<Spinner animation="grow" />
		</div>
	) : null
}

export default GlobalFetchingSpinner
