import React, { Component } from 'react';
import Quote from '../components/Quote'
const Quotes = (props)=>{
  return(
    <div>
     <h1>Quotes Page</h1>
     {props.quotes.map(quote=>
       <Quote quote={quote}/>
    )}
    </div>

  )
}

export default Quotes
