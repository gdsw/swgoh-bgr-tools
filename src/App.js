import React, { Component } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { Calculator } from './Components/Calculator/Calculator';
import { Layout } from './Components/Layout';
import { Home } from './Components/Home';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </Layout>
    );
  }
}