import React from 'react'
import {CSection, Cbutton} from './ContactElements'
import {email}  from '../../../config'

const ContactSection = () => {
  return (
    <CSection id="contact">
      <h2 className="overline numbered-heading">
      What's Next?
      </h2>
      <h2 className="title">
      Get In Touch
      </h2>
      <p>
      I am currently looking for new opportunites. Especially if they are adjacent to the fintech / crypto space. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <Cbutton href={`mailto:${email}`} className="email-link">
        Say Hello
      </Cbutton>
    </CSection>
    
  )
}

export default ContactSection
