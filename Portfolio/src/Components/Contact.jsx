import React, { useState } from "react";
import ReactWhatsappButton from "react-whatsapp-button";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");
    setFormError("");

    const formData = new FormData(event.target);
    formData.append("access_key", "c4decdf2-e6bb-4637-be2e-fc6de77cfa9f");

    // Simple form validation
    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("message")
    ) {
      setFormError("Please fill in all the fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setFormError(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setFormError("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white relative"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-base -mt-1 text-gray-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form onSubmit={onSubmit} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md border-gray-500 text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Let's talk"}
            </button>

            {formError && <p className="text-red-500">{formError}</p>}
            {result && <p className="text-green-500">{result}</p>}
          </form>
        </div>
      
        <div className="!absolute bottom-20 ">
          <ReactWhatsappButton
            countryCode="91"
            phoneNumber="7505507618"
            icon={<FaWhatsapp />}
          />
        </div>

        <div>
          <p className="text-center mt-24 text-gray-400">
            Copyright &#169;2024 Divyansh Singh Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
