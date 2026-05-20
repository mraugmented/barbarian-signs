"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  {
    src: "/portfolio/westfield-mall.jpg",
    alt: "Westfield Mall illuminated channel letter signage installed by Barbarian Signs",
    client: "Westfield Mall",
    type: "Channel Letters",
  },
  {
    src: "/portfolio/cold-stone-creamery.png",
    alt: "Cold Stone Creamery illuminated storefront sign by Barbarian Signs",
    client: "Cold Stone Creamery",
    type: "Illuminated Sign",
  },
  {
    src: "/portfolio/sunland-produce.png",
    alt: "Sunland Produce illuminated pole sign by Barbarian Signs",
    client: "Sunland Produce",
    type: "Pole Sign",
  },
  {
    src: "/portfolio/yume-nail-lounge.png",
    alt: "Yume Nail Lounge illuminated lightbox sign by Barbarian Signs",
    client: "Yum\u00e9 Nail Lounge",
    type: "Lightbox Sign",
  },
  {
    src: "/portfolio/lees-coffee-house.png",
    alt: "Lee's Coffee House dimensional letter signage by Barbarian Signs",
    client: "Lee\u2019s Coffee House",
    type: "Dimensional Letters",
  },
  {
    src: "/portfolio/fox-auto-body.jpg",
    alt: "Fox Auto Body pole sign installation by Barbarian Signs",
    client: "Fox Auto Body",
    type: "Pole Sign",
  },
  {
    src: "/portfolio/channel-letters-install.jpg",
    alt: "Barbarian Signs team installing channel letters at a mall storefront",
    client: "Mall Installation",
    type: "Channel Letters",
  },
  {
    src: "/portfolio/westfield-mall-3.jpg",
    alt: "Westfield Mall entrance with illuminated signage serviced by Barbarian Signs",
    client: "Westfield Mall",
    type: "Storefront Sign",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gold">Work</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Trusted by businesses across Los Angeles. From national brands to
              neighborhood favorites, we bring every sign to life.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <FadeIn
              key={index}
              delay={index * 0.08}
              className={
                index === 0 || index === 3
                  ? "sm:col-span-2 lg:col-span-2"
                  : ""
              }
            >
              <div className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 md:group-hover:scale-110"
                  sizes={
                    index === 0 || index === 3
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  }
                />
                {/* Always-visible gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent md:from-dark/60 md:group-hover:from-dark/90 md:group-hover:via-dark/30 transition-all duration-300" />
                {/* Always-visible text, enhanced on desktop hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300">
                  <p className="text-gold text-sm font-medium uppercase tracking-wider md:group-hover:text-base md:transition-all md:duration-300">
                    {project.type}
                  </p>
                  <p className="text-white text-lg font-semibold md:group-hover:text-xl md:transition-all md:duration-300">
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
