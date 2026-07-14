"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") setEmailError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ name: "", email: "", service: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      title: "Office Location",
      detail: "Eastwood, Quezon City\nMetro Manila, Philippines",
    },
    {
      title: "Phone Number",
      detail: SITE.phone,
    },
    {
      title: "Mail Address",
      detail: SITE.email,
    },
  ];

  return (
    <div>
      <section className="min-h-[40vh] flex items-center bg-paper border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">Get In Touch</p>
            <h1 className="font-slab text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-none -ml-1">
              CONTACT
              <br />
              US
            </h1>
            <p className="font-slab text-lg text-muted mt-6 max-w-xl">
              Have questions or need a website? We&apos;d love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-slab text-3xl md:text-4xl font-bold text-ink mb-4">
              Get In Touch And Feel Free To Contact Us
            </h2>
            <p className="font-slab text-muted max-w-2xl mx-auto">
              Have questions or need a website for your business? We&apos;d love to hear from you! Get in touch with <strong>KM Online Solutions</strong>, your reliable partner for web design Philippines and digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="offset-border p-5 bg-paper flex items-start gap-4"
                >
                  <div className="w-14 h-14 border-2 border-ink bg-accent flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {i === 0 && <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />}
                      {i === 1 && <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                      {i === 2 && <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-slab font-bold text-ink">{item.title}</h3>
                    <p className="font-slab text-muted text-sm whitespace-pre-line">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="offset-border p-8 bg-paper space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-custom text-xs font-bold text-ink mb-1.5 tracking-wider">Name/Nickname *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-ink bg-paper font-slab text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-custom text-xs font-bold text-ink mb-1.5 tracking-wider">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-ink bg-paper font-slab text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                    />
                    {emailError && (
                      <p className="font-mono-custom text-xs text-red-600 mt-1">{emailError}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block font-mono-custom text-xs font-bold text-ink mb-1.5 tracking-wider">Service Type</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-ink bg-paper font-slab text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="basic">Tier 1 - ₱5,999 Basic</option>
                    <option value="advanced">Tier 2 - ₱10,999 Advance</option>
                    <option value="ecommerce">Tier 3 - ₱19,999 Ecommerce</option>
                    <option value="custom">Custom Development</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono-custom text-xs font-bold text-ink mb-1.5 tracking-wider">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-ink bg-paper font-slab text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono-custom text-xs font-bold text-ink mb-1.5 tracking-wider">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-ink bg-paper font-slab text-sm text-ink focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                {status === "success" && (
                  <div role="alert" className="p-4 border-2 border-ink bg-paper font-slab text-sm text-ink text-center">
                    Thank you! Your message has been sent. We&apos;ll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div role="alert" className="p-4 border-2 border-ink bg-paper font-slab text-sm text-ink text-center">
                    Something went wrong. Please try again or email us directly at {SITE.email}.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 font-mono-custom text-sm font-bold border-2 border-ink bg-accent text-white transition-colors hover:bg-white hover:text-accent hover:border-accent disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
