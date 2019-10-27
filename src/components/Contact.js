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

const EmailForm = () => (
  <div className="email_form">
    <form>
      <input type="text" name="name" Placeholder="Full Name" required/>
      <input type="text" name="email" placeholder="Email Address" required/>
      <input type="text" name="telephone" placeholder="Contact Number" required/>
      <textarea type="text" name="details" placeholder="Message (please include location)" required/>
      <input type="submit" value="Submit" className="submit"/>
    </form>
  </div>
)

const Contact = () => (
  <div className="contact_wrapper">
    <ContactDetails/>
    <EmailForm/>
  </div>
)

export default Contact;
