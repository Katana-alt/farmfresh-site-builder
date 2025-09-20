import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Mon-Sat 8AM-6PM"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@freshfarmpoultry.com", "orders@freshfarmpoultry.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Farm Location",
      details: ["123 Country Farm Road", "Greenfield Valley, State 12345"],
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Farm Tours",
      details: ["Monday - Saturday", "9:00 AM - 4:00 PM"],
      action: "Book Tour"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-farm-green-light text-farm-green-dark">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact FreshFarm Poultry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience the freshest poultry products? We'd love to hear from you! 
            Reach out for orders, questions, or to schedule a farm tour.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-farm-green-light rounded-lg p-3">
                          <Icon className="h-6 w-6 text-farm-green" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                          <Button variant="link" className="p-0 h-auto mt-2 text-farm-green">
                            {info.action} →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Contact */}
            <div className="mt-8 p-6 bg-gradient-to-br from-farm-green-light/30 to-farm-yellow-light/30 rounded-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="h-5 w-5 text-farm-green" />
                <h4 className="font-semibold text-foreground">Quick Order</h4>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Need to place an urgent order? WhatsApp us for immediate assistance.
              </p>
              <Button variant="hero" size="sm" className="w-full">
                WhatsApp: +1 (555) 123-4567
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </label>
                    <Input placeholder="John" className="border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="border-border" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input type="email" placeholder="john@example.com" className="border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" className="border-border" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject *
                  </label>
                  <Input placeholder="Product inquiry, farm tour, bulk order..." className="border-border" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    className="min-h-32 border-border resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded border-border" />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    Subscribe to our newsletter for updates and special offers
                  </label>
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="bg-farm-green-light/20 p-6 border-b border-border">
              <h3 className="text-xl font-bold text-foreground mb-2">Find Us</h3>
              <p className="text-muted-foreground">
                Visit our farm store or schedule a tour to see our sustainable farming practices in action.
              </p>
            </div>
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-farm-green mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map coming soon</p>
                <Button variant="outline" className="mt-4">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;