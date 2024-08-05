"use client";
import "react-phone-number-input/style.css";
import PhoneNumberInput, {
  isValidPhoneNumber,
} from "react-phone-number-input/mobile";
import React, { useState, forwardRef } from "react";
import axios from "axios";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import Image from "next/image";

// Data interface
interface FormData {
  fullName: string;
  email: string;
  countryCode?: string;
  phoneNumber: string;
  message: string;
}

interface InputComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// Define the custom input component using forwardRef
const CustomInput = forwardRef<HTMLInputElement, InputComponentProps>(
  ({ className, ...props }, ref) => (
    <input
      {...props}
      ref={ref}
      className={`${
        className || ""
      } custom-phone-input focus:outline-none text-lg placeholder:text-black`}
    />
  )
);

// Set the display name for debugging purposes
CustomInput.displayName = "CustomInput";

const ContactForm = () => {
  // Phone number validation
  const [value, setValue] = useState<string | undefined>();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handlePhoneNumberChange = (value: string | undefined) => {
    setValue(value);
    if (value && isValidPhoneNumber(value)) {
      const phoneNumber = parsePhoneNumberFromString(value || "");
      if (phoneNumber) {
        setFormData({
          ...formData,
          phoneNumber: phoneNumber.nationalNumber,
          countryCode: phoneNumber.countryCallingCode,
        });
      }
    } else {
      setFormData({ ...formData, phoneNumber: "", countryCode: "" });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const timeStamp = new Date().toISOString();

    const dataToSend = { ...formData, timeStamp };

    try {
      const jsonData = JSON.stringify(dataToSend);
      await axios.post("http://localhost:3000/api/contact", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(res);

      setSuccessMessage("Your Data Submitted Successfully");
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-300 px-4 ">
      <div className="bg-white shadow-lg flex md:flex-row flex-col gap-10 rounded-lg p-8 w-full max-w-5xl mx-4 mt-20">
        <div className="md:w-1/2 flex flex-col justify-center">
          <Image
            src="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            layout="responsive"
            height={100}
            width={100}
            className="rounded-lg mb-4 w-full"
          />
          <div className="text-lg text-gray-700 mb-4 max-sm:hidden">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="para">
              We are committed to providing exceptional service and value to our
              customers. Our team of professionals is dedicated to ensuring your
              satisfaction with every interaction. Whether you have questions,
              need support, or simply want to learn more about what we offer, we
              are here to help. Reach out to us today, and let&apos;s start a
              conversation.
            </p>
          </div>
          <div className="flex space-x-4 text-xl ">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              twitter
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              Linked in
            </a>
          </div>
        </div>
        <form
          id="ContactForm"
          className="md:w-1/2 space-y-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold mb-8">Get in touch</h2>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full h-12 p-2 border-gray-300 bg-transparent border rounded-md placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-12 p-2 border-gray-300 bg-transparent border rounded-md placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <PhoneNumberInput
              id="mobile"
              placeholder="Enter phone number"
              value={value}
              onChange={handlePhoneNumberChange}
              error={
                value
                  ? isValidPhoneNumber(value)
                    ? undefined
                    : "Invalid phone number"
                  : "Phone number required"
              }
              inputComponent={CustomInput}
              className="w-full h-12 p-2 border-gray-300 bg-transparent border rounded-md placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
            />
            {value && isValidPhoneNumber(value) ? (
              ""
            ) : (
              <p className="text-red-600 text-sm">Invalid Phone Number</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-40 p-2 border-gray-300 bg-transparent border rounded-md resize-none placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-8 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </div>

          {successMessage && (
            <span className="block text-green-500">{successMessage}</span>
          )}
          {errorMessage && (
            <span className="block text-red-500">{errorMessage}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
