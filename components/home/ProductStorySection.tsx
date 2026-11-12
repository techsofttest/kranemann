import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function ProductStorySection() {
  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden bg-[#25282A] text-white lg:min-h-[580px]">
      {/* Background Image covering the entire section */}
      <img
        src="/banner/b2.png"
        alt="Industrial crane and hoisting application"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Directional gradient overlay optimized for bottom content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-[#25282A]/20 lg:from-black/80 lg:via-black/50 lg:to-transparent" />

      {/* Content aligned to bottom: title on left, description and button to right */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:px-10 lg:pb-24 lg:pt-48">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          {/* Title on the left */}
          <Reveal direction="up" delayMs={0} className="max-w-2xl">
            <h2 className="pb-8 font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              The right lifting system starts with the application.
            </h2>

            <Button
              href="#contact"
              variant="primary"
              color="orange"
              size="md"
              icon={<ArrowRight className="h-4 w-4" />}
              iconPosition="right"
            >
              Know More About Us
            </Button>
          </Reveal>

          {/* Description to the right */}
          <Reveal direction="up" delayMs={150} className="flex max-w-xl flex-col items-start gap-6 lg:items-start">
            <p className="text-base leading-7 text-white/85 lg:text-lg">
              Every lifting environment has different requirements. Capacity,
              duty cycle, headroom, travel distance and operating conditions
              all influence the right equipment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
