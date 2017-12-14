import React, { Component } from 'react';
import Quote from '../components/Quote';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions/quoteActions'
import { bindActionCreators } from 'redux';
class Quotes extends Component {
 constructor (){
   super()
     this.state = {
       quotes: []
     }
 }

 componentDidMount(){
   this.props.fetchQuotes().then(quotes=>this.setState({quotes}))
 }
 render(){
  return(
    <div>
     <h1>Quotes Page</h1>
     {this.state.quotes.map(quote=>
       <Quote quote={quote}/>
    )}
    </div>

  )
 }
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
  fetchQuotes: fetchQuotes
}, dispatch);
};


export default connect(null,mapDispatchToProps)(Quotes);
