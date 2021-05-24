import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './navBar';


class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
        <div className="content">
          <Switch>

            {/* <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="movies" />
            <Redirect to="/not-found" /> */}
          </Switch>
        </div>
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;