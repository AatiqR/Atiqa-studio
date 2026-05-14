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
      <span className="text-lg">How do your thumbnails help me get more clicks on YouTube?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      I design thumbnails using attention psychology, strong contrast, emotions, and curiosity triggers so viewers feel forced to click your video instead of scrolling away.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Will your thumbnails match my channel style and branding?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Yes. I study your channel, content type, and audience first, then create thumbnails that match your brand while still maximizing clicks and visibility.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Can good thumbnails really increase my views?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Yes. A strong thumbnail improves click-through rate (CTR), which directly increases YouTube impressions, views, and overall channel growth.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">How do you decide what design will perform best?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      I analyze your niche, competitors, trending styles, and audience behavior to create thumbnails that are proven to attract more attention and engagement.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Do you design thumbnails for all types of YouTube channels?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Yes. I work with gaming, educational, business, lifestyle, finance, vlog, and motivational channels with custom strategies for each niche.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-6" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">What makes your designs different from others?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      My focus is not just design — it’s performance. Every thumbnail is built to increase CTR, attract attention in 1 second, and convert viewers into clicks.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-7" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">How fast will I receive my thumbnails or designs?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Most thumbnail designs are delivered within 24–48 hours depending on complexity, without compromising quality or creativity.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-8" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Can I request changes if I don’t like the design?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Yes. I offer revisions to make sure the final design fully matches your expectations and performs well for your audience.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-9" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Do I need to give you ideas for every design?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      No. You just provide the video topic or goal — I handle the full creative direction, concept, and execution for you.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-10" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">How do I know your service will actually improve my channel?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      My designs are built using proven CTR principles and real performance psychology used by top YouTubers to increase views and channel growth.
    </AccordionContent>
  </AccordionItem>

</Accordion>



      </div>
    </div>
  )
}

