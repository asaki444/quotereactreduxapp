import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class AuthorShow extends Component {
 


 render (){
   const id = parseInt(this.props.match.params.authorId)
   const author = this.props.authors.filter(author=> author.id === id )
    return (
        <div>
        <Link to="/authors">Back to Author Page</Link>
          <h2>{author[0].name}</h2>
          { author[0].quotes.map( quote=>
          	<div className="authorQuote">
             <h2>{quote.text}</h2>
             </div>
          	)}

        </div>
      
    
    	)
   }
}

const mapStateToProps = (state) => {
  return { authors: state.authors.authors };
};

export default connect(mapStateToProps)(AuthorShow)
