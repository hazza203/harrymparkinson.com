import React from 'react'
import Header from '../Header/Header.js'
import pdf from './Harry_Resume.pdf'
import resumePreview from './resume.png'
import resumeStyles from './Resume.module.scss'
import Zoom from 'react-reveal/Zoom';

const Resume = (props) => {
	return (
		<main id={props.id} className={resumeStyles.container} >
			<Header name={'RESUME'}/>
				<a className={resumeStyles.link} href={pdf} target="_blank" rel="noopener noreferrer">
					<Zoom left>
						<img className={resumeStyles.resumePreview} src={resumePreview} alt="Preview of my resume"/>
					</Zoom>	
				</a>	
		</main>
	)
}

export default Resume