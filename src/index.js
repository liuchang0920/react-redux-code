// import store from './store.js';
// import { addToCart, updateCart, deleteFromCart } from './actions/cart-actions';
// // console.log('initial state:', store.getState());

// // let unsubscribe = store.subscribe(() =>
// // 	console.log(store.getState())
// // );

// store.dispatch(addToCart('Coffee 500mg', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));
// store.dispatch(addToCart('test goods', 10, 250));

// store.dispatch(updateCart('Flour 1kg', 5, 110));
// store.dispatch(deleteFromCart('Coffee 500mg'));

// // unsubscribe();

import { createStore } from 'redux';
import { combineReducers } from 'redux';

const initialState = {
    cart: [
        {
            product: 'a',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'b',
            quantity: 2,
            unitCost: 90
        }
    ]
}

const productsReducer = function(state=[], action) {
    return state;
}

// const cartReducer = function(state=initialState, action) {
//     return state;
// }

// define actions

const ADD_TO_CART = 'ADD_TO_CART';

const cartReducer = function(state=initialState, action) {
    switch(action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        default:
            return state;
    }
}

function addToCart(product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: {
            product, quantity, unitCost
        }
    }
}


const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

let store = createStore(rootReducer);


console.log('initial state: ', store.getState());





store.dispatch(addToCart('coffie', 1, 350));
store.dispatch(addToCart('flour', 2, 350));
store.dispatch(addToCart('juice', 1, 250));


console.log(store.getState());

// un-subscribe
let unsubscribe = store.subscribe(() => console.log(store.getState()));


unsubscribe();