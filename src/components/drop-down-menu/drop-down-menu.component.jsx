import React from 'react'
import './drop-down-menu.styles.scss'

const DropDownMenu = ({handleClick}) => (
    <div className='dropdown-menu'>
        <a className='menu-links' href='#homepage' onClick={handleClick}>Homepage</a>
        <a className='menu-links' href='#socials' onClick={handleClick}>Socials</a>
        <a className='menu-links' href='#about' onClick={handleClick}>About</a>
        <a className='menu-links' href='#pink-paper' onClick={handleClick}>Pink Paper</a>
    </div>
)

export default DropDownMenu