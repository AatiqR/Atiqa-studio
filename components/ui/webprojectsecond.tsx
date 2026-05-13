import Image from "next/image"; // Correct import statement
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EcommerceLandingPage() {
  return (
    <div className=" min-h-screen w-full bg-gray-50 ">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Left side with phone mockups */}
          <div className="relative h-[300px] md:h-[500px] overflow-hidden bg-transparent">
            <Image
              loading="lazy"
              src="/Assets/project/portfoliowebsite.gif"
              width={600}
              height={400}
              alt="Gym Website Preview"
              className="w-full h-full object-contain rounded-3xl  transition-transform duration-300 hover:scale-105"
              priority // Loads image faster for hero section
            />
          </div>

          {/* Right side with text content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A2238] leading-tight tracking-tight">
              Discover <span className="text-[#25D366]">Gigafit</span>
              <br />
              Gym Website
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Elevate your fitness journey with a sleek, modern gym website. Seamlessly manage memberships, book expert trainers, access tailored workout plans, and enjoy live or on-demand classes—all from one dynamic platform!
            </p>

            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-4">
                <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
                <span className="text-lg text-gray-800 font-bold">Fully Responsive Design</span>
              </div>

              <div className="flex items-center gap-4">
                <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
                <span className="text-lg text-gray-800 font-bold">Integrated Contact Form</span>
              </div>

              <div className="flex items-center gap-4">
                <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
                <span className="text-lg text-gray-800 font-bold">Easy Pre-Registration</span>
              </div>

              <div className="flex items-center gap-4">
                <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
                <span className="text-lg text-gray-800 font-bold">Multi-Section Layout</span>
              </div>
            </div>

            <div className="pt-8">
              <Button className="bg-[#1A2238] hover:bg-[#1A2238]/90 text-white rounded-full px-10 py-7 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
}