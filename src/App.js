import 'bootstrap/dist/css/bootstrap.min.css'
import Haider from './components/Haider';
import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Footer';
import React, { Component } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import axios from 'axios';


export default class App extends Component {
  

  state = {
    products: [],
  };

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000/api/products/')
    .then((res) => {
        this.setState({ products: res.data });
    })
    .catch(err => {})
  }



  render() {

    return (
      <>
        <Haider />
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/Shop' element={<Shop elements={this.state.products} />} />
              <Route path='/Cutumer_car' element={<Home />} />
              {this.state.products.map(product => {
                return <Route path={'/product/' + product["Model_id"]} element={<Product product={product}  />} />
              })}
            </Routes>  
          </BrowserRouter>
        <Footer />
      </>
    );
  }
}

