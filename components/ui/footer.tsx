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
    { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/aatiqar.creative" },
    // { name: "TikTok", icon: FaTiktok, url: "https://tiktok.com/@mazvideoediting" },
    // { name: "Facebook", icon: FaFacebook, url: "https://facebook.com/abdullahsince1997" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/aatiqa-rana-1632a1282/" },
    // { name: "YouTube", icon: FaYoutube, url: "https://youtube.com/@MAZDigitalServices" },
    // { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/yourusername" },
  ];

  return (
<footer
  id="Contact"
  className="bg-black text-white pt-16 pb-8 px-4 md:px-8 relative overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#120006] opacity-95"></div>

    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#39FF14] opacity-[0.08] blur-[150px] rounded-full animate-pulse"></div>

    <div
      className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#39FF14] opacity-[0.05] blur-[120px] rounded-full animate-pulse"
      style={{ animationDelay: "1s" }}
    ></div>
  </div>

  <div
    className={`max-w-7xl mx-auto relative z-10 transition-all duration-1000 ease-out ${
      isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }`}
  >
    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

      {/* About */}
      <div className="lg:col-span-5 bg-gradient-to-br from-black/70 to-[#180008]/40 p-6 rounded-2xl border border-gray-800/50 shadow-2xl backdrop-blur-sm">

        <div className="flex items-center mb-5">
          <div className="w-14 h-14 bg-[#39FF14] rounded-xl flex items-center justify-center mr-4 shadow-[0_0_30px_rgba(255,45,85,0.5)]">
            <span className="text-white font-black text-2xl">AR</span>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold">
              Atiqa Rana
            </h3>

            <p className="text-[#39FF14] text-sm font-medium">
              Graphic & Thumbnail Designer
            </p>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed text-[15px]">
          I create high-converting YouTube thumbnails, posters,
          social media graphics, branding visuals, menus, and
          creative designs that help creators and businesses
          grab attention, increase engagement, and grow faster online.
        </p>

        {/* Achievements */}
        <div className="flex flex-col space-y-3 mb-6">
          {[
            "100+ Creative Projects Completed",
            "High CTR Thumbnail Specialist",
            "Fast Delivery & Premium Quality",
          ].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center p-3 rounded-xl bg-black/40 border border-gray-800/50 transition-all duration-300 hover:border-[#39FF14]/60 hover:bg-black/60 group"
            >
              <div className="w-8 h-8 rounded-full bg-black/50 border border-gray-800 flex items-center justify-center mr-3 group-hover:border-[#39FF14]/70 transition-all duration-300">
                <CheckCircle className="text-[#39FF14] w-4 h-4" />
              </div>

              <span className="text-white text-sm group-hover:text-[#39FF14] transition-colors duration-300">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-3">
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
      <div className="lg:col-span-3 bg-gradient-to-br from-black/70 to-[#180008]/40 p-6 rounded-2xl border border-gray-800/50 shadow-2xl backdrop-blur-sm">

        <h2 className="text-white text-xl font-bold mb-5 pb-2 border-b border-gray-800 inline-block">
          My <span className="text-[#39FF14]">Services</span>
        </h2>

        <div className="space-y-4">
          <FooterLink href="#Projects" text="YouTube Thumbnail Design" />
          <FooterLink href="#Projects" text="Poster & Social Media Design" />
          <FooterLink href="#Projects" text="Brand Identity Design" />
          <FooterLink href="#Projects" text="Menu & Packaging Design" />
        </div>
      </div>

      {/* Contact / CTA */}
      <div className="lg:col-span-4 bg-gradient-to-br from-black/80 to-[#180008]/50 p-6 rounded-2xl border border-gray-800/50 shadow-2xl backdrop-blur-sm">

        <h3 className="text-white text-xl font-bold mb-4">
          Ready To Make Your Brand
          <span className="text-[#39FF14]"> Stand Out?</span>
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Let’s create scroll-stopping thumbnails and premium
          visuals that attract attention and grow your brand faster.
        </p>

        <a
          href="https://wa.me/923062775191?text=Hi%20Atiqa,%20I%20want%20to%20work%20with%20you!"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between bg-[#39FF14] hover:bg-[#ff1744] text-white font-semibold rounded-xl px-5 py-4 transition-all duration-300 w-full mb-6 shadow-[0_0_25px_rgba(255,45,85,0.45)] hover:shadow-[0_0_35px_rgba(255,45,85,0.7)]"
        >
          <span>Chat on WhatsApp</span>

          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="space-y-3 mt-5">

          <ContactInfo icon={Phone} text="+92 306 2775191" />

          <ContactInfo
            icon={Mail}
            text="aasdrana18@gmail.com"
          />

          <ContactInfo
            icon={MapPin}
            text="Karachi, Pakistan"
          />
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-gray-800/50 pt-6 flex flex-col md:flex-row justify-between items-center">

      <p className="text-gray-400 text-sm mb-4 md:mb-0">
        © Copyright {new Date().getFullYear()}{" "}
        <span className="text-[#39FF14] font-semibold">
          Atiqa Rana
        </span>
        . All rights reserved.
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
        <ChevronRight className="w-4 h-4 mr-1 text-[#39FF14] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
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
      <div className="absolute inset-0 bg-[#39FF14] rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="relative w-10 h-10 rounded-full bg-black/40 border border-gray-800 group-hover:border-[#39FF14] flex items-center justify-center transition-all duration-300 shadow-lg transform group-hover:-translate-y-1">
        <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#39FF14] transition-colors duration-300" />
      </div>
    </Link>
  );
}

function ContactInfo({ icon: Icon, text }: ContactInfoProps) {
  return (
    <div className="flex items-center p-2 rounded-lg bg-black/30 border border-gray-800/50 transition-all duration-300 hover:border-[#39FF14]/60 hover:bg-black/50 group">
      <div className="mr-3 w-8 h-8 rounded-full bg-black/40 border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#39FF14]/70 transition-all duration-300">
        <Icon className="text-[#39FF14] w-4 h-4" />
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
