import { motion } from 'framer-motion'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const TodoList = ({ todos }) => {
	if (!todos.length) {
		return (
			<p className="status">No todos 🥳!</p>
		)
	}

	return (
		<motion.div initial={{ x: 150, opacity: 0 }} animate={{
			x: 0,
			opacity: 1,
			transition: {
				duration: 2,
				type: "spring",
				mass: 0.4,
				damping: 8,
			}
		}}
		>
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
		</motion.div>
	)
}

export default TodoList
