import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const TodoList = ({ todos }) => {
	if (!todos.length) {
		return (
			<p className="status">No todos 🥳!</p>
		)
	}

	return (
		<ListGroup className="todolist">
			{todos.map(todo =>
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
	)
}

export default TodoList
