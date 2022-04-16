import React from 'react';
import s from './Nav.module.css'
import {NavLink} from 'react-router-dom'


const Nav = () => {
    return (
        
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to  = '/Profile' сlassName={s.elem}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/Dialogs' сlassName={s.elem}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/News' сlassName={s.elem}>News</NavLink>
            </div>
            <div className={s.item}> 
                <NavLink to = '/Music' сlassName={s.elem}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/Settings' сlassName={s.elem}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav























