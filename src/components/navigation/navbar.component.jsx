import React, {useContext} from 'react'
import './navbar.styles.scss'
import NavDrawer from '../nav-drawer/nav-drawer.component'

import { PageInViewContext } from '../../contexts/inview.context'

const NavBar = () => {

    const {pageInView} = useContext(PageInViewContext)
    
    const {home, socials, about, pinkPaper} = pageInView
    return (
        <div className='nav-bar' >
            <a href='#homepage'>
                <NavDrawer text='Home' pageInView={home}/>
            </a>
            <a href='#socials'>
                <NavDrawer text='Socials' pageInView={socials}/>
            </a>
            <a href='#about'>
                <NavDrawer text='About' pageInView={about}/>
            </a>
            <a href='#pink-paper'>
                <NavDrawer text='Pink Paper' pageInView={pinkPaper}/>
            </a> 
    </div>
    )

}



export default NavBar