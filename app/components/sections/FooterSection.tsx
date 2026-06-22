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
    <footer className="bg-(--color-primary) py-14 text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-6xl uppercase text-accent mb-4">Boho</h3>
          <p className="mt-3 max-w-md text-sm/6 text-[color-mix(in_srgb,var(--color-secondary),black_15%)]">
            &copy; {currentYear} Boho Crochet Studio. <br />
            Hand-crafted with intention and love.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact Us</h4>
          <p className="mt-3 text-sm">🏠 123, Main Street, Yangon</p>
          <p className="text-sm">📧 hello@bohocrochet.studio</p>
        </div>
      </div>
    </footer>
  );
}
