import "./App.css";

const Projects = () => {
  return (
    <>
      <div className="relative flex items-center justify-start py-12 px-4 sm:px-8">
        <div className="relative inline-block">
          <h2 className="text-7xl sm:text-8xl font-extrabold text-gray-200 sm:w-full">
            Experience
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            PROJECTS
          </p>
        </div>
      </div>
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative z-20 overflow-hidden rounded-xl border border-pink-300 bg-gray-200 p-6">
          <div className="absolute inset-0 z-[-1] rounded-xl bg-gray-200">
            <div className="trail"></div>
          </div>
          <h1 className="text-2xl font-semibold mb-2">
            Security Delivery Specialist
          </h1>
          <h2 className="text-md font-semibold mb-4">Accenture</h2>
        </div>

        {/* Card 2 */}
        <div className="relative z-20 overflow-hidden rounded-xl border border-pink-300 bg-gray-200 p-6">
          <div className="absolute inset-0 z-[-1] rounded-xl bg-gray-200">
            <div className="trail"></div>
          </div>
          <h1 className="text-2xl font-semibold mb-2">
            Threat detection Engineer
          </h1>
          <h2 className="text-lg font-semibold mb-4">Wazuh Inc.</h2>
        </div>

        {/* Card 3 */}
        <div className="relative z-20 overflow-hidden rounded-xl border border-pink-300 bg-gray-200 p-6">
          <div className="absolute inset-0 z-[-1] rounded-xl bg-gray-200">
            <div className="trail"></div>
          </div>
          <h1 className="text-2xl font-semibold mb-2">
            Senior Cybersecurity Analyst II
          </h1>
          <h2 className="text-lg font-semibold mb-4">CyberSOC Africa</h2>
        </div>

        {/* Card 4 */}
        <div className="relative z-20 overflow-hidden rounded-xl border border-pink-300 bg-gray-200 p-6">
          <div className="absolute inset-0 z-[-1] rounded-xl bg-gray-200">
            <div className="trail"></div>
          </div>
          <h1 className="text-2xl font-semibold mb-2">
            Systems and Network Support Engineer
          </h1>
          <h2 className="text-lg font-semibold mb-4">AfriHUB ICT Institute</h2>
        </div>

        {/* Card 5 */}
        <div className="relative z-20 overflow-hidden rounded-xl border border-pink-300 bg-gray-200 p-6">
          <div className="absolute inset-0 z-[-1] rounded-xl bg-gray-200">
            <div className="trail"></div>
          </div>
          <h1 className="text-2xl font-semibold mb-2">
            Network engineer Broadband services
          </h1>
          <h2 className="text-lg font-semibold mb-4">
            Nigerian Communications Satellite Limited (NIGCOMSAT)
          </h2>
        </div>
      </main>
    </>
  );
};

export default Projects;
