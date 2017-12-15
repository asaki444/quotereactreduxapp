import React, { Component } from 'react';
import Author from '../components/Author';
import { fetchAuthors } from '../actions/authorActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Authors extends Component {

   componentDidMount(){
     this.props.fetchAuthors();
   }
render(){
  return(
    <div>
     <h1>Authors Page</h1>
     {this.props.authors.map(author=>
       <Author author={author} key={author.id}/>
    )}
    </div>

  )
}
}

const mapStateToProps = (state) => {
  return { authors: state.authors.authors };
};

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
  fetchAuthors: fetchAuthors
}, dispatch);
};


export default connect(mapStateToProps,mapDispatchToProps)(Authors);
