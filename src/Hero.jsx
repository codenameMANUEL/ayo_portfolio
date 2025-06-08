// import "./App.css";
// import Navbar from "./NavBar";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen bg-black text-white overflow-hidden">
//       <div className="absolute top-0 left-0 w-full z-20">
//         <Navbar />
//       </div>
//       <div className="absolute inset-0 z-0 pt-[80px] sm:pt-[90px] md:pt-[100px]">
//         <img
//           src="https://images.pexels.com/photos/30770285/pexels-photo-30770285/free-photo-of-silhouette-portrait-of-a-man-in-abuja.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1600&w=1600"
//           alt="Profile"
//           className="w-full h-full object-cover object-center scale-125 opacity-40"
//         />
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 pt-[80px] sm:pt-[90px] md:pt-[60px]">
//         <h1 className="text-[8vw] sm:text-9xl md:text-xl lg:text-8xl xl:text-5xl font-extrabold leading-tight pt-20">
//           Hi there
//         </h1>
//         <div className="px-4 sm:px-8">
//           <h1 className="text-[8vw] sm:text-9xl md:text-xl lg:text-8xl xl:text-9xl font-extrabold leading-tight mb-20">
//             I am David Ayo<span className="text-pink-500">.</span>
//           </h1>
//           <p className="text-lg sm:text-xl md:text-1xl sm:mt-6 text-start">
//             Securing systems since 2011 <br />
//             Currently, Global Head of Cybersecurity at Rappi
//           </p>
//         </div>
//         {/* <a
//           href="/cv.pdf" // replace with your actual CV path
//           download
//           className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-md hover:bg-pink-600 transition-all duration-300"
//         >
//           Download CV
//         </a> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import { useState, useEffect } from "react";
// import "./App.css";
// import Navbar from "./NavBar";

// const Hero = () => {
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Show Navbar when scrolled past 100 pixels, hide when scrolled back above
//       setShowNavbar(window.scrollY > 100);
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section className="relative min-h-screen bg-black text-white overflow-hidden">
//       <div
//         className={`fixed top-0 left-0 w-full z-20 transition-opacity duration-300 ${
//           showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <Navbar />
//       </div>
//       <div className="absolute inset-0 z-0 pt-[80px] sm:pt-[90px] md:pt-[100px]">
//         <img
//           src="https://images.pexels.com/photos/30770285/pexels-photo-30770285/free-photo-of-silhouette-portrait-of-a-man-in-abuja.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1600&w=1600"
//           alt="Profile"
//           className="w-full h-full object-cover object-center scale-125 opacity-40"
//         />
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 pt-[80px] sm:pt-[90px] md:pt-[60px]">
//         <h1 className="text-[8vw] sm:text-9xl md:text-xl lg:text-8xl xl:text-5xl font-extrabold leading-tight pt-20">
//           Hi there
//         </h1>
//         <div className="px-4 sm:px-8">
//           <h1 className="text-[8vw] sm:text-9xl md:text-xl lg:text-8xl xl:text-9xl font-extrabold leading-tight mb-20">
//             I am David Ayo<span className="text-pink-500">.</span>
//           </h1>
//           <p className="text-lg sm:text-xl md:text-1xl sm:mt-6 text-start">
//             Securing systems since 2011 <br />
//             Currently, Global Head of Cybersecurity at Rappi
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./NavBar";

const Hero = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div
        className={`fixed top-0 left-0 w-full z-20 transition-opacity duration-1000 ease-in-out ${
          showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar />
      </div>
      <div className="absolute inset-0 z-0 pt-[80px] sm:pt-[90px] md:pt-[100px]">
        <img
          src="https://images.pexels.com/photos/30770285/pexels-photo-30770285/free-photo-of-silhouette-portrait-of-a-man-in-abuja.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1600&w=1600"
          alt="Profile"
          className="w-full h-full object-cover object-center scale-125 opacity-40"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 pt-[80px] sm:pt-[90px] md:pt-[60px]">
        <h1 className="text-[8vw] sm:text-9xl md:text-xl lg:text-8xl xl:text-5xl font-extrabold leading-tight pt-20">
          Hi there
        </h1>
        <div className="px-4 sm:px-8">
          <h1 className="text-[8vw] sm:text-9xl md:text-xl lg:text-8xl xl:text-9xl font-extrabold leading-tight mb-20">
            I am David Ayo<span className="text-pink-500">.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-1xl sm:mt-6 text-start">
            Securing systems since 2011 <br />
            Currently, Global Head of Cybersecurity at Rappi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;