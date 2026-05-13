"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import type { IconType } from "react-icons";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, ChevronRight, LucideIcon } from "lucide-react";

type ContactInfoProps = {
  icon: LucideIcon;
  text: string;
};

interface SocialIconProps {
  icon: IconType;
  name: string;
  url: string;
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  /* ✅ Social Links */
  const socialLinks: SocialIconProps[] = [
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/itxx_maz" },
    { name: "TikTok", icon: FaTiktok, url: "https://tiktok.com/@mazvideoediting" },
    { name: "Facebook", icon: FaFacebook, url: "https://facebook.com/abdullahsince1997" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/malik-abdullah-zeeshan" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com/@MAZDigitalServices" },
    // { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/yourusername" },
  ];

  return (
    <footer
      id="Contact"
      className="bg-black text-white pt-16 pb-8 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-[#0a1a0a] opacity-90"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#ffa200] opacity-[0.05] blur-[150px] rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#ffa200] opacity-[0.03] blur-[120px] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        className={`max-w-7xl mx-auto relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-5 bg-gradient-to-br from-black/60 to-[#0c1f0c]/30 p-6 rounded-xl border border-gray-800/50 shadow-xl backdrop-blur-sm">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-[#ffa200] rounded-md flex items-center justify-center mr-3 shadow-[0_0_20px_rgba(255,189,0,0.6)]">
                <span className="text-black font-bold text-4xl">M</span>
              </div>
              <h3 className="text-white text-2xl font-bold">Maz Digital</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional video editing, web development, and graphic design for creators and brands worldwide.
            </p>

            {/* Achievements */}
            <div className="flex flex-col space-y-3 mb-6">
              {[
                "100+ Projects Completed",
                "99% Satisfaction Rate",
                "100% Money-Back Guaranteed",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-2 rounded-lg bg-black/30 border border-gray-800/50 transition-all duration-300 hover:border-[#ffa200]/60 hover:bg-black/50 group"
                >
                  <div className="w-8 h-8 rounded-full bg-black/40 border border-gray-800 flex items-center justify-center mr-3 group-hover:border-[#ffa200]/70 transition-all duration-300">
                    <CheckCircle className="text-[#ffa200] w-4 h-4" />
                  </div>
                  <span className="text-white text-sm group-hover:text-[#ffa200] transition-colors duration-300">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mb-2">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.name}
                  name={social.name}
                  icon={social.icon}
                  url={social.url}
                />
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 bg-gradient-to-br from-black/60 to-[#0c1f0c]/30 p-6 rounded-xl border border-gray-800/50 shadow-xl backdrop-blur-sm">
            <h2 className="text-white text-lg font-semibold mb-5 pb-2 border-b border-gray-800 inline-block">
              <span className="text-[#ffa200]">Our</span> Services
            </h2>
            <div className="space-y-3">
              <FooterLink href="#Projects" text="Video Editing" />
              <FooterLink href="#Web" text="Web Development" />
              <FooterLink href="#Graphic" text="Graphic Design" />
            </div>
          </div>

          {/* CTA / Contact */}
          <div className="lg:col-span-4 bg-gradient-to-br from-black/80 to-[#0c1f0c]/50 p-6 rounded-xl border border-gray-800/50 shadow-xl backdrop-blur-sm">
            <h3 className="text-white text-lg font-semibold mb-4">
              <span className="text-[#ffa200]">Ready</span> to transform your business?
            </h3>

            <a
              href="https://wa.me/+923055544729?text=Hi,%20I’d%20like%20to%20book%20a%20free%20consultation!"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#ffa200] hover:bg-[#2cff0f] text-black font-semibold rounded-md px-5 py-3 transition-all duration-300 w-full mb-6 shadow-[0_0_20px_rgba(255,189,0,0.6)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)]"
            >
              <span>Chat on Whatsapp with US</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="space-y-3 mt-5">
              <ContactInfo icon={Phone} text="+92 0305 5544729" />
              <ContactInfo icon={Mail} text=" malik@mazdigital.me" />
              <ContactInfo icon={MapPin} text="Sharjah, UAE" />
              <ContactInfo icon={MapPin} text="Karachi, Pakistan" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © Copyright {new Date().getFullYear()}{" "}
            <span className="text-[#ffa200]">Maz Digital.</span> All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <FooterBottomLink text="Privacy Policy" />
            <FooterBottomLink text="Terms of Service" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Footer Reusable Components */
function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <div>
      <Link
        href={href}
        className="text-gray-300 hover:text-white transition-all duration-300 relative group flex items-center"
      >
        <ChevronRight className="w-4 h-4 mr-1 text-[#ffa200] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
        <span className="group-hover:translate-x-1 transition-transform duration-300">{text}</span>
      </Link>
    </div>
  );
}

function SocialIcon({ icon: Icon, name, url }: SocialIconProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="relative group"
    >
      <div className="absolute inset-0 bg-[#ffa200] rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="relative w-10 h-10 rounded-full bg-black/40 border border-gray-800 group-hover:border-[#ffa200] flex items-center justify-center transition-all duration-300 shadow-lg transform group-hover:-translate-y-1">
        <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#ffa200] transition-colors duration-300" />
      </div>
    </Link>
  );
}

function ContactInfo({ icon: Icon, text }: ContactInfoProps) {
  return (
    <div className="flex items-center p-2 rounded-lg bg-black/30 border border-gray-800/50 transition-all duration-300 hover:border-[#ffa200]/60 hover:bg-black/50 group">
      <div className="mr-3 w-8 h-8 rounded-full bg-black/40 border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#ffa200]/70 transition-all duration-300">
        <Icon className="text-[#ffa200] w-4 h-4" />
      </div>
      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{text}</span>
    </div>
  );
}

function FooterBottomLink({ text }: { text: string }) {
  return (
    <Link
      href="#"
      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group"
    >
      <span>{text}</span>
      <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
    </Link>
  );
}
