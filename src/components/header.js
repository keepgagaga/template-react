import { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link, } from "react-router-dom";
import logo from '../logo.svg';
import Cnode from '../pages/cnode';
import '../style/header.css';



class Header extends Component {
    render() {
        return (
            <Router>

            <Switch>
                <Route exact path="/" children={ <Icon /> }></Route>
                <Route exact path="/cnode" children={ <Cnode /> }></Route>
            </Switch>

            </Router>
        )
    }
}

function Icon() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <span>React</span>
            <Link to="/cnode">Cnode</Link>
        </div>
    )
}

export default Header;