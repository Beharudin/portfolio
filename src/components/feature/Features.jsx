import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { features } from "../data/MockData";

function Features() {
  return (
    <div className="w-full mt-24 px-5 md:px-24" id="features">
      <div className="titleDiv">
        <p className="title">FEATURES</p>
        <h1 className="titleDesc">What I Do</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col h-[300px] max-w-[400px] pt-16 shadow-md bg-[#1c1e22] text-white transition-all duration-300 hover:shadow-lg hover:bg-[#0c0e10] hover:pt-2 sm:min-w-[350px]">
            <div className="px-10 py-2 max-h-[calc(100%-50px)] mb-5 overflow-hidden hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 576 512"
              >
                <path d={feature.icon} fill="#e81a6e" />
              </svg>
              <h3 className="my-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
              <FontAwesomeIcon icon={faArrowRight} color="#e81a6e" size="lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
