import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const EditTodoForm = ({ todo, onSubmit, onDelete }) => {
	const [newTitle, setNewTitle] = useState(todo.title)

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = {
			title: newTitle,
		}
		onSubmit(data)
	}

	const handleDelete = () => {
		if (!window.confirm('U SURE BRO?!')) {
			return
		}

		onDelete()
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="newTitle">
				<Form.Label>Title</Form.Label>
				<Form.Control
					onChange={e => setNewTitle(e.target.value)}
					placeholder="Enter title"
					required
					type="text"
					value={newTitle}
				/>
			</Form.Group>

			<div className="d-flex justify-content-between">
				<Button variant="success" type="submit" disabled={!newTitle.length}>Save</Button>
				<Button variant="danger" onClick={handleDelete}>Delete</Button>
			</div>
		</Form>
	)
}

export default EditTodoForm
