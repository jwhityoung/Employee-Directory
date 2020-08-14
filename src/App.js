import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useTable, useSortBy } from 'react-table';
// import { columns, data } from './dataSource';
// import logo from './logo.svg';
import './App.css';
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import All from "./pages/All";
import Table from "./pages/Discover"

function App() {


return (
 
  <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={All} />
          <Route exact path="/discover" component={Table} />
      </div>
    </Router>
);
}

export default App;

