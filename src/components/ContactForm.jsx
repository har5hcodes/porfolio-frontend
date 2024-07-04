import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    fetch(process.env.REACT_APP_BACKEND_URL + "/api/contact/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit contact form");
        }
        return response;
      })
      .then((data) => {
        setIsSubmitted(true);
        setError(null);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Failed to send message. Please try again later.");
        setIsSubmitted(false);
      });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center gap-6 sm:p-6 p-4">
      {isSubmitted ? (
        <div className="text-red-500 text-xl sm:text-5xl font-extrabold">
          Your message is successfully sent.
        </div>
      ) : (
        <form
          className="w-full h-full flex flex-col justify-between gap-6"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full h-1/6 sm:px-4 px-2 bg-red-200 focus:outline-none focus:border-4 focus:border-black"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="rounded-none w-full h-1/6 sm:px-4 px-2 bg-red-200 focus:outline-none focus:border-4 focus:border-black"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="rounded-none w-full h-3/6 sm:px-4 px-2 bg-red-200 pt-2 focus:outline-none focus:border-4 focus:border-black"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full h-1/6 bg-red-500 uppercase tracking-widest text-lg font-semibold border-4 border-white hover:border-4 hover:border-black hover:bg-white"
          >
            CLICK CLICK
          </button>
        </form>
      )}
      {error && !isSubmitted && (
        <div className="text-red-500 text-sm capitalize text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
