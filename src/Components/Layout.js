import React, { Component } from "react";
import { Header } from './Header';
import { Footer } from './Footer';

export class Layout extends Component {
    render() {
        return (
            <div className="main-container">
                <Header></Header>
                <div className="main-container bg-dark">
                {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}