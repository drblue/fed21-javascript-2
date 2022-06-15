import { useQuery, useMutation, useQueryClient } from 'react-query'
import WarningAlert from '../components/alerts/WarningAlert'
import CreateTodoForm from '../components/CreateTodoForm'
import LoadingSpinner from '../components/LoadingSpinner'
import TodoList from '../components/TodoList'
import TodosAPI from '../services/TodosAPI'

const TodosPage = () => {
	const queryClient = useQueryClient()

	const { data, error, isError, isLoading } = useQuery('todos', TodosAPI.getTodos)

	const createTodoMutation = useMutation(TodosAPI.createTodo)

	const handleCreateTodoFormSubmit = async (newTodo) => {
		// create new todo in API
		await createTodoMutation.mutateAsync(newTodo)

		// invalidate list of todos
		queryClient.invalidateQueries('todos')
	}

	return (
		<>
			<h1>Todos</h1>

			<CreateTodoForm onSubmit={handleCreateTodoFormSubmit} />

			<hr className="my-5" />

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert error={error.message} />}

			{data && <TodoList todos={data} />}
		</>
	)
}

export default TodosPage
