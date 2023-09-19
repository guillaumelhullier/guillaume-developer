import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header">
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Lyon</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0771943197">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("Téléphone copié!");
                    }}
                  >
                    0771943197
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="lhullierguillaume@gmail.com">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("E-mail copié!");
                    }}
                  >
                    lhullierguillaume@gmail.com
                  </span>
                </CopyToClipboard>
              </li>
            </ul>
          </div>
          <div className="socialNetwork">
            <ul>
              <li>
                <h4>LinkedIn</h4>
                <i className="fab fa-linkedin"></i>
              </li>
              <li>
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </li>
              <li>
                <h4>Twitter</h4>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <h4>CodePen</h4>
                <i className="fab fa-codepen"></i>
              </li>

              {/* <a
                href="https:www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>LinkedIn</h4>
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https:www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https:www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Twitter</h4>
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https:WwW.codepen.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>CodePen</h4>
                <i className="fab fa-codepen"></i>
                  </a>*/}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
