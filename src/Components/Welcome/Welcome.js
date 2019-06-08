import React from 'react'
import { Link } from "react-scroll";
import welcomeStyles from './Welcome.module.scss'
import RightArrow from 'Images/right-arrow.png'
import pdf from './Harry_Resume.pdf'

class Welcome extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			vh: window.innerHeight, 
			vw: window.innerWidth
		}
		this.handleResize = this.handleResize.bind(this)
		// We execute the same script as before
	  document.documentElement.style.setProperty('--vh', `${this.state.vh * 0.01}px`);
	  document.documentElement.style.setProperty('--vw', `${this.state.vw}px`);
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount() {
   	window.removeEventListener('resize', this.handleResize)
	}

	handleResize(){
		// We execute the same script as before
			if(this.state.vw !== window.innerWidth){
				console.log(window.innerWidth)
				this.setState({vh: window.innerHeight})
				this.setState({vw: window.innerWidth})
				document.documentElement.style.setProperty('--vh', `${this.state.vh * 0.01}px`);
				document.documentElement.style.setProperty('--vw', `${this.state.vw}px`);
			}
	}

	render() {
		return (
			<header id={this.props.id} className={welcomeStyles.container}>
				<div className={welcomeStyles.wrapper}>
					<h1 className={`${welcomeStyles.csstyping} ${welcomeStyles.csstyping1}`}>HELLO. </h1> 
					<h1 className={`${welcomeStyles.csstyping} ${welcomeStyles.csstyping2}`}> I'M HARRY PARKINSON.</h1>
					<h1 className={`${welcomeStyles.csstyping} ${welcomeStyles.csstyping3}`}> SOFTWARE / WEB DEVELOPER. </h1>	
					<div className={welcomeStyles.buttonWrapper}>
						<div className={welcomeStyles.button}>
						 <Link className={welcomeStyles.link} to="portfolioSection" spy={true} smooth={true} offset={0} duration= {500}>
							View my projects
							<img src={RightArrow} alt="Direction arrow"/>
						 </Link>
						</div>
					</div>
					<div className={welcomeStyles.buttonWrapper}>
						<div className={welcomeStyles.button}>
						 <a className={welcomeStyles.link} href={pdf} target="_blank" rel="noopener noreferrer">
							Download my resume
							<img src={RightArrow} alt="Direction arrow"/>
						 </a>
						</div>
					</div>
				</div>  
			</header>
		)
	}
	
}

export default Welcome