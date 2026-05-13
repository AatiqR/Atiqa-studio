"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"
import { motion, Variants } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface WebsiteDesign {
  id: number
  title: string
  category: string
  image: string
}

// Custom hook for media queries
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [matches, query])

  return matches
}

export default function WebsiteShowcaseSlider() {
  const websites: WebsiteDesign[] = 
  [
    {
        "id": 8,
        "title": "Muse Interiors & Home Styling Website",
        "category": "Interior Design",
        "image": "/Assets/slider/interior.png"
    },

    {
        "id": 10,
        "title": "Al Mustafa IT Academy Website",
        "category": "Education & Learning",
        "image": "/Assets/slider/almustafa.png"
    },
    {
      "id": 3,
      "title": "Dessert Contracting – Home Renovation Website",
      "category": "Construction & Renovation",
      "image": "/Assets/slider/contracting.png"
  },
    {
        "id": 1,
        "title": "GigaFit – Ultimate Gym & Fitness Website",
        "category": "Health & Fitness",
        "image": "/Assets/slider/gym.png"
    },
    {
      "id": 6,
      "title": "Oliver – Creative Portfolio Website",
      "category": "Personal Branding & Portfolio",
      "image": "/Assets/slider/portfolio.jpg"
  },
  {
      "id": 11,
      "title": "Premium Dog Care & Training Website",
      "category": "Pet Services",
      "image": "/Assets/slider/dogcare.png"
  },
  {
      "id": 2,
      "title": "Donut Media – Digital Marketing Agency Website",
      "category": "Marketing & Advertising",
      "image": "/Assets/slider/marketing.png"
  },
    {
      "id": 7,
      "title": "Adam Care Technical Solutions Website",
      "category": "Technical & Maintenance Services",
      "image": "/Assets/slider/service.png"
  },
    {
        "id": 9,
        "title": "Modern Book Store & Reading Hub Website",
        "category": "Books & Literature",
        "image": "/Assets/slider/book.png"
    },
    {
        "id": 4,
        "title": "Dog Venture – Advanced Dog Training Website",
        "category": "Pet Training Services",
        "image": "/Assets/slider/Dog.png"
    },
    {
        "id": 5,
        "title": "Professional Waterproofing Solutions Website",
        "category": "Home & Building Maintenance",
        "image": "/Assets/slider/waterproofing.png"
    },

]


  const [activeIndex, setActiveIndex] = useState(3)
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Responsive breakpoints
  const isXs = useMediaQuery("(max-width: 480px)")
  const isSm = useMediaQuery("(min-width: 481px) and (max-width: 640px)")
  const isMd = useMediaQuery("(min-width: 641px) and (max-width: 768px)")
  const isLg = useMediaQuery("(min-width: 769px) and (max-width: 1024px)")

  // Calculate card dimensions based on screen size
  const getCardDimensions = () => {
    if (isXs) return { width: 270, height: 360 }
    if (isSm) return { width: 290, height: 400 }
    if (isMd) return { width: 320, height: 440 }
    if (isLg) return { width: 380, height: 480 }
    return { width: 420, height: 550 } // xl default
  }

  // Calculate offset percentage based on screen size
  const getOffsetPercentage = () => {
    if (isXs) return 15
    if (isSm || isMd) return 20
    return 25 // lg and xl default
  }

  const handlePrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? websites.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, websites.length])

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === websites.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, websites.length])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    },
    [handlePrev, handleNext],
  )

  // Handle touch events for swipe
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = null
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return

    const diffX = touchStartX.current - touchEndX.current
    const threshold = 50 // Minimum swipe distance to trigger navigation

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Swiped left, go to next
        handleNext()
      } else {
        // Swiped right, go to previous
        handlePrev()
      }
    }

    // Reset touch coordinates
    touchStartX.current = null
    touchEndX.current = null
  }, [handleNext, handlePrev])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    const sliderElement = sliderRef.current
    if (sliderElement) {
      sliderElement.addEventListener("touchstart", handleTouchStart, { passive: true })
      sliderElement.addEventListener("touchmove", handleTouchMove, { passive: true })
      sliderElement.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)

      if (sliderElement) {
        sliderElement.removeEventListener("touchstart", handleTouchStart)
        sliderElement.removeEventListener("touchmove", handleTouchMove)
        sliderElement.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [handleKeyDown, handleTouchStart, handleTouchMove, handleTouchEnd])

  // Animation variants for text
  // const titleVariants = {
  //   hidden: { opacity: 0, y: -20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeOut",
  //     },
  //   },
  // }
const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ✅ proper easing (easeOut style)
    },
  },
}

  // Get current card dimensions
  const { width: cardWidth, height: cardHeight } = getCardDimensions()
  const offsetPercentage = getOffsetPercentage()

  return (
    <div id="Project" className="relative w-full overflow-hidden bg-black py-8 sm:py-12 md:py-16 px-2 sm:px-4 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Simple title */}
        <motion.div
          className="text-center mb-4 sm:mb-6 md:mb-8"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-300 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4">
            Explore how we&apos;ve helped businesses like yours grow through a perfect website.
          </p>
        </motion.div>

        <div
          ref={sliderRef}
          className="relative w-full touch-pan-y"
          style={{
            height: `${cardHeight + 40}px`,
          }}
        >
          {websites.map((website, index) => {
            // Calculate position relative to active index
            const position = (index - activeIndex + websites.length) % websites.length
            // Normalize position to be between -3 and 3
            const normalizedPosition = position > 3 ? position - websites.length : position

            // Only render visible cards to improve performance
            if (Math.abs(normalizedPosition) > 3) return null

            return (
              <div
                key={website.id}
                onClick={() => {
                  if (isAnimating || normalizedPosition === 0) return
                  setIsAnimating(true)
                  setActiveIndex(index)
                  setTimeout(() => setIsAnimating(false), 500)
                }}
                className={cn(
                  "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out flex items-center justify-center",
                  isAnimating && "pointer-events-none",
                  normalizedPosition !== 0 && "cursor-pointer",
                )}
                style={{
                  zIndex: normalizedPosition === 0 ? 10 : 5 - Math.abs(normalizedPosition),
                  opacity: Math.abs(normalizedPosition) > 2 ? 0.4 : 1,
                  transform: `
                    translateX(${normalizedPosition * offsetPercentage}%) 
                    scale(${1 - Math.abs(normalizedPosition) * 0.15})
                    translateZ(${-Math.abs(normalizedPosition) * 100}px)
                  `,
                }}
              >
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 group",
                    normalizedPosition === 0 ? "border-2 border-white/20" : "",
                  )}
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                  }}
                >
                  <div className="h-full w-full relative">
                    <Image
                      src={website.image || "/placeholder.svg"}
                      alt={`${website.title} design`}
                      className="object-cover"
                      fill
                      sizes={`(max-width: 480px) 270px, (max-width: 640px) 290px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px`}
                      priority={normalizedPosition === 0}
                    />

                    {normalizedPosition === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 bg-black/80">
                        <p className="text-white font-medium text-sm sm:text-base md:text-lg">{website.title}</p>
                        <p className="text-white/70 text-xs sm:text-sm">{website.category}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 gap-1 sm:gap-2">
          {websites.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setActiveIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }}
              className={cn(
                "w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-white w-4 sm:w-6" : "bg-white/30 hover:bg-white/50",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows - responsive positioning */}
        <div className="absolute top-1/2 left-1 sm:left-2 md:left-4 lg:left-8 transform -translate-y-1/2 z-20">
          <button
            onClick={handlePrev}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:bg-white/10"
            aria-label="Previous slide"
          >
            <ChevronLeft className={isXs ? "w-4 h-4" : "w-5 h-5"} />
          </button>
        </div>

        <div className="absolute top-1/2 right-1 sm:right-2 md:right-4 lg:right-8 transform -translate-y-1/2 z-20">
          <button
            onClick={handleNext}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:bg-white/10"
            aria-label="Next slide"
          >
            <ChevronRight className={isXs ? "w-4 h-4" : "w-5 h-5"} />
          </button>
        </div>
      </div>
    </div>
  )
}

