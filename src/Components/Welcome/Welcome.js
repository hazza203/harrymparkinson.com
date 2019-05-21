import React from 'react'
import { Link } from "react-scroll";
import welcomeStyles from './Welcome.module.scss'
import RightArrow from 'Images/right-arrow.png'

class Welcome extends React.Component {

	constructor(props) {
		super(props)
		this.handleResize = this.handleResize.bind(this)
		// We execute the same script as before
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount() {
   	window.removeEventListener('resize', this.handleResize)
	}

	handleResize(){
		// We execute the same script as before
		  let vh = window.innerHeight * 0.01;
		  document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	render() {
		return (
			<div id={this.props.id} className={welcomeStyles.container}>
				<div className={welcomeStyles.wrapper}>
					<h1 className={`${welcomeStyles.csstyping} ${welcomeStyles.csstyping1}`}> Hello, </h1> 
					<h1 className={`${welcomeStyles.csstyping} ${welcomeStyles.csstyping2}`}> I'm Harry Parkinson.</h1>
					<h1 className={`${welcomeStyles.csstyping} ${welcomeStyles.csstyping3}`}> A software / web developer. </h1>	
					<div className={welcomeStyles.buttonWrapper}>
					<div className={welcomeStyles.button}>
					 <Link className={welcomeStyles.link} to="aboutSection" spy={true} smooth={true}offset={0} duration= {500}>
						Find out more
						<img src={RightArrow} alt="Direction arrow"/>
					 </Link>
						
					</div>

				</div>
				</div>
				
				
			


	        
			</div>
		)
	}
	
}

export default Welcome