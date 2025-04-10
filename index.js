import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error("Subscription failed:", err);
    }
  };

  return (
    <main className="min-h-screen bg-green-50 p-6 text-green-900">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to GreenSourceGlobal</h1>
        <p className="mb-6">Sustainable innovation for a greener tomorrow—powered by AI, renewable energy, and community action.</p>
      </section>

      <section className="max-w-xl mx-auto mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Newsletter</h2>
        {submitted ? (
          <p className="text-green-700">Thanks for subscribing!</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 border border-green-300 rounded"
              required
            />
            <button
              type="submit"
              className="bg-green-700 text-white py-2 rounded hover:bg-green-800"
            >
              Subscribe
            </button>
          </form>
        )}
      </section>

      <section className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
        <article className="mb-6">
          <h3 className="text-xl font-bold">How Hemp Can Save the Planet</h3>
          <p className="text-green-700 text-sm mb-2">April 2025</p>
          <p>Hemp can restore soil, reduce deforestation, and replace plastics. We're using it as a key part of our green innovation.</p>
        </article>
        <article>
          <h3 className="text-xl font-bold">Recycling Vape Batteries</h3>
          <p className="text-green-700 text-sm mb-2">April 2025</p>
          <p>We're placing vape battery collection bins at high-traffic locations to repurpose lithium-ion batteries for green micro-devices.</p>
        </article>
      </section>

      <section className="mt-16 max-w-2xl mx-auto" id="about">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>Founded by Jason Nuckols, GreenSourceGlobal is on a mission to revolutionize sustainability with technology, community, and nature. From solar-powered hubs to hemp regeneration, we're building a cleaner future for everyone.</p>
      </section>

      <section className="mt-16 max-w-2xl mx-auto" id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:greensourceglobal@gmail.com" className="text-green-700 underline">greensourceglobal@gmail.com</a></p>
        <p>Social: Coming soon...</p>
      </section>

      <footer className="mt-20 text-center text-green-600 text-sm">
        &copy; {new Date().getFullYear()} GreenSourceGlobal | Created by Jason Nuckols
      </footer>
    </main>
  );
}