import { Button } from "@/components/ui/button";
import logo from "@/assets/yash-logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Yash Services Logo" className="h-10" />
          <span className="text-xl font-bold text-foreground">Yash Services</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
          <Button 
            size="sm"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="outline" 
          size="sm"
          className="md:hidden"
          onClick={() => scrollToSection('contact')}
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
