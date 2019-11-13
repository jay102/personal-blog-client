import React from 'react';

const ContactView = (props) => {
  const { name, email, phone, message } = props;
  return (
    <React.Fragment>
      <header className="masthead" style={props.mystyle}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{props.header}</h1>
                <span className="subheading">{props.subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <p>{props.text}</p>
            <form id="contactForm" noValidate onSubmit={props.handleSubmit}>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Name" name="name" onChange={props.handleChange} id="name" value={name} required data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Email Address</label>
                  <input type="email" className="form-control" placeholder="Email Address" name="email" onChange={props.handleChange} value={email} id="email" required data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Phone Number" name="phone" onChange={props.handleChange} id="phone" value={phone} required data-validation-required-message="Please enter your phone number." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Message</label>
                  <textarea rows="5" className="form-control" placeholder="Message" name="message" onChange={props.handleChange} id="message" value={message} required data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactView;