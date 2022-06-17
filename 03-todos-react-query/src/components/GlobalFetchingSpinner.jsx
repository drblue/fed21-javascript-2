import BounceLoader from 'react-spinners/BounceLoader'
import { useIsFetching, useIsMutating } from 'react-query'

const GlobalFetchingSpinner = () => {
	const isFetching = useIsFetching()
	const isMutating = useIsMutating()

	return isFetching || isMutating ? (
		<div id="fetching-spinner">
			<BounceLoader size={40} color="#6f42c1" />
		</div>
	) : null
}

export default GlobalFetchingSpinner
