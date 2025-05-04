import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-green-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
        Empowering a Greener Future, One Step at a Time
      </h1>
      <p className="text-lg md:text-xl text-green-800 max-w-3xl mx-auto mb-8">
        Welcome to <strong>GreenSourceGlobal</strong> — a movement built on clean energy, regenerative solutions, and compassionate action.
        From eco-friendly innovations to animal rescue advocacy, we’re creating a cleaner, kinder world for all.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-2xl hover:bg-green-700 transition">
          Join the Movement
        </button>
        <button className="bg-white text-green-700 border border-green-600 text-lg font-semibold px-6 py-3 rounded-2xl hover:bg-green-100 transition">
          Learn More
        </button>
      </div>
      <p className="mt-10 text-green-800 text-base max-w-xl mx-auto">
        Every purchase, every project, every rescue makes a difference. Together, we’re building a circular, sustainable future — for people, the planet, and the animals we love.
      </p>

      {/* Buttondown Signup Form */}
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/YOUR_USERNAME"
        method="post"
        target="popupwindow"
        className="mt-12 max-w-md mx-auto"
      >
        <label htmlFor="bd-email" className="block mb-2 text-green-800 font-semibold text-lg">
          Subscribe to our Newsletter
        </label>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            name="email"
            id="bd-email"
            className="w-full px-4 py-2 rounded-xl border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="you@example.com"
            required
          />
          <button
            type="submit"
            className="mt-2 sm:mt-0 bg-green-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </div>

        <p className="text-sm text-green-700 mt-2">
          No spam, just green inspiration.
        </p>
      </form>
    </section>
  );
};

export default HeroSection
