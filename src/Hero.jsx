// import { useState, useEffect } from "react";
// import "./App.css";
// import Navbar from "./NavBar";

// const Hero = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const isScrollingDown = currentScrollY > lastScrollY;

//       // Show Navbar when scrolling down past 100 pixels, hide when scrolling up
//       setShowNavbar(isScrollingDown && currentScrollY > 50);

//       // Update last scroll position
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <section className="relative min-h-screen bg-black text-white overflow-hidden">
//       <div
//         className={`fixed top-0 left-0 w-full z-20 transition-opacity duration-1000 ease-in-out ${
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
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      setShowNavbar(isScrollingDown && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Split "there" into individual letters for animation
  const text = "there";
  const letters = text.split("").map((letter, index) => (
    <span
      key={index}
      className="letter inline-block"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {letter}
    </span>
  ));

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
          Hi <span>{letters}</span>
        </h1>
        <div className="px-4 sm:px-8">
          <h1 className="text-[8vw] sm:text-9xl md:text-xl lg:text-8xl xl:text-9xl font-extrabold leading-tight mb-20">
            I am David Ayo<span className="text-pink-500 square-dot">.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-1xl sm:mt-6 text-start">
            Securing systems since 2018 <br />
            Security Delivery Specialist at Accenture services s.r.o
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;