import React, {useContext, useEffect} from 'react'
import './socials.styles.scss'
import SocialsBackground from './socials-background-css/socials-background'
import discord from '../../logos/social-icons/discord.png'
import reddit from '../../logos/social-icons/reddit.png'
import twitter from '../../logos/social-icons/twitter.png'
import telegram from '../../logos/social-icons/telegram.png'

import { useInView } from 'react-intersection-observer';
import { PageInViewContext } from '../../contexts/inview.context'

const SocialsPage = () => {
    const {pageInView, setPageInView} = useContext(PageInViewContext)

    const { ref, inView} = useInView({
    threshold: .5,
    // triggerOnce: true,
  });

    useEffect(() => {
        setPageInView({...pageInView, socials: inView}) 
    }, [inView])



    return (
        <div className='socials-page' id='socials'>
        <SocialsBackground/>
        <div ref={ref} className={inView ? 'socials-content animate-socials-content' : 'socials-content'}>
            <div className= 'social-links'>
                <a className='link' href='https://discord.com/invite/yBZwvbbDrx' target="_blank" rel="noopener noreferrer">
                    <img src={discord} alt='discord logo'/>
                </a>
                <a className='link' href='https://www.reddit.com/r/FlamingoCoin/' target="_blank" rel="noopener noreferrer">
                    <img src={reddit} alt='reddit logo'/>
                </a>
                <a className='link' href='https://twitter.com/FlamingoCoinASA' target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt='twitter logo'/>
                </a>
                <a className='link' href='https://t.me/joinchat/ivigf8GJZko5MDVh' target="_blank" rel="noopener noreferrer">
                    <img src={telegram} alt='telegram logo'/>
                </a>
            </div>
            <div className='social-text'>
                <h2>Welcome To The Flock!</h2>
            </div>
        </div>
    </div>
    )
}

export default SocialsPage