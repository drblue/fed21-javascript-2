import { useQuery, useMutation, useQueryClient } from 'react-query'
import WarningAlert from '../components/alerts/WarningAlert'
import PageTransition from '../components/animations/PageTransition'
import TodoForm from '../components/TodoForm'
import LoadingSpinner from '../components/LoadingSpinner'
import TodoList from '../components/TodoList'
import TodosAPI from '../services/TodosAPI'

const TodosPage = () => {
	const queryClient = useQueryClient()

	const { data, error, isError, isLoading } = useQuery('todos', TodosAPI.getTodos)

	const createTodoMutation = useMutation(TodosAPI.createTodo, {
		onSuccess: (newData) => {
			queryClient.setQueryData('todos', [
				...data,
				newData,
			])
		}
	})

	const handleCreateTodoFormSubmit = async (newTodo) => {
		// create new todo in API
		await createTodoMutation.mutateAsync(newTodo)
	}

	return (
		<PageTransition>
			<h1>Todos</h1>

			<TodoForm onSubmit={handleCreateTodoFormSubmit} isSubmitting={createTodoMutation.isLoading} />

			<hr className="my-5" />

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert error={error.message} />}

			{data && <TodoList todos={data} />}
		</PageTransition>
	)
}

export default TodosPage
