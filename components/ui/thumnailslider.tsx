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
  { id: 7, src: "/Assets/Thumbnail/7.jpg", alt: "Portfolio Thumbnail Image 7" },
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
  { id: 29, src: "/Assets/Thumbnail/29.jpg", alt: "Portfolio Thumbnail Image 29" },
  { id: 30, src: "/Assets/Thumbnail/30.jpg", alt: "Portfolio Thumbnail Image 30" },
  { id: 31, src: "/Assets/Thumbnail/31.jpg", alt: "Portfolio Thumbnail Image 31" },
  { id: 32, src: "/Assets/Thumbnail/32.jpg", alt: "Portfolio Thumbnail Image 32" },
  { id: 33, src: "/Assets/Thumbnail/33.jpg", alt: "Portfolio Thumbnail Image 33" },
  { id: 34, src: "/Assets/Thumbnail/34.jpg", alt: "Portfolio Thumbnail Image 34" },
  { id: 35, src: "/Assets/Thumbnail/35.jpg", alt: "Portfolio Thumbnail Image 35" },
  { id: 36, src: "/Assets/Thumbnail/36.jpg", alt: "Portfolio Thumbnail Image 36" },
  { id: 37, src: "/Assets/Thumbnail/37.jpg", alt: "Portfolio Thumbnail Image 37" },
  { id: 38, src: "/Assets/Thumbnail/38.jpg", alt: "Portfolio Thumbnail Image 38" },
  { id: 39, src: "/Assets/Thumbnail/39.jpg", alt: "Portfolio Thumbnail Image 39" },
  { id: 40, src: "/Assets/Thumbnail/40.jpg", alt: "Portfolio Thumbnail Image 40" },
  { id: 41, src: "/Assets/Thumbnail/41.jpg", alt: "Portfolio Thumbnail Image 41" },
  { id: 42, src: "/Assets/Thumbnail/42.jpg", alt: "Portfolio Thumbnail Image 42" },
  { id: 43, src: "/Assets/Thumbnail/43.jpg", alt: "Portfolio Thumbnail Image 43" },
  { id: 44, src: "/Assets/Thumbnail/44.jpg", alt: "Portfolio Thumbnail Image 44" },
  { id: 45, src: "/Assets/Thumbnail/45.jpg", alt: "Portfolio Thumbnail Image 45" },
  { id: 46, src: "/Assets/Thumbnail/46.jpg", alt: "Portfolio Thumbnail Image 46" },
  { id: 47, src: "/Assets/Thumbnail/47.jpg", alt: "Portfolio Thumbnail Image 41" },
  { id: 48, src: "/Assets/Thumbnail/48.jpg", alt: "Portfolio Thumbnail Image 42" },
  { id: 49, src: "/Assets/Thumbnail/49.jpg", alt: "Portfolio Thumbnail Image 43" },
  { id: 50, src: "/Assets/Thumbnail/50.jpg", alt: "Portfolio Thumbnail Image 44" },
  { id: 51, src: "/Assets/Thumbnail/51.jpg", alt: "Portfolio Thumbnail Image 45" },
  { id: 52, src: "/Assets/Thumbnail/52.jpg", alt: "Portfolio Thumbnail Image 46" },
  { id: 53, src: "/Assets/Thumbnail/53.jpg", alt: "Portfolio Thumbnail Image 45" },
  { id: 54, src: "/Assets/Thumbnail/54.jpg", alt: "Portfolio Thumbnail Image 46" },
];

/* ✅ Artwork Images (1–17) */
const artworkImages: ImageItem[] = [
  { id: 101, src: "/Assets/Posters/1.jpeg", alt: "Poster 1" },
  { id: 102, src: "/Assets/Posters/2.jpeg", alt: "Poster 2" },
  { id: 103, src: "/Assets/Posters/3.jpeg", alt: "Poster 3" },
  { id: 104, src: "/Assets/Posters/4.jpeg", alt: "Poster 4" },
  { id: 105, src: "/Assets/Posters/5.jpeg", alt: "Poster 5" },
  { id: 106, src: "/Assets/Posters/6.jpeg", alt: "Poster 6" },
  { id: 107, src: "/Assets/Posters/7.jpeg", alt: "Poster 7" },
  { id: 108, src: "/Assets/Posters/8.jpeg", alt: "Poster 8" },
  { id: 109, src: "/Assets/Posters/9.jpeg", alt: "Poster 9" },
  { id: 110, src: "/Assets/Posters/10.jpeg", alt: "Poster 10" },
  { id: 111, src: "/Assets/Posters/11.jpeg", alt: "Poster 11" },
  { id: 112, src: "/Assets/Posters/12.jpeg", alt: "Poster 12" },
  { id: 113, src: "/Assets/Posters/13.jpeg", alt: "Poster 13" },
  { id: 114, src: "/Assets/Posters/14.jpeg", alt: "Poster 14" },
  { id: 115, src: "/Assets/Posters/15.jpeg", alt: "Poster 15" },
  { id: 116, src: "/Assets/Posters/16.jpeg", alt: "Poster 16" },
  { id: 117, src: "/Assets/Posters/17.jpeg", alt: "Poster 17" },
  { id: 118, src: "/Assets/Posters/18.jpeg", alt: "Poster 18" },
  { id: 119, src: "/Assets/Posters/19.jpeg", alt: "Poster 19" },
  { id: 120, src: "/Assets/Posters/20.jpeg", alt: "Poster 20" },
  { id: 121, src: "/Assets/Posters/21.jpeg", alt: "Poster 21" },
  { id: 122, src: "/Assets/Posters/22.jpeg", alt: "Poster 22" },
  { id: 123, src: "/Assets/Posters/23.jpeg", alt: "Poster 23" },
  { id: 124, src: "/Assets/Posters/24.jpeg", alt: "Poster 24" },
  { id: 125, src: "/Assets/Posters/25.jpeg", alt: "Poster 25" },
  { id: 126, src: "/Assets/Posters/26.jpeg", alt: "Poster 26" },
  { id: 127, src: "/Assets/Posters/27.jpeg", alt: "Poster 27" },
  { id: 128, src: "/Assets/Posters/28.jpeg", alt: "Poster 28" },
  { id: 129, src: "/Assets/Posters/29.jpeg", alt: "Poster 29" },
  { id: 130, src: "/Assets/Posters/30.jpeg", alt: "Poster 30" },
  { id: 131, src: "/Assets/Posters/31.jpeg", alt: "Poster 31" },
  { id: 132, src: "/Assets/Posters/32.jpeg", alt: "Poster 32" },
  { id: 133, src: "/Assets/Posters/33.jpeg", alt: "Poster 33" },
  { id: 134, src: "/Assets/Posters/34.jpeg", alt: "Poster 34" },
  { id: 135, src: "/Assets/Posters/35.jpg", alt: "Poster 35" },
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
  <div
    className={`flex gap-4 ${animationClass}`}
    style={{ width: "fit-content" }}
  >
    {[...images, ...images].map((image, index) => (
      <div
        key={`${image.id}-${index}`}
        className={`relative flex-shrink-0 rounded-xl overflow-hidden
          ${
            isArtwork
              ? "w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] aspect-[4/5]"
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
            isArtwork ? "object-cover" : "object-cover"
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
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 text-green-400">
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
              color: "#39FF14",
              textShadow: "0 0 60px rgba(255,162,0,0.4)",
            }}
          >
            Poster Showcase
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
