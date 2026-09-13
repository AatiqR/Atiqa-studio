"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

interface Step {
  id: number;
  number: string;
  title: string;
  subtitle: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    number: "01",
    title: "Analyze Your Content",
    subtitle:
      "I study your video topic, audience, niche, and competitors to understand what type of thumbnail will attract the most clicks.",
  },
  {
    id: 2,
    number: "02",
    title: "Build Click-Focused Concepts",
    subtitle:
      "Multiple thumbnail concepts are planned with powerful emotions, bold composition, strong contrast, and curiosity-driven visuals.",
  },
  {
    id: 3,
    number: "03",
    title: "Design For Maximum CTR",
    subtitle:
      "I create high-converting thumbnails using attention-grabbing typography, cinematic editing, color psychology, and scroll-stopping visuals.",
  },
  {
    id: 4,
    number: "04",
    title: "Optimize & Deliver",
    subtitle:
      "Final thumbnails are refined for YouTube performance, mobile visibility, and brand consistency to help increase clicks and audience retention.",
  },
];

const AUTOPLAY_DELAY = 4000;
const INTERACTION_PAUSE_DELAY = 9000;

const WorkflowTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const pauseUntilRef = useRef(0);

  /* -----------------------------------------------------------
     Reveal section when it enters the viewport
  ----------------------------------------------------------- */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section || typeof IntersectionObserver === "undefined") {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* -----------------------------------------------------------
     Autoplay
  ----------------------------------------------------------- */
  useEffect(() => {
    const interval = window.setInterval(() => {
      if (Date.now() < pauseUntilRef.current) {
        return;
      }

      setActiveStep((current) => (current + 1) % STEPS.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, []);

  /* -----------------------------------------------------------
     Manual step selection
  ----------------------------------------------------------- */
  const selectStep = useCallback((index: number) => {
    pauseUntilRef.current = Date.now() + INTERACTION_PAUSE_DELAY;
    setActiveStep(index);
  }, []);

  /* -----------------------------------------------------------
     Mouse light reflection
  ----------------------------------------------------------- */
  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      const card = event.currentTarget;
      const bounds = card.getBoundingClientRect();

      if (!bounds.width || !bounds.height) {
        return;
      }

      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;

      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    },
    [],
  );

  /* -----------------------------------------------------------
     Reset reflection
  ----------------------------------------------------------- */
  const handlePointerLeave = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      event.currentTarget.style.removeProperty("--mouse-x");
      event.currentTarget.style.removeProperty("--mouse-y");
    },
    [],
  );

  /* -----------------------------------------------------------
     Timeline progress
  ----------------------------------------------------------- */
  const progress =
    STEPS.length > 1
      ? (activeStep / (STEPS.length - 1)) * 100
      : 0;

  const progressStyle = {
    "--progress": `${progress}%`,
  } as CSSProperties;

  return (
    <section
      ref={sectionRef}
      className={`workflow-section ${hasEntered ? "is-visible" : ""}`}
      aria-labelledby="workflow-heading"
    >
      {/* Ambient background */}
      <div className="workflow-ambient" aria-hidden="true" />

      {/* Background grid */}
      <div className="workflow-grid-noise" aria-hidden="true" />

      <div className="workflow-shell">
        {/* -------------------------------------------------------
            HEADER
        ------------------------------------------------------- */}
        <header className="workflow-header">
          <p className="workflow-eyebrow">Workflow Process</p>

          <h2 id="workflow-heading">How I work</h2>

          <span
            className="workflow-heading-line"
            aria-hidden="true"
          />
        </header>

        {/* -------------------------------------------------------
            CURRENT STAGE
        ------------------------------------------------------- */}
        <div className="workflow-status" aria-live="polite">
          <span className="workflow-status-label">
            Current stage
          </span>

          <span className="workflow-status-number">
            {STEPS[activeStep].number} / 04
          </span>
        </div>

        {/* -------------------------------------------------------
            TIMELINE
        ------------------------------------------------------- */}
        <div className="workflow-stage">
          <div
            className="workflow-rail"
            style={progressStyle}
            aria-hidden="true"
          >
            <span className="workflow-rail-base" />
            <span className="workflow-rail-progress" />
            <span className="workflow-rail-particle" />
          </div>

          {/* -----------------------------------------------------
              STEPS
          ----------------------------------------------------- */}
          <div className="workflow-grid">
            {STEPS.map((step, index) => {
              const isActive = index === activeStep;
              const isComplete = index < activeStep;

              return (
                <article
                  key={step.id}
                  className={`workflow-item ${
                    isActive ? "is-active" : ""
                  } ${isComplete ? "is-complete" : ""}`}
                  style={
                    {
                      "--entry-delay": `${index * 110 + 120}ms`,
                    } as CSSProperties
                  }
                >
                  {/* Timeline node */}
                  <div
                    className="workflow-node-wrap"
                    aria-hidden="true"
                  >
                    <div className="workflow-node">
                      <span className="workflow-node-orbit" />
                      <span className="workflow-node-ring" />
                      <span className="workflow-node-core" />
                    </div>
                  </div>

                  {/* ------------------------------------------------
                      CARD
                  ------------------------------------------------ */}
                  <button
                    type="button"
                    className="workflow-card"
                    onClick={() => selectStep(index)}
                    onPointerMove={handlePointerMove}
                    onPointerLeave={handlePointerLeave}
                    aria-pressed={isActive}
                    aria-label={`Select step ${step.number}: ${step.title}`}
                  >
                    <span
                      className="workflow-card-glass"
                      aria-hidden="true"
                    />

                    <span
                      className="workflow-card-reflection"
                      aria-hidden="true"
                    />

                    <span
                      className="workflow-card-arc"
                      aria-hidden="true"
                    />

                    <span className="workflow-card-content">
                      {/* Step label */}
                      <span className="workflow-step-label">
                        <span>Step</span> {step.number}
                      </span>

                      {/* Giant background number */}
                      <span
                        className="workflow-number"
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>

                      {/* Content */}
                      <span className="workflow-copy">
                        <span className="workflow-title">
                          {step.title}
                        </span>

                        <span className="workflow-description">
                          {step.subtitle}
                        </span>
                      </span>

                      {/* Footer */}
                      <span
                        className="workflow-card-footer"
                        aria-hidden="true"
                      >
                        <span className="workflow-card-line" />

                        <span className="workflow-card-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>
                    </span>
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        {/* -------------------------------------------------------
            PAGINATION
        ------------------------------------------------------- */}
        <div
          className="workflow-pagination"
          aria-label="Workflow navigation"
        >
          {STEPS.map((step, index) => (
            <button
              key={step.id}
              type="button"
              className={index === activeStep ? "is-active" : ""}
              onClick={() => selectStep(index)}
              aria-label={`Go to step ${step.number}: ${step.title}`}
              aria-current={
                index === activeStep ? "step" : undefined
              }
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      {/* ===========================================================
          STYLES
      =========================================================== */}
      <style jsx>{`
        .workflow-section {
          --green: #39ff14;
          --off-white: #fafafa;

          position: relative;
          isolation: isolate;
          overflow: hidden;

          min-height: 100vh;

          display: grid;
          place-items: center;

          padding: clamp(76px, 10vw, 138px)
            clamp(16px, 4vw, 48px);

          background: #050505;
          color: var(--off-white);
        }

        /* ---------------------------------------------------------
           AMBIENT BACKGROUND
        --------------------------------------------------------- */

        .workflow-ambient,
        .workflow-grid-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .workflow-ambient {
          z-index: -2;

          background:
            radial-gradient(
              ellipse 55% 42% at 50% 48%,
              rgba(57, 255, 20, 0.09),
              transparent 72%
            ),
            radial-gradient(
              ellipse 32% 25% at 8% 76%,
              rgba(57, 255, 20, 0.045),
              transparent 78%
            ),
            radial-gradient(
              ellipse 28% 24% at 92% 22%,
              rgba(57, 255, 20, 0.035),
              transparent 78%
            );
        }

        .workflow-grid-noise {
          z-index: -1;

          opacity: 0.38;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            );

          background-size: 72px 72px;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 24%,
            black 75%,
            transparent
          );

          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            black 24%,
            black 75%,
            transparent
          );
        }

        .workflow-shell {
          width: min(100%, 1400px);
        }

        /* ---------------------------------------------------------
           HEADER
        --------------------------------------------------------- */

        .workflow-header {
          text-align: center;

          opacity: 0;
          transform: translateY(22px);

          transition:
            opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .is-visible .workflow-header {
          opacity: 1;
          transform: translateY(0);
        }

        .workflow-eyebrow {
          margin: 0 0 13px;

          color: var(--green);

          font-size: clamp(13px, 1.4vw, 17px);
          font-weight: 700;

          letter-spacing: 0.1em;

          text-transform: uppercase;

          text-shadow:
            0 0 10px rgba(57, 255, 20, 0.55),
            0 0 20px rgba(57, 255, 20, 0.32);

          animation: textGlow 2.5s ease-in-out infinite;
        }

        .workflow-header h2 {
          margin: 0;

          color: var(--off-white);

          font-size: clamp(38px, 5vw, 68px);
          font-weight: 850;

          letter-spacing: -0.065em;
          line-height: 0.95;
        }

        .workflow-heading-line {
          display: block;

          width: clamp(48px, 7vw, 80px);
          height: 3px;

          margin: 23px auto 0;

          overflow: hidden;

          border-radius: 999px;

          background: rgba(57, 255, 20, 0.2);

          box-shadow:
            0 0 8px rgba(57, 255, 20, 0.5),
            0 0 16px rgba(57, 255, 20, 0.25);
        }

        .workflow-heading-line::after {
          display: block;

          width: 100%;
          height: 100%;

          background: var(--green);

          box-shadow:
            0 0 12px rgba(57, 255, 20, 0.9),
            0 0 24px rgba(57, 255, 20, 0.45);

          content: "";

          transform: scaleX(0);
          transform-origin: left;

          transition:
            transform 800ms 240ms
              cubic-bezier(0.16, 1, 0.3, 1);
        }

        .is-visible .workflow-heading-line::after {
          transform: scaleX(1);
        }

        /* ---------------------------------------------------------
           STATUS
        --------------------------------------------------------- */

        .workflow-status {
          display: flex;

          align-items: baseline;
          justify-content: center;

          gap: 10px;

          margin:
            clamp(28px, 4vw, 48px)
            0
            clamp(26px, 4vw, 46px);

          color: rgba(250, 250, 250, 0.42);

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }

        .workflow-status-number {
          color: rgba(57, 255, 20, 0.95);

          font-size: 11px;

          text-shadow:
            0 0 10px rgba(57, 255, 20, 0.5);
        }

        /* ---------------------------------------------------------
           STAGE
        --------------------------------------------------------- */

        .workflow-stage {
          position: relative;
        }

        /* ---------------------------------------------------------
           DESKTOP RAIL
        --------------------------------------------------------- */

        .workflow-rail {
          position: absolute;

          z-index: 0;

          top: 29px;

          right: 12.5%;
          left: 12.5%;

          height: 2px;

          opacity: 0;

          transform: scaleX(0.8);
          transform-origin: left;

          transition:
            opacity 800ms 280ms ease,
            transform 900ms 280ms
              cubic-bezier(0.16, 1, 0.3, 1);
        }

        .is-visible .workflow-rail {
          opacity: 1;
          transform: scaleX(1);
        }

        .workflow-rail-base,
        .workflow-rail-progress {
          position: absolute;
          inset: 0;

          border-radius: 99px;
        }

        .workflow-rail-base {
          background: rgba(255, 255, 255, 0.12);

          box-shadow:
            0 0 0 1px rgba(57, 255, 20, 0.05);
        }

        .workflow-rail-progress {
          width: var(--progress);

          min-width: 0;

          background: linear-gradient(
            90deg,
            rgba(57, 255, 20, 0.25),
            var(--green)
          );

          box-shadow:
            0 0 8px rgba(57, 255, 20, 0.85),
            0 0 20px rgba(57, 255, 20, 0.3);

          transition:
            width 780ms
              cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-rail-particle {
          position: absolute;

          top: 50%;
          left: var(--progress);

          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: #eaffea;

          box-shadow:
            0 0 8px 3px rgba(57, 255, 20, 0.95),
            0 0 24px 8px rgba(57, 255, 20, 0.35);

          transform: translate(-50%, -50%);

          transition:
            left 780ms
              cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* ---------------------------------------------------------
           GRID
        --------------------------------------------------------- */

        .workflow-grid {
          position: relative;

          z-index: 1;

          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: clamp(14px, 1.8vw, 28px);

          perspective: 1400px;
        }

        /* ---------------------------------------------------------
           ITEM REVEAL
        --------------------------------------------------------- */

        .workflow-item {
          min-width: 0;

          opacity: 0;

          transform: translateY(28px);

          transition:
            opacity 650ms var(--entry-delay)
              cubic-bezier(0.16, 1, 0.3, 1),
            transform 650ms var(--entry-delay)
              cubic-bezier(0.16, 1, 0.3, 1);
        }

        .is-visible .workflow-item {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---------------------------------------------------------
           NODE
        --------------------------------------------------------- */

        .workflow-node-wrap {
          position: relative;

          z-index: 2;

          display: grid;

          height: 60px;

          place-items: center;
        }

        .workflow-node {
          position: relative;

          display: grid;

          width: 18px;
          height: 18px;

          place-items: center;

          border-radius: 50%;

          transition:
            transform 650ms
              cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-node-ring,
        .workflow-node-orbit,
        .workflow-node-core {
          position: absolute;

          border-radius: inherit;
        }

        .workflow-node-ring {
          inset: -5px;

          border:
            1px solid
            rgba(250, 250, 250, 0.28);

          background: rgba(5, 5, 5, 0.96);

          transition:
            border-color 500ms ease,
            box-shadow 500ms ease,
            transform 500ms ease;
        }

        .workflow-node-core {
          width: 7px;
          height: 7px;

          background: rgba(250, 250, 250, 0.65);

          box-shadow:
            0 0 0 3px #050505;

          transition:
            background 500ms ease,
            box-shadow 500ms ease,
            transform 500ms ease;
        }

        .workflow-node-orbit {
          inset: -11px;

          border: 1px solid transparent;

          opacity: 0;

          transition:
            opacity 350ms ease;
        }

        .is-complete .workflow-node-ring,
        .is-active .workflow-node-ring {
          border-color: rgba(57, 255, 20, 0.95);

          box-shadow:
            0 0 12px rgba(57, 255, 20, 0.45),
            0 0 22px rgba(57, 255, 20, 0.18);
        }

        .is-complete .workflow-node-core,
        .is-active .workflow-node-core {
          background: var(--green);

          box-shadow:
            0 0 0 3px #050505,
            0 0 13px 3px rgba(57, 255, 20, 0.8);
        }

        .is-active .workflow-node {
          transform: scale(1.16);
        }

        .is-active .workflow-node-orbit {
          border-color: rgba(57, 255, 20, 0.35);

          opacity: 1;

          animation:
            nodePulse 2.7s ease-out infinite;
        }

        /* ---------------------------------------------------------
           CARD
        --------------------------------------------------------- */

        .workflow-card {
          --mouse-x: 50%;
          --mouse-y: 0%;

          position: relative;

          display: block;

          width: 100%;

          min-height: 330px;

          overflow: hidden;

          padding: 0;

          border: 0;

          border-radius: 22px;

          background: transparent;

          color: inherit;

          cursor: pointer;

          isolation: isolate;

          text-align: left;

          transform: translateZ(0);

          transition:
            transform 650ms
              cubic-bezier(0.16, 1, 0.3, 1),
            filter 650ms
              cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-card-glass,
        .workflow-card-reflection,
        .workflow-card-arc {
          position: absolute;

          inset: 0;

          border-radius: inherit;

          pointer-events: none;
        }

        /* ---------------------------------------------------------
           GLASS
        --------------------------------------------------------- */

        .workflow-card-glass {
          z-index: -3;

          border:
            1px solid
            rgba(255, 255, 255, 0.13);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.09),
              rgba(255, 255, 255, 0.025) 28%,
              rgba(57, 255, 20, 0.045) 100%
            ),
            rgba(15, 15, 15, 0.72);

          box-shadow:
            0 14px 26px rgba(0, 0, 0, 0.22),
            0 30px 70px rgba(0, 0, 0, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(57, 255, 20, 0.07);

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          transition:
            border-color 600ms ease,
            box-shadow 600ms ease,
            background 600ms ease;
        }

        /* ---------------------------------------------------------
           MOUSE REFLECTION
        --------------------------------------------------------- */

        .workflow-card-reflection {
          z-index: -2;

          opacity: 0;

          background:
            radial-gradient(
              280px circle at
                var(--mouse-x)
                var(--mouse-y),
              rgba(120, 255, 90, 0.16),
              rgba(57, 255, 20, 0.045) 34%,
              transparent 68%
            ),
            linear-gradient(
              118deg,
              transparent 23%,
              rgba(255, 255, 255, 0.07) 43%,
              transparent 58%
            );

          transition:
            opacity 300ms ease;
        }

        /* ---------------------------------------------------------
           ANIMATED BORDER
        --------------------------------------------------------- */

        .workflow-card-arc {
          z-index: -1;

          padding: 1px;

          opacity: 0;

          background: conic-gradient(
            from 210deg,
            transparent 0deg,
            transparent 246deg,
            rgba(57, 255, 20, 0.08) 267deg,
            rgba(160, 255, 135, 0.98) 288deg,
            rgba(57, 255, 20, 0.32) 312deg,
            transparent 338deg,
            transparent 360deg
          );

          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);

          -webkit-mask-composite: xor;

          mask-composite: exclude;

          transition:
            opacity 450ms ease;
        }

        /* ---------------------------------------------------------
           CARD CONTENT
        --------------------------------------------------------- */

        .workflow-card-content {
          position: relative;

          display: flex;

          min-height: inherit;

          flex-direction: column;

          padding: clamp(22px, 2vw, 31px);
        }

        .workflow-step-label {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          color: rgba(57, 255, 20, 0.82);

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.17em;

          line-height: 1;

          text-transform: uppercase;

          transition:
            color 500ms ease;
        }

        .workflow-step-label span {
          color: rgba(250, 250, 250, 0.42);
        }

        /* ---------------------------------------------------------
           BIG NUMBER
        --------------------------------------------------------- */

        .workflow-number {
          position: absolute;

          top: clamp(39px, 4vw, 52px);

          right: clamp(16px, 1.5vw, 24px);

          z-index: -1;

          color: transparent;

          font-size: clamp(76px, 8.2vw, 118px);

          font-weight: 900;

          letter-spacing: -0.1em;

          line-height: 0.78;

          -webkit-text-stroke:
            1px rgba(57, 255, 20, 0.27);

          filter:
            drop-shadow(
              0 9px 15px
              rgba(57, 255, 20, 0.1)
            );

          opacity: 0.9;

          transition:
            opacity 600ms ease,
            transform 650ms
              cubic-bezier(0.16, 1, 0.3, 1),
            -webkit-text-stroke 600ms ease;
        }

        /* ---------------------------------------------------------
           COPY
        --------------------------------------------------------- */

        .workflow-copy {
          display: block;

          margin-top: auto;

          padding-top: 80px;
        }

        .workflow-title {
          display: block;

          max-width: 15ch;

          color: var(--off-white);

          font-size: clamp(20px, 1.8vw, 27px);

          font-weight: 800;

          letter-spacing: -0.045em;

          line-height: 1.02;

          transition:
            color 500ms ease,
            transform 500ms
              cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-description {
          display: block;

          margin-top: 14px;

          color: rgba(250, 250, 250, 0.62);

          font-size: clamp(12px, 0.95vw, 14px);

          font-weight: 500;

          letter-spacing: -0.01em;

          line-height: 1.62;

          transition:
            color 500ms ease;
        }

        /* ---------------------------------------------------------
           CARD FOOTER
        --------------------------------------------------------- */

        .workflow-card-footer {
          display: flex;

          align-items: center;

          gap: 11px;

          margin-top: 22px;
        }

        .workflow-card-line {
          display: block;

          width: 22px;
          height: 1px;

          background: rgba(57, 255, 20, 0.55);

          box-shadow:
            0 0 8px rgba(57, 255, 20, 0.28);

          transition:
            width 550ms
              cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-card-index {
          color: rgba(250, 250, 250, 0.34);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.14em;
        }

        /* ---------------------------------------------------------
           ACTIVE CARD
        --------------------------------------------------------- */

        .is-active .workflow-card {
          transform:
            translateY(-7px)
            translateZ(18px)
            scale(1.018);
        }

        .is-active .workflow-card-glass {
          border-color:
            rgba(57, 255, 20, 0.48);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.11),
              rgba(57, 255, 20, 0.055) 42%,
              rgba(57, 255, 20, 0.085)
            ),
            rgba(14, 16, 13, 0.79);

          box-shadow:
            0 17px 33px rgba(0, 0, 0, 0.27),
            0 34px 78px rgba(0, 0, 0, 0.42),
            0 0 34px rgba(57, 255, 20, 0.13),
            inset 0 1px 0 rgba(235, 255, 230, 0.19),
            inset 0 0 30px rgba(57, 255, 20, 0.045);
        }

        .is-active .workflow-card-arc {
          opacity: 1;

          animation:
            borderArc 5.5s linear infinite;
        }

        .is-active .workflow-number {
          opacity: 1;

          transform: translateY(-3px);

          -webkit-text-stroke:
            1px rgba(57, 255, 20, 0.62);
        }

        .is-active .workflow-step-label {
          color: var(--green);

          text-shadow:
            0 0 10px rgba(57, 255, 20, 0.55),
            0 0 20px rgba(57, 255, 20, 0.3);
        }

        .is-active .workflow-title {
          color: #fff;

          transform: translateY(-2px);

          text-shadow:
            0 0 20px rgba(57, 255, 20, 0.12);
        }

        .is-active .workflow-description {
          color: rgba(250, 250, 250, 0.76);
        }

        .is-active .workflow-card-line {
          width: 48px;

          background: var(--green);

          box-shadow:
            0 0 12px rgba(57, 255, 20, 0.75);
        }

        /* ---------------------------------------------------------
           HOVER
        --------------------------------------------------------- */

        .workflow-card:hover {
          transform:
            translateY(-5px)
            rotateX(1.1deg)
            rotateY(-0.8deg)
            translateZ(12px);
        }

        .workflow-card:hover .workflow-card-reflection {
          opacity: 1;
        }

        .workflow-card:hover .workflow-card-glass {
          border-color:
            rgba(57, 255, 20, 0.38);

          box-shadow:
            0 18px 34px rgba(0, 0, 0, 0.3),
            0 35px 75px rgba(0, 0, 0, 0.4),
            0 0 28px rgba(57, 255, 20, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.14);
        }

        /* ---------------------------------------------------------
           FOCUS
        --------------------------------------------------------- */

        .workflow-card:focus-visible,
        .workflow-pagination button:focus-visible {
          outline:
            2px solid var(--green);

          outline-offset: 5px;
        }

        /* ---------------------------------------------------------
           PAGINATION
        --------------------------------------------------------- */

        .workflow-pagination {
          display: flex;

          justify-content: center;

          gap: 9px;

          margin-top:
            clamp(28px, 4vw, 46px);
        }

        .workflow-pagination button {
          display: grid;

          width: 28px;
          height: 20px;

          padding: 0;

          place-items: center;

          border: 0;

          background: transparent;

          cursor: pointer;
        }

        .workflow-pagination span {
          display: block;

          width: 6px;
          height: 6px;

          border-radius: 999px;

          background:
            rgba(250, 250, 250, 0.3);

          transition:
            width 500ms
              cubic-bezier(0.16, 1, 0.3, 1),
            background 500ms ease,
            box-shadow 500ms ease;
        }

        .workflow-pagination
          button.is-active
          span {
          width: 28px;

          background: var(--green);

          box-shadow:
            0 0 12px rgba(57, 255, 20, 0.8),
            0 0 22px rgba(57, 255, 20, 0.35);
        }

        /* ---------------------------------------------------------
           ANIMATIONS
        --------------------------------------------------------- */

        @keyframes borderArc {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes nodePulse {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }

          35% {
            opacity: 0.8;
          }

          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        @keyframes textGlow {
          0%,
          100% {
            text-shadow:
              0 0 10px rgba(57, 255, 20, 0.5),
              0 0 20px rgba(57, 255, 20, 0.3);
          }

          50% {
            text-shadow:
              0 0 15px rgba(57, 255, 20, 0.8),
              0 0 30px rgba(57, 255, 20, 0.5),
              0 0 45px rgba(57, 255, 20, 0.3);
          }
        }

        /* ---------------------------------------------------------
           TABLET
        --------------------------------------------------------- */

        @media (max-width: 1099px) {
          .workflow-section {
            min-height: auto;
          }

          .workflow-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap:
              30px
              clamp(20px, 3vw, 32px);
          }

          .workflow-rail {
            display: none;
          }

          .workflow-card {
            min-height: 300px;
          }
        }

        /* ---------------------------------------------------------
           MOBILE
        --------------------------------------------------------- */

        @media (max-width: 639px) {
          .workflow-section {
            padding: 72px 16px;
          }

          .workflow-header h2 {
            font-size: clamp(36px, 12vw, 52px);
          }

          .workflow-grid {
            display: block;

            padding-left: 31px;
          }

          .workflow-item {
            position: relative;

            padding-bottom: 17px;
          }

          .workflow-item:not(:last-child)::before {
            position: absolute;

            top: 38px;
            bottom: -1px;
            left: -22px;

            width: 1px;

            background: linear-gradient(
              to bottom,
              rgba(57, 255, 20, 0.75),
              rgba(57, 255, 20, 0.09)
            );

            content: "";
          }

          .workflow-node-wrap {
            position: absolute;

            top: 19px;
            left: -31px;

            width: 18px;
            height: 18px;
          }

          .workflow-card {
            min-height: 0;

            border-radius: 19px;
          }

          .workflow-card-content {
            min-height: 0;

            padding: 22px 20px;
          }

          .workflow-number {
            top: 43px;

            right: 16px;

            font-size: 83px;
          }

          .workflow-copy {
            padding-top: 64px;
          }

          .workflow-title {
            max-width: 17ch;

            font-size: 22px;
          }

          .workflow-description {
            max-width: 52ch;

            font-size: 12px;

            line-height: 1.65;
          }

          .workflow-card-footer {
            margin-top: 18px;
          }

          .workflow-status {
            margin-bottom: 28px;
          }
        }

        /* ---------------------------------------------------------
           TOUCH DEVICES
        --------------------------------------------------------- */

        @media (hover: none), (pointer: coarse) {
          .workflow-card:hover {
            transform: none;
          }

          .workflow-card-reflection {
            display: none;
          }

          .is-active .workflow-card {
            transform:
              translateY(-3px)
              scale(1.008);
          }
        }

        /* ---------------------------------------------------------
           REDUCED MOTION
        --------------------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;

            animation-duration:
              0.01ms !important;

            animation-iteration-count:
              1 !important;

            transition-duration:
              0.01ms !important;
          }

          .workflow-card-reflection,
          .workflow-card-arc {
            display: none;
          }

          .workflow-header,
          .workflow-item,
          .workflow-rail {
            opacity: 1;

            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkflowTimeline;