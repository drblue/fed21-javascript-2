import { useQuery } from 'react-query'
import WarningAlert from '../components/alerts/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import TodoList from '../components/TodoList'
import TodosAPI from '../services/TodosAPI'

const TodosPage = () => {
	const { data, error, isError, isLoading } = useQuery('todos', TodosAPI.getTodos)

	return (
		<>
			<h1>Todos</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert error={error.message} />}

			{data && <TodoList todos={data} />}
		</>
	)
}

export default TodosPage
