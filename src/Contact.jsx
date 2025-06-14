import "./App.css";
import emailjs from "@emailjs/browser";
import axios, { Axios } from "axios";
import { useState } from "react";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Emailjs service redentials
    // const serviceID = "service_gdi6tyd";
    // const publicKey = "_OVtw0c74DqHLrcyo";
    // const templateID = "template_0b9z7sk";
    const serviceID = "service_cgbpv0n";
    const templateID = "template_0b9z7sk";
    const publicKey = "zUAu9YRVrnqYbrqP8";

    const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        from_name: clientName,
        from_email: clientEmail,
        to_name: "emma developer",
        message: clientMessage,
      },
    };
    
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setClientName("");
      setClientEmail("");
      setClientMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-start h-56 sm:px-8">
        <div className="relative inline-block">
          <h2 className="text-7xl sm:text-8xl font-extrabold text-gray-200">
            Contact
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Get in Touch
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 px-4 sm:px-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 mb-6"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Send Me a Message
          </h3>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              // id="name"
              // name="name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              // id="email"
              // name="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              // id="message"
              // name="message"
              value={clientMessage}
              onChange={(e) => setClientMessage(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-md hover:bg-pink-600 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
          {/* {status && (
            <p className="mt-4 text-center text-gray-600">{status}</p>
          )} */}
        </form>
      </div>
    </>
  );
};

export default Contact;
