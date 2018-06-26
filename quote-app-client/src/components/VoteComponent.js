import React from 'react';

const VoteComponent = (props)=>{
  return(
  <div>
    <button onClick={props.counter}>Vote</button>
    <p> Votes: {props.likes}</p>
   </div>  
  	)

}

export default VoteComponent