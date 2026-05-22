"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/portfolio/sign-truck.jpg"
                  alt={siteConfig.about.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Accent border */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg -z-10" />
            </div>
          </FadeIn>

          {/* Text side */}
          <div>
            <FadeIn direction="right">
              <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                {siteConfig.about.sectionLabel}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gold">{siteConfig.about.heading}</span>{" "}
                {siteConfig.about.headingSuffix}
              </h2>
              <div className="space-y-4 text-off-white/80 leading-relaxed">
                {siteConfig.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn direction="right" delay={0.2}>
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-dark-border">
                {siteConfig.about.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
