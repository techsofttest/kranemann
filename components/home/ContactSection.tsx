import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-10 bg-[#25282A] text-white">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1fr_0.8fr]">
        <div className="p-7 sm:p-12 lg:p-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tell us what you need to move.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
            Whether you need a standard hoist, a complete crane system,
            replacement components or technical guidance, our team can help
            identify the right solution.
          </p>

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
        </div>

        <div className="bg-[#1f2223] p-7 sm:p-12 lg:p-20">
          <p className="text-sm font-medium uppercase tracking-wider text-[#747773]">
            Quick access
          </p>

          <div className="mt-10 space-y-7">
            <a
              href="#products"
              className="group flex items-center justify-between text-white/90 hover:text-white"
            >
              <span className="text-xl">Browse products</span>
              <ArrowRight className="h-5 w-5 text-[#747773] transition-transform group-hover:translate-x-1 group-hover:text-[#E46A2A]" />
            </a>

            <a
              href="#services"
              className="group flex items-center justify-between text-white/90 hover:text-white"
            >
              <span className="text-xl">Service & support</span>
              <ArrowRight className="h-5 w-5 text-[#747773] transition-transform group-hover:translate-x-1 group-hover:text-[#E46A2A]" />
            </a>

            <a
              href="#industries"
              className="group flex items-center justify-between text-white/90 hover:text-white"
            >
              <span className="text-xl">Applications</span>
              <ArrowRight className="h-5 w-5 text-[#747773] transition-transform group-hover:translate-x-1 group-hover:text-[#E46A2A]" />
            </a>

            <a
              href="#resources"
              className="group flex items-center justify-between text-white/90 hover:text-white"
            >
              <span className="text-xl">Technical resources</span>
              <ArrowRight className="h-5 w-5 text-[#747773] transition-transform group-hover:translate-x-1 group-hover:text-[#E46A2A]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

