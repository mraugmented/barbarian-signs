import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/logo.png"
              alt={siteConfig.businessName}
              width={140}
              height={52}
              className="h-10 w-auto"
            />
            <p className="text-muted text-sm">
              {siteConfig.footer.description}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted">
            <a
              href={siteConfig.phoneHref}
              className="hover:text-gold transition-colors"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-gold transition-colors"
            >
              {siteConfig.email}
            </a>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} {siteConfig.legalName} All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
