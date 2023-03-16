import * as FileSystem from 'expo-file-system'
import { insertReview, fetchReviews, deleteReviews } from '../../db'


export const ADD_REVIEW = "ADD_REVIEW"
export const EMPTY_REVIEW = "EMPTY_REVIEW"
export const LOAD_REVIEW = "LOAD_REVIEW"
export const EMPTY_DATABASEREVIEW = "EMPTY_DATABASEREVIEW"

export const emptyReview = () => ({
    type: EMPTY_REVIEW,
})

export const addReview = (title, image, cityName) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
            const result = await insertReview(title, Path, cityName)
            console.log(result)

        } catch (err) {
            console.log(err.message)
            throw err
        }

        dispatch({ type: ADD_REVIEW, payload: { title, image: Path, cityName } })
    }
}

export const loadReview = () => {
    return async dispatch => {
        try {
            const result = await fetchReviews()
            console.log(result)
            dispatch({ type: LOAD_REVIEW, review: result.rows._array })
        } catch (error) {
        }
    }
}

export const emptyDataBaseReview = () => {
    return async dispatch => {
        try {
            const result = await deleteReviews()
            console.log(result)
            dispatch({ type: EMPTY_DATABASEREVIEW, review: result.rows._array })
        } catch (error) {
        }
    }
}

