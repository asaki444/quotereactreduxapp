import React, { Component } from 'react';

const Author = (props)=>{
  return(
     <div className='Author'>
      <h2>{props.author.name}</h2>
    </div>

  )
}

export default Author
