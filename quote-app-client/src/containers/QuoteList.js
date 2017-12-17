import React, { Component } from 'react';
import Quote from '../components/Quote';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions/quoteActions';
class Quotes extends Component {

 componentDidMount(){
   this.props.fetchQuotes()

 }


 render(){
  return(
    <div>
     <h1>Quotes Page</h1>
     {this.props.quotes.map(quote=>
       <Quote quote={quote} key={quote.id}/>)}
    </div>

  )
 }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes.quotes };
};


export default connect(mapStateToProps,{ fetchQuotes })(Quotes);
