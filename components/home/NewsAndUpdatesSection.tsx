"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  link: string;
}

const newsArticles: NewsItem[] = [
  {
    id: "1",
    title: "Kranemann Launches High-Capacity Heavy Duty Wire Rope Hoist Series",
    category: "Product Release",
    date: "November 14, 2026",
    readTime: "4 min read",
    image: "/banner/b3.png",
    summary:
      "Engineered for harsh steel mill and foundry operations, our new generation hoists deliver IP66-rated enclosed gearboxes and precision thermal load monitoring.",
    link: "#",
  },
  {
    id: "2",
    title: "Automated Overhead Crane Modernization for Next-Gen Automotive Plants",
    category: "Case Study",
    date: "November 08, 2026",
    readTime: "6 min read",
    image: "/banner/b4.png",
    summary:
      "How automated tandem lifting and precision optical positioning increased stamping line throughput while eliminating manual load handling hazards.",
    link: "#",
  },
  {
    id: "3",
    title: "Updated European Standard EN 15011: What Crane Operators Need to Know",
    category: "Safety & Compliance",
    date: "October 29, 2026",
    readTime: "5 min read",
    image: "/banner/b1.png",
    summary:
      "A practical engineering guide to safety recertification schedules, emergency brake redundancies, and mandatory digital inspection records.",
    link: "#",
  },
];

export default function NewsAndUpdatesSection() {
  return (
    <section id="news" className="scroll-mt-10 bg-[#F4F2ED] py-16 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionLabel className="mb-3">News & Updates</SectionLabel>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
                Latest news and updates.
              </h2>
              <p className="mt-3 text-sm text-[#747773] sm:text-base">
                Explore our latest engineering breakthroughs, industry case studies, and crane modernization insights.
              </p>
            </div>

            <Button
              href="#contact"
              variant="tertiary"
              color="dark"
              size="md"
              icon={<ArrowRight className="h-4 w-4 text-[#E46A2A]" />}
              iconPosition="right"
            >
              View all articles
            </Button>
          </div>
        </Reveal>

        {/* News Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article, index) => (
            <Reveal key={article.id} delayMs={index * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-md border border-[#E5E1D8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#25282A]/20 hover:shadow-lg">
                {/* Article Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#25282A]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded bg-[#25282A]/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Metadata: Date and Read Time */}
                  <div className="mb-3 flex items-center gap-4 text-xs text-[#747773]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#E46A2A]" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#747773]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium tracking-tight text-[#25282A] transition-colors group-hover:text-[#E46A2A] sm:text-2xl">
                    <a href={article.link} className="focus:outline-none">
                      {article.title}
                    </a>
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-sm leading-6 text-[#747773]">
                    {article.summary}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-auto pt-6">
                    <a
                      href={article.link}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#25282A] transition-colors group-hover:text-[#E46A2A]"
                    >
                      <span>Read full story</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

