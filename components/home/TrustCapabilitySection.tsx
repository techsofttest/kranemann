import { Factory, ShieldCheck, Truck, Wrench } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function TrustCapabilitySection() {
  return (
    <section className="bg-[#E5E1D8]">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <div className="relative min-h-[600px] overflow-hidden">
          <img
            src="/banner/b6.png"
            alt="Industrial engineering and manufacturing"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-20">
          <Reveal>
            <SectionLabel className="mb-4">Why AWC</SectionLabel>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
              Specify. Supply. Maintain. Modernize.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Reveal delayMs={100} className="h-full">
              <div className="h-full bg-white p-6 rounded-md">
                <Factory className="h-6 w-6 text-[#E46A2A]" />
                <h3 className="mt-4 text-lg font-semibold text-[#25282A]">
                  Industrial capability
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#25282A]">
                  Equipment designed for demanding production and material
                  handling environments.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={200} className="h-full">
              <div className="h-full bg-white p-6 rounded-md">
                <ShieldCheck className="h-6 w-6 text-[#E46A2A]" />
                <h3 className="mt-4 text-lg font-semibold text-[#25282A]">
                  Engineering confidence
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#25282A]">
                  Technical guidance that helps you specify the right system
                  for the job.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={300} className="h-full">
              <div className="h-full bg-white p-6 rounded-md">
                <Truck className="h-6 w-6 text-[#E46A2A]" />
                <h3 className="mt-4 text-lg font-semibold text-[#25282A]">
                  Supply & support
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#25282A]">
                  Equipment, components and support across the full lifecycle.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={400} className="h-full">
              <div className="h-full bg-white p-6 rounded-md">
                <Wrench className="h-6 w-6 text-[#E46A2A]" />
                <h3 className="mt-4 text-lg font-semibold text-[#25282A]">
                  Long-term service
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#25282A]">
                  Inspection, repair and modernization when your equipment
                  needs attention.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

