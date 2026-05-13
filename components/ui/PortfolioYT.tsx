"use client";

import { motion, useInView } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

/* ✅ Proper video type (fixes `any` error) */
type Video = {
  id: string;
  thumbnail: string;
  overlayText?: string;
  title?: string;
};

const HelpSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const youtubeVideos = [
 {
      id: "i6Z1vsmHSwA",
      thumbnail: "https://img.youtube.com/vi/i6Z1vsmHSwA/hqdefault.jpg",
      overlayText: "Long Form Videos",
    },
        {
      id: "jml0H_IcVlc",
      thumbnail: "https://img.youtube.com/vi/jml0H_IcVlc/hqdefault.jpg",
      overlayText: "Long Form Videos",
    },

         {
      id: "OpB0MEqB2_U",
      thumbnail: "https://img.youtube.com/vi/OpB0MEqB2_U/hqdefault.jpg",
      overlayText: "Long Form Videos",
    },
 {
      id: "2KNzIvpv8rw",
      thumbnail: "https://img.youtube.com/vi/2KNzIvpv8rw/hqdefault.jpg",
      overlayText: "Long Form Videos",
    },
 {
      id: "S351wd9rn1s",
      thumbnail: "https://img.youtube.com/vi/S351wd9rn1s/hqdefault.jpg",
      overlayText: "Long Form Videos",
    },



    {
      id: "EjmDCVuDdDA",
      thumbnail: "https://img.youtube.com/vi/J-Q3MJfe5cA/hqdefault.jpg",
      overlayText: "Long Form Videos",
    },

    {
      id: "NNW8ZIrFhkE",
      thumbnail: "https://img.youtube.com/vi/NNW8ZIrFhkE/hqdefault.jpg",
      overlayText: "Long Form Videos",
    },

        {
      id: "0rOoyoA6yMA",
      thumbnail: "https://img.youtube.com/vi/0rOoyoA6yMA/hqdefault.jpg",
      overlayText: "Ad Creatives",
    },
    {
      id: "Ua7uzXViGck",
      thumbnail: "https://img.youtube.com/vi/Ua7uzXViGck/hqdefault.jpg",
      overlayText: "Intro Style",
    },
    {
      id: "gFbPjs0PyCI",
      thumbnail: "https://img.youtube.com/vi/gFbPjs0PyCI/hqdefault.jpg",
      overlayText: "Cash Cow Style",
    },
    {
      id: "HiGfiPH-8Gk",
      thumbnail: "https://img.youtube.com/vi/HiGfiPH-8Gk/hqdefault.jpg",
      overlayText: "Documentary Style",
    },
    {
      id: "Rs7TggucByg",
      thumbnail: "https://img.youtube.com/vi/Rs7TggucByg/hqdefault.jpg",
      overlayText: "Real Estate",
    },
  ];

  const shortFormVideos = [
    {
      id: "oG_9cemH2YM",
      thumbnail:
        "https://i.ytimg.com/vi/oG_9cemH2YM/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLBDedPd5bQVkVW4nfwIk0nJB3mSVQ",
      title: "Wearing SPF",
      overlayText: "Daily routine",
    },
    {
      id: "EbR6NcWWr5E",
      thumbnail:
        "https://i.ytimg.com/vi/EbR6NcWWr5E/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAkjYK5sZz1_5RYEI_686XIr99qaw",
      title: "but I can't",
      overlayText: "Honest truth",
    },
    {
      id: "8rxwuzCWP00",
      thumbnail:
        "https://i.ytimg.com/vi/8rxwuzCWP00/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAy2iuvXyr51P501QW6lC9LUTqNuw",
      title: "How to save money fast",
      overlayText: "Money tips",
    },
    {
      id: "0EXv89RkZDc",
      thumbnail:
        "https://i.ytimg.com/vi/0EXv89RkZDc/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLCj65WTpTgvnVOELiR0tC8QtllqxQ",
      title: "Creating social media ads used to feel SO overwhelming.",
      overlayText: "Mind tricks",
    },
    {
      id: "N3U7WTBnJgM",
      thumbnail:
        "https://i.ytimg.com/vi/N3U7WTBnJgM/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLB6W8DLZ3RBAz2JqfRFn_fURRYbVQ",
      title:
        "How dealerships really make money (hint: it’s not the shiny car on the lot). 💸",
      overlayText: "Money tips",
    },
    {
      id: "0WRpHkIxdN4",
      thumbnail:
        "https://i.ytimg.com/vi/0WRpHkIxdN4/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDa-K02VieWfb5T0MI42jMSWaRM5g",
      title: "Thinnest Apple Products #apple #smartphone #tech",
      overlayText: "Viral moment",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // ✅ Video Card Component (no `any`)
  const VideoCard = ({
    video,
    aspectRatio = "aspect-video",
    isShortForm = false,
  }: {
    video: Video;
    aspectRatio?: string;
    isShortForm?: boolean;
  }) => {
    const isPlaying = playingVideo === video.id;

    const handlePlay = () => {
      setPlayingVideo(video.id);
    };

    return (
      <motion.div
      id="Projects"
        className={`relative ${aspectRatio} rounded-2xl overflow-hidden cursor-pointer group bg-black`}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={handlePlay}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              width={100}
  height={100}
              src={video.thumbnail}
              alt={video.title ?? "Video thumbnail"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl group-hover:bg-white transition-all duration-300 group-hover:shadow-orange-500/25">
                <Play className="w-6 h-6 text-black fill-current ml-1" />
              </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              {!isShortForm && video.overlayText && (
                <div className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {video.overlayText}
                </div>
              )}
            </div>
          </>
        )}
      </motion.div>
    );
  };

  const ExploreButton = () => (
    <motion.button
      className="relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl text-white font-semibold overflow-hidden group shadow-lg shadow-orange-500/25"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center gap-3">
        <span className="text-lg">Explore pricing</span>
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.button>
  );

  return (
    <section id="service" className="min-h-screen bg-black py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Our  {" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent italic">
              Video Editing {" "}
            </span>
            Work
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
           For creators, brands, and agencies. From YouTube videos and ad creatives to white-label
production, we deliver clean, engaging, algorithm-friendly edits.

          </motion.p>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="bg-gradient-to-br from-black via-black to-black rounded-3xl p-10 md:p-16 shadow-2xl">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              OUR WORK
                </h2>
                <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                  YouTube videos made more engaging than ever for longer watch
                  time and more subscribers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {youtubeVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-black via-black to-black rounded-3xl p-10 md:p-16 shadow-2xl border border-orange-500/10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Short Form Videos
                </h2>
                <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                YouTube shorts & Reels, TikToks, LinkedIn  to
                  optimize engagement and shareability.
                </p>
                <ExploreButton />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {shortFormVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    aspectRatio="aspect-[9/16]"
                    isShortForm={true}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
