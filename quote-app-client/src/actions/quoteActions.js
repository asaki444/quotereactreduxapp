import fetch from 'isomorphic-fetch'
const API_URL = process.env.REACT_APP_API_URL;
export function fetchQuotes(){
  return (dispatch)=>{
    dispatch({type: 'LOADING_QUOTES'})
    return fetch('${API_URL}/quotes')
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_QUOTES', payload: json}))
  }
}

export function addQuote(quote){
  return (dispatch)=>{
    dispatch({type: 'ADD_QUOTE', quote})
      return fetch('http:/localhost:3001/api/quotes',
       {method: 'POST',
        body: JSON.stringify(quote),
        contentType: 'application/json',
        accepts: 'application/json'}
    ).then(response=> response.json())
   }
   }
