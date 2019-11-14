import React from 'react';
import jay from '../../../assets/img/jay.JPG'

const AboutView = (props) => {
  return (
    <React.Fragment>
      <header className="masthead" style={props.bg}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{props.Title}</h1>
                <span className="subheading subheading__about">{props.subTitle}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-sm-7">
              <div style={{ textAlign: "center" }}>
                <img id="jay" src={jay} alt="me" width="400" height="400" style={{ borderRadius: "60%" }} />
              </div>
            </div>
            <div className="col-sm-5">
              <p style={{ textAlign: "justify", fontFamily: "cursive", paddingTop: "40px" }}>{props.text}</p>
              <p style={{ textAlign: "center", fontFamily: "cursive" }}>By the way, that's a picture of me with my nephew :)</p>
            </div>
          </div>
        </div></div>

    </React.Fragment>
  );
}
export default AboutView;
