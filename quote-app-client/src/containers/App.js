import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AuthorShow from '../components/AuthorShow';
import QuoteForm from '../containers/QuoteForm';
import QuoteList from '../containers/QuoteList'
import AuthorList from '../containers/AuthorList'
import NavBar from '../components/NavBar';
import LogInPage from '../components/LogInPage';

class App extends Component {


  render() {
    return (
      <Router>
       <div className="App">
        <Header />
        <NavBar />
        <Route exact path="/" component={LogInPage}/>
        <Route exact path="/quotes" component={QuoteList} />
        <Route exact path="/addquote" component={QuoteForm} />                                           
        <Route exact path="/authors" component={AuthorList} />
        <Route path="/authors/:authorId" component={AuthorShow}/>
        <Footer />
        </ div>
      </ Router>
    )
  }
}


export default App;
