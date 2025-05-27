import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";
import { Button } from "@mui/material";
import { IoMdSend } from "react-icons/io";

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // "service_gd76c4p",
    //   "template_evvugt9",
    //   form.current,
    //   "H5zWBIzTAsgBgY4HK"

    emailjs.sendForm(
      "givefj",
      "temp",
      form.current,
      "gibberishh"
    ).then(
      () => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("❌ Failed to send message. Try again.");
        console.error(error);
      }
    );
  };

  return (
    <div className="min-h-screen px-4 py-10 text-white md:mt-10">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-5 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-gray-700">
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wide animate-fade-in">
          Let’s Work Together 🤝
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="What is your message?"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-center" endIcon={<IoMdSend />}>
            <Button loading={loading} type="submit" variant="contained">
              Send
            </Button>
          </div>
        </form>
      </div>
      {/* <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/> */}
    </div>
  );
};

export default Contacts;
