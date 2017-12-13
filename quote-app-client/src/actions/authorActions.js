import fetch from 'isomorphic-fetch'

export function fetchAuthors(){
  return (dispatch)=>{
    dispatch({type: 'LOADING_QUOTES'})
    return fetch('${RAILS_API_URL}/authors')
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_AUTHORS', payload: json}))
  }
}
