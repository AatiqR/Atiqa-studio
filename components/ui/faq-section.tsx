"use client";

import { useId, useState, type PointerEvent } from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How do your thumbnails help me get more clicks on YouTube?",
    answer:
      "I design thumbnails using attention psychology, strong contrast, emotions, and curiosity triggers so viewers feel forced to click your video instead of scrolling away.",
  },
  {
    question: "Will your thumbnails match my channel style and branding?",
    answer:
      "Yes. I study your channel, content type, and audience first, then create thumbnails that match your brand while still maximizing clicks and visibility.",
  },
  {
    question: "Can good thumbnails really increase my views?",
    answer:
      "Yes. A strong thumbnail improves click-through rate (CTR), which directly increases YouTube impressions, views, and overall channel growth.",
  },
  {
    question: "How do you decide what design will perform best?",
    answer:
      "I analyze your niche, competitors, trending styles, and audience behavior to create thumbnails that are proven to attract more attention and engagement.",
  },
  {
    question: "Do you design thumbnails for all types of YouTube channels?",
    answer:
      "Yes. I work with gaming, educational, business, lifestyle, finance, vlog, and motivational channels with custom strategies for each niche.",
  },
  {
    question: "What makes your designs different from others?",
    answer:
      "My focus is not just design — it’s performance. Every thumbnail is built to increase CTR, attract attention in 1 second, and convert viewers into clicks.",
  },
  {
    question: "How fast will I receive my thumbnails or designs?",
    answer:
      "Most thumbnail designs are delivered within 24–48 hours depending on complexity, without compromising quality or creativity.",
  },
  {
    question: "Can I request changes if I don’t like the design?",
    answer:
      "Yes. I offer revisions to make sure the final design fully matches your expectations and performs well for your audience.",
  },
  {
    question: "Do I need to give you ideas for every design?",
    answer:
      "No. You just provide the video topic or goal — I handle the full creative direction, concept, and execution for you.",
  },
  {
    question: "How do I know your service will actually improve my channel?",
    answer:
      "My designs are built using proven CTR principles and real performance psychology used by top YouTubers to increase views and channel growth.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const instanceId = useId();

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();

    if (!bounds.width || !bounds.height) return;

    const x = Math.min(
      Math.max(event.clientX - bounds.left, 0),
      bounds.width,
    );

    const y = Math.min(
      Math.max(event.clientY - bounds.top, 0),
      bounds.height,
    );

    const tiltX = ((0.5 - y / bounds.height) * 1.2).toFixed(2);
    const tiltY = ((x / bounds.width - 0.5) * 1.2).toFixed(2);

    card.style.setProperty("--faq-pointer-x", `${x}px`);
    card.style.setProperty("--faq-pointer-y", `${y}px`);
    card.style.setProperty("--faq-tilt-x", `${tiltX}deg`);
    card.style.setProperty("--faq-tilt-y", `${tiltY}deg`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;

    card.style.removeProperty("--faq-pointer-x");
    card.style.removeProperty("--faq-pointer-y");
    card.style.removeProperty("--faq-tilt-x");
    card.style.removeProperty("--faq-tilt-y");
  };

  return (
    <section
      id="faq"
      aria-labelledby={`${instanceId}-heading`}
      className="portfolio-faq relative isolate min-h-screen overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      {/* Ambient background effects */}
      <div
        aria-hidden="true"
        className="portfolio-faq-ambient portfolio-faq-ambient--top"
      />

      <div
        aria-hidden="true"
        className="portfolio-faq-ambient portfolio-faq-ambient--bottom"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Heading */}
        <header className="mb-11 sm:mb-14">
          <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/50">
            <span>FAQ</span>

            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#39FF14]/70"
            />

            <span>{String(faqs.length).padStart(2, "0")}</span>
          </div>

          <h2
            id={`${instanceId}-heading`}
            className={`${bebasNeue.className} text-[3.4rem] leading-[0.84] tracking-wide text-white sm:text-7xl md:text-8xl lg:text-[7rem]`}
          >
            Questions?
          </h2>

          <p className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#39FF14] sm:mt-4 sm:text-5xl md:text-6xl">
            We got answers.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            const triggerId = `${instanceId}-trigger-${index}`;
            const answerId = `${instanceId}-answer-${index}`;

            return (
              <article
                key={faq.question}
                className={`portfolio-faq-card ${
                  isOpen ? "portfolio-faq-card--open" : ""
                }`}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
              >
                <h3 className="portfolio-faq-item-heading">
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                    className="portfolio-faq-trigger"
                  >
                    {/* Number */}
                    <span
                      aria-hidden="true"
                      className={`${bebasNeue.className} portfolio-faq-index`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span className="portfolio-faq-question">
                      {faq.question}
                    </span>

                    {/* Plus / X Icon */}
                    <span
                      aria-hidden="true"
                      className="portfolio-faq-icon"
                    >
                      <span className="portfolio-faq-icon__line" />

                      <span className="portfolio-faq-icon__line portfolio-faq-icon__line--vertical" />
                    </span>
                  </button>
                </h3>

                {/* Answer */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  className={`portfolio-faq-answer ${
                    isOpen ? "portfolio-faq-answer--open" : ""
                  }`}
                >
                  <div className="portfolio-faq-answer-clip">
                    <div className="portfolio-faq-answer-content">
                      {faq.answer
                        .split(/\n\s*\n/)
                        .map((paragraph, paragraphIndex) => (
                          <p
                            key={`${faq.question}-${paragraphIndex}`}
                          >
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        /* =========================================================
           FAQ ROOT
        ========================================================= */

        .portfolio-faq {
          --faq-accent: #39ff14;
        }

        /* =========================================================
           BACKGROUND GRID
        ========================================================= */

        .portfolio-faq::before {
          position: absolute;
          inset: 0;
          z-index: 0;
          content: "";
          pointer-events: none;
          opacity: 0.42;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );

          background-size: 44px 44px;

          -webkit-mask-image: radial-gradient(
            circle at center,
            black,
            transparent 77%
          );

          mask-image: radial-gradient(
            circle at center,
            black,
            transparent 77%
          );
        }

        .portfolio-faq::after {
          position: absolute;
          inset: 0;
          z-index: 0;
          content: "";
          pointer-events: none;

          background: radial-gradient(
            circle at 50% 45%,
            transparent 18%,
            rgba(0, 0, 0, 0.62) 100%
          );
        }

        /* =========================================================
           GREEN AMBIENT GLOW
        ========================================================= */

        .portfolio-faq-ambient {
          position: absolute;
          z-index: 0;
          border-radius: 9999px;
          pointer-events: none;

          background: radial-gradient(
            circle,
            rgba(57, 255, 20, 0.15) 0%,
            rgba(57, 255, 20, 0.055) 34%,
            transparent 70%
          );

          filter: blur(12px);
        }

        .portfolio-faq-ambient--top {
          top: -16rem;
          left: 50%;
          width: 44rem;
          height: 44rem;
          transform: translateX(-50%);
        }

        .portfolio-faq-ambient--bottom {
          right: -18rem;
          bottom: -22rem;
          width: 42rem;
          height: 42rem;
          opacity: 0.65;
        }

        /* =========================================================
           FAQ CARD
        ========================================================= */

        .portfolio-faq-card {
          position: relative;
          isolation: isolate;
          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.105);
          border-radius: 1.25rem;

          background: linear-gradient(
            128deg,
            rgba(255, 255, 255, 0.07) 0%,
            rgba(17, 17, 17, 0.92) 42%,
            rgba(0, 0, 0, 0.96) 100%
          );

          box-shadow:
            0 18px 42px rgba(0, 0, 0, 0.38),
            0 3px 10px rgba(0, 0, 0, 0.26),
            inset 0 1px 0 rgba(255, 255, 255, 0.085),
            inset 0 -1px 0 rgba(57, 255, 20, 0.045);

          -webkit-backdrop-filter: blur(16px) saturate(120%);
          backdrop-filter: blur(16px) saturate(120%);

          transform: translateZ(0);

          transition:
            transform 560ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 460ms cubic-bezier(0.16, 1, 0.3, 1),
            background 460ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 460ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-faq-card::before,
        .portfolio-faq-card::after {
          position: absolute;
          inset: 0;
          z-index: -1;
          content: "";
          pointer-events: none;
        }

        /* Cursor-following green glow */
        .portfolio-faq-card::before {
          opacity: 0;

          background: radial-gradient(
            22rem circle at
              var(--faq-pointer-x, 50%)
              var(--faq-pointer-y, 0%),
            rgba(57, 255, 20, 0.14),
            transparent 46%
          );

          transition:
            opacity 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Glass highlight */
        .portfolio-faq-card::after {
          opacity: 0.72;

          background: linear-gradient(
            118deg,
            rgba(255, 255, 255, 0.095),
            transparent 28%,
            transparent 73%,
            rgba(57, 255, 20, 0.045)
          );
        }

        /* =========================================================
           OPEN CARD
        ========================================================= */

        .portfolio-faq-card--open {
          border-color: rgba(57, 255, 20, 0.42);

          background: linear-gradient(
            128deg,
            rgba(255, 255, 255, 0.085) 0%,
            rgba(57, 255, 20, 0.09) 45%,
            rgba(17, 17, 17, 0.96) 100%
          );

          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(57, 255, 20, 0.055),
            inset 0 1px 0 rgba(255, 255, 255, 0.11),
            inset 0 -1px 0 rgba(57, 255, 20, 0.16);
        }

        .portfolio-faq-card--open::before {
          opacity: 0.55;
        }

        .portfolio-faq-card:focus-within {
          border-color: rgba(57, 255, 20, 0.58);
        }

        .portfolio-faq-item-heading {
          margin: 0;
        }

        /* =========================================================
           TRIGGER
        ========================================================= */

        .portfolio-faq-trigger {
          position: relative;
          z-index: 1;

          display: grid;
          width: 100%;
          min-height: 4.75rem;

          grid-template-columns: 2.25rem minmax(0, 1fr) auto;

          align-items: center;
          gap: 1rem;

          border: 0;
          padding: 1rem;

          color: #ffffff;
          cursor: pointer;

          background: transparent;
          text-align: left;

          -webkit-tap-highlight-color: transparent;
        }

        .portfolio-faq-trigger:focus-visible {
          outline: none;

          box-shadow:
            inset 0 0 0 2px rgba(57, 255, 20, 0.9),
            inset 0 0 0 4px rgba(0, 0, 0, 0.74);
        }

        /* =========================================================
           NUMBER
        ========================================================= */

        .portfolio-faq-index {
          color: rgba(255, 255, 255, 0.42);

          font-size: 1.35rem;
          line-height: 1;
          letter-spacing: 0.08em;

          transition:
            color 380ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 380ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* =========================================================
           QUESTION
        ========================================================= */

        .portfolio-faq-question {
          min-width: 0;

          font-size: 1rem;
          font-weight: 600;
          line-height: 1.45;
          letter-spacing: -0.015em;

          transition:
            color 380ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 380ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* =========================================================
           PLUS / CLOSE ICON
        ========================================================= */

        .portfolio-faq-icon {
          position: relative;

          display: grid;
          width: 2.5rem;
          height: 2.5rem;

          flex: none;
          place-items: center;
          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 9999px;

          background: rgba(255, 255, 255, 0.035);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 6px 16px rgba(0, 0, 0, 0.18);

          transition:
            transform 500ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 380ms cubic-bezier(0.16, 1, 0.3, 1),
            background 380ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 380ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-faq-icon__line {
          position: absolute;

          width: 0.8rem;
          height: 1.5px;

          border-radius: 9999px;

          background: #ffffff;

          transform-origin: center;

          transition:
            transform 500ms cubic-bezier(0.16, 1, 0.3, 1),
            opacity 320ms ease;
        }

        .portfolio-faq-icon__line--vertical {
          transform: rotate(90deg);
        }

        /* =========================================================
           OPEN STATE
        ========================================================= */

        .portfolio-faq-card--open .portfolio-faq-index {
          color: var(--faq-accent);
          transform: translateY(-1px);
        }

        .portfolio-faq-card--open .portfolio-faq-icon {
          border-color: rgba(57, 255, 20, 0.62);

          background: rgba(57, 255, 20, 0.12);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.13),
            0 9px 22px rgba(57, 255, 20, 0.13);

          transform: rotate(45deg) scale(1.03);
        }

        /* =========================================================
           ANSWER ANIMATION
        ========================================================= */

        .portfolio-faq-answer {
          position: relative;
          z-index: 1;

          display: grid;
          grid-template-rows: 0fr;

          transition:
            grid-template-rows 620ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-faq-answer--open {
          grid-template-rows: 1fr;
        }

        .portfolio-faq-answer-clip {
          min-height: 0;
          overflow: hidden;
        }

        .portfolio-faq-answer-content {
          padding: 0 1rem 1.25rem 4.25rem;

          color: rgba(255, 255, 255, 0.69);

          font-size: 0.9375rem;
          line-height: 1.75;

          opacity: 0;
          filter: blur(3px);

          transform: translateY(-0.5rem);

          transition:
            opacity 330ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 500ms cubic-bezier(0.16, 1, 0.3, 1),
            filter 420ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-faq-answer-content p + p {
          margin-top: 1rem;
        }

        .portfolio-faq-answer--open .portfolio-faq-answer-content {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);

          transition-delay: 70ms;
        }

        /* =========================================================
           TABLET / DESKTOP
        ========================================================= */

        @media (min-width: 640px) {
          .portfolio-faq-trigger {
            min-height: 5.5rem;

            grid-template-columns: 2.75rem minmax(0, 1fr) auto;

            gap: 1.25rem;
            padding: 1.25rem 1.5rem;
          }

          .portfolio-faq-index {
            font-size: 1.55rem;
          }

          .portfolio-faq-question {
            font-size: 1.125rem;
          }

          .portfolio-faq-icon {
            width: 2.75rem;
            height: 2.75rem;
          }

          .portfolio-faq-answer-content {
            padding: 0 1.5rem 1.5rem 5.5rem;

            font-size: 1rem;
          }
        }

        /* =========================================================
           DESKTOP HOVER
        ========================================================= */

        @media (hover: hover) and (pointer: fine) {
          .portfolio-faq-card:hover {
            border-color: rgba(255, 255, 255, 0.2);

            box-shadow:
              0 28px 60px rgba(0, 0, 0, 0.5),
              0 8px 20px rgba(0, 0, 0, 0.25),
              inset 0 1px 0 rgba(255, 255, 255, 0.12),
              inset 0 -1px 0 rgba(57, 255, 20, 0.08);

            transform:
              perspective(1200px)
              translateY(-4px)
              rotateX(var(--faq-tilt-x, 0deg))
              rotateY(var(--faq-tilt-y, 0deg));
          }

          .portfolio-faq-card:hover::before {
            opacity: 0.9;
          }

          .portfolio-faq-card:hover .portfolio-faq-question {
            color: rgba(255, 255, 255, 0.96);
            transform: translateX(2px);
          }

          .portfolio-faq-card:hover .portfolio-faq-index {
            color: rgba(255, 255, 255, 0.64);
          }

          .portfolio-faq-card--open:hover {
            border-color: rgba(57, 255, 20, 0.62);
          }

          .portfolio-faq-card--open:hover .portfolio-faq-index {
            color: var(--faq-accent);
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 639px) {
          .portfolio-faq-card {
            border-radius: 1rem;

            -webkit-backdrop-filter: blur(10px) saturate(110%);
            backdrop-filter: blur(10px) saturate(110%);
          }

          .portfolio-faq-ambient--top {
            top: -17rem;
            width: 33rem;
            height: 33rem;
          }

          .portfolio-faq-question {
            font-size: 0.96rem;
            line-height: 1.4;
          }

          .portfolio-faq-trigger {
            gap: 0.75rem;
          }

          .portfolio-faq-index {
            font-size: 1.2rem;
          }

          .portfolio-faq-icon {
            width: 2.3rem;
            height: 2.3rem;
          }

          .portfolio-faq-answer-content {
            padding-left: 3.95rem;
            padding-right: 1rem;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .portfolio-faq *,
          .portfolio-faq *::before,
          .portfolio-faq *::after {
            transition-duration: 1ms !important;
            transition-delay: 0ms !important;
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
          }

          .portfolio-faq-card:hover {
            transform: none !important;
          }

          .portfolio-faq-card::before {
            display: none;
          }

          .portfolio-faq-answer-content {
            filter: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}