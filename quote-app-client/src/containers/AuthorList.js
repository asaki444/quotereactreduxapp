import React, { Component } from 'react';
import Author from '../components/Author';
import { fetchAuthors } from '../actions/authorActions';
import { connect } from 'react-redux';

class Authors extends Component {

   componentDidMount(){
     this.props.fetchAuthors();
   }

render(){
  return(
    <div>
     <h1>Authors Page</h1>
     { this.props.authors && this.props.authors.map(author=>
       <Author author={author} key={author.id}/>
    )}
    </div>

  )
}
}

const mapStateToProps = (state) => {
  return { authors: state.authors.authors };
};


export default connect(mapStateToProps,{ fetchAuthors })(Authors);
