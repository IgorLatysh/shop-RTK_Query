import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            const idItem = state.cart.findIndex(
                (item) => item.id === payload.id
            );
            if (idItem >= 0) {
                state.cart[idItem].cartQuantity += 1;
            } else {
                const temp = {...payload, cartQuantity: 1};
                state.cart.push(temp);
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart: (state, {payload}) => {
            const newArr = state.cart.filter(
                (carts) => carts.id !== payload.id
            );
            state.cart = newArr;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        getTotalQuantity: (state, {payload}) => {
            let {total, quantity} = state.cart.reduce((items, products) => {
                    const {price, discountPercentage, cartQuantity} = products;
                    const totalAmount = (price - (price * discountPercentage / 100)) * cartQuantity;
                    items.total += totalAmount;
                    items.quantity += cartQuantity;

                    return items;
                },
                {
                    total: 0,
                    quantity: 0
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
});
export const {addToCart, removeFromCart, getTotalQuantity} = CartSlice.actions;

export default CartSlice.reducer;