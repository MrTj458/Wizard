import axios from 'axios'

const TAGS = 'TAGS'
const ADD_TAG = 'ADD_TAG'
const DELETE_TAG = 'DELETE_TAG'

export const getTags = () => {
	return dispatch => {
		axios.get('/api/tags')
			.then( res => dispatch({ type: TAGS, tags: res.data }))
	}
}

export const addTag = tag => {
	return dispatch => {
		axios.post('/api/tags', { tag })
			.then( res => {
				if(res.data)
					dispatch({ type: ADD_TAG, tag: res.data })
			})
	}
}

export const deleteTag = id => {
	return dispatch => {
		axios.delete(`/api/tags/${id}`)
			.then( res => dispatch({ type: DELETE_TAG, id }))
	}
}


export default (state = [], action) => {
	switch(action.type) {
		case TAGS:
			return action.tags
		case ADD_TAG:
			return [...state, action.tag]
		case DELETE_TAG:
			return state.filter( tag => tag.id !== action.id)
		default:
			return state
	}
}
