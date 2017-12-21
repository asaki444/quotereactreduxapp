import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AuthorShow extends Component {

 render (){
 	debugger
   const id = parseInt(this.props.match.params.authorId)
   const author = this.props.authors.filter(author=> author.id == id )
    return (
    <div>
      <h3> Authors Show Component!</h3>
      <Link to={"/authors"}> <p> back to authors page</p></Link>
      <h2>{author[0].name}</h2>
      <ul>
        {author[0].quotes.map( quote =>
          <li className="authorQuote"> {quote.text} </li>
        	)}
      </ul>
    </div>
    ) ;
   }
}

const mapStateToProps = (state) => {
  return { authors: state.authors.authors };
};
 
export default connect(mapStateToProps)(AuthorShow)
