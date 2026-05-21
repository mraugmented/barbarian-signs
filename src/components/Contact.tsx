"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('https://is-boring.com/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site_id: 'barbarian-signs',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          business_name: formData.business || undefined,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Request a Free Quote
            </h2>
            <p className="text-muted max-w-xl mx-auto text-lg">
              Tell us about your project. We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <FadeIn direction="left" className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                  >
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank you!
                  </h3>
                  <p className="text-muted text-lg">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-off-white mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-gold transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-off-white mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-gold transition-colors"
                        placeholder="john@business.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-off-white mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-gold transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="business"
                        className="block text-sm font-medium text-off-white mb-2"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        value={formData.business}
                        onChange={(e) =>
                          setFormData({ ...formData, business: e.target.value })
                        }
                        className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-gold transition-colors"
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-off-white mb-2"
                    >
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="What type of sign are you looking for? Any specific dimensions, materials, or design ideas?"
                    />
                  </div>
                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-dark font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>

          {/* Contact info */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gold mb-4">
                  Contact Us Directly
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+17252592130"
                    className="flex items-center gap-3 text-off-white hover:text-gold transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-dark border border-dark-border flex items-center justify-center group-hover:border-gold/50 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">(725) 259-2130</span>
                  </a>
                  <a
                    href="mailto:Sales@barbariansignsinc.com"
                    className="flex items-center gap-3 text-off-white hover:text-gold transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-dark border border-dark-border flex items-center justify-center group-hover:border-gold/50 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">
                      Sales@barbariansignsinc.com
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gold mb-4">
                  Service Area
                </h3>
                <div className="flex items-start gap-3 text-off-white">
                  <div className="w-10 h-10 rounded-lg bg-dark border border-dark-border flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Greater Los Angeles Area</p>
                    <p className="text-muted text-sm mt-1">
                      Serving LA, the San Fernando Valley, and surrounding
                      communities since 1985.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark rounded-lg border border-dark-border p-6">
                <p className="text-gold font-semibold mb-2">
                  Why request a quote?
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gold flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    100% free, no obligation
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gold flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Response within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gold flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    On-site consultations available
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gold flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Transparent, detailed pricing
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
