import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CategoryReducer from './reducers/category.reducer'
import PlacesReducer from './reducers/places.reducers'


const RootReducer = combineReducers({
    categories: CategoryReducer,
    places: PlacesReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))