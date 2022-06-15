import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import WarningAlert from '../components/alerts/WarningAlert'
import EditTodoForm from '../components/EditTodoForm'
import LoadingSpinner from '../components/LoadingSpinner'
import TodosAPI from '../services/TodosAPI'

const EditTodoPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const { data, error, isError, isLoading } = useQuery(['todo', { id }], () => TodosAPI.getTodo(id))

	const deleteTodoMutation = useMutation(TodosAPI.deleteTodo)

	const updateTodoMutation = useMutation((newTodoData) => TodosAPI.updateTodo(id, newTodoData), {
		onSuccess: (newData) => {
			// set new todo data in query-cache
			queryClient.setQueryData(['todo', { id }], newData)

			// invalidate todos list query
			queryClient.invalidateQueries('todos')
		}
	})

	const handleDelete = async () => {
		// send request to API to delete the todo
		await deleteTodoMutation.mutateAsync(id)

		// invalidate todos list query
		queryClient.invalidateQueries('todos')

		// delete todo query for this todo
		queryClient.removeQueries(['todo', { id }])

		// navigate user to `/todos`
		navigate('/todos')
	}

	const handleSubmit = async (data) => {
		// send request to API to update title for this todo with the value in the input field
		await updateTodoMutation.mutateAsync(data)

		// redirect user to /todos/:id
		navigate(`/todos/${id}`)
	}

	return (
		<div>
			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert error={error.message} />}

			{data && (
				<>
					<h1>Edit: {data.title}</h1>

					<EditTodoForm todo={data} onDelete={handleDelete} onSubmit={handleSubmit} disabled={deleteTodoMutation.isLoading} />
				</>
			)}
		</div>
	)
}

export default EditTodoPage
