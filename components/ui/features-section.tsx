"use client";

import { Geist } from "next/font/google";
import {
  Grid,
  Zap,
  PuzzleIcon as PuzzlePiece,
  CreditCard,
  Users,
  Infinity,
  type LucideIcon,
} from "lucide-react";
import {
  type CSSProperties,
  type PointerEvent,
  useEffect,
  useRef,
} from "react";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const features: ReadonlyArray<{
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    number: "01",
    title: "High CTR Thumbnail Design",
    description:
      "Thumbnails designed with strong psychology, emotion, contrast, and curiosity to increase clicks, views, and overall YouTube growth.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Scroll-Stopping Posters",
    description:
      "Eye-catching posters and social media designs that instantly grab attention and make your brand look premium and professional.",
    icon: Grid,
  },
  {
    number: "03",
    title: "Premium Brand Identity",
    description:
      "Logos, brand visuals, and design systems that build trust, consistency, and a memorable business identity.",
    icon: PuzzlePiece,
  },
  {
    number: "04",
    title: "Menu & Packaging Design",
    description:
      "Clean and attractive menu designs plus packaging visuals that help restaurants and brands increase customer attraction and sales.",
    icon: CreditCard,
  },
  {
    number: "05",
    title: "Designed For Your Audience",
    description:
      "Every design is created according to your audience, niche, content style, and business goals for maximum engagement.",
    icon: Users,
  },
  {
    number: "06",
    title: "Fast Delivery & Revisions",
    description:
      "Quick turnaround times with smooth communication and revisions to ensure every design matches your exact vision perfectly.",
    icon: Infinity,
  },
];

type PointerPosition = {
  element: HTMLLIElement;
  x: number;
  y: number;
};

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pointerPositionRef = useRef<PointerPosition | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveal = () => section.classList.add("is-revealed");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const updatePointerLight = (event: PointerEvent<HTMLLIElement>) => {
    if (event.pointerType !== "mouse") return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();

    if (!bounds.width || !bounds.height) return;

    pointerPositionRef.current = {
      element: card,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };

    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      const position = pointerPositionRef.current;

      if (position) {
        position.element.style.setProperty(
          "--mouse-x",
          `${position.x}px`,
        );
        position.element.style.setProperty(
          "--mouse-y",
          `${position.y}px`,
        );
      }

      frameRef.current = null;
    });
  };

  const clearPointerLight = (event: PointerEvent<HTMLLIElement>) => {
    if (event.pointerType !== "mouse") return;

    event.currentTarget.style.setProperty("--mouse-x", "50%");
    event.currentTarget.style.setProperty("--mouse-y", "50%");
  };

  return (
    <section
      ref={sectionRef}
      className={`features-section ${geist.className}`}
      aria-labelledby="benefits-heading"
    >
      <div className="atmosphere" aria-hidden="true" />

      <div className="features-shell">
        <header className="section-header">
          <p className="eyebrow">
            <span aria-hidden="true" />
            WHY CREATORS & BRANDS CHOOSE ME
          </p>

          <h2 id="benefits-heading">
            <span>More Than Just</span>
            <span className="accent-heading">Graphic Design</span>
          </h2>

          <p className="intro">
            Professional graphic design solutions focused on attention,
            clicks, branding, engagement, and business growth.
          </p>
        </header>

        <ol className="feature-grid">
          {features.map(
            ({ number, title, description, icon: Icon }, index) => {
              const revealStyle = {
                "--reveal-delay": `${index * 75}ms`,
              } as CSSProperties & Record<"--reveal-delay", string>;

              return (
                <li
                  className="feature-card"
                  key={number}
                  onPointerMove={updatePointerLight}
                  onPointerLeave={clearPointerLight}
                  style={revealStyle}
                >
                  <div className="card-surface">
                    <span
                      className="feature-number"
                      aria-hidden="true"
                    >
                      {number}
                    </span>

                    <div
                      className="card-topline"
                      aria-hidden="true"
                    >
                      <span />
                    </div>

                    <div className="icon-chamber">
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.55}
                      />
                    </div>

                    <div className="card-copy">
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>

                    <span
                      className="corner-mark"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              );
            },
          )}
        </ol>
      </div>

      <style jsx>{`
        .features-section {
          --green: #39ff14;
          position: relative;
          isolation: isolate;
          overflow: clip;
          background: #000;
          color: #fff;
          padding: clamp(5.5rem, 9vw, 9.5rem)
            clamp(1rem, 4vw, 4rem);
        }

        .atmosphere {
          position: absolute;
          z-index: -1;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse 52% 35% at 50% 52%,
              rgba(57, 255, 20, 0.08),
              transparent 68%
            ),
            radial-gradient(
              ellipse 28% 18% at 7% 18%,
              rgba(57, 255, 20, 0.045),
              transparent 75%
            ),
            linear-gradient(
              180deg,
              #000 0%,
              #020402 50%,
              #000 100%
            );
        }

        .features-shell {
          max-width: 84rem;
          margin: 0 auto;
        }

        .section-header {
          max-width: 50rem;
          margin: 0 auto clamp(3.5rem, 7vw, 6.5rem);
          text-align: center;
          opacity: 0;
          transform: translate3d(0, 16px, 0);
          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .is-revealed .section-header {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          margin: 0 0 1.25rem;
          color: var(--green);
          font-size: 0.71rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          line-height: 1.4;
          text-shadow: 0 0 18px rgba(57, 255, 20, 0.3);
        }

        .eyebrow span {
          width: 1.9rem;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--green)
          );
          box-shadow: 0 0 8px rgba(57, 255, 20, 0.45);
          animation: accent-breathe 4s ease-in-out infinite;
        }

        h2 {
          margin: 0;
          font-size: clamp(2.65rem, 6vw, 5.7rem);
          font-weight: 700;
          letter-spacing: -0.065em;
          line-height: 0.96;
          text-wrap: balance;
        }

        h2 span {
          display: block;
        }

        .accent-heading {
          color: var(--green);
          text-shadow:
            0 0 12px rgba(57, 255, 20, 0.3),
            0 0 30px rgba(57, 255, 20, 0.12);
        }

        .intro {
          max-width: 46rem;
          margin: clamp(1.5rem, 3vw, 2rem) auto 0;
          color: #9ca3af;
          font-size: clamp(1rem, 1.45vw, 1.18rem);
          line-height: 1.7;
          text-wrap: balance;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(
            3,
            minmax(0, 1fr)
          );
          gap: clamp(0.8rem, 1.7vw, 1.45rem);
          margin: 0;
          padding: 0;
          list-style: none;
          perspective: 1300px;
        }

        .feature-card {
          --mouse-x: 50%;
          --mouse-y: 50%;
          min-width: 0;
          opacity: 0;
          transform:
            translate3d(0, 20px, 0)
            scale(0.985);
          transition:
            opacity 0.7s var(--reveal-delay)
              cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.7s var(--reveal-delay)
              cubic-bezier(0.16, 1, 0.3, 1);
        }

        .is-revealed .feature-card {
          opacity: 1;
          transform:
            translate3d(0, 0, 0)
            scale(1);
        }

        .card-surface {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 21.25rem;
          height: 100%;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.105);
          border-radius: 1.35rem;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.075),
              rgba(255, 255, 255, 0.018) 35%,
              rgba(57, 255, 20, 0.025) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.095),
            inset 0 -1px 0 rgba(0, 0, 0, 0.45),
            0 22px 48px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transform: translate3d(0, 0, 0);
          transition:
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.7s ease,
            box-shadow 0.7s ease,
            background 0.7s ease;
        }

        .card-surface::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background:
            radial-gradient(
              260px circle at var(--mouse-x) var(--mouse-y),
              rgba(255, 255, 255, 0.12),
              transparent 42%
            ),
            radial-gradient(
              300px circle at var(--mouse-x) var(--mouse-y),
              rgba(57, 255, 20, 0.1),
              transparent 58%
            );
          transition: opacity 0.45s ease;
        }

        .card-surface::after {
          content: "";
          position: absolute;
          inset: -1px;
          padding: 1px;
          border-radius: inherit;
          pointer-events: none;
          opacity: 0.26;
          background:
            conic-gradient(
              from 100deg,
              transparent 0deg,
              transparent 120deg,
              rgba(57, 255, 20, 0.8) 150deg,
              transparent 185deg,
              transparent 360deg
            );
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: edge-light 9s linear infinite;
        }

        .card-topline {
          position: relative;
          z-index: 1;
          height: 2.75rem;
          margin: 0.9rem 1rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.09);
        }

        .card-topline span {
          display: block;
          width: 2.4rem;
          height: 1px;
          background: rgba(57, 255, 20, 0.55);
          box-shadow: 0 0 10px rgba(57, 255, 20, 0.35);
        }

        .feature-number {
          position: absolute;
          z-index: 0;
          top: 0.3rem;
          right: 1rem;
          color: rgba(255, 255, 255, 0.065);
          font-size: clamp(4.4rem, 7vw, 6.6rem);
          font-weight: 700;
          letter-spacing: -0.1em;
          line-height: 1;
          transition: color 0.7s ease;
        }

        .icon-chamber {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          width: 3.55rem;
          height: 3.55rem;
          margin: 0 1.7rem 1.9rem;
          border: 1px solid rgba(57, 255, 20, 0.38);
          border-radius: 1rem;
          background:
            linear-gradient(
              145deg,
              rgba(57, 255, 20, 0.16),
              rgba(57, 255, 20, 0.035)
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            0 8px 20px rgba(0, 0, 0, 0.26),
            0 0 24px rgba(57, 255, 20, 0.08);
          color: var(--green);
          transition:
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.7s ease,
            background 0.7s ease;
        }

        .icon-chamber :global(svg) {
          width: 1.62rem;
          height: 1.62rem;
          filter:
            drop-shadow(
              0 0 7px rgba(57, 255, 20, 0.28)
            );
        }

        .card-copy {
          position: relative;
          z-index: 1;
          margin-top: auto;
          padding: 0 1.7rem 1.75rem;
        }

        .card-copy h3 {
          margin: 0 0 0.75rem;
          color: #fff;
          font-size: clamp(1.22rem, 1.7vw, 1.48rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.17;
          transition: color 0.5s ease;
        }

        .card-copy p {
          margin: 0;
          color: #b2b5ba;
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .corner-mark {
          position: absolute;
          right: 1rem;
          bottom: 1rem;
          width: 0.45rem;
          height: 0.45rem;
          border-right: 1px solid
            rgba(57, 255, 20, 0.55);
          border-bottom: 1px solid
            rgba(57, 255, 20, 0.55);
          opacity: 0.65;
        }

        @media (hover: hover) and (pointer: fine) {
          .feature-card:hover .card-surface {
            border-color: rgba(143, 255, 123, 0.32);
            background:
              linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.1),
                rgba(255, 255, 255, 0.026) 35%,
                rgba(57, 255, 20, 0.055) 100%
              );
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 -1px 0 rgba(0, 0, 0, 0.45),
              0 34px 64px rgba(0, 0, 0, 0.48),
              0 12px 30px rgba(57, 255, 20, 0.08);
            transform:
              translate3d(0, -8px, 0)
              rotateX(1.35deg)
              rotateY(-1.1deg);
          }

          .feature-card:hover
            .card-surface::before {
            opacity: 1;
          }

          .feature-card:hover
            .card-surface::after {
            opacity: 0.62;
          }

          .feature-card:hover .icon-chamber {
            background:
              linear-gradient(
                145deg,
                rgba(57, 255, 20, 0.23),
                rgba(57, 255, 20, 0.055)
              );
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 14px 26px rgba(0, 0, 0, 0.32),
              0 0 30px rgba(57, 255, 20, 0.16);
            transform:
              translate3d(0, -4px, 0)
              rotate(-3deg);
          }

          .feature-card:hover .feature-number {
            color: rgba(255, 255, 255, 0.105);
          }

          .feature-card:hover .card-copy h3 {
            color: #f3ffef;
          }
        }

        @keyframes edge-light {
          to {
            transform: rotate(1turn);
          }
        }

        @keyframes accent-breathe {
          50% {
            opacity: 0.45;
            transform: scaleX(0.68);
            transform-origin: right;
          }
        }

        @media (max-width: 66rem) {
          .feature-grid {
            grid-template-columns: repeat(
              2,
              minmax(0, 1fr)
            );
          }

          .card-surface {
            min-height: 20rem;
          }
        }

        @media (max-width: 42rem) {
          .features-section {
            padding-inline: 1rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .eyebrow {
            font-size: 0.64rem;
            letter-spacing: 0.18em;
          }

          h2 {
            font-size: clamp(2.65rem, 12vw, 4rem);
          }

          .intro {
            font-size: 0.98rem;
            line-height: 1.65;
          }

          .feature-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }

          .card-surface {
            min-height: 18.5rem;
            border-radius: 1.15rem;
          }

          .card-copy {
            padding: 0 1.35rem 1.45rem;
          }

          .icon-chamber {
            margin-left: 1.35rem;
            margin-bottom: 1.5rem;
          }

          .card-topline {
            margin-inline: 0.8rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .section-header,
          .feature-card,
          .card-surface,
          .icon-chamber,
          .feature-number {
            transition: none !important;
            animation: none !important;
          }

          .section-header,
          .feature-card {
            opacity: 1;
            transform: none;
          }

          .card-surface::after {
            animation: none;
            opacity: 0.18;
          }
        }
      `}</style>
    </section>
  );
}