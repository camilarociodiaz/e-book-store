import { applyMiddleware, combineReducers, createStore } from 'redux'

import AuthReducer from './reducers/auth.reducers';
import BookReducer from './reducers/books.reducer';
import CartReducer from './reducers/cart.reducer';
import CategoryReducer from './reducers/category.reducer';
import OrderReducer from './reducers/order.reducer';
import PlaceReducer from './reducers/place.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    books: BookReducer,
    cart: CartReducer,
    order: OrderReducer,
    auth: AuthReducer,
    places: PlaceReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))