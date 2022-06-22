import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* import pages */
import {Home} from '../pages/Home';
import {Operation} from '../pages/Operation';
import {Error404} from '../pages/Error404';
import {Login} from '../pages/Login';
import {Register} from '../pages/Register';


const RoutesApp = () => (

    <Router>
        <Routes>
          <Route path='/gestor-de-gastos'>
            <Route path='/gestor-de-gastos/' element={<Home rute="home"/>}></Route>
            <Route path='home' element={<Home rute="home"/>}></Route>
            <Route path='operations' element={<Operation rute="operations"/>}></Route>
            <Route path='*' element={<Error404/>}></Route>

            <Route path='login' element={<Login/>}></Route>
            <Route path='register' element={<Register/>}></Route>
          </Route>
      </Routes>
  </Router>
);


export {RoutesApp};