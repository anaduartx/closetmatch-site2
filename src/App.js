import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/app.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import ComoFunciona from './pages/ComoFunciona';
import Faq from './pages/Faq';
import Tutorial from './pages/Tutorial';
import Download from './pages/Download';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/quemsomos' component={QuemSomos} />
          <Route path='/comofunciona' component={ComoFunciona} />
          <Route path='/faq' component={Faq} />
          <Route path='/tutorial' component={Tutorial} />
          <Route path='/download' component={Download} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
