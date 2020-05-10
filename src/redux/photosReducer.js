import Axios from "axios"

const SEARCH_IMAGE = 'SEARCH_IMAGE'

const initialState = {
    images: []
}

const photosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_IMAGE:
            return {
                ...state,
                images: action.images
            }
        default: return state
    }
}

export const searchImageThunk = value => async dispatch => {
    const API_KEY = '16443821-925dcbf9aabe6b8adf2f55117'
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${value.valueSearch}&image_type=photo`
    const response = await Axios.get(url)
    dispatch(searchImage(response.data.hits))
}

export const searchImage = (images) => ({type: SEARCH_IMAGE, images})

export default photosReducer