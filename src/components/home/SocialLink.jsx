import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ href, icon, hoverColor = "hover:text-rose-600" }) => (
  <a
    href={href}
    target="_blank" rel="noopener noreferrer"
    className={`relative flex items-center justify-center shadow-md w-14 h-14 bg-gray-800 text-white text-center transition-all duration-300 hover:shadow-lg hover:-mt-1 hover:bg-gray-900 ${hoverColor}`}
  >
    <div className="p-2 rounded">
      <FontAwesomeIcon icon={icon} />
    </div>
  </a>
);

export default SocialLink;
