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
import { store } from './store/index.js';
import {Provider} from "react-redux";

const Home = lazy(()=>import("./pages/index.jsx"));

function App() {
  return(
    <Suspense fallback={<Loading/>}>
      <Provider store = {store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}>
            
            </Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            
            <Route element={<UserLayout/>}>
              <Route path='user/dashboard' element={<Dashboard/>}></Route>
              <Route path='user/my_sessions' element={<MySessions/>}></Route>
              <Route path='user/session_editor' element={<SessionEditor/>}></Route>
            </Route>
            
          </Routes>
        </Router>
      </Provider>
    </Suspense>
  )
}

export default App
