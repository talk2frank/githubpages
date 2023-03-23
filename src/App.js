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
import MyFooter, { Jobs, MyBanner, ProfileContainer } from './components/components';

function App() {

  return (
    <div className="App">
    <div className='AppContent'>
      <MyBanner></MyBanner>
      <ProfileContainer></ProfileContainer>
      <Jobs></Jobs>
    </div>
    <MyFooter></MyFooter>
    </div>
  );
}

export default App;
