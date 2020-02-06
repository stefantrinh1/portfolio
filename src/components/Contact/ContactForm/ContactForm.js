import React from "react";
import Styles from "./ContactForm.module.scss";

const ContactForm = () => (
  <section className={Styles.contactform}>
    <h1 className={Styles.title}>Contact Us</h1>
    <h3>Stefan Trinh</h3>
    <br />
    <p className={Styles.description}>
      If you have any questions, requests or would like to know more? please contact me on
      the form below or email me directly at : &nbsp; 
      <b>
        <a className={Styles.emailaddress} href="mailto:stefantrinh1.work@gmail.com">
           stefantrinh1.work@gmail.com 
        </a>
      </b>
    </p>

    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label>
          <input type="text" name="name" placeholder="Name" />
        </label>
      </div>
      <div>
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>
      </div>
      <div>
        {/* <div style={{ width: '49%', marginRight: '1%' }}> */}
        <label>
          <input
            type="text"
            name="contact number"
            placeholder="Contact number"
          />
        </label>
      </div>
      {/* <div style={{ width: '49%', marginLeft: '1%' }}>
        <label>
          <input type="file" name="File" style={{ fontSize: '0.77em' }} placeholder="Upload Membership Form" />
        </label>
      </div> */}
      <div>
        <label>
          <textarea
            name="message"
            placeholder="Type your message here..."
            rows="5"
          ></textarea>
        </label>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
      {/* <div data-netlify-recaptcha="true"></div> */}
    </form>
  </section>
);

export default ContactForm;
