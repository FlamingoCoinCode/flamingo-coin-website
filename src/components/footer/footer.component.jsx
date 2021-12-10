import React from 'react'
import './footer.styles.scss'
import UpdateDate from '../update-date/update-date.component'

const Footer = () => (
    <div className='footer'>
        <p className='copyright'>Copyright {UpdateDate()}</p>
        <div className='icon-attribution'>Icons made by 
        <a href="https://www.flaticon.com/authors/riajulislam" target="_blank" rel="noopener noreferrer" title="riajulislam"> riajulislam, </a> 
        <a href="https://www.flaticon.com/authors/md-tanvirul-haque" target="_blank" rel="noopener noreferrer" title="Md Tanvirul Haque">Md Tanvirul Haque, </a>
        <a href="https://www.flaticon.com/authors/pixel-perfect" target="_blank" rel="noopener noreferrer" title="Pixel perfect">Pixel perfect, </a>
        <a href="https://www.flaticon.com/" title="smalllikeart">smalllikeart, </a>
        and, 
        <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" title="Freepik"> Freepik </a>
         from <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" title="Flaticon">www.flaticon.com</a></div>
    </div>
)

export default Footer