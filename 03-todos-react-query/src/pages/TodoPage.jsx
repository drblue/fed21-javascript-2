import Button from 'react-bootstrap/Button'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import WarningAlert from '../components/alerts/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import TodosAPI from '../services/TodosAPI'

const TodoPage = () => {
	const { id } = useParams()
	const { data, error, isError, isLoading } = useQuery(['todo', { id }], () => TodosAPI.getTodo(id))

	// Toggle the completed status of a todo in the api
	const toggleTodo = async () => {
		/*
		await TodosAPI.updateTodo(id, {
			completed: !data.completed
		})
		getTodo(id)
		*/
	}

	return (
		<div>
			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert error={error.message} />}

			{data && (
				<>
					<h1>{data.title}</h1>

					<p><strong>Status:</strong> {data.completed ? 'Completed' : 'Not completed'}</p>

					<Button variant="success" onClick={toggleTodo}>Toggle</Button>
					<Button variant="warning" as={Link} to={`/todos/${id}/edit`}>Edit</Button>
				</>
			)}
		</div>
	)
}

export default TodoPage
