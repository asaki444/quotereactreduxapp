import React from 'react';
import { connect } from 'react-redux';

const AuthorShow = (props) => {
 const id = parseInt(props.match.params.authorId)
 const author = props.authors.filter(author=> author.id == id )
  return (
    <div>
      <h3> Authors Show Component!</h3>
      <h2>{author[0].name}</h2>
      <ul>
        {author[0].quotes.map( quote =>
          <li className="authorQuote"> {quote.text} </li>
        	)}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { authors: state.authors.authors };
};
 
export default connect(mapStateToProps)(AuthorShow)
