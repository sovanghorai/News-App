
import './App.css';
import React, { useState } from 'react'
import News from './components/News';

import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'


const  App =()=>  {
  const pageSize =9;
  const [progress,setProgress]=useState(0);
  
  return (
    <>
    <Navbar/>
    <LoadingBar
        color='#f11pageSize46'
        progress={progress}
        
      />
    <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category ="general"/>}/>
          <Route path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category ="business"/>}/>
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category ="entertainment"/>}/>
          <Route path="/general" element = {<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category ="general"/>}/>
          <Route path ="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category ="health"/>}/>
          <Route path ="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category ="science"/>}/>
          <Route path ="/sport" element={<News setProgress={setProgress}  key="sport" pageSize={pageSize} country="in" category ="sport"/>}/>
          <Route path ="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category ="technology"/>}/>
          
      </Routes>
      </>
  )
  }
  export default App
