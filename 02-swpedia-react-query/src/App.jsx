import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner'
import Navigation from './pages/partials/Navigation'
import FilmPage from './pages/FilmPage'
import FilmsPage from './pages/FilmsPage'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import PeoplePage from './pages/PeoplePage'
import PersonPage from './pages/PersonPage'
import './assets/scss/App.scss'

const App = () => {
	return (
		<div id="App">
			<Navigation />
			<GlobalFetchingSpinner />

			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/films" element={<FilmsPage />} />
				<Route path="/films/:id" element={<FilmPage />} />

				<Route path="/people" element={<PeoplePage />} />
				<Route path="/people/:id" element={<PersonPage />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
