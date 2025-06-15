// import './App.css';
// import MyImage from "./assets/compTia.png";

// function Certificate() {
//   return (
//     <>
//       <div className="relative flex items-center justify-start py-12 px-4 sm:px-8">
//         <div className="relative inline-block">
//           <h2 className="text-7xl sm:text-8xl font-extrabold text-gray-200">
//             Certificate
//           </h2>
//           <p className="text-xl sm:text-2xl font-semibold text-gray-900 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             SKILLS
//           </p>
//         </div>
//       </div>
//     <div className="overflow-hidden w-full">
//         <div className="marquee flex whitespace-nowrap">
//             <div className="flex">
//                 <img src={MyImage} alt="Image 1" class="h-24 w-48 object-cover mx-2"/>
//                 <img src={MyImage} alt="Image 1" class="h-24 w-48 object-cover mx-2"/>
//                 <img src={MyImage} alt="Image 1" class="h-24 w-48 object-cover mx-2"/>
//                 <img src={MyImage} alt="Image 1" class="h-24 w-48 object-cover mx-2"/>
//             </div>
//             <div className="flex">
//                 <img src={MyImage} alt="Image 1" class="h-24 w-48 object-cover mx-2"/>
//                 <img src={MyImage} alt="Image 1" class="h-24 w-48 object-cover mx-2"/>
//                 <img src={MyImage} alt="Image 1" class="h-24 w-48 object-cover mx-2"/>
//                 <img src={MyImage} alt="Image 1" class="h-24 w-48 object-cover mx-2"/>
//                 <img src={MyImage} alt="Image 1" class="h-24 w-48 object-cover mx-2"/>
//             </div>
//         </div>
//     </div>
//     </>
//   );
// }

// export default Certificate;


import './App.css';
import ejptvSvg from "./assets/certificate-svg/ejptv2.svg"; // Adjust the path as necessary
import compTia from "./assets/certificate-svg/compTia.svg"; // Adjust the path as necessary
import powerUser from "./assets/certificate-svg/poweruser.svg"; // Adjust the path as necessary
import splunk from "./assets/certificate-svg/splunk.svg"; // Adjust the path as necessary
import blueTeam from "./assets/certificate-svg/ejptv2.svg"; // Adjust the path as necessary

function Certificate() {
  // const images = Array(8).fill(ejptvSvg); // adjust count as needed
  const images = [ejptvSvg, blueTeam, compTia, splunk, powerUser];

  return (
    <>
      <div className="relative flex items-center justify-start py-12 px-4 sm:px-8">
        <div className="relative inline-block">
          <h2 className="text-7xl sm:text-8xl font-extrabold text-gray-200">
            Certificate
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            SKILLS
          </p>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div className="marquee-wrapper">
          <div className="marquee flex">
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Certificate ${index}`}
                className="w-48 h-24 object-contain bg-white border border-gray-200 rounded-lg mx-4 p-2"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificate;
