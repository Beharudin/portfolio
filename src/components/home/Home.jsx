import React from "react";
import Typewriter from "typewriter-effect";
import { userImg } from "../../assets";
import { skillData, socialData, typewriterTitles } from "../data/MockData";
import SkillIcon from "./SkillIcon";
import SocialLink from "./SocialLink";

function Home() {
  return (
    <div className="w-full px-5 md:px-24" id="home">
      <div className="grid grid-cols-3 mb-5">
        <div className="col-span-3 md:col-span-2 py-5 sm:p-2">
          <h5 className="mt-28 text-boston-blue-500">Akkam Nagayaa 👀🙋‍♂️</h5>
          <div className="text-blue-ribbon-900">
            <h1 className="text-5xl font-bold py-2">
              Hi, I'm <span className="text-rose-600">Beharudin Mohammed</span>
            </h1>
            <h3 className="text-4xl font-bold leading-10">
              <Typewriter
                options={{
                  strings: typewriterTitles,
                  autoStart: true,
                  loop: true,
                  delay: 10,
                  deleteSpeed: 10,
                }}
              />
            </h3>
            <p className="text-santas-gray-950 font-medium leading-7 pt-5">
              I'm a highly skilled React.js/Next.js Developer, proficient in
              Front-End and Full-Stack development. My expertise spans across
              the MERN stack, enabling me to craft top-notch websites. I
              specialize in leveraging React.js, React Native, Next.js, Node.js,
              Typescript, Redux, Tailwind CSS, ShadCn, MUI Material, MySQL,
              MongoDB, Express.js, PostgreSQL, Supabase, Prisma, and Drizzle to
              meet the dynamic needs of modern businesses.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mt-3 sm:mt-5 pt-3 sm:pt-5">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <h6 className="text-sm font-semibold">FIND ME ON</h6>
              <div className="flex space-x-3 mt-5">
                {socialData.map((data) => (
                  <SocialLink
                    key={data.href}
                    href={data.href}
                    icon={data.icon}
                  />
                ))}
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <h6 className="text-sm font-semibold">BEST WEB STACK</h6>
              <div className="grid grid-cols-6 gap-y-3 mt-5">
                {skillData.map((icon) => (
                  <SkillIcon key={icon} icon={icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 my-5 mt-28 lg:mx-2">
          <img
            className="w-full h-[600px] rounded-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            src={userImg}
            alt="Beharudin Mohammed"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
