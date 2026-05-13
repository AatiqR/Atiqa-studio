"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Function to update state based on window width
    const updateSize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
      setIsDesktop(window.innerWidth >= 1024)
    }

    // Set initial size
    updateSize()

    // Add event listener
    window.addEventListener("resize", updateSize)

    // Clean up
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return { isMobile, isTablet, isDesktop }
}
