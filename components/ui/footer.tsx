"use client";

import {
  ArrowRight,
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Geist } from "next/font/google";
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

const whatsappUrl =
  "https://wa.me/923062775191?text=Hi%20Atiqa%2C%20I%20want%20to%20work%20with%20you!";

const services = [
  "YouTube Thumbnail Design",
  "Poster & Social Media Design",
  "Brand Identity Design",
  "Menu & Packaging Design",
];

const achievements = [
  "100+ Creative Projects Completed",
  "High CTR Thumbnail Specialist",
  "Fast Delivery & Premium Quality",
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/aatiqar.creative",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aatiqa-rana-1632a1282/",
    icon: Linkedin,
  },
];

const metrics = [
  {
    value: "100+",
    label: "Creative Projects",
  },
  {
    value: "CTR",
    label: "Focused Design",
  },
  {
    value: "24–48h",
    label: "Fast Delivery",
  },
];

type PointerPosition = {
  element: HTMLElement;
  x: number;
  y: number;
};

type ContactInfoProps = {
  icon: LucideIcon;
  label: string;
  text: string;
  href?: string;
};

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const pointerRef = useRef<PointerPosition | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      section.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
      },
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

  const handlePointerMove = (
    event: PointerEvent<HTMLElement>,
  ) => {
    if (event.pointerType !== "mouse") return;

    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();

    if (!bounds.width || !bounds.height) return;

    pointerRef.current = {
      element,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };

    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      const position = pointerRef.current;

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

  const handlePointerLeave = (
    event: PointerEvent<HTMLElement>,
  ) => {
    if (event.pointerType !== "mouse") return;

    event.currentTarget.style.setProperty(
      "--mouse-x",
      "50%",
    );

    event.currentTarget.style.setProperty(
      "--mouse-y",
      "50%",
    );
  };

  const year = new Date().getFullYear();

  return (
    <footer
      ref={sectionRef}
      id="Contact"
      aria-labelledby="footer-heading"
      className={`creative-footer ${geist.className}`}
    >
      {/* Background atmosphere */}
      <div
        className="footer-atmosphere"
        aria-hidden="true"
      />

      <div
        className="footer-grid"
        aria-hidden="true"
      />

      <div
        className="footer-glow footer-glow-one"
        aria-hidden="true"
      />

      <div
        className="footer-glow footer-glow-two"
        aria-hidden="true"
      />

      <div className="footer-shell">
        {/* Main CTA */}
        <section className="cta-panel">
          <div
            className="cta-orb"
            aria-hidden="true"
          />

          <div
            className="cta-line"
            aria-hidden="true"
          />

          <div className="cta-content">
            <div className="cta-copy">
              <p className="eyebrow">
                <span aria-hidden="true" />
                LET&apos;S CREATE SOMETHING GREAT
              </p>

              <h2 id="footer-heading">
                Ready To Make Your Brand
                <span>Stand Out?</span>
              </h2>

              <p>
                Let&apos;s create scroll-stopping thumbnails
                and premium visuals that attract attention,
                increase engagement, and help your brand grow
                faster.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span>Chat on WhatsApp</span>

              <span
                className="cta-icon"
                aria-hidden="true"
              >
                <ArrowRight />
              </span>
            </a>
          </div>
        </section>

        {/* Main footer content */}
        <div className="footer-main">
          {/* About */}
          <section
            className="about-column"
            aria-label="About Atiqa Rana"
          >
            <div className="brand-header">
              <div className="brand-mark">
                <span>AR</span>
              </div>

              <div>
                <h3>Atiqa Rana</h3>
                <p>
                  Graphic &amp; Thumbnail Designer
                </p>
              </div>
            </div>

            <p className="about-text">
              I create high-converting YouTube thumbnails,
              posters, social media graphics, branding
              visuals, menus, and creative designs that help
              creators and businesses grab attention,
              increase engagement, and grow faster online.
            </p>

            {/* Achievements */}
            <div className="achievement-list">
              {achievements.map((text, index) => (
                <div
                  className="achievement"
                  key={text}
                  style={
                    {
                      "--achievement-delay": `${index * 80}ms`,
                    } as CSSProperties
                  }
                >
                  <span className="achievement-icon">
                    <CheckCircle
                      aria-hidden="true"
                    />
                  </span>

                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="metrics-grid">
              {metrics.map((metric) => (
                <div
                  className="metric"
                  key={metric.label}
                  onPointerMove={handlePointerMove}
                  onPointerLeave={handlePointerLeave}
                >
                  <div
                    className="metric-light"
                    aria-hidden="true"
                  />

                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <nav
              className="socials"
              aria-label="Social profiles"
            >
              {socialLinks.map(
                ({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="social-link"
                  >
                    <span
                      className="social-glow"
                      aria-hidden="true"
                    />

                    <span className="social-button">
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.7}
                      />
                    </span>
                  </a>
                ),
              )}
            </nav>
          </section>

          {/* Services */}
          <nav
            className="services-column"
            aria-label="Design services"
          >
            <p className="column-label">
              MY SERVICES
            </p>

            <h3>
              Creative
              <span> Expertise</span>
            </h3>

            <ul className="services-list">
              {services.map((service, index) => (
                <li key={service}>
                  <a href="#Projects">
                    <span className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="service-name">
                      {service}
                    </span>

                    <ChevronRight
                      className="service-arrow"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <section
            className="contact-column"
            aria-labelledby="contact-heading"
          >
            <p className="column-label">
              GET IN TOUCH
            </p>

            <h3 id="contact-heading">
              Let&apos;s Talk
              <span> Design</span>
            </h3>

            <p className="contact-intro">
              Have a project, channel, brand, or creative
              idea in mind? Let&apos;s turn it into something
              people can&apos;t ignore.
            </p>

            <div className="contact-list">
              <ContactInfo
                icon={Phone}
                label="Phone"
                text="+92 306 2775191"
                href="tel:+923062775191"
              />

              <ContactInfo
                icon={Mail}
                label="Email"
                text="aasdrana18@gmail.com"
                href="mailto:aasdrana18@gmail.com"
              />

              <ContactInfo
                icon={MapPin}
                label="Location"
                text="Karachi, Pakistan"
              />
            </div>
          </section>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {year}{" "}
            <span>Atiqa Rana</span>. All rights reserved.
          </p>

          <div className="legal-links">
            <a href="#privacy">
              Privacy Policy
              <ChevronRight aria-hidden="true" />
            </a>

            <a href="#terms">
              Terms of Service
              <ChevronRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .creative-footer {
          --green: #39ff14;
          --green-soft: rgba(57, 255, 20, 0.1);
          --green-glow: rgba(57, 255, 20, 0.18);

          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #000;
          color: #fff;
          padding: clamp(4rem, 8vw, 7rem)
            clamp(1rem, 4vw, 4rem) 1.5rem;

          opacity: 0;
          transform: translate3d(0, 18px, 0);
          transition:
            opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
            transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .creative-footer.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .footer-atmosphere {
          position: absolute;
          inset: 0;
          z-index: -5;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse 45% 35% at 50% 0%,
              rgba(57, 255, 20, 0.065),
              transparent 72%
            ),
            linear-gradient(
              180deg,
              #000 0%,
              #020402 48%,
              #000 100%
            );
        }

        .footer-grid {
          position: absolute;
          inset: 0;
          z-index: -4;
          pointer-events: none;
          opacity: 0.28;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.018) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.018) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 75%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            black,
            transparent 75%
          );
        }

        .footer-glow {
          position: absolute;
          z-index: -3;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(100px);
          background: var(--green);
          opacity: 0.035;
          animation: floating-glow 8s ease-in-out infinite;
        }

        .footer-glow-one {
          width: 28rem;
          height: 28rem;
          top: -15rem;
          right: -8rem;
        }

        .footer-glow-two {
          width: 22rem;
          height: 22rem;
          bottom: 8rem;
          left: -12rem;
          opacity: 0.025;
          animation-delay: -3s;
        }

        .footer-shell {
          position: relative;
          max-width: 84rem;
          margin: 0 auto;
        }

        /* CTA */

        .cta-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: clamp(1.4rem, 3vw, 2.2rem);
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.075),
              rgba(255, 255, 255, 0.018) 50%,
              rgba(57, 255, 20, 0.035)
            );
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: clamp(2rem, 5vw, 4rem);
        }

        .cta-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              400px circle at 85% 20%,
              rgba(57, 255, 20, 0.1),
              transparent 65%
            );
        }

        .cta-panel::after {
          content: "";
          position: absolute;
          inset: -1px;
          pointer-events: none;
          border-radius: inherit;
          background:
            linear-gradient(
              110deg,
              transparent 15%,
              rgba(57, 255, 20, 0.4),
              transparent 35%
            );
          opacity: 0.18;
          transform: translateX(-100%);
          animation: border-sweep 8s ease-in-out infinite;
        }

        .cta-orb {
          position: absolute;
          width: 18rem;
          height: 18rem;
          right: -7rem;
          top: -8rem;
          border-radius: 50%;
          background: var(--green);
          opacity: 0.055;
          filter: blur(50px);
          pointer-events: none;
        }

        .cta-line {
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.22),
            transparent
          );
        }

        .cta-content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: end;
          gap: 3rem;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          margin: 0 0 1.2rem;
          color: var(--green);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          line-height: 1.4;
          text-shadow: 0 0 18px
            rgba(57, 255, 20, 0.35);
        }

        .eyebrow span {
          width: 2rem;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--green)
          );
          box-shadow: 0 0 10px
            rgba(57, 255, 20, 0.5);
        }

        .cta-copy h2 {
          max-width: 48rem;
          margin: 0;
          font-size: clamp(
            2.8rem,
            6vw,
            5.8rem
          );
          font-weight: 700;
          letter-spacing: -0.065em;
          line-height: 0.94;
          text-wrap: balance;
        }

        .cta-copy h2 span {
          display: block;
          color: var(--green);
          text-shadow:
            0 0 18px rgba(57, 255, 20, 0.3),
            0 0 50px rgba(57, 255, 20, 0.1);
        }

        .cta-copy > p:last-child {
          max-width: 39rem;
          margin: 1.5rem 0 0;
          color: #9ca3af;
          font-size: clamp(
            0.95rem,
            1.5vw,
            1.08rem
          );
          line-height: 1.7;
        }

        .cta-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          width: 17rem;
          min-height: 4rem;
          overflow: hidden;
          flex-shrink: 0;
          padding: 0.75rem 0.85rem 0.75rem
            1.35rem;
          border: 1px solid
            rgba(170, 255, 153, 0.7);
          border-radius: 1.15rem;
          background:
            linear-gradient(
              180deg,
              #59ff38 0%,
              #39ff14 100%
            );
          color: #031500;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow:
            0 14px 35px
              rgba(57, 255, 20, 0.16),
            inset 0 1px 0
              rgba(255, 255, 255, 0.6),
            inset 0 -2px 0
              rgba(20, 100, 10, 0.25);
          transition:
            transform 0.45s
              cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.45s ease;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -70%;
          width: 45%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }

        .cta-button:hover {
          transform: translate3d(0, -5px, 0)
            scale(1.015);
          box-shadow:
            0 20px 45px
              rgba(57, 255, 20, 0.27),
            inset 0 1px 0
              rgba(255, 255, 255, 0.65),
            inset 0 -2px 0
              rgba(20, 100, 10, 0.25);
        }

        .cta-button:hover::before {
          left: 130%;
        }

        .cta-button:focus-visible {
          outline: none;
          box-shadow:
            0 0 0 2px #000,
            0 0 0 4px var(--green),
            0 20px 45px
              rgba(57, 255, 20, 0.25);
        }

        .cta-icon {
          display: grid;
          place-items: center;
          width: 2.6rem;
          height: 2.6rem;
          border-radius: 0.8rem;
          background: rgba(0, 0, 0, 0.12);
        }

        .cta-icon :global(svg) {
          width: 1.1rem;
          height: 1.1rem;
          transition: transform 0.3s ease;
        }

        .cta-button:hover
          .cta-icon :global(svg) {
          transform: translateX(3px);
        }

        /* Main content */

        .footer-main {
          display: grid;
          grid-template-columns:
            minmax(0, 1.45fr)
            minmax(0, 0.85fr)
            minmax(0, 1fr);
          gap: clamp(2rem, 5vw, 5rem);
          padding: clamp(3rem, 6vw, 5.5rem) 0;
          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 0.9rem;
        }

        .brand-mark {
          position: relative;
          display: grid;
          place-items: center;
          width: 3.5rem;
          height: 3.5rem;
          flex-shrink: 0;
          overflow: hidden;
          border: 1px solid
            rgba(57, 255, 20, 0.55);
          border-radius: 1rem;
          background:
            linear-gradient(
              145deg,
              #4cff2b,
              #24d90a
            );
          color: #031500;
          box-shadow:
            0 10px 25px
              rgba(57, 255, 20, 0.12),
            inset 0 1px 0
              rgba(255, 255, 255, 0.6);
        }

        .brand-mark::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 20%,
            rgba(255, 255, 255, 0.35),
            transparent 55%
          );
          transform: translateX(-100%);
          animation: brand-shine 5s ease-in-out
            infinite;
        }

        .brand-mark span {
          position: relative;
          z-index: 1;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.05em;
        }

        .brand-header h3 {
          margin: 0;
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .brand-header p {
          margin: 0.25rem 0 0;
          color: var(--green);
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .about-text {
          max-width: 38rem;
          margin: 1.4rem 0 1.5rem;
          color: #92969d;
          font-size: 0.94rem;
          line-height: 1.75;
        }

        .achievement-list {
          display: grid;
          gap: 0.55rem;
        }

        .achievement {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          min-height: 3rem;
          padding: 0.45rem 0.7rem;
          border: 1px solid
            rgba(255, 255, 255, 0.07);
          border-radius: 0.85rem;
          background: rgba(255, 255, 255, 0.025);
          color: #d5d7da;
          font-size: 0.78rem;
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .achievement:hover {
          border-color: rgba(57, 255, 20, 0.28);
          background: rgba(57, 255, 20, 0.035);
          transform: translateX(4px);
        }

        .achievement-icon {
          display: grid;
          place-items: center;
          width: 1.9rem;
          height: 1.9rem;
          flex-shrink: 0;
          border: 1px solid
            rgba(57, 255, 20, 0.2);
          border-radius: 50%;
          background: rgba(57, 255, 20, 0.04);
        }

        .achievement-icon :global(svg) {
          width: 0.95rem;
          height: 0.95rem;
          color: var(--green);
          filter: drop-shadow(
            0 0 5px
              rgba(57, 255, 20, 0.35)
          );
        }

        /* Metrics */

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.55rem;
          margin-top: 1.2rem;
        }

        .metric {
          --mouse-x: 50%;
          --mouse-y: 50%;
          position: relative;
          overflow: hidden;
          min-width: 0;
          padding: 0.9rem 0.7rem;
          border: 1px solid
            rgba(255, 255, 255, 0.07);
          border-radius: 0.9rem;
          background: rgba(255, 255, 255, 0.025);
          transition:
            transform 0.4s
              cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.4s ease,
            background 0.4s ease;
        }

        .metric:hover {
          transform: translateY(-3px);
          border-color: rgba(57, 255, 20, 0.3);
          background: rgba(57, 255, 20, 0.035);
        }

        .metric-light {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            100px circle at var(--mouse-x)
              var(--mouse-y),
            rgba(57, 255, 20, 0.11),
            transparent 70%
          );
          transition: opacity 0.3s ease;
        }

        .metric:hover .metric-light {
          opacity: 1;
        }

        .metric strong,
        .metric span {
          position: relative;
          z-index: 1;
          display: block;
        }

        .metric strong {
          color: #fff;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .metric:hover strong {
          color: var(--green);
          text-shadow: 0 0 12px
            rgba(57, 255, 20, 0.25);
        }

        .metric span {
          margin-top: 0.2rem;
          color: #666b72;
          font-size: 0.54rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        /* Socials */

        .socials {
          display: flex;
          gap: 0.65rem;
          margin-top: 1.3rem;
        }

        .social-link {
          position: relative;
          display: block;
          width: 2.9rem;
          height: 2.9rem;
          text-decoration: none;
        }

        .social-glow {
          position: absolute;
          inset: 0.2rem;
          border-radius: 0.85rem;
          background: var(--green);
          filter: blur(12px);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .social-button {
          position: relative;
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          border: 1px solid
            rgba(255, 255, 255, 0.09);
          border-radius: 0.85rem;
          background: rgba(255, 255, 255, 0.035);
          color: #858990;
          transition:
            transform 0.4s
              cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .social-button :global(svg) {
          width: 1.15rem;
          height: 1.15rem;
        }

        .social-link:hover .social-glow {
          opacity: 0.3;
        }

        .social-link:hover .social-button {
          transform: translateY(-4px)
            rotate(2deg);
          border-color: rgba(57, 255, 20, 0.5);
          background: rgba(57, 255, 20, 0.08);
          color: var(--green);
        }

        .social-link:focus-visible {
          outline: none;
        }

        .social-link:focus-visible
          .social-button {
          box-shadow:
            0 0 0 2px #000,
            0 0 0 4px var(--green);
        }

        /* Services / Contact */

        .column-label {
          margin: 0 0 0.65rem;
          color: var(--green);
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .services-column h3,
        .contact-column h3 {
          margin: 0;
          color: #fff;
          font-size: clamp(1.5rem, 2vw, 1.9rem);
          font-weight: 700;
          letter-spacing: -0.045em;
          line-height: 1.1;
        }

        .services-column h3 span,
        .contact-column h3 span {
          color: var(--green);
        }

        .services-list {
          margin: 1.5rem 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .services-list li {
          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .services-list a {
          display: grid;
          grid-template-columns: 1.8rem 1fr
            auto;
          align-items: center;
          gap: 0.5rem;
          min-height: 4rem;
          color: #aeb1b6;
          text-decoration: none;
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .services-list a:hover {
          color: #fff;
          transform: translateX(5px);
        }

        .service-number {
          color: var(--green);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          opacity: 0.65;
        }

        .service-name {
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .service-arrow {
          width: 0.9rem;
          height: 0.9rem;
          color: var(--green);
          opacity: 0.35;
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }

        .services-list a:hover
          .service-arrow {
          opacity: 1;
          transform: translateX(3px);
        }

        .contact-intro {
          margin: 1rem 0 1.3rem;
          color: #858990;
          font-size: 0.84rem;
          line-height: 1.7;
        }

        .contact-list {
          display: grid;
          gap: 0.55rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-height: 3.6rem;
          padding: 0.55rem 0.65rem;
          border: 1px solid
            rgba(255, 255, 255, 0.07);
          border-radius: 0.9rem;
          background: rgba(255, 255, 255, 0.025);
          color: inherit;
          text-decoration: none;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
        }

        .contact-item:hover {
          transform: translateX(4px);
          border-color: rgba(57, 255, 20, 0.3);
          background: rgba(57, 255, 20, 0.035);
        }

        .contact-icon {
          display: grid;
          place-items: center;
          width: 2.25rem;
          height: 2.25rem;
          flex-shrink: 0;
          border: 1px solid
            rgba(57, 255, 20, 0.18);
          border-radius: 0.7rem;
          background: rgba(57, 255, 20, 0.04);
          color: var(--green);
        }

        .contact-icon :global(svg) {
          width: 0.95rem;
          height: 0.95rem;
        }

        .contact-copy {
          min-width: 0;
        }

        .contact-label {
          display: block;
          color: #555a61;
          font-size: 0.52rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .contact-value {
          display: block;
          margin-top: 0.15rem;
          overflow-wrap: anywhere;
          color: #d8dade;
          font-size: 0.75rem;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .contact-item:hover .contact-value {
          color: #fff;
        }

        /* Bottom */

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.5rem 0 0.4rem;
        }

        .footer-bottom p {
          margin: 0;
          color: #555960;
          font-size: 0.68rem;
          line-height: 1.5;
        }

        .footer-bottom p span {
          color: var(--green);
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 1.3rem;
        }

        .legal-links a {
          display: inline-flex;
          align-items: center;
          gap: 0.15rem;
          color: #555960;
          font-size: 0.68rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .legal-links a :global(svg) {
          width: 0.7rem;
          height: 0.7rem;
          color: var(--green);
          opacity: 0;
          transform: translateX(-3px);
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .legal-links a:hover {
          color: #d0d2d5;
        }

        .legal-links a:hover
          :global(svg) {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes floating-glow {
          0%,
          100% {
            transform: translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform: translate3d(
                0,
                18px,
                0
              )
              scale(1.05);
          }
        }

        @keyframes border-sweep {
          0%,
          65% {
            transform: translateX(-100%);
          }

          85%,
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes brand-shine {
          0%,
          65% {
            transform: translateX(-100%);
          }

          85%,
          100% {
            transform: translateX(120%);
          }
        }

        @media (max-width: 70rem) {
          .footer-main {
            grid-template-columns:
              minmax(0, 1.2fr)
              minmax(0, 0.8fr);
          }

          .about-column {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 58rem) {
          .cta-content {
            grid-template-columns: 1fr;
            align-items: start;
          }

          .cta-button {
            width: min(100%, 19rem);
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 3rem 2rem;
          }

          .about-column {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 42rem) {
          .creative-footer {
            padding-top: 4rem;
            padding-inline: 1rem;
          }

          .cta-panel {
            padding: 2rem 1.35rem;
            border-radius: 1.35rem;
          }

          .eyebrow {
            font-size: 0.59rem;
            letter-spacing: 0.16em;
          }

          .cta-copy h2 {
            font-size: clamp(
              2.7rem,
              13vw,
              4.2rem
            );
          }

          .cta-copy > p:last-child {
            font-size: 0.9rem;
          }

          .cta-button {
            width: 100%;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 2.8rem;
            padding-block: 3rem;
          }

          .about-column {
            grid-column: auto;
          }

          .metrics-grid {
            gap: 0.4rem;
          }

          .metric {
            padding: 0.75rem 0.5rem;
          }

          .metric strong {
            font-size: 1rem;
          }

          .metric span {
            font-size: 0.48rem;
          }

          .services-list a {
            min-height: 3.7rem;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding-bottom: 0.75rem;
          }

          .legal-links {
            gap: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .creative-footer,
          .achievement,
          .metric,
          .social-button,
          .contact-item,
          .cta-button {
            transition: none !important;
            animation: none !important;
          }

          .creative-footer {
            opacity: 1;
            transform: none;
          }

          .footer-glow,
          .cta-panel::after,
          .brand-mark::after {
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  text,
  href,
}: ContactInfoProps) {
  const content = (
    <>
      <span className="contact-icon">
        <Icon
          aria-hidden="true"
          strokeWidth={1.7}
        />
      </span>

      <span className="contact-copy">
        <span className="contact-label">
          {label}
        </span>

        <span className="contact-value">
          {text}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="contact-item"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="contact-item">
      {content}
    </div>
  );
}