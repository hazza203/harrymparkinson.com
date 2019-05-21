import React from 'react'
import Header from 'Components/Header/Header.js'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

import contactStyles from './Contact.module.scss'

class Contact extends React.Component {

	constructor(props){
		super(props)
		this.formSubmit = this.formSubmit.bind(this)
	}
	
	formSubmit(event) {
		fetch("https://harry-parkinson.prod.with-datafire.io/contact",
    {
        
        headers:{
			    "content-type":"application/json"
			  },
        method: "post",
        body: JSON.stringify({name: event.target[0]['value'], emailAddress: event.target[1]['value'], message: event.target[2]['value']})
    });
	  event.preventDefault();
	}


	render(){
		return (
			<div id={this.props.id} className={contactStyles.container}>
				<Header name={'CONTACT'} />
				<Fade right delay={500}>
					<h3>Want to get in touch or work together?</h3>
				</Fade>
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