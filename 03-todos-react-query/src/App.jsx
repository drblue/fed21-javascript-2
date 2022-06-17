import { AnimatePresence } from 'framer-motion'
import Container from 'react-bootstrap/Container'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route, useLocation } from 'react-router-dom'
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner'
import Navigation from './components/Navigation'
import EditTodoPage from './pages/EditTodoPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import TodosPage from './pages/TodosPage'
import TodoPage from './pages/TodoPage'
import './assets/scss/App.scss'

const App = () => {
	const location = useLocation()

	return (
		<div id="App">
			<Navigation />
			<GlobalFetchingSpinner />

			<Container className="py-3">
				<AnimatePresence exitBeforeEnter>
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<HomePage />} />
						<Route path="/todos" element={<TodosPage />} />
						<Route path="/todos/:id" element={<TodoPage />} />
						<Route path="/todos/:id/edit" element={<EditTodoPage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</AnimatePresence>
			</Container>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App;
