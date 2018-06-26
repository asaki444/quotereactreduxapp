import React, { Component } from 'react';
import { addLike } from '../actions/quoteActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VoteComponent from './VoteComponent'
class Quote extends Component{ 
constructor(){
    super()

    this.state = {
         a: 0
       }
    }

  counter = () => {
    
   this.props.addLike(this.props.quote)
  }

  render(){
    return(

     <div className='Quote'>
      <h2>{this.props.quote.text}</h2>
      <h3>{this.props.quote.author.name}</h3>
      
      <VoteComponent counter={this.counter} likes={this.props.quote.likes}/>
    </div>

   )
  }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
  		addLike: addLike
	}, dispatch);
};


export default connect(null, mapDispatchToProps)(Quote)
