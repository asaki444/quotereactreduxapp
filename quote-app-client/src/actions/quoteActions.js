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
  // return dispatch => {
  //   return fetch(`${API_URL}/quotes`, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ quote })
  //   })
  //     .then(response => response.json())
  //     .then(quote => {
  //       dispatch({type: "ADD_QUOTE", payload: quote})
  //     })
   // }
   return dispatch => {
   fetch(`${API_URL}/quotes`, {
     method: 'post',
  body: JSON.stringify(quote)
}).then(response=>response.json()).then(data => dispatch({type: "ADD_QUOTE", payload:data}));
}
 }
