function  authorsReducer (state = {
 loading:false, 
 authors:[],
}, action) {
  switch (action.type) {
     case "LOADING_AUTHORS":
     return {...state, loading:true}

     case "FETCH_AUTHORS":
       return Object.assign({}, state, {
        authors: action.authors
      })

    default:
      return state;
  }
}

export default authorsReducer
