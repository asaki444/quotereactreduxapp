import fetch from 'isomorphic-fetch'
const API_URL = process.env.REACT_APP_API_URL
export function fetchAuthors(){
  return (dispatch)=>{
    debugger
    dispatch({type: 'LOADING_QUOTES'})
    return fetch('${API_URL}/authors')
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_AUTHORS', payload: json}))
  }
}
