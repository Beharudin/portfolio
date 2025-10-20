import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { socialData } from "../data/MockData";

function Footer() {
  return (
    <div className="w-full mt-24" id="footer">
      <div className="titleDiv">
        <p className="title">CONTACTS</p>
        <h1 className="titleDesc">Lets Connect</h1>
      </div>
      <motion.footer 
        className="text-white border-t border-rose-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-4 px-5 md:px-24">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-5 px-5 md:mb-0 text-gray-300 hover:text-white hover:cursor-pointer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
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

              <motion.div 
                className="mt-4 ml-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {socialData.map((data, index) => (
                  <motion.a
                    key={data.href}
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 text-rose-400 rounded-full m-2 hover:bg-rose-500 hover:text-white border border-rose-500/30 hover:border-rose-400 transition-all duration-300"
                    href={data.href}
                    aria-label={data.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                  >
                    <FontAwesomeIcon icon={data.icon} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="col-lg-3 col-md-6 mb-4 mb-md-0 text-gray-300 hover:text-white hover:cursor-pointer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h5 className="uppercase mb-4 pb-1 text-white">Contacts</h5>

              <motion.ul 
                className="fa-ul ml-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.li 
                  className="mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="fa-li">
                    <FontAwesomeIcon icon={faLocationDot} className="text-rose-400" />
                  </span>
                  <span className="ms-2">Addis Ababa, Ethiopia</span>
                </motion.li>
                <motion.li 
                  className="mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <span className="fa-li">
                    <FontAwesomeIcon icon={faEnvelope} className="text-rose-400" />
                  </span>
                  <span className="ms-2">mbahar651@gmail.com</span>
                </motion.li>
                <motion.li 
                  className="mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="fa-li">
                    <FontAwesomeIcon icon={faPhone} className="text-rose-400" />
                  </span>
                  <span className="ms-2">+251 912078640</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

export default Footer;
