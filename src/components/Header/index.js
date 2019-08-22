import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class headerComponent extends Component {
    render() {
        return (
            <nav className="header container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">Animation</Link>
                    </li>
                    <li>
                        <Link to="/transitions/">Transitions</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                    <li>
                        <Link to="/shop/">Shop</Link>
                    </li>
                    <li>
                        <Link to="/blog/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact/">Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default headerComponent;