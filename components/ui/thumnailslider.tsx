"use client";
import Image from "next/image";

/* ✅ Image Type */
type ImageItem = {
  id: number;
  src: string;
  alt: string;
};

/* ✅ Portfolio Images */
const portfolioImages: ImageItem[] = [
  { id: 1, src: "/Assets/Thumbnail/1.jpg", alt: "Portfolio Thumbnail Image 1" },
  { id: 2, src: "/Assets/Thumbnail/2.jpg", alt: "Portfolio Thumbnail Image 2" },
  { id: 3, src: "/Assets/Thumbnail/3.jpg", alt: "Portfolio Thumbnail Image 3" },
  { id: 4, src: "/Assets/Thumbnail/4.jpg", alt: "Portfolio Thumbnail Image 4" },
  { id: 5, src: "/Assets/Thumbnail/5.jpg", alt: "Portfolio Thumbnail Image 5" },
  { id: 6, src: "/Assets/Thumbnail/6.jpg", alt: "Portfolio Thumbnail Image 6" },
  { id: 7, src: "/Assets/Thumbnail/7.jpeg", alt: "Portfolio Thumbnail Image 7" },
  { id: 8, src: "/Assets/Thumbnail/8.jpg", alt: "Portfolio Thumbnail Image 8" },
  { id: 9, src: "/Assets/Thumbnail/9.jpg", alt: "Portfolio Thumbnail Image 9" },
  { id: 10, src: "/Assets/Thumbnail/10.jpg", alt: "Portfolio Thumbnail Image 10" },
  { id: 11, src: "/Assets/Thumbnail/11.jpg", alt: "Portfolio Thumbnail Image 11" },
  { id: 12, src: "/Assets/Thumbnail/12.jpg", alt: "Portfolio Thumbnail Image 12" },
  { id: 13, src: "/Assets/Thumbnail/13.jpg", alt: "Portfolio Thumbnail Image 13" },
  { id: 14, src: "/Assets/Thumbnail/14.jpg", alt: "Portfolio Thumbnail Image 14" },
  { id: 15, src: "/Assets/Thumbnail/15.jpg", alt: "Portfolio Thumbnail Image 15" },
  { id: 16, src: "/Assets/Thumbnail/16.jpg", alt: "Portfolio Thumbnail Image 16" },
  { id: 17, src: "/Assets/Thumbnail/17.jpg", alt: "Portfolio Thumbnail Image 17" },
  { id: 18, src: "/Assets/Thumbnail/18.jpg", alt: "Portfolio Thumbnail Image 18" },
  { id: 19, src: "/Assets/Thumbnail/19.jpg", alt: "Portfolio Thumbnail Image 19" },
  { id: 20, src: "/Assets/Thumbnail/20.jpg", alt: "Portfolio Thumbnail Image 20" },
  { id: 21, src: "/Assets/Thumbnail/21.jpg", alt: "Portfolio Thumbnail Image 21" },
  { id: 22, src: "/Assets/Thumbnail/22.jpg", alt: "Portfolio Thumbnail Image 22" },
  { id: 23, src: "/Assets/Thumbnail/23.jpg", alt: "Portfolio Thumbnail Image 23" },
  { id: 24, src: "/Assets/Thumbnail/24.jpg", alt: "Portfolio Thumbnail Image 24" },
  { id: 25, src: "/Assets/Thumbnail/25.jpg", alt: "Portfolio Thumbnail Image 25" },
  { id: 26, src: "/Assets/Thumbnail/26.jpg", alt: "Portfolio Thumbnail Image 26" },
  { id: 27, src: "/Assets/Thumbnail/27.jpg", alt: "Portfolio Thumbnail Image 27" },
  { id: 28, src: "/Assets/Thumbnail/28.jpg", alt: "Portfolio Thumbnail Image 28" },
  { id: 29, src: "/Assets/Thumbnail/29.jpeg", alt: "Portfolio Thumbnail Image 29" },
  { id: 30, src: "/Assets/Thumbnail/30.jpg", alt: "Portfolio Thumbnail Image 30" },
];

/* ✅ Artwork Images (1–17) */
const artworkImages: ImageItem[] = [
  { id: 101, src: "/Assets/Artwork/1.jpg", alt: "Artwork 1" },
  { id: 102, src: "/Assets/Artwork/2.jpg", alt: "Artwork 2" },
  { id: 103, src: "/Assets/Artwork/3.jpg", alt: "Artwork 3" },
  { id: 104, src: "/Assets/Artwork/4.jpg", alt: "Artwork 4" },
  { id: 105, src: "/Assets/Artwork/5.jpg", alt: "Artwork 5" },
  { id: 106, src: "/Assets/Artwork/6.jpg", alt: "Artwork 6" },
  { id: 107, src: "/Assets/Artwork/7.jpg", alt: "Artwork 7" },
  { id: 108, src: "/Assets/Artwork/8.jpg", alt: "Artwork 8" },
  { id: 109, src: "/Assets/Artwork/9.jpg", alt: "Artwork 9" },
  { id: 110, src: "/Assets/Artwork/10.jpg", alt: "Artwork 10" },
  { id: 111, src: "/Assets/Artwork/11.jpg", alt: "Artwork 11" },
  { id: 112, src: "/Assets/Artwork/12.jpg", alt: "Artwork 12" },
  { id: 113, src: "/Assets/Artwork/13.jpg", alt: "Artwork 13" },
  { id: 114, src: "/Assets/Artwork/14.jpg", alt: "Artwork 14" },

  { id: 116, src: "/Assets/Artwork/16.jpg", alt: "Artwork 16" },
  { id: 117, src: "/Assets/Artwork/17.jpg", alt: "Artwork 17" },
];

/* ✅ Split Thumbnail Rows */
const row1Images = portfolioImages.filter((_, i) => i % 3 === 0);
const row2Images = portfolioImages.filter((_, i) => i % 3 === 1);
const row3Images = portfolioImages.filter((_, i) => i % 3 === 2);

/* ✅ Marquee Props */
interface MarqueeRowProps {
  direction: "left" | "right";
  images: ImageItem[];
  isArtwork?: boolean;
}

/* ✅ Marquee Component */
const MarqueeRow = ({
  direction,
  images,
  isArtwork = false,
}: MarqueeRowProps) => {
  const animationClass =
    direction === "left"
      ? "animate-marquee-left-slow"
      : "animate-marquee-right-slow";

  return (
    <div className="relative overflow-hidden py-2">
      <div className={`flex gap-4 ${animationClass}`} style={{ width: "fit-content" }}>
        {[...images, ...images].map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className={`relative flex-shrink-0 rounded-xl overflow-hidden
              ${
                isArtwork
                  ? "w-64 sm:w-72 md:w-80 aspect-square"
                  : "w-52 sm:w-60 md:w-68 lg:w-76 aspect-video"
              }`}
            style={{
              boxShadow: "0 12px 40px -12px rgba(255,162,0,0.25)",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width:768px) 100vw, 400px"
              className={`${
                isArtwork ? "object-contain bg-black" : "object-cover"
              }`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ✅ Main Component */
const FeaturedWork = () => {
  return (
    <section className="relative w-full py-16 md:py-20 bg-black overflow-hidden">
      <div className="relative z-10">

        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-14">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 text-orange-400">
            Click Magnet Thumbnails
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto">
            Check out some of the projects we have done for our clients.
          </p>
        </div>

        {/* Thumbnail Rows */}
        <div className="space-y-4 mb-20">
          <MarqueeRow direction="left" images={row1Images} />
          <MarqueeRow direction="right" images={row2Images} />
          <MarqueeRow direction="left" images={row3Images} />
        </div>

        {/* Artwork Heading */}
        <div className="text-center mb-10">
          <h3
            className="text-4xl md:text-6xl font-extrabold uppercase"
            style={{
              color: "#FFA200",
              textShadow: "0 0 60px rgba(255,162,0,0.4)",
            }}
          >
            Artwork Showcase
          </h3>
        </div>

        {/* Artwork Row */}
        <div className="mb-14">
          <MarqueeRow
            direction="right"
            images={artworkImages}
            isArtwork
          />
        </div>

      </div>
    </section>
  );
};

export default FeaturedWork;
