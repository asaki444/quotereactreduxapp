import React, { Component } from 'react';
import Author from '../components/Author'
const Authors = (props)=>{
  return(
    <div>
     <h1>Authors Page</h1>
     {props.authors.map(author=>
       <Author author={author}/>
    )}
    </div>

  )
}
