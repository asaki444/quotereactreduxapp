import React from 'react';

const Quote = (props)=>{
  return(

     <div className='Quote'>
      <h2>{props.quote.text}</h2>
      <h3>{props.quote.author.name}</h3>
    </div>

  )
}

export default Quote
