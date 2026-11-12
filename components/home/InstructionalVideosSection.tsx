"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

interface VideoItem {
  id: string;
  title: string;
  date: string;
  duration: string;
  youtubeId: string;
  thumbnail: string;
}

const instructionalVideos: VideoItem[] = [
  {
    id: "1",
    title: "Electric Chain Hoist Pre-Operation Inspection & Rigging Checks",
    date: "November 09th, 2026",
    duration: "04:15",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/banner/b1.png",
  },
  {
    id: "2",
    title: "Overhead Bridge Crane Remote Radio Transmitter Pairing Guide",
    date: "November 04th, 2026",
    duration: "03:40",
    youtubeId: "jNQXAC9IVRw",
    thumbnail: "/banner/b2.png",
  },
  {
    id: "3",
    title: "Wire Rope Hoist Drum Lubrication & Brake Gap Adjustment",
    date: "November 01st, 2026",
    duration: "06:12",
    youtubeId: "L_LUpnjgPso",
    thumbnail: "/banner/b3.png",
  },
  {
    id: "4",
    title: "Annual Load Testing & Crane Modernization Walkthrough",
    date: "October 24th, 2026",
    duration: "05:08",
    youtubeId: "fJ9rUzIMcZQ",
    thumbnail: "/banner/b4.png",
  },
  {
    id: "5",
    title: "Pendant Pushbutton Cable Strain Relief & Enclosure Sealing",
    date: "October 18th, 2026",
    duration: "03:22",
    youtubeId: "kJQP7kiw5Fk",
    thumbnail: "/banner/b6.png",
  },
  {
    id: "6",
    title: "Motor VFD Inverter Speed Ramp & Dynamic Braking Setup",
    date: "October 10th, 2026",
    duration: "07:34",
    youtubeId: "9bZkp7q19f0",
    thumbnail: "/banner/b7.png",
  },
];

export default function InstructionalVideosSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <SectionLabel className="mb-3">YouTube</SectionLabel>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
              Watch our featured videos
            </h2>
          </div>
        </Reveal>

        {/* Carousel Container */}
        <Reveal delayMs={100}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-6 flex">
              {instructionalVideos.map((video) => (
                <div
                  key={video.id}
                  className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    {/* Top: Video Thumbnail Preview without boxing */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-none bg-[#25282A]">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gentle dark gradient for play contrast */}
                      <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />

                      {/* Play Button Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E46A2A] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C95720] sm:h-14 sm:w-14">
                          <Play className="ml-1 h-5 w-5 fill-white sm:h-6 sm:w-6" />
                        </span>
                      </div>

                      {/* Duration Tag */}
                      <span className="absolute bottom-2.5 right-2.5 rounded bg-black/75 px-2 py-0.5 text-xs font-medium text-white">
                        {video.duration}
                      </span>
                    </div>

                    {/* Bottom: Title & Meta info */}
                    <div className="pt-4">
                      <h3 className="line-clamp-2 text-base font-medium leading-snug tracking-tight text-[#25282A] transition-colors group-hover:text-[#E46A2A] group-hover:underline underline-offset-4 sm:text-lg">
                        {video.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#747773]">{video.date}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Control Buttons below cards */}
          <div className="mt-10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous video"
              className="rounded-lg flex h-11 w-11 items-center justify-center border border-[#25282A]/80 bg-white text-[#25282A] transition-all hover:border-[#E46A2A] hover:bg-[#E46A2A] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#25282A]/20 disabled:hover:bg-white disabled:hover:text-[#25282A]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next video"
              className="rounded-lg flex h-11 w-11 items-center justify-center border border-[#25282A]/80 bg-white text-[#25282A] transition-all hover:border-[#E46A2A] hover:bg-[#E46A2A] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#25282A]/20 disabled:hover:bg-white disabled:hover:text-[#25282A]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
