import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Leaf, Shield, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Family Tradition",
      description: "Three generations of dedicated farming with love and care for every animal."
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmentally responsible farming that protects our planet for future generations."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous standards ensure every product meets our highest quality expectations."
    },
    {
      icon: Award,
      title: "Certified Organic",
      description: "Officially certified organic farming practices with regular third-party inspections."
    }
  ];

  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "5,000+", label: "Happy Customers" },
    { number: "50+", label: "Product Varieties" },
    { number: "100%", label: "Organic Certified" }
  ];

  return (
    <section id="about" className="py-20 bg-farm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-farm-green text-primary-foreground">About FreshFarm</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Passionate About Quality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over eight years, we've been committed to providing the freshest, 
            healthiest poultry products through sustainable and ethical farming practices.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                FreshFarm Poultry began as a small family operation in 2015 with a simple mission: 
                to provide our community with the freshest, healthiest poultry products possible. 
                What started with just a few dozen chickens has grown into a thriving operation 
                serving thousands of satisfied customers.
              </p>
              <p>
                Our commitment to sustainable farming practices means our chickens roam freely 
                in spacious, natural environments, eating organic feed and living stress-free lives. 
                This not only ensures their well-being but also results in superior quality products 
                that you can taste and trust.
              </p>
              <p>
                Today, we're proud to be a certified organic farm that continues to put quality, 
                sustainability, and customer satisfaction at the heart of everything we do.
              </p>
            </div>

            <div className="flex items-center space-x-4 mt-8">
              <Button variant="hero" size="lg">
                Visit Our Farm
              </Button>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>Open for tours Mon-Sat</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-background border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-farm-green mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from caring for our animals to serving our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center p-6 bg-background border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-farm-green-light rounded-full mb-4 group-hover:bg-farm-green transition-colors">
                      <Icon className="h-8 w-8 text-farm-green group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-farm-green to-farm-green-dark rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Users className="h-8 w-8" />
              <h3 className="text-3xl font-bold">Meet Our Team</h3>
            </div>
            <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
              Our dedicated team of farmers, veterinarians, and quality specialists work together 
              to ensure every product meets our exceptional standards.
            </p>
            <Button variant="secondary" size="lg">
              Learn About Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;