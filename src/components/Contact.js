import React from 'react'
import contact_details from '../data/contact.json'
import '../styles/contact.scss'

const ContactDetails = () => (
  <div className="contact_details">
    <p>{contact_details.reach_out}</p>
    <p>{contact_details.address}</p>
    <p>{contact_details.telephone}</p>
    <p>{contact_details.email}&nbsp;<a href='mailto:jmhgardens@yahoo.co.uk'>jmhgardens@yahoo.co.uk</a></p>
  </div>
)

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      telephone: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.checkIfFieldsAreEmpty = this.checkIfFieldsAreEmpty.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name
    this.setState({[name]: value})
  }
  checkIfFieldsAreEmpty() {
    let state = this.state;
    return state.name !== '' && state.email !== '' && state.telephone !== '' && state.message !== ''
  }
  onSubmit(e) {
    if (this.checkIfFieldsAreEmpty()) {
      e.preventDefault();
      const templateId = 'jmhgardens';
      this.sendEmail(
        templateId,
        {
          message: this.state.message,
          name: this.state.name,
          email: this.state.email,
          telephone: this.state.telephone
        }
      )
    }
  }
  sendEmail (templateId, variables) {
  	window.emailjs.send(
    	'gmail',
      templateId,
    	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	}).then(() =>
      this.setState({
        name: '',
        email: '',
        telephone: '',
        message: ''
      })
    )
  	.catch(err => console.error("Balls, email didn't send!! Error:", err))
  }
  render() {
    return (
      <div className="email_form">
        <form>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="telephone"
            value={this.state.telephone}
            onChange={this.handleChange}
            placeholder="Contact Number"
            required
          />
          <textarea
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Message (please include location)"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="submit"
            onClick={this.onSubmit}
          />
        </form>
      </div>
    )
  }
}

const Contact = () => (
  <div className="contact_wrapper">
    <ContactDetails/>
    <EmailForm/>
  </div>
)

export default Contact;
