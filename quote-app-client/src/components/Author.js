import React, { Component } from 'react';

const Author = (props)=>{
  return(
     <div className='author'>
      <h2>{props.author.name}</h2>
      <h3>{props.author.quotes}</h3>
    </div>

  )
}

export default Author
