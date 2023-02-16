import { selected_place, filtered_place } from '../actions/places.action'
import places from '../../data/places'

const initialState = {
    places:places,
    filteredPlaces: [],
    selected: null
}

const PlacesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case selected_place:
            return {
                ...state,
                selected: state.places.find((place) => place.id === action.placeId )
            }
            
        case filtered_place:
            return {
                ...state,
                filteredPlaces: state.places.filter((place) => place.categories === action.placeId )
            }
    
        default:
            return state;
    }

}
export default PlacesReducer