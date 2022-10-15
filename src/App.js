import 'bootstrap/dist/css/bootstrap.min.css'
import Haider from './components/Haider';
import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Footer';
import React, { Component } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Datas from './data_v2.json';
import Product from './components/Product';


export default class App extends Component {
  

  render() {

    return (
      <>
        <Haider />
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/Shop' element={<Shop />} />
              <Route path='/Cutumer_car' element={<Home />} />
              {Datas.map(element => {
                return <Route path={'/Shop/' + element["Product_id"]} element={<Product element={element}  />} />
              })}
            </Routes>  
          </BrowserRouter>
        <Footer />
      </>
    );
  }
}

