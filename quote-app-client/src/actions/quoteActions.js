import fetch from 'isomorphic-fetch'
const API_URL = process.env.REACT_APP_API_URL;
export function fetchQuotes(){
  return dispatch => {
  return fetch(`${API_URL}/quotes`)
    .then(response => response.json())
    .then(quotes => dispatch({type: "FETCH_QUOTES", payload: quotes}))
    .catch(error => console.log(error));
}
}

export function addQuote(quote){
  return dispatch => {
    return fetch(`${API_URL}/quotes`, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quote: quote })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
         dispatch({type: "ADD_QUOTE", payload: data}
        )
      })
   }
 }

export function addLike(like,id){
return dispatch => {
    return fetch(`${API_URL}/quotes/${id}`, {
      method: "PATCH", 
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: like })
    })
      .then(response => console.log(response))
      .then(data => {
        console.log(data)
         dispatch({type: "ADD_LIKE", payload: data}
        )
      })
   }
 }
 