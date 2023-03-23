import { ADD_WISHLIST, EMPTY_WISHLIST } from "../actions/wishList.action"

const initialState = {
    items: [],
}

const whishListReducer = (state = initialState, action) => {
    switch (action.type) {

        case EMPTY_WISHLIST:
                const updatedWishList = state.items.filter((item) => item && item.id !== action.itemId);
                return { ...state, items: updatedWishList };
              

        case ADD_WISHLIST:
            const indexItem = state.items.findIndex((item) => item.id === action.item.id)
            if (indexItem === -1) {
                const item = { ...action.item, quantity: 1 }
                const updateWishList = [...state.items, item]
                return { ...state, items: updateWishList }
            }
            const items = [...state.items].map((item) => {
                if (item.id === action.item.id)
                    return item
            })
            return { ...state, items }

        default:
            return state

    }

}

export default whishListReducer