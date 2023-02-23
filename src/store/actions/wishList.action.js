export const EMPTY_WISHLIST = "EMPTY_WISHLIST"
export const ADD_WISHLIST = "ADD_WISHLIST"

export const emptyWishList = itemId =>({
    type: EMPTY_WISHLIST,
    itemId

})

export const addWishList = item =>({
    type: ADD_WISHLIST,
    item
})