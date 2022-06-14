import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import WarningAlert from '../components/alerts/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import TodosAPI from '../services/TodosAPI'

const EditTodoPage = () => {
	const [newTitle, setNewTitle] = useState("")
	const { id } = useParams()
	const navigate = useNavigate()
	const { data, error, isError, isLoading } = useQuery(['todo', { id }], () => TodosAPI.getTodo(id))

	const handleDelete = async () => {
		if (!window.confirm('U SURE BRO?!')) {
			return
		}

		/*
		// send request to API to delete the todo
		await TodosAPI.deleteTodo(id)

		// navigate user to `/todos`
		navigate('/todos')
		*/
	}

	const handleSubmit = async e => {
		e.preventDefault()

		/*
		// send request to API to update title for this todo with the value in the input field
		await TodosAPI.updateTodo(id, {
			title: newTitle,
		})

		// redirect user to /todos/:id
		navigate(`/todos/${id}`)
		*/
	}

	useEffect(() => {
		if (data) {
			setNewTitle(data.title)
		}
	}, [data])

	return (
		<div>
			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert error={error.message} />}

			{data && (
				<>
					<h1>Edit: {data.title}</h1>

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
				</>
			)}
		</div>
	)
}

export default EditTodoPage
