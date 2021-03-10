import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ScrollTop from "./scrollTop.js";
import Home from "../components/home.js";
import "./nav.css";

function Nav() {
  return (
    <div>
      <Router>
        <nav>
          <NavLink to="/" exact activeClassName="active" className="inactive">
            <h1>Construct S</h1>
          </NavLink>
          <ul className="nav-links">
            <NavLink to="/" exact activeClassName="active" className="inactive">
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
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ScrollTop>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Nav;
