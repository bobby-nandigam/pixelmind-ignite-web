import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ParticleBackground from "@/components/futuristic/ParticleBackground";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: [] as string[],
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Message)",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours. Check your email for confirmation.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      services: [],
      budget: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleBookConsultation = () => {
    toast({
      title: "Booking Consultation",
      description: "Redirecting to our calendar booking system...",
    });
    setTimeout(() => {
      window.open("https://calendly.com/pixelmind-labs", "_blank");
    }, 1000);
  };

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
    <div className="min-h-screen pt-16 glacier-bg">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-6 glacier-card border-primary/20 px-6 py-2">Get in Touch</Badge>
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glacier-card hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-display flex items-center gap-3">
                  <div className="p-2 gradient-brand rounded-lg">
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
                    <Input 
                      placeholder="Your full name" 
                      className="glacier-card border-border/50 focus:border-primary"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@company.com" 
                      className="glacier-card border-border/50 focus:border-primary"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input 
                      placeholder="Your company name" 
                      className="glacier-card border-border/50 focus:border-primary"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input 
                      placeholder="+91 98765 43210" 
                      className="glacier-card border-border/50 focus:border-primary"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Service Interest</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center space-x-2 p-3 glacier-card rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.services.includes(service.name) ? 'border-primary bg-primary/10' : 'hover:border-primary/50'
                        }`}
                        onClick={() => handleServiceToggle(service.name)}
                      >
                        <input 
                          type="checkbox" 
                          className="rounded accent-primary"
                          checked={formData.services.includes(service.name)}
                          onChange={() => handleServiceToggle(service.name)}
                        />
                        <label className="text-sm cursor-pointer flex-1">
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-muted-foreground">{service.description}</div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Project Budget</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {["< ₹8L", "₹8L - ₹20L", "₹20L - ₹40L", "₹40L+"].map((budget, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center space-x-2 p-3 glacier-card rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.budget === budget ? 'border-primary bg-primary/10' : 'hover:border-primary/50'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, budget }))}
                      >
                        <input 
                          type="radio" 
                          name="budget" 
                          className="accent-primary"
                          checked={formData.budget === budget}
                          onChange={() => setFormData(prev => ({ ...prev, budget }))}
                        />
                        <label className="text-sm cursor-pointer">{budget}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea 
                    placeholder="Tell us about your project, goals, and how we can help..."
                    rows={6}
                    className="glacier-card border-border/50 focus:border-primary"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full gradient-brand text-white hover-lift"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            <Card className="glacier-card hover-lift">
              <CardHeader>
                <CardTitle className="text-xl font-display">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 gradient-brand rounded-lg flex-shrink-0">
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

            <Card className="glacier-card hover-lift overflow-hidden">
              <div className="absolute inset-0 gradient-brand opacity-90" />
              <CardContent className="p-6 relative z-10">
                <div className="text-center mb-6">
                  <div className="p-3 bg-white/20 rounded-full w-fit mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2 text-white">
                    Schedule a Consultation
                  </h3>
                  <p className="text-sm text-white/80">
                    Book a 30-minute strategy session with our AI experts.
                  </p>
                </div>
                
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full hover-lift mb-4"
                  onClick={handleBookConsultation}
                >
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

            <Card className="glacier-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-display font-semibold mb-2">Quick Response</h3>
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
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Card key={index} className="glacier-card hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
