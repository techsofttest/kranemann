import { ReactNode } from "react";

type SectionHeaderProps = {
  tag?: string;
  title: string;
  description?: string;
  tagColor?: string;
  dark?: boolean;
  className?: string;
  action?: ReactNode;
};

export default function SectionHeader({
  tag,
  title,
  description,
  tagColor = "text-[#E46A2A]",
  dark = false,
  className = "",
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}
    >
      <div className="max-w-3xl">
        {tag && (
          <p
            className={`mb-5 text-sm font-medium uppercase tracking-wider ${tagColor}`}
          >
            {tag}
          </p>
        )}
        <h2
          className={`font-[family-name:var(--font-space-grotesk)] text-4xl tracking-[-0.035em] sm:text-5xl lg:text-6xl ${
            dark ? "text-white" : "text-[#25282A]"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-6 max-w-2xl text-base leading-7 lg:text-lg ${
              dark ? "text-white/60" : "text-[#747773]"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

