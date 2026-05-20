"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  {
    src: "/portfolio/westfield-mall.jpg",
    alt: "Westfield Mall illuminated channel letter signage",
    client: "Westfield Mall",
    type: "Channel Letters",
  },
  {
    src: "/portfolio/cold-stone-creamery.png",
    alt: "Cold Stone Creamery illuminated storefront sign",
    client: "Cold Stone Creamery",
    type: "Illuminated Sign",
  },
  {
    src: "/portfolio/yume-nail-lounge.png",
    alt: "Yume Nail Lounge illuminated lightbox sign",
    client: "Yumé Nail Lounge",
    type: "Lightbox Sign",
  },
  {
    src: "/portfolio/lees-coffee-house.png",
    alt: "Lee's Coffee House dimensional letter signage",
    client: "Lee\u2019s Coffee House",
    type: "Dimensional Letters",
  },
  {
    src: "/portfolio/sunland-produce.png",
    alt: "Sunland Produce illuminated pole sign",
    client: "Sunland Produce",
    type: "Pole Sign",
  },
  {
    src: "/portfolio/fox-auto-body.jpg",
    alt: "Fox Auto Body pole sign installation",
    client: "Fox Auto Body",
    type: "Pole Sign",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Work Speaks for Itself
            </h2>
            <p className="text-muted max-w-xl mx-auto text-lg">
              Trusted by national brands and neighborhood favorites across Los
              Angeles.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Permanent gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-1">
                    {project.type}
                  </p>
                  <p className="text-white text-lg font-bold">
                    {project.client}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
