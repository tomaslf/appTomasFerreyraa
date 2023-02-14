import {createStore, combineReducers} from 'redux'
import CategoryReducer from './reducers/category.reducer'
import PlacesReducer from './reducers/places.reducers'


const RootReducer = combineReducers({
    categories: CategoryReducer,
    places: PlacesReducer,
})

export default createStore(RootReducer)