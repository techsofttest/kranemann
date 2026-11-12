import { ServiceItem } from "@/types/catalogue";
import SectionLabel from "@/components/ui/SectionLabel";

type LifecycleServicesSectionProps = {
  services: ServiceItem[];
};

export default function LifecycleServicesSection({
  services,
}: LifecycleServicesSectionProps) {
  return (
    <section id="services" className="scroll-mt-10 border-b border-[#25282A]/10 bg-white text-[#25282A]">
      <div className="mx-auto max-w-[1600px] px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Sticky left-hand editorial heading */}
          <div className="lg:sticky lg:top-28">
            <SectionLabel className="mb-4">Lifecycle Services</SectionLabel>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
              Equipment is only the beginning.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-[#747773]">
              Kranemann supports your lifting equipment throughout its working
              life — from initial specification and supply through maintenance,
              repair and modernization.
            </p>
          </div>

          {/* Compact services listing */}
          <div className="divide-y divide-[#E5E1D8]">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="group flex gap-4 py-5 transition-colors hover:bg-[#F4F2ED]/60 sm:gap-6"
                >
                  <span className="w-6 shrink-0 pt-0.5 text-xs font-semibold text-[#747773] sm:text-sm">
                    {service.number}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-medium tracking-tight text-[#25282A] sm:text-xl">
                        {service.title}
                      </h3>

                      <Icon className="h-4 w-4 text-[#E46A2A] sm:h-5 sm:w-5" />
                    </div>

                    <p className="mt-1.5 max-w-xl text-xs leading-5 text-[#747773] sm:text-sm sm:leading-6">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
