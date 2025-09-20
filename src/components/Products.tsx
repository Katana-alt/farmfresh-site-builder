import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Egg, Bird, Package } from "lucide-react";
import freshEggs from "@/assets/fresh-eggs.jpg";
import broilerChickens from "@/assets/broiler-chickens.jpg";
import poultryFeed from "@/assets/poultry-feed.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Farm Fresh Eggs",
      description: "Premium quality brown and white eggs from free-range hens. Rich in protein and omega-3 fatty acids.",
      image: freshEggs,
      price: "From $4.99/dozen",
      rating: 4.9,
      reviews: 324,
      badge: "Best Seller",
      icon: Egg,
      features: ["Free-Range", "Omega-3 Rich", "No Antibiotics", "Fresh Daily"]
    },
    {
      id: 2,
      name: "Premium Broiler Chickens",
      description: "Healthy, organically raised broiler chickens. Perfect for families seeking quality meat.",
      image: broilerChickens,
      price: "From $12.99/lb",
      rating: 4.8,
      reviews: 198,
      badge: "Organic",
      icon: Bird,
      features: ["Organic Feed", "Hormone-Free", "Locally Raised", "Premium Cut"]
    },
    {
      id: 3,
      name: "Quality Poultry Feed",
      description: "Nutritious and balanced feed for optimal poultry health. Suitable for all chicken breeds.",
      image: poultryFeed,
      price: "From $24.99/50lb",
      rating: 4.7,
      reviews: 156,
      badge: "Nutritious",
      icon: Package,
      features: ["Balanced Nutrition", "All Natural", "Growth Support", "Immune Boost"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-farm-green-light text-farm-green-dark">Our Products</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Poultry Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our range of fresh, organic, and sustainably sourced poultry products. 
            Each item is carefully selected to ensure the highest quality for your family.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-farm-yellow text-farm-green-dark font-semibold">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Icon className="h-5 w-5 text-farm-green" />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground group-hover:text-farm-green transition-colors">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-farm-yellow fill-current" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="text-xs bg-farm-green-light/30 text-farm-green-dark border-farm-green-light"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-2xl font-bold text-farm-green">{product.price}</span>
                    </div>
                    <Button variant="hero" size="sm" className="group">
                      <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-farm-green-light/20 to-farm-yellow-light/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Need Custom Orders?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer bulk orders and custom packaging for restaurants, retailers, and large families. 
              Contact us for special pricing and delivery options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Custom Quote
              </Button>
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;