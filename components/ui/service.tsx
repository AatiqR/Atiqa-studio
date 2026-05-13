"use client"

import { motion } from "framer-motion"
import {
  Check,
  Video,
  Monitor,
  Palette,
  // Mail,
} from "lucide-react"

const services = [
  {
    id: "graphic",
    title: "Graphic Design",
    icon: <Palette className="w-8 h-8 text-[#FFA200]" />,
    price: "$20+",
    starting: "Starting Price",
    description: [
      "Scroll-stopping social posts & YouTube thumbnails",
      "High-converting ad creatives",
      "Brand logos & identity",
      "Banners, covers & graphics for campaigns",
    ],
    included: [
      "High-resolution files",
      "Multiple formats (PNG, JPG, PDF)",
      "Fast 24–48h delivery",
      "Brand consistency across all designs",
    ],
    ctaText: "Get Custom Quote",
    waMessage: "Hi, I need Graphic Design services from Maz Digital.",
  },
  {
    id: "video",
    title: "Video Editing",
    icon: <Video className="w-8 h-8 text-[#FFA200]" />,
    price: "$40 – $1,000",
    starting: "Per Video / Retainers Available",
    description: [
      "SHORT-FORM: Reels, Shorts, TikTok (1–2 days)",
      "STANDARD: YouTube videos (3–5 days)",
      "PREMIUM: Advanced editing for high-end productions (2–4 days)",
      "MONTHLY RETAINER: Consistent content from $1,200/month",
    ],
    included: [
      "Professional editing & color grading",
      "Audio enhancement & licensed music",
      "Motion graphics & dynamic text overlays",
      "2 rounds of revisions included",
      "Royalty-free stock footage if needed",
    ],
    discounts: [
      "5+ videos: 10% off",
      "10+ videos: 20% off",
      "Monthly retainer: 25% off",
    ],
    howItWorks: [
      "Step 1: Tell us your requirements",
      "Step 2: Get a custom quote within 24 hours",
      "Step 3: 50% deposit to start",
      "Step 4: Receive your polished video with revisions",
    ],
    ctaText: "Start My Project",
    waMessage: "Hi, I need Video Editing services from Maz Digital.",
    featured: true,
  },
  {
    id: "web",
    title: "Web Development",
    icon: <Monitor className="w-8 h-8 text-[#FFA200]" />,
    price: "$100+",
    starting: "Starting Price",
    description: [
      "Landing pages",
      "Business & corporate websites",
      "Portfolio & showcase sites",
      "E-commerce stores",
      "Custom web applications",
    ],
    included: [
      "Fully responsive design (mobile, tablet, desktop)",
      "Modern UI/UX & fast loading speeds",
      "SEO optimization & analytics setup",
      "Contact forms & third-party integrations",
      "Post-launch support & maintenance",
    ],
    ctaText: "Get Custom Quote",
    waMessage: "Hi, I need Web Development services from Maz Digital.",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative w-full bg-black py-28 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFA200]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFA200]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Maz Digital <span className="text-[#FFA200]">Pricing</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Clear, simple, and professional pricing. Designed to grow your brand.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-12 items-stretch">

          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`group flex flex-col rounded-3xl p-8 bg-white text-black
                shadow-[0_25px_60px_rgba(0,0,0,0.15)] border-4 transition-all duration-500
                ${service.featured ? 'border-[#FFA200] shadow-[0_40px_100px_rgba(255,162,0,0.25)] scale-105' : 'border-transparent'}
                hover:-translate-y-4 hover:scale-105`}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="text-center mb-4">
                  <span className="bg-[#FFA200] text-black px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Title */}
              <div className="flex items-center gap-3 mb-6">
                {service.icon}
                <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
              </div>

              {/* Price */}
              <p className="text-4xl md:text-5xl font-extrabold text-[#FFA200]">{service.price}</p>
              <span className="text-gray-500 text-sm mb-6">{service.starting}</span>

              <div className="border-t border-gray-200 my-6"></div>

              {/* Description */}
              <h3 className="font-semibold mb-3">Key Services</h3>
              <ul className="space-y-2 text-sm mb-6">
                {service.description.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>

              {/* Included */}
              {service.included && (
                <>
                  <h3 className="font-semibold mb-3">Whats Included</h3>
                  <ul className="space-y-2 text-sm mb-6">
                    {service.included.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-[#FFA200] mr-2 mt-1" /> {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Discounts */}
              {service.discounts && (
                <>
                  <h3 className="font-semibold mb-3">Bundle Discounts</h3>
                  <ul className="space-y-1 text-sm mb-6">
                    {service.discounts.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* How it works */}
              {service.howItWorks && (
                <>
                  <h3 className="font-semibold mb-3">How It Works</h3>
                  <ul className="space-y-1 text-sm mb-6">
                    {service.howItWorks.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* CTA */}
              <a
                href={`https://wa.me/923055544729?text=${encodeURIComponent(service.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto bg-[#FFA200] hover:bg-orange-600
                  hover:shadow-[0_0_40px_rgba(255,162,0,0.8)]
                  transition-all duration-300 font-bold py-4 rounded-full text-center`}
              >
                {service.ctaText}
              </a>
            </motion.div>
          ))}
        </div>

    

      </div>
    </section>
  )
}
