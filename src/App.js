import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/home/home';

const App =  () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
        <Route exact path='/' element={<Home />} />
    </Routes>
    </>
  );
};

export default App;
