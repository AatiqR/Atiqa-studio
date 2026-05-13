"use client"
import Image from "next/image"; // Correct import statement
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EcommerceLandingPage() {
  return (
  <div id="Casestudy"
   className="min-h-screen w-full rounded-4xl bg-gray-50">
{/* 1st */}
<div className="container mx-auto px-6 py-10 md:py-16">
 <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-center">
  <span className="bg-gradient-to-r from-[#FFA200] to-[#ff8c00] bg-clip-text text-transparent animate-pulse">
    Case Studies
  </span>
</h1>


  {/* Title */}
  <div className="text-center mb-12 mt-9">
    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A2238] leading-tight tracking-tight">
      <span className="text-[#ffa200]">GodMasterPlays</span>
      <br />
    Successful YouTube Channel in 7 Days
    </h2>
  </div>

  {/* Grid layout */}
  <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
    
    {/* Left side with mockup */}
    <div className="h-[200px] md:h-[400px] rounded-4xl overflow-hidden bg-transparent">
      <Image
        src="/Assets/project/yt.jpg"
        width={100}
        height={100}
        alt="GodMasterPlays YouTube Channel Preview"
        className="w-full h-full object-cover rounded-5xl transition-transform duration-300 hover:scale-110"
        priority
        unoptimized
      />
    </div>

    {/* Right side with content */}
    <div className="space-y-6">
      
      {/* Intro */}
      <p className="text md:text-xl text-gray-700 leading-relaxed">
        Starting a gaming channel is tough especially from zero. 
        <span className="font-semibold"> GodMasterPlays</span> had a powerful idea: 
        mixing <span className="font-semibold">Game Theory with Clash Royale</span>, 
        but needed the right strategy to stand out fast.
      </p>

      {/* Case Study Sections */}
      <div className="space-y-6">
        
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">⚡ The Challenge</h3>
          <p className="text-gray-700 leading-relaxed">
            Breaking into the saturated gaming niche while starting from zero subscribers.
            The goal was rapid growth, high engagement, and fast monetization.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">💡 The Solution</h3>
          <p className="text-gray-700 leading-relaxed">
            We became his creative partner shaping engaging scripts (like the 
            “Poker vs Chess” concept), designing irresistible thumbnails 
            (“SCAM” & “BEFORE/AFTER”), and editing videos to be fast, smart, 
            and addictive to maximize watch time.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">🚀 The Results</h3>
          <p className="text-[#ffa200] font-semibold leading-relaxed">
            ✅ 1,000+ Subscribers in under 7 days <br />
            ✅ 4,000+ Watch Hours achieved <br />
            ✅ Fully Monetized in less than a week <br />
            ✅ Thousands of engaged fans
          </p>
        </div>
      </div>

      {/* Key Contributions */}
      <div className="grid gap-2 pt-4">
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#ffa200]" />
          <span className="text-gray-800 font-semibold">🎬 High-Retention Video Editing</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#ffa200]" />
          <span className="text-gray-800 font-semibold">🧠 Strategic Script Development</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#ffa200]" />
          <span className="text-gray-800 font-semibold">🖼️ Click-Optimized Thumbnails</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#ffa200]" />
          <span className="text-gray-800 font-semibold">📈 Monetization Strategy</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="pt-5">
        <Button className="bg-[#1A2238] hover:bg-[#1A2238]/90 text-white rounded-full px-8 py-5 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
         onClick={() => {
    window.open("https://wa.me/923055544729?text=Hi,%20I%20would%20like%20a%20youtube%20channel%20service", "_blank");
  }}
        >
          Start Your Channel Growth
        </Button>
      </div>

    </div>
  </div>
</div>




{/* 2nd */}
<div className="container mx-auto px-6 py-10 md:py-16">
  {/* Title */}
  <div className="text-center mb-12">
    <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A2238] leading-tight tracking-tight">
      <span className="text-[#ffa200]">Noor-ul-Ain</span>
      <br />
      Helping a Creator Find Her Voice
    </h1>
  </div>

  {/* Grid layout */}
  <div className="grid gap-5 md:grid-cols-2 md:gap-16 items-start">
    
    {/* Left side with TWO images */}
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
  
  {/* Image 1 */}
  <div className="relative w-full aspect-[434/512] rounded-2xl overflow-hidden bg-white">
    <Image
      src="/Assets/project/ins.jpg"
      alt="Noor Instagram Case Study 1"
      fill
      sizes="(max-width: 640px) 100vw, 50vw"
      className="object-contain transition-transform duration-300 hover:scale-105"
      priority
    />
  </div>

  {/* Image 2 */}
  <div className="relative w-full aspect-[434/512] rounded-2xl overflow-hidden bg-white">
    <Image
      src="/Assets/project/ins2.jpg"
      alt="Noor Instagram Case Study 2"
      fill
      sizes="(max-width: 640px) 100vw, 50vw"
      className="object-contain transition-transform duration-300 hover:scale-105"
      priority
    />
  </div>

</div>


    {/* Right side with content */}
   {/* Right side with content */}
<div className="space-y-6">
  
  {/* Intro */}
  <p className="text md:text-xl text-gray-700 leading-relaxed">
    Growing on Instagram as a busy mom is not easy. 
    <span className="font-semibold"> Noor-ul-Ain</span> had creativity, consistency, and beautiful content, 
    but her page wasn’t reaching its full potential. She needed the right growth strategy to unlock real momentum.
  </p>

  {/* Case Study Sections */}
  <div className="space-y-6">
    
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">⚡ The Challenge</h3>
      <p className="text-gray-700 leading-relaxed">
        Despite posting consistently, her Instagram felt stuck. 
        Views were low, follower growth was slow, and her content wasn’t reaching new audiences.
        The goal was to spark organic growth and build a stronger connection with relatable moms.
      </p>
    </div>

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">💡 The Solution</h3>
      <p className="text-gray-700 leading-relaxed">
        We partnered with her to refine her branding, elevate her page positioning, 
        and develop a powerful Reel-focused strategy. 
        Every piece of content was optimized for relatability, quality, and Instagram’s algorithm 
        to maximize reach and engagement.
      </p>
    </div>

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">🚀 The Results</h3>
      <p className="text-[#ffa200] font-semibold leading-relaxed">
        ✅ 1.3 Million Views on a Single Reel <br />
        ✅ 1.19 Million Monthly Content Reach <br />
        ✅ 94% Reach from Non-Followers <br />
        ✅ 22,000+ Engaged Followers
      </p>
    </div>
  </div>

  {/* Key Contributions */}
  <div className="grid gap-2 pt-4">
    <div className="flex items-center gap-3">
      <Check className="h-6 w-6 text-[#ffa200]" />
      <span className="text-gray-800 font-semibold">📱 Organic Growth Strategy</span>
    </div>
    <div className="flex items-center gap-3">
      <Check className="h-6 w-6 text-[#ffa200]" />
      <span className="text-gray-800 font-semibold">🎥 High-Performing Reel Optimization</span>
    </div>
    <div className="flex items-center gap-3">
      <Check className="h-6 w-6 text-[#ffa200]" />
      <span className="text-gray-800 font-semibold">🎨 Professional Brand Positioning</span>
    </div>
    <div className="flex items-center gap-3">
      <Check className="h-6 w-6 text-[#ffa200]" />
      <span className="text-gray-800 font-semibold">📈 Audience Expansion Strategy</span>
    </div>
  </div>

  {/* Call to Action */}
  <div className="pt-5">
    <Button className="bg-[#1A2238] hover:bg-[#1A2238]/90 text-white rounded-full px-8 py-5 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
           onClick={() => {
    window.open("https://wa.me/923055544729?text=Hi,%20I%20would%20like%20a%20personal%20brand%20service", "_blank");
  }}
    >
      Grow Your Personal Brand
    </Button>
  </div>

</div>

  </div>
</div>





{/* 3rd */}
<div className="container mx-auto px-6 py-10 md:py-16">
  {/* Title */}
  <div className="text-center mb-12">
    <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A2238] leading-tight tracking-tight">
      <span className="text-[#ffaa00]">PTD Fitness</span>
      <br />
      Body Transformation Website
    </h1>
  </div>

  {/* Grid layout */}
  <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
    {/* Left side with mockup */}
    <div className="h-[220px] md:h-[380px] rounded-4xl overflow-hidden bg-transparent">
      <Image
        src="/Assets/project/ptd.gif"
        width={600}
        height={380}
        alt="PTD Fitness Case Study"
        className="w-full h-full object-cover rounded-5xl transition-transform duration-300 hover:scale-110"
        priority
        unoptimized
      />
    </div>

    {/* Right side with content */}
    <div className="space-y-1">
      {/* Intro */}
      <p className="text md:text-xl text-gray-700 leading-relaxed">
        We partnered with <span className="font-semibold">PTD Fitness</span>, 
        Dubai’s #1 body transformation program, to create a premium online presence 
        that highlights real client results, credibility logos, and high-converting funnels.
      </p>

      {/* Case Study Sections */}
      <div className="space-y-1">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">⚡ The Challenge</h3>
          <p className="text-gray-700 leading-relaxed">
            PTD needed a website that not only looked elite but also built trust fast—showcasing 
            proven client transformations, video testimonials, and credibility with global brands.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">💡 The Solution</h3>
          <p className="text-gray-700 leading-relaxed">
            We developed a <span className="font-semibold">modern, mobile-first platform</span> 
            with before/after galleries, integrated video testimonials, and clear “Start My Transformation” CTAs.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">🚀 The Results</h3>
          <p className="text-[#ffa200] font-semibold leading-relaxed">
            ✅ 50% more client inquiries through the website <br />
            ✅ 600+ 5★ reviews showcased to boost credibility <br />
            ✅ Trusted by major brands like EMAAR, KPMG & Dubai Police
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid gap-2 pt-1">
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#ffa200]" />
          <span className="text-gray-800 font-semibold">📱 Fully Responsive Design</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#ffa200]" />
          <span className="text-gray-800 font-semibold">🎥 Video Testimonials Section</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#ffa200]" />
          <span className="text-gray-800 font-semibold">📸 Before & After Transformations</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#ffa200]" />
          <span className="text-gray-800 font-semibold">🏆 Credibility Logos & Social Proof</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="pt-5">
        <Button 
               onClick={() => {
    window.open("https://wa.me/923055544729?text=Hi,%20I%20would%20like%20a%20Website%20Service", "_blank");
  }}
        className="bg-[#1A2238] hover:bg-[#1A2238]/90 text-white rounded-full px-8 py-5 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
          Start My Transformation
        </Button>
      </div>
    </div>
  </div>
</div>





</div>
  );
}