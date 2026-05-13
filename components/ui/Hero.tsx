"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Star, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* =========================
   Falling Stars (Canvas)
========================= */
const FallingStars = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const stars: {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      tail: { x: number; y: number }[];
    }[] = [];

    const createStars = () => {
      const maxStars = Math.floor(window.innerWidth / 35);
      if (stars.length < maxStars && Math.random() < 0.03) {
        const size = Math.random() * 2 + 1;
        stars.push({
          x: Math.random() * canvas.width,
          y: 0,
          size,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          tail: [],
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        star.y += star.speed;

        star.tail.push({ x: star.x, y: star.y });
        if (star.tail.length > 5) star.tail.shift();

        if (star.tail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(star.tail[0].x, star.tail[0].y);
          for (let i = 1; i < star.tail.length; i++) {
            ctx.lineTo(star.tail[i].x, star.tail[i].y);
          }
          ctx.strokeStyle = `rgba(255,162,0,${star.opacity * 0.5})`;
          ctx.lineWidth = star.size / 2;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,162,0,${star.opacity})`;
        ctx.fill();

        if (star.y > canvas.height) stars.splice(index, 1);
      });
    };

    let rafId = 0;
    const animate = () => {
      createStars();
      drawStars();
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />;
});
FallingStars.displayName = "FallingStars";

/* =========================
   Mouse Follower
========================= */
const MouseFollower = memo(() => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const update = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", update, { passive: true });
    return () => window.removeEventListener("mousemove", update);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        className="fixed w-8 h-8 rounded-full border-2 border-[#ffa200] pointer-events-none z-50 transition-transform duration-100"
        style={{ left: position.x, top: position.y, transform: "translate(-50%,-50%)" }}
      />
      <div
        className="fixed w-2 h-2 bg-[#ffa200] rounded-full pointer-events-none z-50 transition-transform duration-75"
        style={{ left: position.x, top: position.y, transform: "translate(-50%,-50%)" }}
      />
    </>
  );
});
MouseFollower.displayName = "MouseFollower";

/* =========================
   Static Data
========================= */
const avatars = [
  "/Assets/client/51.png",
  "/Assets/client/52.jpg",
  "/Assets/client/63.jpg",
  "/Assets/client/62.png",
  "/Assets/client/53.jpeg",
  "/Assets/client/60.jpg",
  "/Assets/client/54.png",
  "/Assets/client/55.png",
  "/Assets/client/61.png",
  "/Assets/client/56.jpg",
  "/Assets/client/57.jpg",
];

const navLinks = [
  { href: "#Services", label: "Services" },
  { href: "#Projects", label: "Projects" },
  { href: "#Reviews", label: "Reviews" },
  { href: "#Casestudy", label: "Case Studies" },
  { href: "#Contact", label: "Contact" },
];


/* =========================
   Main Component
========================= */
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [, setIndex] = useState(0);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % words.length);
  //   }, 2000);
  //   return () => clearInterval(id);
  // }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <FallingStars />
      <MouseFollower />

      {/* NAVBAR */}
      <nav className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-[90%] md:w-[82%] lg:w-[70%] xl:w-[64%] max-w-6xl">
  <div className="bg-white border border-black/5 shadow-lg rounded-[24px] px-5 sm:px-6 py-3 sm:py-3.5 transition-all duration-300">
    <div className="relative flex items-center justify-between">

      {/* Mobile Toggle */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-xl hover:bg-black/5 transition-colors"
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6 text-black" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6 text-black" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Left Links */}
      <div className="hidden md:flex flex-1 gap-10">
        <Link href="#Services" className="font-bold text-black hover:text-[#ffa200] transition-colors">
          Services
        </Link>
        <Link href="#Projects" className="font-bold text-black hover:text-[#ffa200] transition-colors">
          Projects
        </Link>
        <Link href="#Reviews" className="font-bold text-black hover:text-[#ffa200] transition-colors">
          Reviews
        </Link>
      </div>

      {/* Center Logo */}
      <Link href="/" className="absolute left-1/2 -translate-x-1/2">
        <Image src="/Assets/LOGO.png" alt="Logo" width={120} height={40} priority className="h-12 w-auto" />
      </Link>

      {/* Right Links */}
      <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
        <Link href="#Casestudy" className="font-bold text-black hover:text-[#ffa200] transition-colors">
          Case Study
        </Link>
        <Link href="#Contact" className="font-bold text-black hover:text-[#ffa200] transition-colors">
          Contact
        </Link>
        <Button className="bg-[#ffa200] text-black font-extrabold px-6 sm:px-7 py-3 sm:py-4 rounded-2xl shadow-md  transition-all"
            onClick={() => {
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
        >
          Book a Call
        </Button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="md:hidden mt-3 bg-white border border-black/5 shadow-lg rounded-3xl overflow-hidden"
      >
        <div className="px-6 py-5 space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-black font-bold text-lg hover:text-[#ffa200] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full bg-[#ffa200] text-black font-extrabold px-8 py-4 rounded-2xl shadow-md transition-all"
              onClick={() => {
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
          >
            Book a Call
          </Button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>

{/* HERO Section */}
      <main className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 px-5 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl relative">
          <div className="absolute -left-5 sm:-left-10 top-8 sm:top-16 md:top-20">
            <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-[#ffa200] opacity-15 blur-3xl"></div>
          </div>
          <div className="absolute -right-5 sm:-right-10 top-16 sm:top-32 md:top-40">
            <div className="w-32 h-32 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-[#ffa200] opacity-10 blur-3xl"></div>
          </div>

          <div className="text-center space-y-6 sm:space-y-7 md:space-y-10 relative">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-16 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-[#ffa200] to-transparent transform rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-16 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-[#ffa200] to-transparent transform -rotate-45"></div>

              <Star className="absolute top-1/3 left-1/6 h-3 w-3 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#ffa200] animate-pulse" />
              <Star
                className="absolute bottom-1/3 right-1/6 h-2.5 w-2.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#ffa200] animate-pulse"
                fill="#ffa200"
              />

              <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#ffa200] rounded-full absolute animate-pulse top-1/4 left-1/3 opacity-50"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#ffa200] rounded-full absolute animate-pulse left-1/4 top-3/4 opacity-50"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-[#ffa200] rounded-full absolute animate-pulse right-1/4 bottom-1/4 opacity-50"></div>
            </div>

            {/* <h1 className="text-[2.5rem] leading-[1.08] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl xl:text-8xl font-black max-w-[90%] sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto relative z-10 text-white tracking-tight"> */}
              {/* I Build{" "}
              <span
                key={words[index]}
                className="text-[#ffa200] inline-block transition-all duration-500 break-words"
              >
                {words[index]}
              </span>{" "} */}
               {/* Turn Your Vision Into Scroll-Stopping Content
            </h1> */}

 <h1 className="text-[2.5rem] leading-[1.08] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl xl:text-8xl font-black max-w-[90%] sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto relative z-10 text-white tracking-tight">
              Turn Your Vision Into
              <span className="text-[#ffa200] inline-block transition-all duration-500 break-words"> Scroll-Stopping </span>{" "}
              Content
            </h1>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-1xl max-w-[85%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto relative z-10 font-medium leading-relaxed">
 We help creators, brands, and agencies bring their ideas to life through powerful video editing,
modern web development, and captivating design
            </p>

            

         <div className="flex flex-col items-center justify-center pt-2 sm:pt-0 md:pt-0 relative z-10">
 <Button
 onClick={() => {
    window.open("https://wa.me/923055544729?text=Hi,%20I%20would%20like%20a%20talk%20", "_blank");
  }}
  className="relative w-[90%] sm:w-auto text-lg sm:text-lg md:text-xl py-7 sm:py-7 md:py-8 px-10 sm:px-10 md:px-12
             text-black bg-[#FFA200] border-none rounded-xl sm:rounded-lg shadow-lg
             hover:shadow-[0_0_30px_rgba(255,162,0,0.6)] transition-all duration-300 ease-in-out
             hover:bg-[#00dd4f] active:translate-y-1 font-bold text-center mx-auto"
>
Talk on Whatsapp
 

</Button>

  
</div>

          </div>
        </div>
      </main>

<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex flex-col items-center mb-12 mt-7 text-center px-4 sm:px-6"
>
  {/* Avatars */}
  <div className="flex -space-x-2 sm:-space-x-2 md:-space-x-3 mb-3">
    {avatars.map((avatar, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
        className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden 
                   border border-[#ffa200]/80 shadow-[0_0_10px_rgba(57,255,20,0.4)] 
                   hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] transition-all duration-300 
                   bg-black/20 backdrop-blur-sm"
      >
        <Image
             width={200}
  height={200}
          src={avatar}
          alt={`Trusted user ${index + 1}`}
          className="w-full h-full object-contain"
        />
          
      </motion.div>
    ))}
  </div>

  {/* Stars & Text */}
  <div className="flex flex-wrap justify-center items-center gap-2 text-center">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
      >
        <Star
          size={18}
          fill="#FFD700"
          stroke="#FFD700"
          className="drop-shadow-[0_0_6px_rgba(255,215,0,0.7)]"
        />
      </motion.div>
    ))}

    <span className="text-gray-300 text-sm sm:text-base font-semibold tracking-wide">
      <span className="text-[#ffa200] font-extrabold">Trusted</span> by 100+ Creators, businesses, & brands worldwide
    </span>
  </div>


  {/* Tagline */}
  <p className="mt-3 text-xs sm:text-sm md:text-base text-white font-medium max-w-xs sm:max-w-md">
    We help creators, {" "}
    <span className="text-[#fff200] font-semibold">brands</span>,{" "}
    <span className="text-[#fff200] font-semibold">agencies</span>,{" "}
    <span className="text-[#fff200] font-semibold">businesses</span>,{" "} scale with high-quality 
    <span className="text-[#fff200] font-semibold"> video editing</span>,{" "}
    <span className="text-[#fff200] font-semibold">web development</span> {" "}
    <span className="text-white font-semibold">and
design solutions, delivered fast, clean, and stress free.
</span> 
  </p>
</motion.div>


  <div className="relative w-full mt-20 sm:mt-20 md:mt-24 z-30 ">

  {/* Strip 1 – Left ➜ Right */}
  {/* <div className="absolute left-1/2 top-1/2 w-[120vw] -translate-x-1/2 -translate-y-1/2 rotate-[0deg]">
    <div className="h-14 sm:h-14 md:h-16 lg:h-20 bg-[#ffa200] shadow-[0_0_0px_rgba(0,255,89,1)]">
      <div className="flex items-center h-full animate-[marquee-left_15s_linear_infinite]">
        <div className="flex items-center gap-10 whitespace-nowrap px-8">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-black font-black text-lg uppercase tracking-wider">Scroll stopping</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">High Quality Leads</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">Sales Growth</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">Website That sell</span>
              <div className="w-3 h-3 bg-black rotate-45" />

            </div>
          ))}
        </div>
      </div>
    </div>
  </div> */}

  {/* Strip 2 – Right ➜ Left */}
  <div className="absolute left-1/2 top-1/2 w-[120vw] -translate-x-1/2 -translate-y-1/2 ">
    <div className="h-14 sm:h-14 md:h-16 lg:h-20 bg-[#ffa200] shadow-[0_0_0px_rgba(0,255,89,0.6)]">
      <div className="flex items-center h-full animate-[marquee-right_5s_linear_infinite]">
        <div className="flex items-center gap-10 whitespace-nowrap px-8">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-black font-black text-lg uppercase tracking-wider">Higher Watch Time</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">More Views Fast</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">Click Magnet Thumbnail</span>
              <div className="w-3 h-3 bg-black rotate-45" />
               <span className="text-black font-black text-lg uppercase tracking-wider">Scroll stopping</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">High Quality Leads</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">Sales Growth</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">Website That sell</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">High Retention Cuts</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">Scroll stopping</span>
              <div className="w-3 h-3 bg-black rotate-45" />

            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

</div>



<div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[15rem] overflow-hidden mt-6 sm:mt-8 md:mt-12 mb-16 sm:mb-20 md:mb-24">
  <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
    <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1400 400" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="earthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#ffa200', stopOpacity: 0 }} />
          <stop offset="20%" style={{ stopColor: '#ffa200', stopOpacity: 0.5 }} />
          <stop offset="50%" style={{ stopColor: '#ffa200', stopOpacity: 1 }} />
          <stop offset="80%" style={{ stopColor: '#ffa200', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#ffa200', stopOpacity: 0 }} />
        </linearGradient>
        <filter id="earthGlow">
          <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M -200 400 Q 700 0 1600 400"
        fill="none"
        stroke="url(#earthGradient)"
        strokeWidth="12"
        filter=""
      />
    </svg>
    {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] sm:w-[85%] md:w-[80%] h-44 sm:h-52 md:h-64 bg-gradient-to-t from-[#ffa200]/25 via-[#ffa200]/15 to-transparent blur-3xl"></div>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[85%] sm:w-[70%] md:w-[60%] h-32 sm:h-40 md:h-48 bg-gradient-to-t from-[#ffa200]/35 via-[#ffa200]/20 to-transparent blur-2xl"></div> */}
  </div>
</div>


    </div>
  )
}
