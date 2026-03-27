const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} PsiSites. Todos os direitos reservados.
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">WhatsApp</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
