import React, {useState} from 'react'
import './nav-drawer.styles.scss'

const NavDrawer = ({text}) => {
    const [drawer, setDrawer] = useState(false)

    const handleHover = () => {
    setDrawer(drawer ? false : true)
    }

    return (
        <div className='node' onMouseEnter={handleHover} onMouseLeave={handleHover}>
                {drawer ? (
                    <div className='nav-text'>
                        <p>{text}</p>
                    </div>
                    ) :
                    null}
        </div>
    )
}

export default NavDrawer