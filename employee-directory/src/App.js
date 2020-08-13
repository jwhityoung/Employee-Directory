import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useTable, useSortBy } from 'react-table';
// import { columns, data } from './dataSource';
// import logo from './logo.svg';
import './App.css';
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Discover from "./pages/Discover";
import All from "./pages/All";

function App() {


return (
  <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={All} />
          {/* <Route exact path="/discover" component={Discover} /> */}
      </div>
    </Router>
);
}

export default App;

