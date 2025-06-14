// import emailjs from "@emailjs/browser";
// import useState from "react";

// const EmailForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Emailjs service redentials
//     const serviceID = "service_gdi6tyd";
//     const templateID = "template_sffnons";
//     const publicKey = "_OVtw0c74DqHLrcyo";

//     const TemplateParams = {
//       from_name: name,
//       from_email: email,
//       to_name: "oga go check emailform",
//       message: message,
//     };

//     emailjs.send(serviceID, templateID, TemplateParams, publicKey) 
//         .then((response) => {
//             console.log("Email sent successfully!", response.status, response.text);
//             // Reset form fields
//             setName("");
//             setEmail("");
//             setMessage("");
//         })
//         .catch((error) => {
//             console.error(error);
//         });

//   };

//   return (
//     <form onSubmit={handleSubmit} className="emialform">
//       <input
//         type="text"
//         placeholder="Your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Your mail"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <textarea
//         cols="30"
//         row="10"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default EmailForm;
