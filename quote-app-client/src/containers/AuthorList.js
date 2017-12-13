import React, { Component } from 'react';
import Author from '../components/Author';
import { fetchAuthors } from '../actions/authorActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Authors extends Component {
   constructor (){
     super()
       this.state = {
         authors: []
       }
   }

   componentDidMount(){
     this.props.fetchAuthors().then(authors=>this.setState({authors}))
   }
   render(){

  return(
    <div>
     <h1>Authors Page</h1>
     {this.state.authors.map(author=>
       <Author author={author}/>
    )}
    </div>

  )
}
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
  fetchAuthors: fetchAuthors
}, dispatch);
};


export default connect(mapDispatchToProps)(Authors);
