// actions
import { FILTERED_BOOK, SELECT_BOOK } from '../actions/book.actions';

import {BOOKS} from '../../data/books';

const initialState = { 
    books: BOOKS,
    filteredBook: [],
    selected: null
}

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BOOK:
            return {
                ...state,
                selected: state.books.find(book => book.id === action.bookID)
            }
        case FILTERED_BOOK:
            return {
                ...state,
                filteredBook: state.books.filter(book => book.category === action.categoryID)
            }
        default: 
            return state
    }
}

export default BookReducer