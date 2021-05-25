import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import NavBar from './navBar';
import Blog from './components/pages/blog';
import Home from './components/pages/home';
import AboutUs from './components/pages/aboutUs';
import Resources from './components/pages/resources';
import ContactUs from './components/pages/contactUs';
import OurServices from './components/pages/ourServices';
import { Route, Switch, Redirect } from 'react-router-dom';
import FooterPage from './components/pages/footerPage';


class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <NavBar />
        <main className="container-fluid">
        <div className="content">
          <Switch>

            <Route path="/home" component={Home} />
            <Route path="/our-services" component={OurServices} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/resources" component={Resources} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact-us" component={ContactUs} />
            <Redirect exact from="/" to="home" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        </main>
        <FooterPage />
      </React.Fragment>
     );
  }
}
 
export default App;