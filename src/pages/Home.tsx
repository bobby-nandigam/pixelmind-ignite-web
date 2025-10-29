import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Sparkles, Users, Zap, Code2, Shield, BarChart3, Building2, CheckCircle, Star, PlayCircle, Rocket, Target, Award, ChevronRight, Cpu, Network, CloudCog, Mail, Phone, MapPin, Send, TrendingUp, Heart, Factory, GraduationCap, Briefcase, Car, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import ParticleBackground from "@/components/futuristic/ParticleBackground";
import { useState } from "react";

const Home = () => {
  const { toast } = useToast();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleGetStarted = () => {
    toast({
      title: "Getting Started",
      description: "Redirecting to our services...",
    });
  };

  const handleWatchDemo = () => {
    toast({
      title: "Loading Demo",
      description: "Preparing interactive demonstration...",
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const coreCapabilities = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "Advanced AI agents that automate complex workflows with cognitive decision-making",
      features: ["Process Intelligence", "Smart Workflows", "Predictive Analytics"]
    },
    {
      icon: Network,
      title: "Neural Computing",
      description: "Deep learning models powering next-generation enterprise applications",
      features: ["Deep Learning", "Pattern Recognition", "Real-time Processing"]
    },
    {
      icon: CloudCog,
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and enterprise-grade AI deployment platform",
      features: ["Auto-scaling", "99.99% Uptime", "Global Distribution"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security with compliance and governance built-in",
      features: ["End-to-end Encryption", "Compliance Ready", "Audit Trails"]
    }
  ];

  const industryLeaders = [
    { icon: Building2, label: "Enterprise", count: "500+", description: "Global Companies" },
    { icon: Zap, label: "Operations", count: "50M+", description: "Daily AI Tasks" },
    { icon: Users, label: "Users", count: "2M+", description: "Active Users" },
    { icon: Star, label: "Rating", count: "4.9/5", description: "Client Satisfaction" }
  ];

  const successStories = [
    {
      company: "Healthcare Global",
      industry: "Healthcare",
      result: "60% faster diagnosis",
      savings: "₹50M+ saved",
      icon: Heart,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      company: "FinTech Solutions",
      industry: "Financial Services",
      result: "99.9% fraud detection",
      savings: "₹200M+ protected",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      company: "Smart Manufacturing",
      industry: "Manufacturing",
      result: "40% efficiency boost",
      savings: "₹75M+ reduced",
      icon: Factory,
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  const testimonials = [
    {
      quote: "PixelMind Labs transformed our entire operation. The ROI was visible within the first quarter itself.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp Global",
      rating: 5,
      image: "SJ"
    },
    {
      quote: "The most sophisticated AI platform we've ever used. Their team's expertise is unmatched in the industry.",
      author: "Michael Chen",
      role: "VP Engineering, InnovateCo",
      rating: 5,
      image: "MC"
    },
    {
      quote: "Incredible results! Our operational efficiency increased by 45% and costs dropped significantly.",
      author: "Priya Sharma",
      role: "Director of Operations, GlobalTech",
      rating: 5,
      image: "PS"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section - Futuristic & Immersive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-soft" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-soft" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-3d border border-primary/30 bg-background/40">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI-Powered Enterprise Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight">
              <span className="text-gradient-premium block mb-4">
                Transform Your Business
              </span>
              <span className="text-gradient-titanium block">
                with AI Agents
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-light">
              Enterprise-grade artificial intelligence solutions that automate workflows, 
              enhance decision-making, and drive exponential growth
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="group bg-gradient-premium text-white border-0 shadow-product hover:shadow-large px-8 py-7 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-105"
                onClick={handleGetStarted}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group glass-3d border-primary/30 px-8 py-7 text-lg font-semibold rounded-2xl hover:border-primary/50 transition-all duration-500"
                onClick={handleWatchDemo}
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-primary rotate-90" />
        </div>
      </section>

      {/* Industry Leaders Stats */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industryLeaders.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="glass-3d border-primary/10 hover:border-primary/30 transition-all duration-500 hover-lift group"
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="inline-flex p-3 bg-gradient-premium rounded-xl shadow-glow">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.count}
                    </div>
                    <div className="text-sm font-bold text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs text-foreground/60 font-medium">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-3d border border-primary/30 bg-background/40 mb-4">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold text-foreground">Core Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Powered by <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Advanced AI</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-medium">
              Enterprise-grade artificial intelligence that transforms how businesses operate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="glass-3d border-primary/10 hover:border-primary/30 transition-all duration-500 hover-lift group cursor-pointer overflow-hidden relative"
                >
                  <div className={`absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <CardContent className="p-6 space-y-4 relative z-10">
                    <div className="inline-flex p-3 bg-gradient-premium rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                      {capability.description}
                    </p>
                    <ul className="space-y-2 pt-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-foreground/65 font-medium">
                          <CheckCircle className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-premium rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-3d border border-primary/20 mb-4">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Driving <span className="text-gradient-premium">Real Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how industry leaders are transforming their operations with our AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => {
              const Icon = story.icon;
              return (
                <Card 
                  key={index}
                  className="glass-3d border-primary/10 hover:border-primary/30 transition-all duration-500 hover-lift group overflow-hidden relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <CardContent className="p-8 space-y-6 relative z-10">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${story.gradient} rounded-xl shadow-glow`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gradient-titanium mb-2">
                        {story.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">{story.industry}</p>
                    </div>
                    <div className="space-y-3 pt-4 border-t border-primary/10">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Result</span>
                        <span className="text-lg font-bold text-gradient-premium">{story.result}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Impact</span>
                        <span className="text-lg font-bold text-gradient-blue">{story.savings}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-3d border border-primary/20 mb-4">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Trusted by <span className="text-gradient-premium">Industry Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="glass-3d border-primary/10 hover:border-primary/30 transition-all duration-500 hover-lift group"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-premium flex items-center justify-center text-white font-bold shadow-glow">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-bold text-gradient-titanium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-3d border border-primary/20 mb-4">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">Get in Touch</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold">
                  Let's Build <span className="text-gradient-premium">Something Amazing</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ready to transform your business with AI? Our team of experts is here to help you every step of the way.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-premium rounded-xl shadow-glow">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <div className="text-sm text-muted-foreground">contact@pixelmindlabs.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-premium rounded-xl shadow-glow">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Call Us</div>
                    <div className="text-sm text-muted-foreground">+91 (800) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-premium rounded-xl shadow-glow">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Visit Us</div>
                    <div className="text-sm text-muted-foreground">Bangalore, Karnataka, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <Card className="glass-3d border-primary/20">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl glass-3d border border-primary/30 focus:border-primary/60 transition-colors outline-none bg-background/60 text-foreground placeholder:text-foreground/40"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl glass-3d border border-primary/30 focus:border-primary/60 transition-colors outline-none bg-background/60 text-foreground placeholder:text-foreground/40"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl glass-3d border border-primary/30 focus:border-primary/60 transition-colors outline-none bg-background/60 text-foreground placeholder:text-foreground/40"
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Message</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-xl glass-3d border border-primary/30 focus:border-primary/60 transition-colors outline-none resize-none bg-background/60 text-foreground placeholder:text-foreground/40"
                      rows={4}
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-premium text-white border-0 shadow-product hover:shadow-large py-6 text-base font-semibold rounded-xl transition-all duration-500 hover:scale-105 group"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Ready to <span className="text-gradient-premium">Transform</span> Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 500+ enterprises already leveraging AI to drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group bg-gradient-premium text-white border-0 shadow-product hover:shadow-large px-8 py-7 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-105"
              onClick={handleGetStarted}
            >
              Start Your Free Trial
              <Rocket className="ml-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group glass-3d border-primary/30 px-8 py-7 text-lg font-semibold rounded-2xl hover:border-primary/50 transition-all duration-500"
              asChild
            >
              <Link to="/contact">
                Talk to an Expert
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;