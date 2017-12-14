import React, { Component } from 'react';
import {addQuote} from '../actions/quoteActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class QuoteForm extends Component {
    constructor(){
     super()
    this.state = {
        text: '',
        author: ''
      }
    }

handleOnTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleOnAuthorChange(event) {
    this.setState({
      author: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addQuote(this.state)
  }

  render() {
    return(
  <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnTextChange(event)}
            placeholder="quote" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnAuthorChange(event)}
            placeholder="author" />
        </p>
        <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
  addQuote: addQuote
}, dispatch);
};

export default connect(null, mapDispatchToProps)(QuoteForm)
