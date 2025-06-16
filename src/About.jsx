import "./App.css";

const About = () => {
  return (
    <>
      <div className="relative flex items-center justify-start py-12 px-4 sm:px-8">
        <div className="relative inline-block">
          <h2 className="text-7xl sm:text-8xl font-extrabold text-gray-200">
            About me
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Know me More
          </p>
        </div>
      </div>
      <p className="sm:text-xl md:text-1xl sm:mt-0 px-4 sm:px-8 text-start">
        Cybersecurity specialist focused on threat-driven defense and continuous
        security improvement. I take a hands on, ground up approach to learning
        and solving challenges. My skill set spans Incident Response, detection
        engineering, compliance, cloud security, automation, DevSecOps, and
        technical writing. On a mission to help organizations not just
        withstand, but outpace today’s complex and evolving cyber
        threat landscape.
      </p>
      <div className="flex justify-start mt-8 px-4 sm:px-8">
        <a
          href="#contact"
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Request For CV
        </a>
      </div>
      <div className="border-b border-gray-300 w-11/12 mx-auto pt-18"></div>
    </>
  );
};

export default About;
