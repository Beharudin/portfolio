import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { socialData } from "../data/MockData";

function Footer() {
  return (
    <div className="w-full mt-24" id="footer">
      <div className="titleDiv">
        <p className="title">CONTACTS</p>
        <h1 className="titleDesc">Lets Connect</h1>
      </div>
      <footer className="text-white border-t border-rose-500">
        <div className="bg-blue-ribbon-900 py-4 px-5 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
            <div className="mb-5 px-5 md:mb-0 text-gray-300 hover:text-white hover:cursor-pointer">
              <h5 className="uppercase mb-4 text-white">Beharudin Mohammed</h5>
              <p className="ml-2">
                I'm a highly skilled React.js/Next.js Developer, proficient in
                Front-End and Full-Stack development. My expertise spans across
                the MERN stack, enabling me to craft top-notch websites. I
                specialize in leveraging React.js, react Native, Next.js,
                Node.js, Typescript, Redux, Tailwind CSS, MUI Material, and
                MongoDB, Express.js, PostgreSQL to meet the dynamic needs of
                modern businesses.
              </p>

              <div className="mt-4 ml-2">
                {socialData.map((data) => (
                  <a
                    key={data.href}
                    className="inline-flex items-center justify-center w-10 h-10 bg-yellow-500 text-white rounded-full m-2 hover:bg-yellow-600 hover:text-rose-600 transition"
                    href={data.href}
                    aria-label={data.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={data.icon} />
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-gray-300 hover:text-white hover:cursor-pointer">
              <h5 className="uppercase mb-4 pb-1 text-white">Contacts</h5>

              <ul className="fa-ul ml-4">
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
