import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Package, Image, BookOpen, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: Info },
    { label: "Products", href: "#products", icon: Package },
    { label: "Gallery", href: "#gallery", icon: Image },
    { label: "Blog", href: "#blog", icon: BookOpen },
    { label: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-farm-green to-farm-green-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐔</span>
            </div>
            <span className="text-xl font-bold text-foreground">FreshFarm Poultry</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-farm-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-farm-green-light/20"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Order Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-farm-green block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
              <div className="pt-2">
                <Button variant="hero" size="sm" className="w-full">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;