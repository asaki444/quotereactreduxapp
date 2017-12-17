function quotesReducer(state = {loading:false, quotes:[]}, action) {
  switch (action.type) {

     case "ADD_QUOTE":
      return {quote: action.payload};

     case "LOADING_QUOTES":
     return {...state, loading:true}

     case "FETCH_QUOTES":
     return {loading: false, quotes: action.payload}

    default:
      return state;
  }
}

export default quotesReducer
