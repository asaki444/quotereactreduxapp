import fetch from 'isomorphic-fetch'

export function fetchQuotes(){
  return (dispatch)=>{
    dispatch({type: 'LOADING_QUOTES'})
    return fetch('${RAILS_API_URL}/quotes')
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_QUOTES', payload: json}))
  }
}

export function addQuote(quote){
      return fetch('${RAILS_API_URL}/quotes',
       {method: 'post',
        body: JSON.stringify(quote),
        contentType: 'application/json',
        accepts: 'application/json'}
    ).then(response=> response.json())

   }
