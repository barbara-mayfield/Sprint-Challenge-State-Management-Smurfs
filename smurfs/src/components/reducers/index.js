import { 
    FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_ERROR,
    POST_NEW_SMURF_START,
    POST_NEW_SMURF_SUCCESS,
    POST_NEW_SMURF_FAILURE
} from '../actions/index';



export const initialState = {
    smurfs: [],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: null
            }
        case FETCH_SMURF_ERROR: 
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case POST_NEW_SMURF_START:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isFetching: true,
                error: null
                }
        case POST_NEW_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: null
            }
        case POST_NEW_SMURF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default: 
            return state;
    }
}