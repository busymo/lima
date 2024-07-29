import React, { useState } from "react";
import emailjs from "emailjs-com";

const agb = "agb_lima.pdf"
const impressum  = "impressum.pdf"
const initialState = {
  "name": "",
  "email": "",
  "message": ""

}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const openAgbPdf = () => {
    window.open(agb, '_blank'); // Open the AGB PDF in a new tab or window
  };

  const openImpressumPdf = () => {
    window.open(impressum, '_blank'); // Open the AGB PDF in a new tab or window
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailParams = {
      name: name,
      message: message,
      email: email,
    };

    emailjs.init("a2-6xj4pwpkzAQV1E");
    
    // Send email
    emailjs
    .send(
      "service_aqy6ty9",
      "template_kxt0ybq",
      emailParams
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        clearState();
      },
      (error) => {
        console.error("Email sending error:", error.text);
      }  
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Kontakt aufnehmen</h2>
                <p>
                Bitte füllen Sie das untenstehende Formular aus, Kontakt mit uns aufzunehmen. Wir werden uns so schnell wie möglich bei Ihnen melden.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Namen"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Kontaktinfo</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adresse
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefon
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">

        <div className="container text-center">
          <p>
          <p>
            <button onClick={openAgbPdf}>AGB</button>
            <button onClick={openImpressumPdf}>IMPRESSUM</button>
          </p>
          </p>
          <p>
            Copywright &copy;{new Date().getFullYear()} busymo
          </p>
        </div>
      </div>
      {/* ... */}
    </div>
  );
};
