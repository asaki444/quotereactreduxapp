function  authorsReducer (state = {loading:false, authors:[]}, action) {
  switch (action.type) {

     case "LOADING_AUTHORS":
     return {...state, loading:true}

     case "GET_AUTHORS":
     return action.authors

    default:
      return state;
  }
}
