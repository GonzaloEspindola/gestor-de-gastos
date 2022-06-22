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
          <Route path='/gestor-de-gastos/' element={<Home operations={operations} setOperations={setOperations} rute="home"/>}></Route>
          <Route path='/gestor-de-gastos/home' element={<Home operations={operations} setOperations={setOperations} rute="home"/>}></Route>
          <Route path='/gestor-de-gastos/operations' element={<Operation operations={operations} setOperations={setOperations} rute="operations"/>}></Route>
          <Route path='/gestor-de-gastos/operations/incomes' element={<Operation operations={operations} setOperations={setOperations} rute="incomes"/>}></Route>
          <Route path='/gestor-de-gastos/operations/expenses' element={<Operation operations={operations} setOperations={setOperations} rute="expenses"/>}></Route>
          <Route path='/gestor-de-gastos/:rest' element={<Error404/>}></Route>

          <Route path='/gestor-de-gastos/login' element={<Login/>}></Route>
          <Route path='/gestor-de-gastos/register' element={<Register/>}></Route>
      </Routes>
  </Router>
);


export {RoutesApp};