import React from 'react'
import '../components/css/ContactUs.css'
import Accordion from '../components/Accordion.jsx'
import contactus from '../images/main_images/contactus.png'


const ContactUs = () => {

  const items = [
    {
      title: 'Are the PDFs really free?',
      content: 'Yes, all the PDFs available on our website are completely free to download. We believe in providing free access to knowledge and literature for everyone.'
    },
    {
      title: 'Do I need to create an account to download the PDFs?',
      content: 'yes, you do need to create an account to download the PDFs. Simply create account ,browse our collection, select the book you want, and click the download link to get your free copy.'
    },
    {
      title: 'What formats are the books available in?',
      content: 'Our books are primarily available in PDF format for easy reading and compatibility with most devices. However, we are working on adding more formats like EPUB and MOBI in the future.'
    },
    {
      title: 'Are the PDFs legal to download?',
      content: 'Yes, all the PDFs on our website are legally distributed. We either own the rights to the books, or they are available under public domain or open-access licenses.'
    },
    {
      title: 'Can I share the PDFs with others?',
      content: 'Yes, you are welcome to share the PDFs with others. Our goal is to spread knowledge and make it accessible to as many people as possible. However, please do not sell or alter the files in any way.'
    }
  ];
  return (
    <div className='contactus-main-box'>
      <div className='contactus-inner-box'>
        <div className='contactus-heading'>Here to <span>help...</span></div>
        <div className='contactus-form-div'>
          <div className='contactus-form'>
            <h2>Contact Us</h2>
            <form action="">
              <label htmlFor="">Full Name*</label>
              <input type="text" /><br />
              <label htmlFor="">Email address*</label>
              <input type="mail" /><br />
              <label htmlFor="">Contact Number*</label>
              <input type="text" /><br />
              <label htmlFor="">Message*</label>
              <input id='message' type="text" /><br />
              <button>Send Message</button>
            </form>
          </div>
          <div className='contactus-info'>
            <img src={contactus} alt="" />
          </div>
        </div>
        <div className='contactus-faqs'>
          <h2>Frequently asked Questions</h2>
          <Accordion items={items} />
        </div>
        <div className='contactus-privacy-div'>
          <div className="cookies-policy">
            <h1>Cookies Policy</h1>
            <p><strong>Last updated: [{Date()}]</strong></p>
            <p>
              Our website, Study Buzz ("us", "we", or "our"), uses cookies to enhance your browsing experience and improve our services. This Cookies Policy explains what cookies are, how we use them, and your choices regarding cookies.
            </p>
            <h2>What are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer or mobile device) when you visit a website. They help the website recognize your device and remember your preferences over time.
            </p>
            <h2>How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Authentication:</strong> To recognize when you log in to our website and provide you with access to the content and services that require authentication.</li>
              <li><strong>Preferences:</strong> To remember your preferences and settings.</li>
              <li><strong>Analytics:</strong> To analyze how our website is used and improve its performance.</li>
              <li><strong>Security:</strong> To ensure the security of our website and services.</li>
            </ul>
            <h2>Types of Cookies We Use</h2>
            <p>We use the following types of cookies:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as logging in or filling out forms.</li>
              <li><strong>Performance Cookies:</strong> These cookies collect information about how visitors use a website, for instance, which pages visitors go to most often, and if they get error messages from web pages. These cookies do not collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how a website works.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts, and other parts of web pages that you can customize.</li>
              <li><strong>Targeting Cookies:</strong> These cookies are used to deliver ads more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with the website operator’s permission. They remember that you have visited a website, and this information is shared with other organizations such as advertisers. Quite often, targeting or advertising cookies will be linked to site functionality provided by the other organization.</li>
            </ul>
            <h2>Your Choices Regarding Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
            </p>
            <p>
              For more information about cookies and how to manage them, you can visit <a href="https://en.wikipedia.org/wiki/HTTP_cookie">here</a>.
            </p>
          </div>
        </div>
        <div className='contactus-policy-div'>
          <div className="terms-of-use">
            <h1>Terms of Use</h1>
            <p><strong>Last updated: {Date()}</strong></p>
            <p>Welcome to Study Buzz. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Study Buzz's relationship with you in relation to this website.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree to these terms, you should not use or access this website.</p>

            <h2>2. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the website after any changes are posted constitutes your acceptance of the new terms.</p>

            <h2>3. Use of the Website</h2>
            <p>
              You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the website.
            </p>

            <h2>4. User Accounts</h2>
            <p>
              In order to access certain features of the website, you may be required to create an account. You must provide accurate and complete information and keep your account information updated. You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of Study Buzz or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Study Buzz and protected by international copyright laws.
            </p>

            <h2>6. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and access to the website at our sole discretion, without notice and for any reason, including, but not limited to, breach of these terms.
            </p>

            <h2>7. Disclaimer of Warranties and Limitation of Liability</h2>
            <p>
              This website is provided on an "as is" and "as available" basis. Study Buzz makes no representations or warranties of any kind, express or implied, as to the operation of this site or the information, content, materials, or products included on this site. You expressly agree that your use of this site is at your sole risk.
            </p>
            <p>
              To the full extent permissible by applicable law, Study Buzz disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. Study Buzz does not warrant that this site, its servers, or e-mail sent from Study Buzz are free of viruses or other harmful components. Study Buzz will not be liable for any damages of any kind arising from the use of this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of [India], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2>9. Contact Information</h2>
            <p>If you have any questions about these terms, please contact us at [1800-000-000].</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs