import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import RandomDadJokePage from './pages/RandomDadJokePage'
import './assets/scss/App.scss'

const App = () => {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/random-dad-joke" element={<RandomDadJokePage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
