import { combineReducers } from 'redux';
import quotesReducer from './quotes_reducer'
import authorsReducer from './authors_reducer'

const rootReducer = combineReducers({
  quotes: quotesReducer,
  authors: authorsReducer
});

export default rootReducer
