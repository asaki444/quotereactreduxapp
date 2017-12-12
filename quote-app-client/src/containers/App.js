import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QuoteForm from '../containers/QuoteForm';
import QuoteList from '../containers/QuoteList'
import AuthorList from '../containers/AuthorList'
import NavBar from '../components/NavBar'
class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
        <Header />
        <NavBar />
        <Route path="/quotes" component={QuoteList} />
        <Route path="/quoteform" component={QuoteForm} />
        <Route path="/authors" component={AuthorList} />
        <Footer />
        </ div>
      </ Router>
    )
  }
}

export default App;
