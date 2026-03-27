const Header = () => {
  const links = [
    { label: "Benefícios", href: "#beneficios" },
    { label: "Projetos", href: "#projetos" },
    { label: "Processo", href: "#processo" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <span className="text-lg font-display font-bold text-foreground">
          Psi<span className="gradient-text">Sites</span>
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
