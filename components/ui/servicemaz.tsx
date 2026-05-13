"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Video Editing",
    description:
      "High-retention, scroll-stopping video edits crafted to boost watch time, increase engagement, and turn casual viewers into loyal followers and paying clients.",
  },
  {
    number: "02",
    title: "Graphic Designing",
    description:
      "Visually striking designs and click-magnet thumbnails built to grab attention instantly, strengthen brand identity, and drive more clicks across platforms.",
  },
  {
    number: "03",
    title: "Website Development",
    description:
      "Fast, modern, conversion-focused websites designed to load quickly, build trust, and convert visitors into leads, bookings, and customers.",
  },
  {
    number: "04",
    title: "Social Media Management",
    description:
      "Strategic content planning, posting, and optimization to grow reach, maintain consistency, and turn social media presence into real business growth.",
  },
];

/* Faster, smooth premium easing */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* -------------------------------------------------
   Animated service row (COMING FROM TOP)
-------------------------------------------------- */
function ServiceRow({
  service,
  index,
  scrollYProgress,
}: {
  service: (typeof services)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  /* 🔥 Coming from TOP instead of left */
  const rowY = useTransform(
    scrollYProgress,
    [0.25 + index * 0.1, 0.4 + index * 0.1],
    [-120, 0] // 🔥 top → natural drop
  );

  const rowOpacity = useTransform(
    scrollYProgress,
    [0.22 + index * 0.1, 0.32 + index * 0.1],
    [0, 1]
  );

  const rowScale = useTransform(
    scrollYProgress,
    [0.25 + index * 0.1, 0.4 + index * 0.1],
    [0.96, 1]
  );

  return (
    <motion.div
      id="Services"
      style={{ y: rowY, opacity: rowOpacity, scale: rowScale }}
      transition={{ duration: 0.8, ease: EASE }} // 🔥 slightly faster
      className="flex items-start gap-8 md:gap-20
                 py-20 border-b border-black/15
                 last:border-b-0 w-full"
    >
      {/* HUGE number */}
      <div
        className="text-[clamp(5.5rem,10vw,9rem)]
                   font-black tracking-tighter
                   leading-none text-black shrink-0"
      >
        {service.number}
      </div>

      {/* Text block */}
      <div className="flex flex-col gap-5 max-w-3xl">
        <h3
          className="text-xl md:text-2xl font-black
                     uppercase tracking-wide text-black"
        >
          {service.title}
        </h3>
        <p
          className="text-base md:text-lg
                     leading-relaxed text-black"
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------
   Main section
-------------------------------------------------- */
export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* 🔥 Section reveal from TOP (faster) */
  const sectionY = useTransform(scrollYProgress, [0, 0.18], [-120, 0]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  /* Background SERVICES motion */
  const centerScale = useTransform(scrollYProgress, [0.15, 0.4], [0.9, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 0.08]);

  return (
    <section ref={ref} className="relative w-full bg-black overflow-hidden">
      <motion.div
        style={{ y: sectionY, opacity: sectionOpacity }}
        transition={{ duration: 0.9, ease: EASE }} // 🔥 faster than before
        className="relative w-full bg-white
                   rounded-t-[64px] md:rounded-t-[96px]
                   px-6 md:px-20 pt-32 pb-32"
      >
        {/* Giant background word */}
        <motion.div
          style={{ scale: centerScale, opacity: centerOpacity }}
          className="pointer-events-none absolute inset-0
                     flex items-start justify-center pt-24"
        >
          <h1
            className="text-[clamp(6rem,22vw,18rem)]
                       font-black tracking-tighter uppercase
                       text-black select-none"
          >
            Services
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ y: -60, opacity: 0 }} // 🔥 from top
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 mx-auto text-center w-fit
                     text-[clamp(3.5rem,8vw,7rem)]
                     font-black uppercase tracking-tight
                     mb-28 text-black"
        >
          Services
        </motion.h2>

        {/* Services list */}
        <div className="relative z-10 flex flex-col">
          {services.map((service, index) => (
            <ServiceRow
              key={service.number}
              service={service}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
