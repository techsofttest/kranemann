import { Factory, ShieldCheck, Truck, Wrench } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function TrustCapabilitySection() {
  return (
    <section className="bg-[#E5E1D8]">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <div className="relative min-h-[600px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=90"
            alt="Industrial engineering and manufacturing"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-20">
          <SectionLabel className="mb-4">Why Kranemann</SectionLabel>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
            Specify. Supply. Maintain. Modernize.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#747773]">
            A lifting system has to perform long after the purchase order is
            signed. Our approach combines equipment, engineering expertise,
            technical support and lifecycle service.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="bg-white p-6 shadow-sm">
              <Factory className="h-6 w-6 text-[#E46A2A]" />
              <h3 className="mt-4 text-lg font-medium text-[#25282A]">
                Industrial capability
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#747773]">
                Equipment designed for demanding production and material
                handling environments.
              </p>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-[#E46A2A]" />
              <h3 className="mt-4 text-lg font-medium text-[#25282A]">
                Engineering confidence
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#747773]">
                Technical guidance that helps you specify the right system
                for the job.
              </p>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <Truck className="h-6 w-6 text-[#E46A2A]" />
              <h3 className="mt-4 text-lg font-medium text-[#25282A]">
                Supply & support
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#747773]">
                Equipment, components and support across the full lifecycle.
              </p>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <Wrench className="h-6 w-6 text-[#E46A2A]" />
              <h3 className="mt-4 text-lg font-medium text-[#25282A]">
                Long-term service
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#747773]">
                Inspection, repair and modernization when your equipment
                needs attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

