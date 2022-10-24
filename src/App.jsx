import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RequestForm from './pages/RequestForm';
import TermOfService from './pages/TermOfService';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/form" element={<RequestForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
