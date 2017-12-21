import React, { Component } from 'react';
import { addLike } from '../actions/quoteActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Quote extends Component{ 
constructor(){
    super()

    this.state = {
         a: 0
       }
    }

  counter = () => {
    let c = this.state.a + 1
   this.setState({
     a: c
   })
   this.props.addLike(this.state.a + 1, this.props.quote)
  }

  render(){
    return(

     <div className='Quote'>
      <h2>{this.props.quote.text}</h2>
      <h3>{this.props.quote.author.name}</h3>
      <button onClick={this.counter}>Vote</button> <p>{this.state.a}</p>
      <p>Previous Sessions Votes: {this.props.quote.likes}</p>
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
