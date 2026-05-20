import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/logo.png"
              alt="Barbarian Signs"
              width={140}
              height={52}
              className="h-10 w-auto"
            />
            <p className="text-muted text-sm">
              Custom signs for businesses across Los Angeles since 1985.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted">
            <a
              href="tel:+17252592130"
              className="hover:text-gold transition-colors"
            >
              (725) 259-2130
            </a>
            <a
              href="mailto:Sales@barbariansignsinc.com"
              className="hover:text-gold transition-colors"
            >
              Sales@barbariansignsinc.com
            </a>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} Barbarian Signs Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
