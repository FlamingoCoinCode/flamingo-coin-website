import React from 'react'
import './socials-background.scss'

import { useInView } from 'react-intersection-observer';

const SocialsBackground = () => {

    const { ref, inView} = useInView({
        threshold: .1,
        triggerOnce: true,
      });

    return (
    <div >
        <div ref={ref} className={`socials-left-bumper ${inView ?  'animate-socials-left-bumper' : null}`}></div>
        <div className={`socials-top-left-line ${inView ? 'animate-socials-top-left-line' : null}`}></div>
        <div className={`socials-top-right-line ${inView ? 'animate-socials-top-right-line' : null}`}></div> 
        <div className={`socials-bottom-left-line ${inView ? 'animate-socials-bottom-left-line' : null}`}></div>
        <div className={`socials-bottom-right-line ${inView ? 'animate-socials-bottom-right-line' : null}`}></div> 

        <div className="custom-shape-divider-bottom-socials-page">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>

        <div className="custom-shape-divider-bottom-socials-page-1">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
        
        <div className="custom-shape-divider-bottom-socials-page-2">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
    </div>
    )

}

export default SocialsBackground