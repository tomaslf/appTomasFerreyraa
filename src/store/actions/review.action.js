import * as FileSystem from 'expo-file-system'

export const ADD_REVIEW = "ADD_REVIEW"
export const EMPTY_REVIEW = "EMPTY_REVIEW"

export const emptyReview = itemId =>({
    type: EMPTY_REVIEW,
    itemId

})

export const addReview = (title, image) =>{
    // return { type: ADD_REVIEW, payload: {title}}
    return async dispatch =>{
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try{
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        }catch (err) {
            console.log(err.message)
            throw err
        }
        
        dispatch({type: ADD_REVIEW, payload:{title, image: Path}})
    }
}