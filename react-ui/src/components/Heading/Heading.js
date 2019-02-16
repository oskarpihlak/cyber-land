import React, {Component} from 'react';
import './Heading.scss';

export default class Heading extends Component {
    render() {
        return (
            <section className="heading">
                    <div className="introduction">
                        <img src={require("../../assets/images/Cyber-Security-PNG-Background-Image.png")}
                             alt="cyber security logo" className="introduction__img"/>
                    </div>
            </section>
        );
    }
}
