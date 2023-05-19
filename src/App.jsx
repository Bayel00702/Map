import './style/style.scss';
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx";
import Layout from "./Pages/Layout/Layout";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='' element={<Home/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
