import React from 'react'

import facebookIcon from 'Images/facebook.png'
import githubIcon from 'Images/github.png'
import linkedinIcon from 'Images/linkedin.png'

import footerStyles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={footerStyles.container}>
			<div className={footerStyles.flex}>
				<a href="https://www.linkedin.com/in/harry-parkinson-418515126/"><span><img src={linkedinIcon} alt="Link to my linked in"/></span></a>
				<a href="https://github.com/hazza203"><span><img src={githubIcon} alt="Link to my github"/></span></a>
				<a href="https://www.facebook.com/harry.parkinson.9"><span><img src={facebookIcon} alt="Link to my facebook"/></span></a>
			</div>
			<h3>HARRY PARKINSON ©2019</h3>
			<address id="email"><a href="mailto:harry.m.parkinson@gmail.com">harry.m.parkinson@gmail.com</a></address>
		</footer>
		
	)
}

export default Footer