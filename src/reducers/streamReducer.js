import {
    FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM, CREATE_STREAM
} from '../actions/types.js'
import _ from 'lodash'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state
    }
}