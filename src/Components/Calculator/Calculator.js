import React, { Component } from 'react';
import { InputGroup } from 'react-bootstrap';
import calculatorService from './CalculatorService';
import * as ReactBootstrap from "react-bootstrap"

export class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            zamSpeed: 0,
            sharedSpeed: 0,
            maulSpeed: 0,
            darthMaulSpeed: 0,
            kyleSpeed: 0
        };

        this.handleZamInput = this.handleZamInput.bind(this);
        this.handleMaulInput = this.handleMaulInput.bind(this);
        this.handleDarthMaulInput = this.handleDarthMaulInput.bind(this);
        this.handleKyleInput = this.handleKyleInput.bind(this);

    }

    handleZamInput = (e) => {
        let value = e.target.value,
            calc = calculatorService.calculateZamSpeed(value);
        this.setState({
            zamSpeed: calc.zamSpeed,
            sharedSpeed: calc.sharedSpeed
        });
    }

    handleMaulInput = (e) => {
        let value = e.target.value,
            calc = calculatorService.calculateMaulSpeed(value);
        this.setState({ maulSpeed: calc });
    }

    handleDarthMaulInput = (e) => {
        let value = e.target.value,
        calc = calculatorService.calculateDarthMaulSpeed(value);
    this.setState({ darthMaulSpeed: calc });
    }

    handleKyleInput = (e) => {
        let value = e.target.value,
            calc = calculatorService.calculateKyleSpeed(value);
        this.setState({ kyleSpeed: calc });
    }

    render() {
        return (
            <ReactBootstrap.Accordion defaultActiveKey="0" className="text-light">
                <ReactBootstrap.Accordion.Item className='bg-primary' eventKey="0">
                    <ReactBootstrap.Accordion.Header className="calculator-header">Zam Speed Calculator</ReactBootstrap.Accordion.Header>
                    <ReactBootstrap.Accordion.Body className='bg-dark'>
                        <ReactBootstrap.Form.Group className="mb-3">
                            <ReactBootstrap.Form.Label>Starting Speed</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control id="zam" type="number" placeholder="Speed" onInput={this.handleZamInput} />
                        </ReactBootstrap.Form.Group>
                        <ReactBootstrap.Form.Group className="mb-3">
                            <ReactBootstrap.Form.Label>Zam Speed</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control value={this.state.zamSpeed} className="bg-warning" disabled type="number" />
                            <ReactBootstrap.Form.Label>Zam Shared Speed</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control value={this.state.sharedSpeed} className="bg-warning" disabled type="number" />
                        </ReactBootstrap.Form.Group>
                    </ReactBootstrap.Accordion.Body>
                </ReactBootstrap.Accordion.Item>
                <ReactBootstrap.Accordion.Item eventKey="1">
                    <ReactBootstrap.Accordion.Header className="calculator-header">Maul Speed Calculator</ReactBootstrap.Accordion.Header>
                    <ReactBootstrap.Accordion.Body className='bg-dark'>
                        <ReactBootstrap.Form.Group className="mb-3">
                            <ReactBootstrap.Form.Label>Starting Speed</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control id="zam" type="number" placeholder="Speed" onInput={this.handleMaulInput} />
                        </ReactBootstrap.Form.Group>
                        <ReactBootstrap.Form.Group className="mb-3">
                            <ReactBootstrap.Form.Label>Maul Speed(speed up buff) + LV lead</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control value={this.state.maulSpeed} className="bg-warning" disabled type="number" />
                        </ReactBootstrap.Form.Group>
                    </ReactBootstrap.Accordion.Body>
                </ReactBootstrap.Accordion.Item>
                <ReactBootstrap.Accordion.Item eventKey="3">
                    <ReactBootstrap.Accordion.Header className="calculator-header">Darth Maul Speed Calculator</ReactBootstrap.Accordion.Header>
                    <ReactBootstrap.Accordion.Body className='bg-dark'>
                        <ReactBootstrap.Form.Group className="mb-3">
                            <ReactBootstrap.Form.Label>Starting Speed</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control id="zam" type="number" placeholder="Speed" onInput={this.handleDarthMaulInput} />
                        </ReactBootstrap.Form.Group>
                        <ReactBootstrap.Form.Group className="mb-3">
                            <ReactBootstrap.Form.Label>Darth Maul Lead(20% TM)</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control value={this.state.darthMaulSpeed} className="bg-warning" disabled type="number" />
                        </ReactBootstrap.Form.Group>
                    </ReactBootstrap.Accordion.Body>
                </ReactBootstrap.Accordion.Item>
                <ReactBootstrap.Accordion.Item eventKey="4">
                    <ReactBootstrap.Accordion.Header className="calculator-header">Kyle Katarn Speed Calculator</ReactBootstrap.Accordion.Header>
                    <ReactBootstrap.Accordion.Body className='bg-dark'>
                        <ReactBootstrap.Form.Group className="mb-3">
                            <ReactBootstrap.Form.Label>Starting Speed</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control id="zam" type="number" placeholder="Speed" onInput={this.handleKyleInput} />
                        </ReactBootstrap.Form.Group>
                        <ReactBootstrap.Form.Group className="mb-3">
                            <ReactBootstrap.Form.Label>Kyle Katarn Unique(30% TM)</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control value={this.state.kyleSpeed} className="bg-warning" disabled type="number" />
                        </ReactBootstrap.Form.Group>
                    </ReactBootstrap.Accordion.Body>
                </ReactBootstrap.Accordion.Item>
            </ReactBootstrap.Accordion>
        );
    }
}