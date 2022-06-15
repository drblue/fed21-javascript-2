/* eslint-disable no-unused-vars */
/**
 * Service for communicating with the json-server backend
 */
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001'

// const FAKE_DELAY = 1500

/**
 * GET an endpoint
 *
 * @param {string} endpoint
 * @returns Promise
 */
const get = async (endpoint) => {
	const res = await axios.get(endpoint)

	// FAKE_DELAY && await new Promise(r => setTimeout(r, FAKE_DELAY))

	return res.data
}

/**
 * Get all todos
 */
const getTodos = () => {
	return get('/todos')
}

/**
 * Get a single todo
 */
const getTodo = (id) => {
	return get(`/todos/${id}`)
}

/**
 * Create a new todo
 *
 * @param data Object with properties and values for the new todo
 */
const createTodo = async (data) => {
	const res = await axios.post(`/todos`, data)
	return res.data
}

/**
 * Update a todo
 *
 * @param todo_id Todo to update
 * @param data Data to update todo with
 */
const updateTodo = async (todo_id, data) => {
	const res = await axios.patch(`/todos/${todo_id}`, data)
	return res.data
}

/**
 * Delete a todo
 *
 * @param todo_id Todo to delete
 */
const deleteTodo = async (todo_id) => {
	const res = await axios.delete(`/todos/${todo_id}`)
	return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getTodos,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
}
