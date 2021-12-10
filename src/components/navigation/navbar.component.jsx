import React from 'react'
import './navbar.styles.scss'
import NavDrawer from '../nav-drawer/nav-drawer.component'

const NavBar = () => (
    <div className='nav-bar' >
            <a href='#homepage'>
                <NavDrawer text='Home'/>
            </a>
            <a href='#socials'>
                <NavDrawer text='Socials'/>
            </a>
            <a href='#about'>
                <NavDrawer text='About'/>
            </a>
            <a href='#pink-paper'>
                <NavDrawer text='Pink Paper'/>
            </a> 
        </div>
)

export default NavBar