import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/DashboardAdmin';
import TambahData from './components/TambahData';
import UpdateData from './components/UpdateData';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tambahdata" component={TambahData} />
        <Route path="/getdata" component={UpdateData} />
      </div>
    );
  }
}

export default App;
