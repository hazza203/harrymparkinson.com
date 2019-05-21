import React from 'react'
import Header from 'Components/Header/Header.js'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

import contactStyles from './Contact.module.scss'

class Contact extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			message: '',
			messageStyle: {
				marginBottom: '10px'
			}
		}
		this.formSubmit = this.formSubmit.bind(this)
	}
	
	formSubmit(event) {
		event.preventDefault();
		if(event.target[0]['value'].length === 0 || event.target[2]['value'].length === 0 ){
			this.setState({message: "Missing fields"})
    	this.setState({messageStyle: {
    		visibility: "visible",
    		color: "#FF0000",
    		paddingBottom: '20px',
 				textShadow: "1px 1px 10px #ff00ff"
    	}})
    	return
		} else if(!event.target[1]['value'].includes('@') || !event.target[1]['value'].includes('.', event.target[1]['value'].indexOf('@'))){
			this.setState({message: "Invalid e-mail"})
    	this.setState({messageStyle: {
    		visibility: "visible",
    		color: "#FF0000",
    		paddingBottom: '20px',
    		textShadow: "1px 1px 10px #ff00ff"
    	}})
    	return
		} else {
			fetch("https://harry-parkinson.prod.with-datafire.io/contact",
	    {
	        
	        headers:{
				    "content-type":"application/json"
				  },
	        method: "post",
	        body: JSON.stringify({name: event.target[0]['value'], emailAddress: event.target[1]['value'], message: event.target[2]['value']})
	    })
	    .catch(() => {
	    	this.setState({message: "Failed to send"})
	    	this.setState({messageStyle: {
	    		visibility: "visible",
	    		color: "#FF0000",
	    		paddingBottom: '20px',
	    		textShadow: "1px 1px 10px #ff00ff"
	    	}})
	    	return
	    })
	    event.target[0]['value'] = ''
	    event.target[1]['value'] = ''
	    event.target[2]['value'] = ''
	    this.setState({message: "Thank you for the message! I will get back to you promptly."})
	    	this.setState({messageStyle: {
	    		visibility: "visible",
	    		color: "#00ff00",
	    		textShadow: "1px 1px 10px #ff00ff",
	    		paddingBottom: '20px',
	    	}})
		  
		}
		
	}


	render(){
		return (
			<div id={this.props.id} className={contactStyles.container}>
				<Header name={'CONTACT'} />
				<Fade right delay={500}>
					<h3>Want to get in touch or work together?</h3>
				</Fade>
				<h3 className={contactStyles.message} style={this.state.messageStyle}>{this.state.message}</h3>
				<Zoom delay={1000} fraction={0.6}>
					<form method='post' action="https://harry-parkinson.prod.with-datafire.io/contact" onSubmit={ this.formSubmit } >
						<div className={contactStyles.form}>
							<input name="name" id="nameInput" type="text" placeholder="Your name"/>
							<input name="emailAddress" id="emailInput" type="text" placeholder="Your e-mail"/>
							<textarea name="message" id="messageInput" cols="30" rows="10" placeholder="Your message"></textarea>
							<div className={contactStyles.submitWrapper}>
								<input className={contactStyles.submit} type="submit" value="SUBMIT"/>
							</div>
						</div>
					</form>
				</Zoom>
				
			</div>
			
		)
	}
}

export default Contact