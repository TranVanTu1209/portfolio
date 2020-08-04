import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="s2">
      <div className="main-container">
        <h3 className="text-center">
          Get In Touch
          </h3>
        <form id="contact-form">
          <div className="form-group">
            <label> Your Name </label>
            <input type="text" placeholder="Your Name..." required />
          </div>
          <div className="form-group">
            <label> Your Email </label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label> Subject </label>
            <input type="text" placeholder="Subject you want me help" required />
          </div>
          <div className="form-group">
            <label>Give me some message</label>
            <textarea placeholder="Message..."></textarea>
          </div>
            <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
