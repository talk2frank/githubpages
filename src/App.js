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
import MyFooter, {Contacts, Emplist, MobileNav, MyBanner, MyHeader, Profile} from './components/components';

function App() {

  return (
    <div className='themewrap'>
      <div className="App">
        <MyHeader></MyHeader>
        <MobileNav></MobileNav>
        <MyBanner></MyBanner>
        <main className='AppContent'>
          <Profile></Profile>
          <Emplist></Emplist>
          <Contacts></Contacts>
        </main>
        <MyFooter></MyFooter>
      </div>
    </div>
  );
};


export default App;
