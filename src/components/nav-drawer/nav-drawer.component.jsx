import React, {useState, useEffect} from 'react'
import './nav-drawer.styles.scss'

const NavDrawer = ({text, pageInView}) => {
    const [drawer, setDrawer] = useState(false)

    const handleHover = () => {
    
    if (!pageInView) {
        setDrawer(drawer ? false : true)
    }
    }

    useEffect(() => {
            setDrawer(pageInView ? true : false)
    }, [pageInView])


    return (
        <div className={`node ${pageInView ? 'node-hover' : null}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
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