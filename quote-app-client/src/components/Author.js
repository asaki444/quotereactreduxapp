import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Author = (props)=>{
  return(
     <div className='Author'>
      <h2>{props.author.name}</h2>
       <Link key={props.author.id} to={`/authors/${props.author.id}`}> <p>Click Here to View More Info</p>
       </Link>
    </div>

  )
}



export default Author
