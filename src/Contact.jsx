import "./App.css";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Emailjs service redentials
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        from_name: clientName,
        from_email: clientEmail,
        to_name: "David Ayo",
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
  <section id="contact">
    <div className="relative flex items-center justify-start py-12 px-4 sm:px-8">
      <div className="relative inline-block">
        <h2 className="text-7xl sm:text-8xl font-extrabold text-gray-200">
          Contact
        </h2>
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Get in Touch
        </p>
      </div>
    </div>

    {/* Side-by-side layout starts here */}
    <div className="flex flex-col md:flex-row items-start justify-center gap-8 mt-12 px-4 sm:px-8">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Let's Connect!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
        </p>
        <div className="mt-4 max-w-md mx-auto md:mx-0">
          <p className="text-gray-700">
            I'm always interested in discussing research collaborations, job opportunities, or security-related topics! 📧{" "}
            <span className="underline">Email Me Directly</span>
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white shadow-lg rounded-xl p-6"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Send Me a Message
          </h3>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              value={clientMessage}
              onChange={(e) => setClientMessage(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="4"
              placeholder="Your Message"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-md hover:bg-pink-600 hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

};

export default Contact;
