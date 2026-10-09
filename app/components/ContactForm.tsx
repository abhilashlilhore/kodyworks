"use client";

import "./ContactForm.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    return formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.message.trim() !== "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");
      setFormData({ name: "", email: "", phone: "", project: "", message: "", budget: "" });
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className={submitStatus === "error" && !formData.name ? "input-error" : ""}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
          className={submitStatus === "error" && !formData.email ? "input-error" : ""}
        />
      </div>

      <div className="form-row">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>
            Project Type
          </option>
          <option value="web">Website Development</option>
          <option value="cloud">Cloud Solutions</option>
          <option value="ai">AI & Automation</option>
          <option value="remote">Remote Resources</option>
          <option value="other">Other</option>
        </select>
      </div>

      <select
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        defaultValue=""
        className="full-width-select"
      >
        <option value="" disabled>
          Project Budget
        </option>
        <option value="under-5k">Under $5,000</option>
        <option value="5k-15k">$5,000 - $15,000</option>
        <option value="15k-50k">$15,000 - $50,000</option>
        <option value="over-50k">$50,000+</option>
        <option value="not-sure">Not sure yet</option>
      </select>

      <textarea
        name="message"
        placeholder="Your Message *"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        className={submitStatus === "error" && !formData.message ? "input-error" : ""}
      />

      <div className="form-rating">
        <span>How important is this project?</span>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} data-value={star} />
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={isSubmitting || !validate()}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitStatus === "success" && (
        <p className="form-success">Thank you! Your message has been sent successfully.</p>
      )}

      {submitStatus === "error" && (
        <p className="form-error">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  );
};

export default ContactForm;
