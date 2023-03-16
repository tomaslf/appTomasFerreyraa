import { ADD_REVIEW, EMPTY_DATABASEREVIEW, EMPTY_REVIEW, LOAD_REVIEW } from "../actions/review.action"
import Review from '../../models/Review'

const initialState = {
    review: []
}

const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            const newReview = new Review(Date.now(), action.payload.title,action.payload.cityName, action.payload.image)
            return {
                ...state,
                review: state.review.concat(newReview)
            }
        case EMPTY_REVIEW:
            return { ...state, review: [] }

        case LOAD_REVIEW:
            return {
                ...state,
                review: action.review.map(
                    item =>
                        new Review(
                            item.id.toString(),
                            item.title,
                            item.cityName,
                            item.image,
                            
                        )
                ),
            }
        case EMPTY_DATABASEREVIEW:
            return { ...state, review: [] }


        default:
            return state
    }
}

export default ReviewReducer