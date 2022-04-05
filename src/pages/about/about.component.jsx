import React, {useContext, useEffect} from 'react'
import './about.styles.scss'
import AboutBackground from './about-background/about-background.component'
import FlamingoLogo from '../../logos/Official-Logo-Website-Pink.png'
import Decentralized from '../../logos/decentralized.png'
import Algorand from '../../logos/algorand_logo_mark_black.png'
import useCheckMobileScreen from '../../components/mobile-checker/mobile-checker.component'
import { useInView } from 'react-intersection-observer';
import { PageInViewContext } from '../../contexts/inview.context'

const AboutPage = () => {

    const {pageInView, setPageInView} = useContext(PageInViewContext)

    const { ref, inView} = useInView({
    threshold: .1,
  });

    useEffect(() => {
        setPageInView({
        ...pageInView, about: inView
        });
    }, [inView])

    return (
    <div className='about-page' id='about'> 
        <AboutBackground/>
        <div ref={ref} className={`about-content ${inView ? 'animate-about-content' : null}`}>
            <h1 className='about-title'>About</h1>
            <div className='about-blurb-container'>
                <div className='graphic-circle'>
                    <img className='flamingo-logo' alt='flamingo coin logo' src={FlamingoLogo}/>
                    <div className='about-circle-connector'></div>
                </div>
                <h3 className='about-blurb'>Flamingo Coin is the first 100% Community-Owned Algorand Standard Asset</h3>
            </div>
            
            {useCheckMobileScreen(900) ? (
                <div className='about-blurb-container'>
                    <div className='graphic-circle'>
                        <img className='decentralized-icon' alt='decentralized icon' src={Decentralized}/>
                            <div className='about-circle-connector-2'></div>
                    </div>
                    <h3 className='about-blurb'>Flamingo Coin aims to achieve full decentralization through careful planning, 
    community engagement, and proven methodologies</h3>           
                </div>
            ) : (
                <div className='about-blurb-container'>
                    <h3 className='about-blurb'>Flamingo Coin aims to achieve full decentralization through careful planning, 
    community engagement, and proven methodologies</h3>
                    <div className='graphic-circle'>
                        <img className='decentralized-icon' alt='decentralized icon' src={Decentralized}/>
                            <div className='about-circle-connector-2'></div>
                    </div>
                </div>
            )}
            <div className='about-blurb-container'>
                <div className='graphic-circle'>
                <img className='algorand-logo' alt='flamingo coin logo' src={Algorand}/>
                </div>
                <h3 className='about-blurb'>Flamingo Coin benefits from the lightning-quick transaction speed and minimal fees of the Algorand blockchain</h3>
            </div>
        </div>
    </div>
)
}



export default AboutPage