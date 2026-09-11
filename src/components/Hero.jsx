import React from 'react';
import heroImg from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 py-16 lg:py-24">

          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Build Your Ideal
              <span className="block mt-1 brand-gradient-text">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#technologies"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-white font-semibold text-sm sm:text-base
                           brand-gradient-bg hover:opacity-90 hover:scale-105
                           shadow-md hover:shadow-lg transition-all duration-300"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-sm sm:text-base
                           text-gray-600 bg-white border border-gray-200
                           hover:border-gray-300 hover:bg-gray-50 hover:scale-105
                           transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* RIGHT: Banner Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-linear-to-br from-purple-300/30 via-pink-300/20 to-blue-300/30 blur-3xl rounded-full scale-90" />
              <img
                src={heroImg}
                alt="Development Stack Illustration"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;