import { combineReducers, createStore } from 'redux'

import BookReducer from './reducers/books.reduce';
import CategoryReducer from './reducers/category.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    books: BookReducer
})

export default createStore(RootReducer)