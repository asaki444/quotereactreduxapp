import fetch from 'isomorphic-fetch'

export function fetchQuotes(){
  return (dispatch)=>{
    dispatch({type: 'LOADING_QUOTES'})
    return fetch('${RAILS_API_URL}/quotes')
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_QUOTES', payload: json}))
  }
}

export function addQuote(){
   return(dispatch)=>{
     dispatch({type: 'ADD_QUOTE'})
      return fetch('${RAILS_API_URL}/quotes/create',
       {method: 'post',
     }
    )

   }
}
