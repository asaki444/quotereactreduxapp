import fetch from 'isomorphic-fetch'
const API_URL = process.env.REACT_APP_API_URL
export function fetchAuthors(){
  return (dispatch)=>{
    dispatch({type: 'LOADING_AUTHORS'})
    return fetch(`${API_URL}/authors`)
      .then(response => response.json())
      .then(authors => dispatch({type: 'FETCH_AUTHORS', payload: authors}))
  }
}
