import { Grid, Zap, PuzzleIcon as PuzzlePiece, CreditCard, Users, Infinity } from "lucide-react"
import { Geist } from "next/font/google"

// Initialize the Geist font
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function FeaturesSection() {
  return (
    <div className={`bg-black text-white py-20 px-4 md:px-8 lg:px-16 ${geist.className}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight">
            Why Creators & Brands
            <span className="text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.9)]">
              {" "}Choose Atiqa
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional graphic design solutions focused on attention, clicks,
            branding, engagement, and business growth.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-20">

          {/* Benefit 1 */}
          <div className="group flex flex-col items-start">
            <div className="mb-5 p-4 rounded-2xl border border-[#39FF14]/20 bg-[#39FF14]/5 group-hover:bg-[#39FF14]/10 transition-all duration-300">
              <Zap
                className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.9)]"
                strokeWidth={1.5}
              />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              High CTR Thumbnail Design
            </h3>

            <p className="text-gray-300 leading-relaxed text-base">
              Thumbnails designed with strong psychology, emotion, contrast,
              and curiosity to increase clicks, views, and overall YouTube growth.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="group flex flex-col items-start">
            <div className="mb-5 p-4 rounded-2xl border border-[#39FF14]/20 bg-[#39FF14]/5 group-hover:bg-[#39FF14]/10 transition-all duration-300">
              <Grid
                className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.9)]"
                strokeWidth={1.5}
              />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Scroll-Stopping Posters
            </h3>

            <p className="text-gray-300 leading-relaxed text-base">
              Eye-catching posters and social media designs that instantly grab
              attention and make your brand look premium and professional.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="group flex flex-col items-start">
            <div className="mb-5 p-4 rounded-2xl border border-[#39FF14]/20 bg-[#39FF14]/5 group-hover:bg-[#39FF14]/10 transition-all duration-300">
              <PuzzlePiece
                className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.9)]"
                strokeWidth={1.5}
              />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Premium Brand Identity
            </h3>

            <p className="text-gray-300 leading-relaxed text-base">
              Logos, brand visuals, and design systems that build trust,
              consistency, and a memorable business identity.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="group flex flex-col items-start">
            <div className="mb-5 p-4 rounded-2xl border border-[#39FF14]/20 bg-[#39FF14]/5 group-hover:bg-[#39FF14]/10 transition-all duration-300">
              <CreditCard
                className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.9)]"
                strokeWidth={1.5}
              />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Menu & Packaging Design
            </h3>

            <p className="text-gray-300 leading-relaxed text-base">
              Clean and attractive menu designs plus packaging visuals that help
              restaurants and brands increase customer attraction and sales.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="group flex flex-col items-start">
            <div className="mb-5 p-4 rounded-2xl border border-[#39FF14]/20 bg-[#39FF14]/5 group-hover:bg-[#39FF14]/10 transition-all duration-300">
              <Users
                className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.9)]"
                strokeWidth={1.5}
              />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Designed For Your Audience
            </h3>

            <p className="text-gray-300 leading-relaxed text-base">
              Every design is created according to your audience, niche,
              content style, and business goals for maximum engagement.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="group flex flex-col items-start">
            <div className="mb-5 p-4 rounded-2xl border border-[#39FF14]/20 bg-[#39FF14]/5 group-hover:bg-[#39FF14]/10 transition-all duration-300">
              <Infinity
                className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.9)]"
                strokeWidth={1.5}
              />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Fast Delivery & Revisions
            </h3>

            <p className="text-gray-300 leading-relaxed text-base">
              Quick turnaround times with smooth communication and revisions
              to ensure every design matches your exact vision perfectly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
