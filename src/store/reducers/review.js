import { ADD_REVIEW, EMPTY_REVIEW } from "../actions/review.action"
import Review from '../../models/Review'

const initialState = {
    review: []
}

const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            const newReview = new Review(Date.now(), action.payload.title, action.payload.image)
            return {
                ...state,
                review: state.review.concat(newReview)
            }
            case EMPTY_REVIEW:
                return  {...state,  review: []}
               

        default:
             return state
    }
}

export default ReviewReducer