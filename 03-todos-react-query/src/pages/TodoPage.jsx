import Button from 'react-bootstrap/Button'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import WarningAlert from '../components/alerts/WarningAlert'
import PageTransition from '../components/animations/PageTransition'
import LoadingSpinner from '../components/LoadingSpinner'
import TodosAPI from '../services/TodosAPI'

const TodoPage = () => {
	const { id } = useParams()
	const queryClient = useQueryClient()
	const { data, error, isError, isLoading } = useQuery(['todo', { id }], () => TodosAPI.getTodo(id))

	const toggleTodoMutation = useMutation(() => {
		return TodosAPI.updateTodo(id, {
			completed: !data.completed
		})
	})

	// Toggle the completed status of a todo in the api
	const toggleTodo = async () => {
		await toggleTodoMutation.mutateAsync()

		// invalidate todo query
		queryClient.invalidateQueries(['todo', { id }])
	}

	return (
		<PageTransition>
			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert error={error.message} />}

			{data && (
				<>
					<h1>{data.title}</h1>

					<p><strong>Status:</strong> {data.completed ? 'Completed' : 'Not completed'}</p>

					<Button variant="success" onClick={toggleTodo} disabled={toggleTodoMutation.isLoading}>Toggle</Button>
					<Button variant="warning" as={Link} to={`/todos/${id}/edit`}>Edit</Button>
				</>
			)}
		</PageTransition>
	)
}

export default TodoPage
