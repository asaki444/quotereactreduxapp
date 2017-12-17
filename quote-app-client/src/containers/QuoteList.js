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
   this.props.fetchQuotes()
 }
 render(){
   debugger
  return(
    <div>
     <h1>Quotes Page</h1>
     {this.props.quotes.map(quote=>
       <Quote quote={quote} key={quote.id}/>)}
    </div>

  )
 }
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
  fetchQuotes: fetchQuotes
}, dispatch);
};
const mapStateToProps = (state) => {
  return { quotes: state.quotes.quotes };
};


export default connect(mapStateToProps,mapDispatchToProps)(Quotes);
