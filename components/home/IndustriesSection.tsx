import { ArrowUpRight } from "lucide-react";
import { IndustryItem } from "@/types/catalogue";
import SectionLabel from "@/components/ui/SectionLabel";

type IndustriesSectionProps = {
  industries: IndustryItem[];
};

export default function IndustriesSection({
  industries,
}: IndustriesSectionProps) {
  return (
    <section id="industries" className="scroll-mt-10 bg-[#F4F2ED]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4">Industries & Applications</SectionLabel>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
              Built for demanding environments.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#747773]">
            From everyday production environments to highly specialized
            applications, our equipment is engineered around the work it needs
            to perform.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <a
              href="#contact"
              key={industry.title}
              className="group relative min-h-[420px] overflow-hidden bg-[#25282A] text-white"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#25282A] via-[#25282A]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {industry.title}
                  </h3>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#E46A2A]" />
                </div>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                  {industry.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

