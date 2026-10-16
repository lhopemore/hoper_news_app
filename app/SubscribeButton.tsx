"use client";

import { FormEvent, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

function SubscribeButton() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // TODO: send the email to a newsletter service
    setSubscribed(true);
  };

  const close = () => {
    setOpen(false);
    setSubscribed(false);
    setEmail("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800"
      >
        Subscribe Now
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
          <div className="absolute inset-0 bg-black/50" onClick={close} />

          <div className="relative bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 w-full max-w-md">
            <button onClick={close} aria-label="Close" className="absolute top-4 right-4">
              <XMarkIcon className="h-6 w-6" />
            </button>

            {subscribed ? (
              <div className="text-center">
                <h2 className="font-serif text-2xl font-bold mb-2">Thank you! 🎉</h2>
                <p>You'll receive our news at {email}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="font-serif text-2xl font-bold mb-2">Subscribe to our newsletter</h2>
                <p className="text-sm text-gray-500 mb-4">Get the latest news in your inbox.</p>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SubscribeButton;