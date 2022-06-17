import { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import BeatLoader from 'react-spinners/BeatLoader'

const CreateTodoForm = ({ onSubmit, isSubmitting = false }) => {
	// input state
	const [newTitle, setNewTitle] = useState('')
	// input reference
	const newTitleRef = useRef()

	const handleSubmit = e => {
		// stop form from submitting
		e.preventDefault()

		// push a new todo to the todos state
		const newTodo = { title: newTitle, completed: false }
		onSubmit(newTodo)

		// clear newTitle state
		setNewTitle('')
	}

	// focus on input field when component is mounted
	useEffect(() => {
		newTitleRef.current.focus()
	}, [])

	return (
		<form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="newTitle">
				<Form.Label>Title</Form.Label>
				<Form.Control
					onChange={e => setNewTitle(e.target.value)}
					placeholder="Enter title"
					required
					ref={newTitleRef}
					type="text"
					value={newTitle}
					disabled={isSubmitting}
				/>
			</Form.Group>

			<div className="d-flex justify-content-between">
				<Button variant="success" type="submit" disabled={!newTitle.length || isSubmitting}>
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
			</div>
		</form>
	)
}

export default CreateTodoForm
