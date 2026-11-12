import { ReactNode } from "react";

type SectionLabelProps = {
  children?: ReactNode;
  label?: string;
  theme?: "light" | "dark" | "orange";
  className?: string;
};

export function SectionLabel({
  children,
  label,
  theme = "light",
  className = "",
}: SectionLabelProps) {
  const content = children || label;
  if (!content) return null;

  const themeStyles = {
    // For light backgrounds (e.g. white, #F4F2ED, #E5E1D8)
    light: "text-[#747773] before:bg-[#E46A2A]",
    // For dark backgrounds (e.g. #25282A, black)
    dark: "text-white/70 before:bg-[#E46A2A]",
    // Orange accent variant
    orange: "text-[#E46A2A] before:bg-[#E46A2A]",
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase ${themeStyles[theme]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#E46A2A]" aria-hidden="true" />
      <span>{content}</span>
    </div>
  );
}

export default SectionLabel;

