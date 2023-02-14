import categories from '../../data/categories'
import { selected_category } from '../actions/category.action'


const initialState = {
    categories: categories,
    selected: null
}

const CategoryReducer = (state = initialState, action) => {
    return state
}

export default CategoryReducer