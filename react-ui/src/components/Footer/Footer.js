import React, {Component} from 'react';
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <ul className="nav">
                    <li className="nav__item"><a href="#" className="nav__link">Find your favourite encryption</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Request proposal</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Download hash planner</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Submit your public key</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Come work with us</a></li>
                </ul>
            </footer>
        );
    }
}
