import React, { Component } from 'react';

const Quote = (props)=>{
  return(
   <div>
    {props.quote.map(quote=>
     <div className='Quote'>
      <h2>{quote.text}</h2>
      <h3>{quote.author}</h3>
    </div>
  )}
  </div>
  )
}

export default Quote
