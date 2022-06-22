import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* import pages */
import {Home} from '../pages/Home';
import {Operation} from '../pages/Operation';
import {Error404} from '../pages/Error404';
import {Login} from '../pages/Login';
import {Register} from '../pages/Register';

const RoutesApp = ({operations, setOperations}) => (
    <Router>
        <Routes>
          <Route path='/' element={<Home operations={operations} setOperations={setOperations} rute="home"/>}></Route>
          <Route path='/home' element={<Home operations={operations} setOperations={setOperations} rute="home"/>}></Route>
          <Route path='/operations' element={<Operation operations={operations} setOperations={setOperations} rute="operations"/>}></Route>
          <Route path='/operations/incomes' element={<Operation operations={operations} setOperations={setOperations} rute="incomes"/>}></Route>
          <Route path='/operations/expenses' element={<Operation operations={operations} setOperations={setOperations} rute="expenses"/>}></Route>
          <Route path='/:rest' element={<Error404/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
      </Routes>
  </Router>
);


export {RoutesApp};