import { ArrowRight, Download, Settings2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ResourcesSection() {
  return (
    <section id="resources" className="scroll-mt-10 bg-[#F4F2ED]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel className="mb-4">Resources & Support</SectionLabel>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
              Technical information when you need it.
            </h2>

            <p className="mt-4 max-w-lg text-base leading-7 text-[#747773]">
              Product documentation, technical information and expert guidance
              help your team make better equipment decisions.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="#contact"
              className="group bg-white p-7 transition-colors hover:bg-[#E5E1D8]"
            >
              <Download className="h-5 w-5 text-[#E46A2A]" />

              <h3 className="mt-12 text-2xl font-medium tracking-tight text-[#25282A]">
                Product resources
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#747773]">
                Technical documentation, specifications and product
                information.
              </p>

              <ArrowRight className="mt-8 h-5 w-5 text-[#25282A] transition-transform group-hover:translate-x-1 group-hover:text-[#E46A2A]" />
            </a>

            <a
              href="#contact"
              className="group bg-[#25282A] p-7 text-white transition-colors hover:bg-[#2e3235]"
            >
              <Settings2 className="h-5 w-5 text-[#E46A2A]" />

              <h3 className="mt-12 text-2xl font-medium tracking-tight">
                Talk to an engineer
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Get help choosing equipment for your application.
              </p>

              <ArrowRight className="mt-8 h-5 w-5 text-white/70 transition-transform group-hover:translate-x-1 group-hover:text-[#E46A2A]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

