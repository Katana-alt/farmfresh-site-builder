import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-farm-cream">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh poultry farm with free-range chickens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-farm-green/20 backdrop-blur-sm border border-farm-green/30 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-farm-yellow" fill="currentColor" />
              <span className="text-sm font-medium">Premium Quality Since 2015</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Fresh & Healthy
              <span className="block text-farm-yellow">Poultry Products</span>
              <span className="block text-3xl md:text-4xl font-normal text-white/90">
                Straight from the Farm
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
              Experience the finest quality poultry products with our sustainable farming practices. 
              From farm-fresh eggs to premium chickens, we deliver nature's best to your table.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-farm-green" />
                <span className="text-white/90">100% Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-farm-green" />
                <span className="text-white/90">Sustainable Farming</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-farm-yellow" fill="currentColor" />
                <span className="text-white/90">Premium Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Shop Our Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-hero" size="xl">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="lg:flex justify-end hidden">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-md">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Years of Experience</span>
                  <span className="text-2xl font-bold text-farm-green">8+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Happy Customers</span>
                  <span className="text-2xl font-bold text-farm-green">5000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Products Range</span>
                  <span className="text-2xl font-bold text-farm-green">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Organic Certified</span>
                  <span className="text-2xl font-bold text-farm-green">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;