import fetch from 'isomorphic-fetch'
const API_URL = process.env.REACT_APP_API_URL;
export function fetchQuotes(){
  return (dispatch)=>{
    dispatch({type: 'LOADING_QUOTES'})
    return fetch(`${API_URL}/quotes`)
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_QUOTES', payload: json}))
  }
}

export function addQuote(quote){
  return dispatch => {
    return fetch(`${API_URL}/quotes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quote: quote })
    })
      .then(response => response.json())
      .then(quote => {
        dispatch({type: "ADD_QUOTE", quote})
      })
      .catch(error => console.log(error))
   }
 }
