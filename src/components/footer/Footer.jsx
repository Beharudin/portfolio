import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBook,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <div className="fluid-container" id="footer">
      <div className="titleDiv">
        <p className="title">CONTACTS</p>
        <h1 className="titleDesc">Lets Connect</h1>
      </div>
      <footer className="text-white">
        <div className="card p-4">
          <div className="row mt-4">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <h5 className="text-uppercase mb-4">Beharudin Mohammed</h5>
              <p className="ml-2 desc">
                Consequat fugiat pariatur excepteur proident anim irure. Amet ex
                nisi eu Lorem sint ut qui et mollit culpa. Laborum adipisicing
                cupidatat voluptate anim duis.
              </p>

              <div className="mt-4 ml-2">
                <a
                  type="button"
                  className="btn btn-floating btn-warning rounded-circle m-2"
                  href="https://www.facebook.com/beharudin.mohammed?mibextid=ZbWKwL"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a
                  type="button"
                  className="btn btn-floating btn-warning rounded-circle m-2"
                  href="https://instagram.com/baharudinmohammed?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  type="button"
                  className="btn btn-floating btn-warning rounded-circle m-2"
                  href="https://twitter.com/BeharudinM?t=QYXofqRv1a1W1A4xqC2kvQ&s=09"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Contacts</h5>

              <ul className="fa-ul ml-4 contacts">
                <li className="mb-3">
                  <span className="fa-li">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <span className="ms-2">Addis Ababa, Ethiopia</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span className="ms-2">mbahar651@gmail.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span className="ms-2">+251 912078640</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
