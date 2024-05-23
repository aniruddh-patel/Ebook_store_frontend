import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contactus-main-box'>
      <div className='contactus-inner-box'>
        <div className='contactus-heading'>Here to <span>help</span></div>
        <div className='contactus-form-div'>
          <div className='contactus-form'></div>
          <div className='contactus-info'></div>
        </div>
        <div className='contactus-faqs'>Frequently asked Questions</div>
        <div className='contactus-privacy-div'>cookies and privacy</div>
        <div className='contactus-policy-div'>term of use</div>
      </div>
    </div>
  )
}

export default ContactUs