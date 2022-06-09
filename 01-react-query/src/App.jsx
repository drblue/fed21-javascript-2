import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import ICanHazDadJokePage from './pages/ICanHazDadJokePage'
import JokePage from './pages/JokePage'
import RandomDadJokePage from './pages/RandomDadJokePage'
import RandomDogPage from './pages/RandomDogPage'
import './assets/scss/App.scss'

const App = () => {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/i-can-haz-dad-joke" element={<ICanHazDadJokePage />} />
				<Route path="/random-dad-joke" element={<RandomDadJokePage />} />
				<Route path="/random-dog" element={<RandomDogPage />} />
				<Route path="/joke/:type" element={<JokePage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
