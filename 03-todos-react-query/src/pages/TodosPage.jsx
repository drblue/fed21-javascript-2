import ListGroup from 'react-bootstrap/ListGroup'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import WarningAlert from '../components/alerts/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import TodosAPI from '../services/TodosAPI'

const TodosPage = () => {
	const { data, error, isError, isLoading } = useQuery('todos', TodosAPI.getTodos)

	return (
		<>
			<h1>Todos</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert error={error.message} />}

			{data && (
				<ListGroup className="todolist">
					{data.map(todo =>
						<ListGroup.Item
							action
							as={Link}
							className={todo.completed ? 'done' : ''}
							key={todo.id}
							to={`/todos/${todo.id}`}
						>
							{todo.title}
						</ListGroup.Item>
					)}
				</ListGroup>
			)}

			{data && data.length === 0 && (
				<p className="status">No todos 🥳!</p>
			)}
		</>
	)
}

export default TodosPage
