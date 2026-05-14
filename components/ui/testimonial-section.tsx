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
    position: "YouTube Creator",
    quote:
      "The thumbnails completely transformed my channel. CTR increased instantly and more people started clicking on my videos.",
    initial: "D",
    image: "/Assets/Reviews/user1.jpeg",
  },
  {
    name: "Sarah Mitchell",
    position: "Restaurant Owner",
    quote:
      "The menu design looked premium and professional. Customers now spend more time looking at our menu and ordering more items.",
    initial: "S",
    image: "/Assets/Reviews/user2.png",
  },
  {
    name: "Anthony Rivera",
    position: "Food Brand Founder",
    quote:
      "Packaging designs looked clean, modern, and high-end. Our products instantly started standing out on shelves.",
    initial: "A",
    image: "/Assets/Reviews/user3.jpeg",
  },
  {
    name: "Melissa Grant",
    position: "Personal Brand Coach",
    quote:
      "My LinkedIn banner and branding now look polished and premium. It gave my profile a much stronger professional identity.",
    initial: "M",
    image: "/Assets/Reviews/user4.jpeg",
  },
  {
    name: "Kevin Thompson",
    position: "Fitness YouTuber",
    quote:
      "The thumbnails are bold, emotional, and impossible to ignore. Views and engagement improved within days.",
    initial: "K",
    image: "/Assets/Reviews/user5.jpeg",
  },
  {
    name: "Nina Patel",
    position: "Cafe Owner",
    quote:
      "Posters and promotional designs made our café look modern and attractive. Customers even started sharing our posters online.",
    initial: "N",
    image: "/Assets/Reviews/user6.jpeg",
  },
  {
    name: "Omar Khalid",
    position: "E-commerce Brand Owner",
    quote:
      "Every design feels premium and conversion-focused. Product banners and ads now grab attention instantly.",
    initial: "O",
    image: "/Assets/Reviews/user7.jpeg",
  },
  {
    name: "Laura Simmons",
    position: "Content Creator",
    quote:
      "The thumbnail designs perfectly match my niche and audience. My content finally looks professional and clickable.",
    initial: "L",
    image: "/Assets/Reviews/user8.jpeg",
  },
  {
    name: "Jason Miller",
    position: "Restaurant Manager",
    quote:
      "The food menu layout was clean, modern, and easy to read. It completely upgraded our restaurant presentation.",
    initial: "J",
    image: "/Assets/Reviews/user9.png",
  },
  {
    name: "Emily Rogers",
    position: "Business Consultant",
    quote:
      "My social media posts and LinkedIn branding now feel consistent and premium. It improved my online presence massively.",
    initial: "E",
    image: "/Assets/Reviews/user10.jpeg",
  },
];

const secondColumnTestimonials: Testimonial[] = [
  {
    name: "Hassan Malik",
    position: "Gaming YouTuber",
    quote:
      "The thumbnails are designed with real click psychology. My gaming videos now attract far more viewers.",
    initial: "H",
    image: "/Assets/Reviews2/u1.jpeg",
  },
  {
    name: "Rebecca Collins",
    position: "Online Coach",
    quote:
      "Poster and banner designs gave my brand a clean and premium feel. Everything now looks professional and trustworthy.",
    initial: "R",
    image: "/Assets/Reviews2/u2.jpeg",
  },
  {
    name: "Thomas Nguyen",
    position: "Restaurant Founder",
    quote:
      "The menu and food poster designs made our restaurant marketing look high-end. Customers loved the visuals.",
    initial: "T",
    image: "/Assets/Reviews2/u3.png",
  },
  {
    name: "Ayesha Rahman",
    position: "Lifestyle Creator",
    quote:
      "My thumbnails finally feel consistent and eye-catching. They perfectly fit my personal brand style.",
    initial: "A",
    image: "/Assets/Reviews2/u4.jpeg",
  },
  {
    name: "Mark Evans",
    position: "Digital Seller",
    quote:
      "From LinkedIn banners to promotional posts, every design feels strategic and visually powerful.",
    initial: "M",
    image: "/Assets/Reviews2/u5.jpeg",
  },
  {
    name: "Daniel Foster",
    position: "Food Business Owner",
    quote:
      "The packaging design completely upgraded our product presentation. Customers instantly noticed the difference.",
    initial: "D",
    image: "/Assets/Reviews2/u6.png",
  },
  {
    name: "Sophie Taylor",
    position: "Beauty Creator",
    quote:
      "The thumbnails look modern, clean, and highly clickable. My beauty content now stands out much more.",
    initial: "S",
    image: "/Assets/Reviews2/u7.jpeg",
  },
  {
    name: "Lucas Morgan",
    position: "Marketing Specialist",
    quote:
      "Social media creatives are visually strong and conversion-focused. Engagement improved significantly.",
    initial: "L",
    image: "/Assets/Reviews2/u8.jpeg",
  },
  {
    name: "Isabella King",
    position: "Food Blogger",
    quote:
      "The food posters and Instagram posts looked incredible. They made my page feel more premium and aesthetic.",
    initial: "I",
    image: "/Assets/Reviews2/u9.jpeg",
  },
  {
    name: "Ryan Carter",
    position: "Business Coach",
    quote:
      "My LinkedIn profile now looks much more professional because of the custom banner and branding design.",
    initial: "R",
    image: "/Assets/Reviews2/u10.png",
  },
];

const thirdColumnTestimonials: Testimonial[] = [
  {
    name: "Chloe Bennett",
    position: "Fashion Brand Owner",
    quote:
      "The posters and promotional graphics instantly improved our brand image. Everything now looks elegant and premium.",
    initial: "C",
    image: "/Assets/Reviews3/u1.jpeg",
  },
  {
    name: "James Walker",
    position: "Tech YouTuber",
    quote:
      "The thumbnails are sharp, clean, and highly engaging. CTR improved noticeably after the redesign.",
    initial: "J",
    image: "/Assets/Reviews3/u2.png",
  },
  {
    name: "Sophia Martinez",
    position: "Restaurant CEO",
    quote:
      "Menu and food campaign designs gave our restaurant a completely fresh and modern look.",
    initial: "S",
    image: "/Assets/Reviews3/u3.jpeg",
  },
  {
    name: "Liam Anderson",
    position: "Freelancer",
    quote:
      "The LinkedIn banner and branding designs helped me look more professional and attract better clients online.",
    initial: "L",
    image: "/Assets/Reviews3/u4.jpeg",
  },
  {
    name: "Emma Johansson",
    position: "Content Creator",
    quote:
      "Thumbnail quality is exceptional. Every design feels custom-made for clicks, engagement, and audience attention.",
    initial: "E",
    image: "/Assets/Reviews3/u5.jpeg",
  },
  {
    name: "Aarav Sharma",
    position: "Food Vlogger",
    quote:
      "The YouTube thumbnails instantly made my videos look more premium. My food content started getting better reach and engagement.",
    initial: "A",
    image: "/Assets/Reviews3/u6.jpeg",
  },
  {
    name: "Olivia Brown",
    position: "Restaurant Marketing Manager",
    quote:
      "Posters and menu designs perfectly matched our restaurant vibe. Customers constantly compliment the visuals.",
    initial: "O",
    image: "/Assets/Reviews3/u7.jpeg",
  },
  {
    name: "Noah Wilson",
    position: "Startup Founder",
    quote:
      "The LinkedIn branding and social media graphics made our startup appear much more established and trustworthy.",
    initial: "N",
    image: "/Assets/Reviews3/u8.jpeg",
  },
  {
    name: "Mia Khan",
    position: "Beauty Brand Owner",
    quote:
      "Packaging and promotional designs gave my products a luxury feel. Sales and customer trust improved noticeably.",
    initial: "M",
    image: "/Assets/Reviews3/u9.jpeg",
  },
  {
    name: "Ethan Clark",
    position: "YouTube Educator",
    quote:
      "The thumbnails are visually addictive and optimized for clicks. My educational videos finally started getting the attention they deserved.",
    initial: "E",
    image: "/Assets/Reviews3/u10.jpeg",
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
          What people are <span className="text-[#39FF14]">saying </span>about us.
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

