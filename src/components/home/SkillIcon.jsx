import React from "react";

const SkillIcon = ({ icon: Icon, hoverColor = "hover:text-rose-600" }) => (
  <div
    className={`relative flex items-center justify-center shadow-md w-14 h-14 bg-gray-800 text-white text-center transition-all duration-300 hover:shadow-lg hover:-mt-1 hover:bg-gray-900 ${hoverColor}`}
  >
    <Icon className="w-5 h-5" />
  </div>
);

export default SkillIcon;
