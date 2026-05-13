"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="bg-black min-h-screen w-full py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-xl mb-2">Questions?</h2>
        <h1 className="text-[#ffa200] text-5xl md:text-6xl font-bold mb-16">We got answers.</h1>

       <Accordion type="single" collapsible className="space-y-4">

  <AccordionItem value="item-1" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">How will your video editing help me get more views or leads?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      We edit with retention and action in mind. Strong hooks, clean pacing, and clear CTAs so viewers stay longer and take action.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">What makes Mars Agency different from other agencies?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      We focus on performance, not just visuals. Every edit, design, and strategy is built to support real growth.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Do you work with my type of business or personal brand?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Most likely, yes. We work with creators, coaches, real estate, fitness, and service-based brands.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">How fast will I receive my edited videos or designs?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Turnaround is fast and reliable. Most projects are delivered within a few days without compromising quality.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Can you match my brand style and content tone?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Yes. We study your brand, audience, and goals to keep everything consistent and aligned.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-6" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Which platforms do you optimize content for?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Instagram Reels, TikTok, YouTube Shorts, long-form YouTube, and paid ads.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-7" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Is this a one-time service or long-term collaboration?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Both options are available. You can start small or scale into a long-term partnership.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-8" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">What if I want revisions?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      You get reasonable revisions to ensure the final result matches your expectations.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-9" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Will I need to guide every step?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      No. You share your goals and we handle the execution from start to finish.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-10" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">How do I know this investment is worth it?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Our work is designed to improve engagement, consistency, and conversions, not just visuals.
    </AccordionContent>
  </AccordionItem>

</Accordion>



      </div>
    </div>
  )
}

