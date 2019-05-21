import React from 'react'
import headshot from 'Images/profilepic-circle.png'
import bioStyles from './Bio.module.scss'

const Bio = () => {

	return (
		<div className={bioStyles.container}>
			<div className={bioStyles.imgWrapper}>
				<img src={headshot} alt="My headshot"/>
			</div>
			
			<h2>A little bit about me.</h2>
			<p>I'm a Software Developer from Melbourne, AUS. Currently living in Dublin, IE. I love to create software, from complex backend servers in Java and Node. js to intuitive, dynamic Front-End sites with React.js, stacked full of effects and animations.</p>
		</div>
	)
}

export default Bio