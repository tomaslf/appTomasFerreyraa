import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from './reducers/auth'
import CategoryReducer from './reducers/category.reducer'
import PlacesReducer from './reducers/places.reducers'
import whishListReducer from './reducers/wishList'



const RootReducer = combineReducers({
    categories: CategoryReducer,
    places: PlacesReducer,
    wishList: whishListReducer,
    auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))