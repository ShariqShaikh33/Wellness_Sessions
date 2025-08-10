import { useState } from 'react'
import './App.css'
import { lazy } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Suspense } from 'react';
import Loading from './components/common/loading.jsx';
import Register from './pages/register/index.jsx';
import Login from './pages/login/index.jsx';
import Dashboard from './pages/dashboard/index.jsx';
import MySessions from "./pages/mySession/index.jsx";
import SessionEditor from "./pages/sessionEditor/index.jsx";
import UserLayout from './components/User/Layout/index.jsx';

const Home = lazy(()=>import("./pages/index.jsx"));

function App() {
  return(
    <Suspense fallback={<Loading/>}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}>
          
          </Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          
          <Route element={<UserLayout/>}>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/my_sessions' element={<MySessions/>}></Route>
            <Route path='/session_editor' element={<SessionEditor/>}></Route>
          </Route>
          
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
