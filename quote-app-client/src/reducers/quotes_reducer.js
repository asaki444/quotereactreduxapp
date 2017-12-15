function quotesReducer(state = {loading:false, quotes:[]}, action) {
  switch (action.type) {

     case "ADD_QUOTE":
      return action.quote;

     case "LOADING_QUOTES":
     return {...state, loading:true}

     case "GET_QUOTES":
     return action.quotes

    default:
      return state;
  }
}

export default quotesReducer
