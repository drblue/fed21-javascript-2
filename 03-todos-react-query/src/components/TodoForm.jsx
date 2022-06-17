import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import BeatLoader from 'react-spinners/BeatLoader'

const TodoForm = ({
	onSubmit,
	initialValues = {
		title: '',
		completed: false,
	},
	onDelete = false,
	isSubmitting = false,
}) => {
	// todo
	const [todo, setTodo] = useState(initialValues)

	const handleInputChange = (e) => {
		setTodo(previousData => {
			return {
				...previousData,
				[e.target.id]: e.target.value,
			}
		})
	}

	const handleSubmit = e => {
		// stop form from submitting
		e.preventDefault()

		// push a new todo to the todos state
		onSubmit(todo)
	}

	const handleDelete = () => {
		if (!window.confirm('U SURE BRO?!')) {
			return
		}

		onDelete()
	}

	return (
		<form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control
					onChange={handleInputChange}
					placeholder="Enter title"
					required
					type="text"
					value={todo.title}
					disabled={isSubmitting}
				/>
			</Form.Group>

			<div className="d-flex justify-content-between">
				<Button variant="success" type="submit" disabled={!todo.title.length || isSubmitting}>
					{isSubmitting ? (
							<>
								<BeatLoader size={8} color="#fff" />
								<span className="ps-2">Saving...</span>
							</>
						) : (
							<span>Save</span>
						)
					}
				</Button>

				{onDelete && <Button variant="danger" onClick={handleDelete} disabled={isSubmitting}>Delete</Button>}
			</div>
		</form>
	)
}

export default TodoForm
