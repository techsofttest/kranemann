import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-10 overflow-hidden bg-[#25282A] text-white">
      {/* Background Image covering the entire section */}
      <img
        src="/banner/b7.png"
        alt="Industrial contact and consultation background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark gradient overlay for readability and contrast */}
      <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-white/45 lg:via-white/5 lg:to-transparent" />

      <div className="relative z-10 mx-auto pb-30 lg:pb-60 grid max-w-[1600px] lg:grid-cols-[1fr_0.8fr]">
        <div className="p-7 sm:p-12 lg:p-20">
          <Reveal>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
              Tell us what <br />you need to move.
            </h2>

            <div className="mt-9">
              <Button
                href="#"
                variant="primary"
                color="orange"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
                iconPosition="right"
              >
                Request a quote
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

