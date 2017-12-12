import React, { Component } from 'react';

const Author = (props)=>{
  return(
   <div>
    {props.authors.map(author=>
     <div className='author'>
      <h2>{author.name}</h2>
      <h3>{author.quotes}</h3>
    </div>
  )}
  </div>
  )
}

export default Author
