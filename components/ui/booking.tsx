"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock3,
  Palette,
  Phone,
  Sparkles,
  Target,
} from "lucide-react";

const calendlyUrl =
  "https://calendly.com/mazdigitalservices0/let-s-dicuss-how-we-can-elevate-your-content?hide_landing_page_details=1&hide_gdpr_banner=1";

const calendlyScriptUrl =
  "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const metrics = [
  ["100+", "Creative Projects"],
  ["CTR", "Thumbnail Focused"],
  ["FAST", "Premium Delivery"],
] as const;

const callTopics = [
  "Your content, brand, audience, and visual goals",
  "Thumbnail or design problems limiting attention",
  "Creative ideas to make your content stand out",
  "A clear design direction for your next project",
];

const benefits = [
  {
    icon: Target,
    title: "Understand your goal",
    description:
      "We look at what you want your content or brand visuals to achieve.",
  },
  {
    icon: Palette,
    title: "Find the right visual direction",
    description:
      "We discuss styles, colors, layouts, thumbnails, and creative direction.",
  },
  {
    icon: Sparkles,
    title: "Turn ideas into visuals",
    description:
      "You leave with a clearer idea of what your next high-impact design should look like.",
  },
];

export default function Booking() {
  const sectionRef = useRef<HTMLElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const [loadCalendar, setLoadCalendar] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "ready" | "error"
  >("idle");

  const initialiseCalendar = useCallback(() => {
    const parentElement = calendarRef.current;

    if (
      !parentElement ||
      !window.Calendly ||
      parentElement.dataset.initialised === "true"
    ) {
      return;
    }

    parentElement.dataset.initialised = "true";

    try {
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement,
      });

      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLoadCalendar(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "700px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loadCalendar) return;

    setStatus((current) =>
      current === "idle" ? "loading" : current
    );

    const timeout = window.setTimeout(() => {
      setStatus((current) =>
        current === "loading" ? "error" : current
      );
    }, 15000);

    return () => window.clearTimeout(timeout);
  }, [loadCalendar]);

  return (
    <section
      id="booking"
      ref={sectionRef}
      aria-labelledby="booking-heading"
      className="relative isolate overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {loadCalendar ? (
        <Script
          id="calendly-widget-script"
          src={calendlyScriptUrl}
          strategy="afterInteractive"
          onReady={initialiseCalendar}
          onError={() => setStatus("error")}
        />
      ) : null}

      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.025) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Green atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[#39FF14]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[#39FF14]/[0.045] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#39FF14]/[0.025] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            HEADER
        ========================== */}
        <header className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#39FF14]/25 bg-[#39FF14]/[0.06] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#39FF14] shadow-[0_0_25px_rgba(57,255,20,0.05)]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.9)]"
            />
            Free Creative Consultation
          </div>

          <h2
            id="booking-heading"
            className="mt-6 text-balance text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-7xl"
          >
            Your next design should{" "}
            <span className="text-[#39FF14] drop-shadow-[0_0_25px_rgba(57,255,20,0.15)]">
              stop the scroll.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-gray-400 sm:text-base sm:leading-8">
            Let&apos;s talk about your content, brand, or next creative
            project and figure out how to turn your ideas into visuals that
            grab attention, communicate clearly, and make people want to
            click.
          </p>

          {/* Accent line */}
          <div className="mx-auto mt-7 h-px w-28 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent shadow-[0_0_12px_rgba(57,255,20,0.35)]" />
        </header>

        {/* =========================
            METRICS
        ========================== */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3 lg:mt-12">
          {metrics.map(([value, label]) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#39FF14]/30 hover:bg-[#39FF14]/[0.025] motion-reduce:transform-none"
            >
              <span className="block text-2xl font-bold tracking-[-0.04em] text-[#39FF14] sm:text-3xl">
                {value}
              </span>

              <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* =========================
            MAIN BOOKING CARD
        ========================== */}
        <div className="relative mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080908]/95 shadow-[0_30px_100px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] lg:mt-8">
          {/* Top accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/60 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#39FF14]/[0.05] blur-3xl"
          />

          <div className="relative grid lg:grid-cols-[0.78fr_1.22fr]">
            {/* =========================
                LEFT SIDE
            ========================== */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#39FF14]">
                <Clock3
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                />
                A focused creative call
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-[-0.045em] sm:text-3xl">
                Let&apos;s make your next visual impossible to ignore.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
                No complicated preparation. Just bring your content, ideas,
                problems, or goals. We&apos;ll use the call to understand what
                you need and map out the strongest creative direction.
              </p>

              {/* Topics */}
              <ol className="mt-7 space-y-2.5">
                {callTopics.map((topic, index) => (
                  <li
                    key={topic}
                    className="group flex items-start gap-3 rounded-xl border border-transparent px-2 py-2.5 transition duration-300 hover:border-white/[0.07] hover:bg-white/[0.025]"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#39FF14]/25 bg-[#39FF14]/[0.07] text-[10px] font-bold text-[#39FF14] transition duration-300 group-hover:border-[#39FF14]/50 group-hover:bg-[#39FF14]/[0.12]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-0.5 text-sm leading-6 text-gray-300">
                      {topic}
                    </span>
                  </li>
                ))}
              </ol>

              {/* Mini promise */}
              <div className="mt-8 rounded-2xl border border-[#39FF14]/10 bg-[#39FF14]/[0.025] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#39FF14]/20 bg-[#39FF14]/[0.07]">
                    <Check
                      aria-hidden="true"
                      className="h-4 w-4 text-[#39FF14]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      No pressure. Just clarity.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      You&apos;ll know exactly what kind of creative direction
                      makes sense for your project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8 hidden space-y-3 lg:block">
                {benefits.map(
                  ({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.018] p-3.5"
                    >
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#39FF14]/15 bg-[#39FF14]/[0.05]">
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4 text-[#39FF14]"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-gray-200">
                          {title}
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-gray-500">
                          {description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* =========================
                RIGHT / CALENDLY
            ========================== */}
            <div className="border-t border-white/10 bg-black/30 p-3 sm:p-5 lg:border-l lg:border-t-0 lg:p-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f0d] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_45px_rgba(0,0,0,0.35)]">
                {/* Calendar accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/70 to-transparent"
                />

                {/* Calendar heading */}
                <div className="relative flex items-start gap-3 border-b border-white/10 px-5 py-5 sm:px-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#39FF14]/25 bg-[#39FF14]/[0.07] text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.06)]">
                    <Calendar
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </span>

                  <div>
                    <h3 className="text-lg font-bold tracking-[-0.025em]">
                      Pick your time
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Choose a time that works best for you.
                    </p>
                  </div>
                </div>

                {/* Calendly */}
                <div className="relative min-h-[720px] bg-white sm:min-h-[760px]">
                  {loadCalendar ? (
                    <div
                      ref={calendarRef}
                      aria-label="Calendly booking calendar"
                      className="h-[720px] w-full sm:h-[760px]"
                    />
                  ) : null}

                  {/* Loading state */}
                  {(status === "idle" || status === "loading") && (
                    <div
                      aria-live="polite"
                      className="absolute inset-0 grid place-items-center bg-[#0d0f0d] px-6 text-center"
                    >
                      <div>
                        <span
                          aria-hidden="true"
                          className="mx-auto block h-9 w-9 animate-spin rounded-full border border-[#39FF14]/20 border-t-[#39FF14]"
                        />

                        <p className="mt-5 text-sm font-semibold text-white">
                          Preparing your booking calendar…
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Your available consultation times will appear here
                          shortly.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error state */}
                  {status === "error" && (
                    <div
                      role="status"
                      className="absolute inset-0 grid place-items-center bg-[#0d0f0d] px-6 text-center"
                    >
                      <div className="max-w-sm">
                        <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-[#39FF14]/20 bg-[#39FF14]/[0.06]">
                          <Phone
                            aria-hidden="true"
                            className="h-5 w-5 text-[#39FF14]"
                          />
                        </div>

                        <p className="mt-5 text-base font-bold text-white">
                          Prefer to book directly?
                        </p>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          If the calendar isn&apos;t loading, you can contact
                          Atiqa directly and we&apos;ll find a suitable time.
                        </p>

                        <a
                          href="tel:+923062775191"
                          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#39FF14]/30 bg-[#39FF14]/[0.07] px-5 text-sm font-bold text-[#39FF14] transition duration-300 hover:border-[#39FF14]/50 hover:bg-[#39FF14]/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0f0d]"
                        >
                          <Phone
                            aria-hidden="true"
                            className="h-4 w-4"
                          />
                          +92 306 2775191
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM DIRECT CONTACT
        ========================== */}
        <div className="mt-9 text-center">
          <p className="text-sm text-gray-600">
            Not ready to schedule yet?
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Have a quick question about your project?
          </p>

          <a
            href="tel:+923062775191"
            className="group mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-base font-bold text-[#39FF14] transition duration-300 hover:bg-[#39FF14]/[0.06] hover:text-[#6dff52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Phone
              aria-hidden="true"
              className="h-4 w-4"
            />

            +92 306 2775191

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </a>
        </div>
      </div>
    </section>
  );
}