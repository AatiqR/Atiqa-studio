"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

const companies = [
  { name: "BrightAxis", logo: "/Assets/client/44.png", height: 70, width: 140 },
  { name: "Cloudora", logo: "/Assets/client/3.jpg", height: 80, width: 180 },
  { name: "PixelNest", logo: "/Assets/client/38.png", height: 80, width: 160 },
  { name: "Zenify", logo: "/Assets/client/32.png", height: 70, width: 140 },
  { name: "CodeSphere", logo: "/Assets/client/35.png", height: 70, width: 140 },
  { name: "DataRoot", logo: "/Assets/client/31.png", height: 70, width: 140 },
  { name: "FlowCore", logo: "/Assets/client/9.png", height: 70, width: 140 },
  { name: "VisionLoop", logo: "/Assets/client/17.png", height: 70, width: 140 },
  { name: "Orbitix", logo: "/Assets/client/42.png", height: 70, width: 140 },
  { name: "QuickStack", logo: "/Assets/client/28.png", height: 70, width: 140 },
  { name: "BrightForge", logo: "/Assets/client/20.png", height: 70, width: 140 },
  { name: "InnoWave", logo: "/Assets/client/10.png", height: 70, width: 140 },
  { name: "CorePulse", logo: "/Assets/client/59.svg", height: 70, width: 140 },
  { name: "PixelRise", logo: "/Assets/client/1.png", height: 90, width: 180 },
  { name: "TaskFlow", logo: "/Assets/client/8.jpg", height: 70, width: 140 },
  { name: "TechNest", logo: "/Assets/client/47.png", height: 70, width: 140 },
  { name: "FusionLabs", logo: "/Assets/client/45.png", height: 80, width: 160 },
  { name: "DataSpring", logo: "/Assets/client/40.png", height: 70, width: 140 },
  { name: "CloudShift", logo: "/Assets/client/16.png", height: 70, width: 140 },
  { name: "QuantumLabs", logo: "/Assets/client/48.png", height: 80, width: 160 },
  { name: "NextOrbit", logo: "/Assets/client/50.png", height: 70, width: 140 },
  { name: "BrightHive", logo: "/Assets/client/5.png", height: 70, width: 140 },
  { name: "CodeVibe", logo: "/Assets/client/43.png", height: 70, width: 140 },
  { name: "SoftPeak", logo: "/Assets/client/6.jpg", height: 80, width: 160 },
  { name: "NexaWave", logo: "/Assets/client/2.png", height: 100, width: 200 },
  { name: "AlphaNest", logo: "/Assets/client/36.jpg", height: 70, width: 140 },
  { name: "LogicFlow", logo: "/Assets/client/11.png", height: 70, width: 140 },
  { name: "BrightTrail", logo: "/Assets/client/64.avif", height: 70, width: 140 },
  { name: "SkyLogic", logo: "/Assets/client/46.png", height: 70, width: 140 },
  { name: "VisionSpark", logo: "/Assets/client/34.jpg", height: 80, width: 160 },
  { name: "CloudPulse", logo: "/Assets/client/39.png", height: 70, width: 140 },
  { name: "CoreNova", logo: "/Assets/client/58.jpg", height: 70, width: 140 },
  { name: "DataLink", logo: "/Assets/client/49.png", height: 70, width: 140 },
  { name: "PixelAxis", logo: "/Assets/client/65.jpg", height: 80, width: 160 },
  { name: "BrightWorks", logo: "/Assets/client/4.png", height: 70, width: 140 },
  { name: "NovaShift", logo: "/Assets/client/37.png", height: 70, width: 140 },
];





  return (
    <div className="w-full h-[200px] bg-black flex flex-col justify-center px-4 md:px-10 overflow-hidden ">
  <div className="mb-6 text-center">
    <h2 className="text-3xl md:text-5xl font-extrabold text-[#ffa200] mb-2 tracking-tight drop-shadow-[0_0_2px_#ffa200]">
      Our Valued Clients
    </h2>
    <p className="text-sm md:text-base text-gray-300 font-semibold">
      Proudly partnering with leading brands and innovators worldwide
    </p>
  </div>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-16 items-center"
          animate={{ x: [-width, 0] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-24 w-40 md:h-28 md:w-48 transition-transform duration-300 hover:scale-105"
            >
              <div className="rounded-xl p-2 flex items-center justify-center w-full h-full  ">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain max-h-full max-w-full rounded-2xl"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
