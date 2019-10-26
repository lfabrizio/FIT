import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import FitList from "./components/fit-list.component";
import EditFit from "./components/edit-fit.component";
import CreateFit from "./components/create-fit.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={FitList} />
      <Route path="/edit/:id" component={EditFit} />
      <Route path="/create" component={CreateFit} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;