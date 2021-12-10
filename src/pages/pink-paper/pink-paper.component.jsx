import React from 'react'
import './pink-paper.styles.scss'
import PinkPaperBackgrounds from './pink-paper-backgrounds/pink-paper-backgrounds'
import PinkDocument from '../../logos/pink-document.png'
import { useInView } from 'react-intersection-observer'
const PinkPaperPage = () => {

    const { ref, inView} = useInView({
    threshold: .7,
    triggerOnce: true,
  });

    return  (
    <div className='pink-paper' id='pink-paper'>
        <PinkPaperBackgrounds/>
        <div ref={ref} className='pink-paper-content'>
            <div className='pink-paper-title-container'>
                <h1 className={`pink-paper-title ${inView ? 'animate-pink-paper' : null}`}>Pink Paper</h1>
            </div>
            <div className={`pink-paper-blurb ${inView ? 'animate-pink-paper' : null}`}>
                <a className='pink-paper-link' href='https://storage.googleapis.com/production-domaincom-v1-0-3/933/1139933/4DXi0xv0/145ea7dab3b6454fa7eae8567fd33684?fileName=Flamingo%20Coin%20-%20Pink%20Paper%20v1.pdf'>
                    <img className='pink-paper-blurb-image' src={PinkDocument} alt='document'/>
                </a>
                <h3 className='pink-paper-blurb-text'>Read more about Flamingo Coin's philosophy, tokenomics and road map!</h3>
            </div>
        </div>
    </div>
)
}


export default PinkPaperPage