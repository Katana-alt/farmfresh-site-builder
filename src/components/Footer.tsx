import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Leaf,
  Heart
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Farm Tours", href: "#contact" },
    { label: "Blog", href: "#blog" },
  ];

  const products = [
    { label: "Fresh Eggs", href: "#products" },
    { label: "Broiler Chickens", href: "#products" },
    { label: "Poultry Feed", href: "#products" },
    { label: "Organic Products", href: "#products" },
  ];

  const support = [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
  ];

  return (
    <footer className="bg-farm-green-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-farm-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80">
                Get the latest updates on fresh products, special offers, and farm news delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-3">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1"
              />
              <Button variant="secondary" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-farm-yellow rounded-lg flex items-center justify-center">
                <span className="text-farm-green-dark font-bold text-lg">🐔</span>
              </div>
              <span className="text-xl font-bold">FreshFarm Poultry</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Providing fresh, healthy, and sustainable poultry products to our community 
              since 2015. Quality you can taste, trust you can count on.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-farm-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.label}>
                  <a 
                    href={product.href}
                    className="text-white/80 hover:text-farm-yellow transition-colors duration-200"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-farm-yellow mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <p>123 Country Farm Road</p>
                  <p>Greenfield Valley, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-farm-yellow flex-shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-farm-yellow flex-shrink-0" />
                <span className="text-white/80">info@freshfarmpoultry.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-farm-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Leaf className="h-4 w-4 text-farm-yellow" />
                <span>100% Organic Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-farm-yellow" />
                <span>Family Owned & Operated</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-farm-yellow transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-farm-yellow transition-colors">Terms of Service</a>
              <span>© 2024 FreshFarm Poultry. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;