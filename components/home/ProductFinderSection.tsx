import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ProductFinderSection() {
  return (
    <section className="bg-[#E5E1D8]">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.9fr_1.1fr_1fr]">
        {/* Card 01: Browse products */}
        <Reveal delayMs={0} className="h-full">
          <a
            href="#products"
            className="group flex h-full items-center gap-4 bg-[#E46A2A] p-5 text-white transition-all hover:bg-[#C95720] sm:gap-5 sm:p-6"
          >
            {/* Small boxed image without shadows or borders */}
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-none sm:h-24 sm:w-24">
              <img
                src="/home-p-finder/Browse%20products2.png"
                alt="Browse products"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text Content aligned to the top */}
            <div className="flex flex-1 flex-col justify-start">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-medium tracking-tight text-white sm:text-xl lg:text-2xl">
                  Browse products
                </h2>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <p className="mt-1.5 text-xs leading-5 text-white/90 sm:text-sm">
                Find cranes, hoists and components by product family.
              </p>
            </div>
          </a>
        </Reveal>

        {/* Card 02: Find by application */}
        <Reveal delayMs={100} className="h-full">
          <a
            href="#industries"
            className="group flex h-full items-center gap-4 bg-[#25282A] p-5 text-white transition-all hover:bg-[#2e3235] sm:gap-5 sm:p-6"
          >
            {/* Small boxed image without shadows or borders */}
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-none sm:h-24 sm:w-24">
              <img
                src="/home-p-finder/Find%20by%20application2.png"
                alt="Find by application"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 "
              />
            </div>

            {/* Text Content aligned to the top */}
            <div className="flex flex-1 flex-col justify-start">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-medium tracking-tight text-white sm:text-xl lg:text-2xl">
                  Find by application
                </h2>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-white/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#E46A2A]" />
              </div>

              <p className="mt-1.5 text-xs leading-5 text-white/70 sm:text-sm">
                Start with the environment, capacity or lifting requirement.
              </p>
            </div>
          </a>
        </Reveal>

        {/* Card 03: Get expert help */}
        <Reveal delayMs={200} className="h-full">
          <a
            href="#contact"
            className="group flex h-full items-center gap-4 bg-[#E46A2A] p-5 text-white transition-all hover:bg-[#C95720] sm:gap-5 sm:p-6"
          >
            {/* Small boxed image without shadows or borders */}
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-none sm:h-24 sm:w-24">
              <img
                src="/home-p-finder/Get%20expert%20help2.png"
                alt="Get expert help"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text Content aligned to the top */}
            <div className="flex flex-1 flex-col justify-start">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-medium tracking-tight text-white sm:text-xl lg:text-2xl">
                  Get Instent Quotes
                </h2>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <p className="mt-1.5 text-xs leading-5 text-white/90 sm:text-sm">
                Get Instent Quote of Standard Products in 24 hours.
              </p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
