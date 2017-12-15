import fetch from 'isomorphic-fetch'
const API_URL = process.env.REACT_APP_API_URL;
export function fetchQuotes(){
  return dispatch => {
  return fetch(`${API_URL}/quotes`)
    .then(response => response.json())
    .then(quotes => dispatch({type: "GET_QUOTES", quotes}))
    .catch(error => console.log(error));
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
