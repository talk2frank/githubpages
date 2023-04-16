/**
 * App main homepage for FK github page
 * @description Renders home page for App using components
 * @author Frank Kinsey
 * @version 1.0
 * @see {@link https://github.com/talk2frank/githubpages}
 * @since 1.0
 * 
 */

import './App.css';
import { MyFooter, MobileNav, MyHeader, lazyImages } from './components/components';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home';
import Education from './components/education';
import Employment from './components/employment';
import { useEffect } from 'react';


function App() {


  //adds lazy loading for images for each route
  let location = useLocation();

  useEffect(() => {
    lazyImages();
  },[location]);

  return (
      <div className="App">
        <MyHeader/>
        <MobileNav/>
        <main className='AppContent'>
          <Routes>
            <Route path="*" element={<Home/>}/>
            <Route path="/githubpages" element={<Home/>}>
              <Route path="*" element={<Home/>}/>
            </Route>
            <Route path="/employment" element={<Employment/>}>
              <Route path="*" element={<Employment/>}/>
            </Route>
            <Route path="/education" element={<Education/>}/>
          </Routes>
        </main>
        <MyFooter/>
      </div>
  );

  

};


export default App;
