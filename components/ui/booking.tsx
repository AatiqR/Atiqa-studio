"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

export default function Booking() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // ✅ Load Calendly script once
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="booking" className="min-h-screen bg-black relative overflow-hidden">
      {/* 🔥 Animated Gradient Background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-gradient-to-br from-[#ffa200]/30 via-[#ffa200]/25 to-[#ffa200]/20 rounded-full blur-[100px] animate-gradient-x"></div>
        <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffa200]/35 via-[#ffa200]/30 to-[#ffa200]/25 rounded-full blur-[120px] animate-gradient-x delay-1000"></div>
      </div> */}

      {/* Overlay grid effect */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-14 transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#ffa200] via-[#ffa200] to-[#ffa200] bg-clip-text text-transparent animate-gradient-x">
                Scale?
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#ffa200] to-[#ffa200] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Let’s discuss how we can transform your business. Book a free consultation with our expert team.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
              <div className="text-center animate-fade-in">
                <div className="text-4xl lg:text-5xl font-bold text-[#ffa200] mb-2">100+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center animate-fade-in delay-200">
                <div className="text-4xl lg:text-5xl font-bold text-[#ffa200] mb-2">99%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div className="text-center animate-fade-in delay-400">
                <div className="text-4xl lg:text-5xl font-bold text-[#ffa200] mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* 🚀 Calendly Embed */}
          <div
            className={`w-full transform transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/50 backdrop-blur-xl rounded-3xl border border-[#ffa200]/20 p-0 shadow-2xl">
              <div className="text-center mb-6 px-6 pt-6">
                <Calendar className="w-12 h-12 text-[#ffa200] mx-auto mb-4 animate-bounce" />
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Book Your Free Consultation
                </h2>
                <p className="text-gray-400">
                  Pick your time directly from our calendar
                </p>
              </div>

              {/* Calendly widget container - ✅ Full Width / No Blank Space / No Scroll */}
              <div
                className="calendly-inline-widget w-full h-[760px] rounded-2xl overflow-hidden"
                data-url="https://calendly.com/mazdigitalservices0/let-s-dicuss-how-we-can-elevate-your-content?month=2026-02"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14 animate-fade-in delay-700">
            <p className="text-gray-400 mb-3">Questions? Call us directly</p>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center text-[#ffa200] hover:text-[#2ecc71] font-semibold text-lg transition-colors"
            >
              +92 3055544729
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
