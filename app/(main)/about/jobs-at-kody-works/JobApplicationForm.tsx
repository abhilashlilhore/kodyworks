"use client";

import "../../../components/ContactForm.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.position.trim() !== "" &&
      formData.phone.trim() !== ""
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/job-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        portfolio: "",
        message: "",
      });
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
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className={submitStatus === "error" && !formData.name ? "input-error" : ""}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
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
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          required
          className={submitStatus === "error" && !formData.phone ? "input-error" : ""}
        />
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className={submitStatus === "error" && !formData.position ? "input-error" : ""}
        >
          <option value="" disabled>
            Select Position *
          </option>
          <option value="Mid-Senior Python Developer">Mid-Senior Python Developer</option>
          <option value="Mid-Senior Java Developer">Mid-Senior Java Developer</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-row">
        <select name="experience" value={formData.experience} onChange={handleChange}>
          <option value="" disabled>
            Years of Experience
          </option>
          <option value="1-3">1-3 years</option>
          <option value="4-6">4-6 years</option>
          <option value="6-8">6-8 years</option>
          <option value="8+">8+ years</option>
        </select>
        <input
          type="url"
          name="portfolio"
          placeholder="Portfolio/LinkedIn URL"
          value={formData.portfolio}
          onChange={handleChange}
        />
      </div>

      <textarea
        name="message"
        placeholder="Cover Letter / Additional Information"
        rows={5}
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit" className="submit-btn" disabled={isSubmitting || !validate()}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>

      {submitStatus === "success" && (
        <p className="form-success">Thank you! Your application has been submitted successfully.</p>
      )}

      {submitStatus === "error" && (
        <p className="form-error">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
};

export default JobApplicationForm;
