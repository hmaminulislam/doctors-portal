import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import './ContactForm.css'

const ContactForm = () => {
    return (
      <section className="contact-from-container py-20">
        <div className="text-center">
          <h4 className="text-xl text-primary font-bold">Contact Us</h4>
          <h2 className="text-3xl text-white">Stay connected with us</h2>
        </div>
        <form className="mt-10 text-center">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input w-full max-w-xs block mx-auto mb-5"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input w-full max-w-xs block mx-auto mb-5"
          />
          <textarea
            className="textarea w-full max-w-xs block mx-auto mb-5 h-24"
            placeholder="Your Message"
          ></textarea>
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </section>
    );
};

export default ContactForm;