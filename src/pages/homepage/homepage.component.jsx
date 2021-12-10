import React from 'react'
import './homepage.styles.scss'
import useCheckMobileScreen from '../../components/mobile-checker/mobile-checker.component'
import HomepageBackground from './homepage-background/homepage-background.component'
import FlamingoLogo from '../../logos/Official-Logo-Website-Pink.png'
import Algorand from '../../logos/algorand_full_logo_black.png'



const HomePage = () => (
    <div className='homepage' id='homepage'>
      <HomepageBackground/>
      <div className='title-container'>
            <div className='logo-container'>
              <img className='logo' alt='flamingo-coin-logo' src={FlamingoLogo}/>
            </div>
            <div className='title'>
                <h1 className='main-title'>Flamingo Coin</h1>
                <h2 className='asa-id'>ASA ID: 406383570</h2>
                {useCheckMobileScreen(700) ? null :
                  <div className='subtitle-algorand-logo'>
                    <h2 className='sub-title'>Powered by</h2>
                    <img className='algorand-logo' src={Algorand} alt='algorand logo'/>
                  </div> }
                
            </div>
        </div>
    </div>
)

export default HomePage