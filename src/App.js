import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (

    <div className='app_wrapper'>
      <Header />
      <Navbar />
      <div className='app_wrapper_content'>
        {/* <Profile /> */}
        {/* <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} /> */}

        <Route path='/profile' render={() => <Profile />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
      </div>
    </div>
  );
}
export default App;