import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-[#25282A] text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/home-hero/mock.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/home-hero/b2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="max-w-5xl">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Products Engineered to <br />lift and move safely.

          </h1>

          <div className="mt-9">
            <Button
              href="#products"
              variant="primary"
              color="orange"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
              iconPosition="right"
            >
              Explore products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

