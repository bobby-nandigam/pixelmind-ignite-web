import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@pixelmindlabs.com",
      description: "Get in touch for inquiries and support"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak directly with our team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Innovation District, Tech Hub",
      description: "Our headquarters and development center"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      description: "We're here when you need us"
    }
  ];

  const services = [
    { name: "AI Consulting", description: "Strategic planning and implementation" },
    { name: "Custom Development", description: "Tailored AI solutions for your business" },
    { name: "Data Analytics", description: "Intelligent insights from your data" },
    { name: "Integration Support", description: "Seamless platform integrations" },
    { name: "Training & Support", description: "Team training and ongoing support" },
    { name: "Other", description: "Tell us about your specific needs" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background neural-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-brand text-white">Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's Build Something <span className="text-gradient-brand">Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with AI? We're here to help. 
              Reach out to discuss your project, ask questions, or schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover-lift glow-brand">
              <CardHeader>
                <CardTitle className="text-2xl font-display flex items-center gap-3">
                  <div className="p-2 bg-gradient-brand rounded-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name *</label>
                    <Input placeholder="Your full name" className="hover-glow focus:glow-brand" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input type="email" placeholder="your.email@company.com" className="hover-glow focus:glow-brand" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input placeholder="Your company name" className="hover-glow focus:glow-brand" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input placeholder="+1 (555) 123-4567" className="hover-glow focus:glow-brand" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Service Interest</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <input type="checkbox" id={`service-${index}`} className="rounded" />
                        <label htmlFor={`service-${index}`} className="text-sm cursor-pointer flex-1">
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-muted-foreground">{service.description}</div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Project Budget</label>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {["< $10K", "$10K - $25K", "$25K - $50K", "$50K+"].map((budget, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <input type="radio" name="budget" id={`budget-${index}`} />
                        <label htmlFor={`budget-${index}`} className="text-sm cursor-pointer">
                          {budget}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea 
                    placeholder="Tell us about your project, goals, and how we can help..."
                    rows={6}
                    className="hover-glow focus:glow-brand"
                  />
                </div>

                <Button size="lg" className="w-full gradient-brand text-white hover-lift">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl font-display">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-brand rounded-lg flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{info.title}</div>
                        <div className="text-sm text-primary font-medium">{info.details}</div>
                        <div className="text-xs text-muted-foreground">{info.description}</div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="hover-lift bg-gradient-brand text-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="p-3 bg-white/20 rounded-full w-fit mx-auto mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">
                    Schedule a Consultation
                  </h3>
                  <p className="text-sm text-white/80">
                    Book a 30-minute strategy session with our AI experts.
                  </p>
                </div>
                
                <Button variant="secondary" size="sm" className="w-full hover-lift mb-4">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="text-center">
                  <p className="text-xs text-white/70">
                    Free consultation • No commitment required
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-display font-semibold mb-2">
                  Quick Response
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We typically respond to inquiries within 2-4 hours during business hours.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-display font-bold text-gradient-brand">2hrs</div>
                    <div className="text-xs text-muted-foreground">Avg Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-gradient-brand">24hrs</div>
                    <div className="text-xs text-muted-foreground">Max Response</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold mb-4 text-center">
                  Follow Us
                </h3>
                <div className="flex justify-center space-x-4">
                  {[
                    { name: "LinkedIn", icon: "🔗" },
                    { name: "Twitter", icon: "🐦" },
                    { name: "GitHub", icon: "💻" }
                  ].map((social, index) => (
                    <Button key={index} variant="outline" size="sm" className="hover-glow">
                      {social.icon} {social.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Frequently Asked <span className="text-gradient-brand">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does a typical AI project take?",
                answer: "Project timelines vary based on complexity. Simple integrations can take 2-4 weeks, while custom AI solutions typically require 8-16 weeks."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer comprehensive support packages including monitoring, updates, and technical assistance to ensure your AI solutions continue performing optimally."
              },
              {
                question: "Can you integrate with our existing systems?",
                answer: "Absolutely. We specialize in seamless integrations with popular platforms like PostgreSQL, AWS, Streamlit, and many others. Custom integrations are also available."
              },
              {
                question: "What industries do you work with?",
                answer: "We work across various industries including healthcare, fintech, entertainment, e-commerce, and more. Our AI solutions are adaptable to virtually any sector."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;