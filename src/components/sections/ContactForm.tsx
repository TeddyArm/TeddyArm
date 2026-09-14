"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-tan bg-cream p-6 text-center">
        <p className="font-medium text-charcoal">Thanks! We&apos;ll be in touch shortly.</p>
        <p className="mt-1 text-sm text-charcoal-light">
          This form is a placeholder &mdash; connect it to your booking system or CRM.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <input
        type="text"
        name="name"
        placeholder="Full name"
        required
        className="rounded-xl border border-tan bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-light/60 focus:border-accent focus:outline-none sm:col-span-1"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        required
        className="rounded-xl border border-tan bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-light/60 focus:border-accent focus:outline-none sm:col-span-1"
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        className="rounded-xl border border-tan bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-light/60 focus:border-accent focus:outline-none sm:col-span-2"
      />
      <textarea
        name="message"
        placeholder="Tell us about the space you'd like cleaned"
        rows={4}
        className="rounded-xl border border-tan bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-light/60 focus:border-accent focus:outline-none sm:col-span-2"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-charcoal-light sm:col-span-2"
      >
        Request My Free Quote
      </button>
    </form>
  );
}
