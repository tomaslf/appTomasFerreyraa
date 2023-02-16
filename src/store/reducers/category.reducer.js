import categories from '../../data/categories'
import { selected_category } from '../actions/category.action'


const initialState = {
    categories: categories,
    selected: null
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case selected_category:
            const IndexCategory = state.categories.findIndex(cat => cat.id === action.categoryId)
            if (IndexCategory === -1) return state
            return { ...state, selected: state.categories[IndexCategory] }

        default:
            return state;
    }
}

export default CategoryReducer