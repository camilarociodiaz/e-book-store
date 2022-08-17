import { applyMiddleware, combineReducers, createStore } from 'redux'

import BookReducer from './reducers/books.reducer';
import CartReducer from './reducers/cart.reducer';
import CategoryReducer from './reducers/category.reducer';
import OrderReducer from './reducers/order.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    books: BookReducer,
    cart: CartReducer,
    order: OrderReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))