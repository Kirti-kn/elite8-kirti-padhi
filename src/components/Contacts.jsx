import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Alert, Snackbar } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      form.current,
      process.env.PUBLIC_KEY
    ).then(
      () => {
        <Alert severity="success">Message sent successfully</Alert>
        setAlert({ severity: "success", message: "Message sent successfully" })
        form.current.reset();
      },
      (error) => {
        <Alert severity="error">Failed to send message. Try again.</Alert>
        setAlert({ severity: "error", message: "Failed to send message. Try again." })
        console.error(error);
      },
    ).finally(() => { setLoading(false) });
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
          <div className="text-center">
            <Button loading={loading} type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </form>
      </div>
      <Snackbar
        open={!!alert}
        autoHideDuration={4000}
        onClose={()=>{
          setAlert(null);
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={alert?.severity} variant="standard" onClose={() => setAlert(null)}>
          {alert?.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contacts;
