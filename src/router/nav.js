import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ScrollTop from "./scrollTop.js";
import Home from "../components/home.js";
import OurWork from "../components/work.js";
import Inspire from "../components/inspire.js";
import About from "../components/about.js";

import "./nav.css";

function Nav() {
  return (
    <div className="Routes">
      <Router>
        <nav>
          <NavLink
            to="/ConstructionCO"
            exact
            activeClassName="active"
            className="inactive"
          >
            <h1>Construct S</h1>
          </NavLink>
          <ul className="nav-links">
            <NavLink
              to="/ConstructionCO"
              exact
              activeClassName="active"
              className="inactive"
            >
              <li> What We Do </li>
            </NavLink>
            <NavLink to="/demos" activeClassName="active" className="inactive">
              <li> See Our Work</li>
            </NavLink>
            <NavLink
              to="/inspirations"
              activeClassName="active"
              className="inactive"
            >
              <li> Be Inspired</li>
            </NavLink>
            <NavLink to="/about" activeClassName="active" className="inactive">
              <li> About & Contact</li>
            </NavLink>
          </ul>
        </nav>
        <ScrollTop>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/inspirations">
              <Inspire />
            </Route>
            <Route path="/demos">
              <OurWork />
            </Route>
            <Route exact path="/ConstructionCO">
              <Home />
            </Route>
          </Switch>
        </ScrollTop>
      </Router>
    </div>
  );
}

export default Nav;
