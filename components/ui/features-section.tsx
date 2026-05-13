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
        {/* Heading Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-[#ffa200] drop-shadow-[0_0_10px_rgba(255,189,0,0.8)]">Benefits</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            What You Get By Working With Maz Digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
  {/* Benefit 1 */}
  <div className="flex flex-col items-start">
    <div className="mb-5">
      <Grid className="w-10 h-10 text-[#ffa200] drop-shadow-[0_0_10px_rgba(255,189,0,0.8)]" strokeWidth={1.25} />
    </div>
    <h3 className="text-2xl font-bold mb-3">100% Client Satisfaction</h3>
    <p className="text-base text-gray-300 leading-relaxed">
      We don’t stop at delivery. Every project is refined until it truly works for your brand, audience, and goals.
    </p>
  </div>

  {/* Benefit 2 */}
  <div className="flex flex-col items-start">
    <div className="mb-5">
      <Zap className="w-10 h-10 text-[#ffa200] drop-shadow-[0_0_10px_rgba(255,189,0,0.8)]" strokeWidth={1.25} />
    </div>
    <h3 className="text-2xl font-bold mb-3">1000+ Projects Delivered</h3>
    <p className="text-base text-gray-300 leading-relaxed">
      From high-performing video edits to clean designs and websites, we know what works because we’ve done it at scale.
    </p>
  </div>

  {/* Benefit 3 */}
  <div className="flex flex-col items-start">
    <div className="mb-5">
      <PuzzlePiece className="w-10 h-10 text-[#ffa200] drop-shadow-[0_0_10px_rgba(255,189,0,0.8)]" strokeWidth={1.25} />
    </div>
    <h3 className="text-2xl font-bold mb-3">95%+ Client Retention</h3>
    <p className="text-base text-gray-300 leading-relaxed">
      Clients stay with us because our content, visuals, and strategies consistently bring engagement, growth, and trust.
    </p>
  </div>

  {/* Benefit 4 */}
  <div className="flex flex-col items-start">
    <div className="mb-5">
      <CreditCard className="w-10 h-10 text-[#ffa200] drop-shadow-[0_0_10px_rgba(255,189,0,0.8)]" strokeWidth={1.25} />
    </div>
    <h3 className="text-2xl font-bold mb-3">3+ Years of Experience</h3>
    <p className="text-base text-gray-300 leading-relaxed">
      Years of hands on experience in video editing, branding, social media, and web allow us to move fast and smart.
    </p>
  </div>

  {/* Benefit 5 */}
  <div className="flex flex-col items-start">
    <div className="mb-5">
      <Users className="w-10 h-10 text-[#ffa200] drop-shadow-[0_0_10px_rgba(255,189,0,0.8)]" strokeWidth={1.25} />
    </div>
    <h3 className="text-2xl font-bold mb-3">Content That Converts</h3>
    <p className="text-base text-gray-300 leading-relaxed">
      We edit videos, design visuals, and manage content with one goal in mind: attention, retention, and action.
    </p>
  </div>

  {/* Benefit 6 */}
  <div className="flex flex-col items-start">
    <div className="mb-5">
      <Infinity className="w-10 h-10 text-[#ffa200] drop-shadow-[0_0_10px_rgba(255,189,0,0.8)]" strokeWidth={1.25} />
    </div>
    <h3 className="text-2xl font-bold mb-3">Long Term Growth Partner</h3>
    <p className="text-base text-gray-300 leading-relaxed">
      We work like an in house team, helping you scale your brand across video, design, social media, and web.
    </p>
  </div>
</div>

      </div>
    </div>
  )
}
