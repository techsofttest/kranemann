"use client";

import React, { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonColor = "orange" | "dark" | "white";
export type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
  className?: string;
};

export type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type AnyButtonProps = ButtonProps | LinkButtonProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, AnyButtonProps>(
  (
    {
      variant = "primary",
      color = "orange",
      size = "sm",
      icon,
      iconPosition = "left",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    // 1. Base structure: subtle rounded corners, overflow-hidden for shimmer/slide, flex alignment
    const baseClasses =
      "group relative inline-flex items-center justify-center font-medium select-none overflow-hidden rounded-md transition-all duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    // 2. Sizes: "sm" (compact for cards/bars), "md" (standard CTA), "lg" (hero banner)
    const sizeClasses = {
      sm: "px-3.5 py-2 text-xs gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-7 py-3.5 text-base gap-2.5",
    }[size];

    // 3. Variant + Color Styling Matrix
    let styleClasses = "";

    if (variant === "primary") {
      // Solid filled button with animated sliding shine / glow effect
      if (color === "orange") {
        styleClasses =
          "bg-[#E46A2A] text-white shadow-sm hover:bg-[#C95720] hover:shadow-md hover:shadow-[#E46A2A]/20";
      } else if (color === "dark") {
        styleClasses =
          "bg-[#25282A] text-white shadow-sm hover:bg-[#1a1c1d] hover:shadow-md hover:shadow-black/25";
      } else {
        // white
        styleClasses =
          "bg-white text-[#25282A] shadow-sm hover:bg-[#F4F2ED] hover:text-[#E46A2A] hover:shadow-md";
      }
    } else if (variant === "secondary") {
      // Outlined bordered button with fill-in hover effect
      if (color === "orange") {
        styleClasses =
          "border border-[#E46A2A] text-[#E46A2A] bg-transparent hover:bg-[#E46A2A] hover:text-white";
      } else if (color === "dark") {
        styleClasses =
          "border border-[#25282A]/30 text-[#25282A] bg-transparent hover:border-[#25282A] hover:bg-[#25282A] hover:text-white";
      } else {
        // white
        styleClasses =
          "border border-white/40 text-white bg-transparent hover:border-white hover:bg-white hover:text-[#25282A]";
      }
    } else {
      // tertiary: clean text/link button with animated arrow nudge and expanding underline
      if (color === "orange") {
        styleClasses =
          "bg-transparent text-[#E46A2A] p-0 hover:text-[#C95720]";
      } else if (color === "dark") {
        styleClasses =
          "bg-transparent text-[#25282A] p-0 hover:text-[#E46A2A]";
      } else {
        // white
        styleClasses =
          "bg-transparent text-white p-0 hover:text-[#E46A2A]";
      }
    }

    // For tertiary variant, remove padding & rounded from size
    const effectiveSizeClasses =
      variant === "tertiary"
        ? size === "sm"
          ? "text-xs gap-1.5"
          : size === "md"
          ? "text-sm gap-2"
          : "text-base gap-2.5"
        : sizeClasses;

    // Content assembly with animated icons
    const content = (
      <>
        {/* Animated shimmer overlay for primary buttons */}
        {variant === "primary" && (
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
        )}

        {/* Left Icon with subtle hover transition */}
        {icon && iconPosition === "left" && (
          <span className="relative z-10 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}

        {/* Text Label */}
        <span className="relative z-10">{children}</span>

        {/* Right Icon with directional nudge on hover */}
        {icon && iconPosition === "right" && (
          <span className="relative z-10 shrink-0 transition-transform duration-200 group-hover:translate-x-1">
            {icon}
          </span>
        )}

        {/* Tertiary Underline animation */}
        {variant === "tertiary" && (
          <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
        )}
      </>
    );

    const combinedClassName = `${baseClasses} ${effectiveSizeClasses} ${styleClasses} ${className}`.trim();

    if ("href" in props && typeof props.href === "string") {
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={combinedClassName}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={combinedClassName}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

