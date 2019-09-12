import React from "react";
import Landing from "./Components/Landing/Landing";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Experience from "./Components/Experience/experience";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="struct">
      <link
        href="https://fonts.googleapis.com/css?family=Karla|Rubik&display=swap"
        rel="stylesheet"
      />
      <Router>
        <div className="router">
          <Link to="/" className="routes">
            HOME
          </Link>

          <Link to="/projects" className="routes">
            PROJECTS
          </Link>

          <Link to="/contact" className="routes">
            CONTACT
          </Link>
        </div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/projects" component={Experience} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
