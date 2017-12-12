import React, { Component } from 'react';

export class QuoteForm extends Component {
    constructor(props){
     super(props)
    this.state = {
        text: '',
        author: '',
        categories: []
      }
    }

handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange(event) {
    this.setState({
      location: event.target.value
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
            onChange={(event) => this.handleOnNameChange(event)}
            placeholder="quote" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            placeholder="author" />
        </p>
        <p>
           <input
            type="checkbox" s
            onChange={(event) => this.handleOnLocationChange(event)} s/>
        </p>
        <input type="submit" />
        </form>
      </div>
    );
  }
}
