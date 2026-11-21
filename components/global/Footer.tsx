import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f0f1f3] text-[#25282A] border-t border-gray-200">
      {/* Top Value / Trust Highlights Strip */}
      <div className="bg-[#e7e9ec] border-b border-gray-200">
        <div className="mx-auto max-w-[1600px] px-6 py-9 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-8 w-8 shrink-0 text-[#E46A2A]" />
              <div>
                <p className="text-sm font-semibold text-[#25282A] sm:text-base">
                  OEM certified
                </p>
                <p className="text-xs text-gray-600 sm:text-sm">100% genuine industrial parts</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Award className="h-8 w-8 shrink-0 text-[#E46A2A]" />
              <div>
                <p className="text-sm font-semibold text-[#25282A] sm:text-base">
                  EN / ISO 9001 compliant
                </p>
                <p className="text-xs text-gray-600 sm:text-sm">European safety standards</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="h-8 w-8 shrink-0 text-[#E46A2A]" />
              <div>
                <p className="text-sm font-semibold text-[#25282A] sm:text-base">
                  24/7 field response
                </p>
                <p className="text-xs text-gray-600 sm:text-sm">Emergency repairs & servicing</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-8 w-8 shrink-0 text-[#E46A2A]" />
              <div>
                <p className="text-sm font-semibold text-[#25282A] sm:text-base">
                  Direct engineering line
                </p>
                <p className="text-xs text-gray-600 sm:text-sm">Available on request</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Detailed Footer */}
      <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
          {/* Brand & Mission Column */}
          <div>
            <img
              src="/logo/AWC-logo.png"
              alt="AWC"
              className="h-16 w-auto object-contain"
            />

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-600">
              AWC is a specialized manufacturer and supplier of engineered
              overhead cranes, hoists, radio controls, and comprehensive lifecycle
              maintenance for demanding industrial facilities worldwide.
            </p>

            <div className="mt-6 space-y-2.5 text-xs text-gray-600">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#E46A2A]" />
                <a href="mailto:info@AWC.com" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  info@AWC.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-white border border-gray-300 text-gray-700 transition-all hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:scale-105"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-white border border-gray-300 text-gray-700 transition-all hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:scale-105"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-white border border-gray-300 text-gray-700 transition-all hover:bg-black hover:text-white hover:border-black hover:scale-105"
                aria-label="X / Twitter"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-white border border-gray-300 text-gray-700 transition-all hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:scale-105"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-white border border-gray-300 text-gray-700 transition-all hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] hover:scale-105"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Lines Column */}
          <div>
            <p className="text-sm font-semibold text-[#25282A]">
              Equipment lines
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-gray-600">
              <li>
                <a href="#products" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Electric chain hoists
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Manual chain blocks
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Heavy wire rope hoists
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Overhead bridge cranes
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Portal gantry systems
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Motor drives & inverters
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Spreader beams & hooks
                </a>
              </li>
            </ul>
          </div>

          {/* Lifecycle Services Column */}
          <div>
            <p className="text-sm font-semibold text-[#25282A]">
              Lifecycle services
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-gray-600">
              <li>
                <a href="#services" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Field repair & emergency
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Annual safety inspections
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Load testing & recertification
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Crane modernization
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  OEM replacement parts
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Preventative maintenance
                </a>
              </li>
              <li>
                <a href="#resources" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Technical documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Compliance Column */}
          <div>
            <p className="text-sm font-semibold text-[#25282A]">
              Company & legal
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-gray-600">
              <li>
                <a href="#industries" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Industries served
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Request an RFQ quote
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Consult an engineer
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  About AWC
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Quality & safety standards
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Direct RFQ Column */}
          <div>
            <p className="text-sm font-semibold text-[#25282A]">
              Technical inquiries
            </p>

            <p className="mt-5 text-sm leading-6 text-gray-600">
              Need technical sizing, crane span drawings, or a replacement quote? Speak with our engineering desk.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25282A] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-black"
            >
              <span>Submit RFQ specification</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#E46A2A]" />
            </a>

            <div className="mt-6 pt-2 text-xs text-gray-600">
              <p className="font-semibold text-[#25282A]">Office hours</p>
              <p className="mt-1">Monday – Friday: 07:30 – 17:30</p>
              <p className="mt-0.5 text-gray-500">24/7 hotline for contract clients</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Attribution & Copyright */}
        <div className="mt-14 flex flex-col gap-4 border-t border-gray-200/80 pt-8 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AWC. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 sm:gap-6">
            <a href="#" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
              Legal notice
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
              Data privacy
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4">
              General terms
            </a>
            <span>•</span>
            <a
              href="https://www.techsoftweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal transition-colors hover:text-[#E46A2A] hover:underline underline-offset-4"
            >
              Web Design Company Techsoft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
