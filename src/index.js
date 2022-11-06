import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MyCertificate from "./component/myCertificate"
import NotFound from './component/NotFound';
import MyJobs from "./component/myJobs"
import MyPayments from "./component/myPayment"
import MyOfferLetter from "./component/myOfferLetter"
import Home from './component/home';
import OurOwnContextProvider from './store/contextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <OurOwnContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/myJobs' element={<MyJobs />}></Route>
            <Route path='/myPayments' element={<MyPayments />}></Route>
            <Route path='/myOffersLetter' element={<MyOfferLetter />}></Route>
            <Route path='/myCertificate' element={<MyCertificate />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </OurOwnContextProvider>
);

reportWebVitals();
