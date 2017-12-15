function  authorsReducer (state = {loading:false, authors:[]}, action) {
  switch (action.type) {
     case "LOADING_AUTHORS":
     return {...state, loading:true}

     case "FETCH_AUTHORS":
     return {loading: false, authors: action.payload}

    default:
      return state;
  }
}

export default authorsReducer
