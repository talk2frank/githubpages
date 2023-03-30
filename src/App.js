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
import MyFooter, { Emplist, MobileNav, MyBanner, MyHeader, Profile } from './components/components';

function App() {

  return (
    <div className="App">
      <MyHeader></MyHeader>
      <div className='navcont'>
        <MobileNav></MobileNav>
      </div>
      <MyBanner></MyBanner>
      <main className='AppContent'>
        <Profile></Profile>
        <Emplist></Emplist>
      </main>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
