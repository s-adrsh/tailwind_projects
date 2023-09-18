import React from "react";
import Heading from "../utilities/Heading";

function Contact() {
  return (
    <section id="contact" className="p-6 my-12 scroll-mt-20">
      <Heading value="Contact Us" />
      <form
        action=""
        className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
      >
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          minLength="3"
          maxLength="60"
          placeholder="Your Subject"
          className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          required
          className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900  dark:border-none"
        ></textarea>
        <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
