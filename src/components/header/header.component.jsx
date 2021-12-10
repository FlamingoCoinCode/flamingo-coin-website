import React, {useState} from 'react'
import './header.styles.scss'
import MobileMenuIcon from '../mobile-menu-icon/mobile-menu-icon.component'
import DropDownMenu from '../drop-down-menu/drop-down-menu.component'
import Logo from '../../logos/Official-Logo-Website-Pink.png'

const Header = () => {

    // Dropdown State

    const [dropDown, setDropDown] = useState(false)

    const handleClick = () => {
    setDropDown(dropDown ? false : true)
    }

return (
                <div className='header'>
                    <a className='header-logo-container' href='#homepage'> 
                        <img className='header-logo' src={Logo} alt='logo'/>
                    </a>
                    <a className='header-title-container' href='#homepage'> 
                        <h3>Flamingo Coin</h3>
                    </a>
                    <>
                        <MobileMenuIcon handleClick={handleClick}/>
                        {dropDown ? <DropDownMenu handleClick={handleClick}/> : null}
                    </>
                </div>
)
}

export default Header