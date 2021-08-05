import React, { Component } from 'react';

import DataTable from './DataTable/DataTable';
import './App.css';
import { usersData } from './usersData';

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <DataTable rows={usersData} locale="da" rowsPerPage={5} />
      </div>
    );
  }
}

export default App;
