type NavItem = {
  label: string;
  href: string;
};

type FooterSectionProps = {
  navItems: NavItem[];
};

export function FooterSection({ navItems }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-(--color-primary) py-16 text-background">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[color-mix(in_srgb,var(--color-secondary),black_22%)]">
              Boho Crochet Studio
            </p>
            <h3 className="mt-4 max-w-[10ch] text-4xl leading-tight md:text-6xl">
              Slow Craft. Lasting Warmth.
            </h3>
            <p className="mt-5 max-w-md text-sm/7 text-[color-mix(in_srgb,var(--color-secondary),black_15%)]">
              Handcrafted with intention, natural fibers, and a studio rhythm
              rooted in care.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <h4 className="text-sm font-medium uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--color-secondary),black_16%)]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <span className="h-px w-3 bg-[color-mix(in_srgb,var(--color-secondary),black_22%)] transition-all group-hover:w-5 group-hover:bg-white" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <h4 className="text-sm font-medium uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--color-secondary),black_16%)]">
              Contact
            </h4>
            <p className="mt-4 text-sm/7 text-[color-mix(in_srgb,var(--color-secondary),black_10%)]">
              Yangon, Myanmar
              <br />
              hello@bohocrochet.studio
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-[color-mix(in_srgb,var(--color-secondary),black_70%)] pt-5">
          <p className="text-xs tracking-wide text-[color-mix(in_srgb,var(--color-secondary),black_22%)]">
            &copy; {currentYear} Boho Crochet Studio. Designed for intentional
            living.
          </p>
        </div>
      </div>
    </footer>
  );
}
