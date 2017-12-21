
function quotesReducer(state = {
  loading: false,
  quotes: [],
}, action) {
  debugger
  switch (action.type) {

     case "ADD_QUOTE":
     return Object.assign({}, state, {quotes: state.quotes.concat(action.payload)})

     case "LOADING_QUOTES":
     return {...state, loading:true}

     case "FETCH_QUOTES":
     return {...state, loading: false, quotes: action.payload.reverse()}
     
     case "ADD_LIKE":
     const quoteId = state.quotes.filter(q=> q.id === action.payload.id)[0].id
     const updatedQuotes = state.quotes.map((quote)=>
        quoteId === quote.id ?
        {...quote, likes: quote.likes + 1} : quote
      )
     return {...state, quotes: updatedQuotes}

      default:
      return state;
  }
}

export default quotesReducer
