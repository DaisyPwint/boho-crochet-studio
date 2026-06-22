type NavItem = {
  label: string;
  href: string;
};

type FooterSectionProps = {
  navItems: NavItem[];
};

export function FooterSection({ navItems }: FooterSectionProps) {
  return (
    <footer className="bg-(--color-primary) py-14 text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-2xl">Boho Crochet Studio</h3>
          <p className="mt-3 max-w-md text-sm/6 text-[color-mix(in_srgb,var(--color-secondary),black_15%)]">
            Cozy textures, modern boho palette, and handmade quality that turns
            everyday spaces into comforting places.
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
