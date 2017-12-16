function quotesReducer(state = {loading:false, quotes:[]}, action) {
  switch (action.type) {

     case "ADD_QUOTE":
      return state.quotes.concat(action.type);

     case "LOADING_QUOTES":
     return {...state, loading:true}

     case "FETCH_QUOTES":
     return {loading: false, quotes: action.payload}

    default:
      return state;
  }
}

export default quotesReducer
