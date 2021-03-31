import React from 'react';
import logo from '../logo.svg';
import '../style/header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <span>这里是 React 页面，用来测试 React 的特性</span>
            </div>
        )
    }
}

export default Header;