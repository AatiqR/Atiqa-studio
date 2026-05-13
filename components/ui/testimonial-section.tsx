"use client"

import Image from "next/image"

interface Testimonial {
  name: string
  position: string
  quote: string
  initial: string
  image?: string // Optional image URL
}

export default function TestimonialSection() {
  // CSS animations defined inline
  const animationStyles = `
    @keyframes marquee-vertical {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(calc(-100% - var(--gap)));
      }
    }

    @keyframes marquee-vertical-reverse {
      0% {
        transform: translateY(calc(100% + var(--gap)));
      }
      100% {
        transform: translateY(0);
      }
    }

    .animate-marquee-vertical {
      animation: marquee-vertical var(--duration) linear infinite;
    }

    .animate-marquee-vertical-reverse {
      animation: marquee-vertical-reverse var(--duration) linear infinite;
    }
  `
const firstColumnTestimonials: Testimonial[] = [
  {
    name: "Daniel Brooks",
    position: "Real Estate Consultant",
    quote:
      "The video edits completely changed how my listings perform. Hooks are strong, pacing is perfect, and viewers are watching longer.",
    initial: "D",
    image: "/Assets/Reviews/user1.jpeg",
  },
  {
    name: "Sarah Mitchell",
    position: "Online Business Coach",
    quote:
      "Every video feels intentional and professional. The edits keep my audience engaged, and I see better retention than ever.",
    initial: "S",
    image: "/Assets/Reviews/user2.png",
  },
  {
    name: "Anthony Rivera",
    position: "Agency Owner",
    quote:
      "Outsourcing video editing here was a game-changer. Smooth cuts, clean pacing, and the content feels polished and professional.",
    initial: "A",
    image: "/Assets/Reviews/user3.jpeg",
  },
  {
    name: "Melissa Grant",
    position: "Personal Brand Strategist",
    quote:
      "Short-form edits feel premium and keep viewers hooked. It’s exactly what high-quality social media content should feel like.",
    initial: "M",
    image: "/Assets/Reviews/user4.jpeg",
  },
  {
    name: "Kevin Thompson",
    position: "Fitness Program Founder",
    quote:
      "Retention has improved dramatically. The video edits are smooth, fast, and keep viewers watching till the end.",
    initial: "K",
    image: "/Assets/Reviews/user5.jpeg",
  },
  {
    name: "Nina Patel",
    position: "Marketing Manager",
    quote:
      "Thumbnails and graphics instantly improved our CTR. Everything looks bold, clean, and perfectly aligned with our brand.",
    initial: "N",
    image: "/Assets/Reviews/user6.jpeg",
  },
  {
    name: "Omar Khalid",
    position: "E-commerce Brand Owner",
    quote:
      "Graphic designs are modern and eye-catching. Our ads now perform better, and everything feels premium.",
    initial: "O",
    image: "/Assets/Reviews/user7.jpeg",
  },
  {
    name: "Laura Simmons",
    position: "Content Manager",
    quote:
      "Video editing quality is consistent and reliable. Every project feels thought-through, professional, and engaging.",
    initial: "L",
    image: "/Assets/Reviews/user8.jpeg",
  },
  {
    name: "Jason Miller",
    position: "Startup Founder",
    quote:
      "The website they built is clean, fast, and conversion-focused. We started receiving qualified leads within weeks.",
    initial: "J",
    image: "/Assets/Reviews/user9.png",
  },
  {
    name: "Emily Rogers",
    position: "Coaching Business Owner",
    quote:
      "Our website now fully reflects our brand. Simple structure, smooth experience, and very professional.",
    initial: "E",
    image: "/Assets/Reviews/user10.jpeg",
  },
];

const secondColumnTestimonials: Testimonial[] = [
  {
    name: "Hassan Malik",
    position: "Social Media Consultant",
    quote:
      "Video edits are crafted for results. Engagement and watch time increased significantly across all platforms.",
    initial: "H",
    image: "/Assets/Reviews2/u1.jpeg",
  },
  {
    name: "Rebecca Collins",
    position: "Online Course Creator",
    quote:
      "The editing style keeps viewers hooked naturally. Professional, polished, and highly effective for conversions.",
    initial: "R",
    image: "/Assets/Reviews2/u2.jpeg",
  },
  {
    name: "Thomas Nguyen",
    position: "Brand Manager",
    quote:
      "Great sense of pacing, hooks, and visuals. Video edits helped us communicate our messages clearly.",
    initial: "T",
    image: "/Assets/Reviews2/u3.png",
  },
  {
    name: "Ayesha Rahman",
    position: "Lifestyle Brand Founder",
    quote:
      "Thumbnails and graphics look premium and consistent. My personal brand finally feels cohesive across all platforms.",
    initial: "A",
    image: "/Assets/Reviews2/u4.jpeg",
  },
  {
    name: "Mark Evans",
    position: "Digital Product Seller",
    quote:
      "From editing to visuals, everything feels conversion-driven. The focus on results is what sets them apart.",
    initial: "M",
    image: "/Assets/Reviews2/u5.jpeg",
  },
  {
    name: "Daniel Foster",
    position: "Entrepreneur, Creative Works",
    quote:
      "Video edits improved engagement and retention. Every cut is smooth and professional, keeping the audience watching.",
    initial: "D",
    image: "/Assets/Reviews2/u6.png",
  },
  {
    name: "Sophie Taylor",
    position: "Coach, Mindset Academy",
    quote:
      "The edits are perfectly timed and the visuals look incredible. My content now gets more views and better feedback.",
    initial: "S",
    image: "/Assets/Reviews2/u7.jpeg",
  },
  {
    name: "Lucas Morgan",
    position: "Marketing Specialist",
    quote:
      "From thumbnails to videos, designs are consistent and visually appealing. Performance metrics improved noticeably.",
    initial: "L",
    image: "/Assets/Reviews2/u8.jpeg",
  },
  {
    name: "Isabella King",
    position: "Content Creator",
    quote:
      "Every video feels polished and professional. Editing quality makes a huge difference in audience engagement.",
    initial: "I",
    image: "/Assets/Reviews2/u9.jpeg",
  },
  {
    name: "Ryan Carter",
    position: "Business Coach",
    quote:
      "Social media content now looks clean, premium, and performs much better. I’ve received more inquiries since the redesign.",
    initial: "R",
    image: "/Assets/Reviews2/u10.png",
  },
];

const thirdColumnTestimonials: Testimonial[] = [
  {
    name: "Chloe Bennett",
    position: "Entrepreneur, Style Hive",
    quote:
      "Visuals are eye-catching and professional. My engagement rates went up significantly after using these services.",
    initial: "C",
    image: "/Assets/Reviews3/u1.jpeg",
  },
  {
    name: "James Walker",
    position: "Founder, Tech Solutions",
    quote:
      "The video editing gave our tutorials more clarity and punch. Viewer feedback has been amazing.",
    initial: "J",
    image: "/Assets/Reviews3/u2.png",
  },
  {
    name: "Sophia Martinez",
    position: "CEO, Digital Wave",
    quote:
      "Our videos now look premium and professional. Engagement has improved dramatically.",
    initial: "S",
    image: "/Assets/Reviews3/u3.jpeg",
  },
  {
    name: "Liam Anderson",
    position: "Freelancer",
    quote:
      "Editing quality is consistent, and every video feels carefully crafted. My social media traction has grown steadily.",
    initial: "L",
    image: "/Assets/Reviews3/u4.jpeg",
  },
  {
    name: "Emma Johansson",
    position: "Founder, Creative Minds",
    quote:
      "Graphic designs and thumbnails are consistent and modern. My brand now feels professional across all platforms.",
    initial: "E",
    image: "/Assets/Reviews3/u5.jpeg",
  },
];



  return (
    <>
      {/* Include the animation styles */}
      <style jsx global>
        {animationStyles}
      </style>

      <div id="Reviews" className="flex flex-col my-24 bg-[#080808] text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mx-auto font-bold text-center mb-10">
          What people are <span className="text-[#ffa200]">saying </span>about us.
        </h1>
        <div className="relative flex h-[500px] max-w-5xl mx-auto flex-row items-center justify-center overflow-hidden rounded-lg">
          {/* First column - Top to Bottom */}
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:40s] px-4">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-repeat1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-repeat2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-repeat3-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Second column - Bottom to Top */}
          <div className="group overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:40s] px-4 hidden md:flex">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-repeat1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-repeat2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-repeat3-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Third column - Bottom to Top */}
          <div className="group overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:40s] px-4 hidden lg:flex">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat3-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat5-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0a0a0a]"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a]"></div>
        </div>
      </div>
    </>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative cursor-pointer overflow-hidden rounded-xl border p-4 mb-4 bg-[#0d0d0d] border-white/10 hover:bg-[#1a1a1a] transition-colors duration-300">
      <div className="flex flex-row items-center gap-2">
        <div className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
          {testimonial.image ? (
            // Method 1: Using fill property (good for unknown dimensions)
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={`${testimonial.name}'s profile picture`}
              fill
              sizes="40px"
              className="object-cover"
              priority={false}
              quality={85}
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center rounded-full bg-[#262626] text-white">
              {testimonial.initial}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{testimonial.name}</figcaption>
          <p className="text-xs font-medium text-white/60">{testimonial.position}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/80">{testimonial.quote}</blockquote>
    </figure>
  )
}

