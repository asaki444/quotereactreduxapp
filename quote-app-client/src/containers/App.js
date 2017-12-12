import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QuoteForm from '../containers/QuoteForm';
import Author from '../components/Author';
import Quote from '../components/Quote'
import QuoteList from '../components/QuoteList'
import AuthorList from '../components/AuthorList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
