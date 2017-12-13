import React, { Component } from 'react';

export default class QuoteForm extends Component {
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
