import React from 'react'
import Header from 'Components/Header/Header.js'
import Project from './Project/Project.js'
import Fade from 'react-reveal/Fade';

import portfolioStyles from './Portfolio.module.scss'

const projects = require('./Projects.js')

class Portfolio extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			fixed: {
				paddingTop: '162px'
			},
			ALL: true,
			JAVA: false,
			PYTHON: false,
			'REACT. JS + NODE. JS': false,
			JAVASCRIPT: false,
			active: 'ALL',
			transition: false

		}
		this.onClick = this.onClick.bind(this)
	}

	onClick(event){
		const keys = Object.keys(this.state)
		keys.forEach((key) => {
			if(this.state[key] === true){
				this.setState({[key]: false})
			}
		})
		this.setState({[event.target.id]: true})
		this.setState({transition: true})
		this.setState({active: event.target.id})
		setTimeout(() => {
			this.setState({transition: false})
		},400)
	}

	render() {
		return (
			<main id={this.props.id} className={portfolioStyles.container} style={this.props.fixed ? this.state.fixed : null}>
				<Header name='PORTFOLIO'/>
				<Fade delay={500} fraction={1}>
					<section id="Filter" className={portfolioStyles.filterSection} delay={1000}>
						<div id="ALL" className={`${portfolioStyles.selector} ${this.state.ALL ? portfolioStyles.selectorActive : null}`} onClick={this.onClick}>ALL</div>
						<div id="JAVA" className={`${portfolioStyles.selector} ${this.state.JAVA ? portfolioStyles.selectorActive : null}`}  onClick={this.onClick}>JAVA</div>
						<div id="PYTHON" className={`${portfolioStyles.selector} ${this.state.PYTHON ? portfolioStyles.selectorActive : null}`}  onClick={this.onClick}>PYTHON</div>
						<div id="REACT. JS + NODE. JS" className={`${portfolioStyles.selector} ${this.state['REACT. JS + NODE. JS'] ? portfolioStyles.selectorActive : null}`}  onClick={this.onClick}>REACT. JS + NODE. JS</div>
						<div id="JAVASCRIPT" className={`${portfolioStyles.selector} ${this.state.JAVASCRIPT ? portfolioStyles.selectorActive : null}`}  onClick={this.onClick}>JAVASCRIPT</div>
					</section>
				</Fade>
				<Fade right fraction={0.15}>
					<section id="Projects" className={portfolioStyles.projects}>
						{
							
							Object.keys(projects.projects).map((project) => 
								<Project project={projects.projects[project]} fixed={this.props.fixed} show={this.state.active} transition={this.state.transition}/>								
							)

						}
					</section>
				</Fade>
				
			</main>	
			
		)
	}
}

export default Portfolio