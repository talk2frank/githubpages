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
import MyFooter, {MobileNav, MyHeader} from './components/components';
//import { profileData, employerData, bannertext } from './data/data';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/home';
import {Education, EduItem} from './components/education';

function App() {

  return (
    <div className='themewrap'>
      <div className="App">
        <MyHeader/>
        <MobileNav/>
        <main className='AppContent'>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/githubpages" element={<Home/>}/>
            <Route path="/education" element={<Education/>}>
              <Route path=":id" element={<EduItem/>}></Route>
              <Route index element={<h3>Please choose a course from above</h3>}></Route>
            </Route>
            <Route path="*" element={<Home/>}/>
          </Routes>
        </main>
        <MyFooter/>
      </div>
    </div>
  );
};


export default App;
