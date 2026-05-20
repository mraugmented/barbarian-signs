"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const stats = [
  { value: "40+", label: "Years in Business" },
  { value: "1,000+", label: "Signs Installed" },
  { value: "100%", label: "Custom Built" },
];

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
                  alt="Barbarian Signs work truck loaded with custom channel letters ready for installation"
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-gold">40+ Years</span> of Craftsmanship
              </h2>
              <div className="space-y-4 text-off-white/80 leading-relaxed">
                <p>
                  Since 1985, Barbarian Signs has been a cornerstone of the Los
                  Angeles sign industry. What started as a small, family-owned
                  shop has grown into one of LA&apos;s most trusted sign
                  companies &mdash; but we&apos;ve never lost the hands-on
                  approach that got us here.
                </p>
                <p>
                  Every sign we build is custom-fabricated by our experienced
                  team. From the initial design consultation to the final
                  installation, we handle every step in-house. No outsourcing, no
                  shortcuts.
                </p>
                <p>
                  We&apos;ve had the privilege of working with major national
                  brands like Westfield and Cold Stone Creamery, as well as
                  hundreds of local businesses across the greater Los Angeles
                  area. Whether it&apos;s a towering pole sign or elegant channel
                  letters, we bring the same level of precision and care to every
                  project.
                </p>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn direction="right" delay={0.2}>
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-dark-border">
                {stats.map((stat) => (
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
