import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Music from './components/Music/Music';
import News from './components/News/News'
import Settings from './components/settings/settings'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const app = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <div className='app-wrapper-content'>
                <Routes>

                    <Route path='/' element={<Profile  />} /> 

                    <Route path='profile/' element={<Profile  />}  />

                    <Route path='dialogs/*' element={<DialogsContainer    />} /> 

                    <Route path='Music/' element={<Music />} />
                    <Route path='News/' element={<News />} />
                    <Route path='Settings/' element={<Settings />} />    
                    <Route path='Users/' element={<UsersContainer/>} />               
                </Routes> 
            </div>
        </div>
    )
}
export default app;

