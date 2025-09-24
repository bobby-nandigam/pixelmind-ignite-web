import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Bot, Workflow, MessageSquare, Database, Sparkles, Users, Zap, Code2, Shield, BarChart3, Building2, Factory, Briefcase, Heart, GraduationCap, Car, Plane, TrendingUp, Globe, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const { toast } = useToast();

  const handleExploreServices = () => {
    toast({
      title: "Exploring Our Services",
      description: "Discover our comprehensive AI solutions across industries...",
    });
  };

  const handleLearnMore = (sectorName: string) => {
    toast({
      title: `Exploring ${sectorName} Solutions`,
      description: "Opening detailed sector-specific AI implementations...",
    });
  };

  const handleGetStarted = () => {
    toast({
      title: "Getting Started",
      description: "Redirecting to our consultation process...",
    });
  };

  const handleScheduleConsultation = (sector: string) => {
    toast({
      title: `${sector} Consultation`,
      description: "Scheduling personalized consultation for your industry needs...",
    });
  };

  const industrySectors = [
    {
      name: "Healthcare & Life Sciences",
      description: "Transform patient care with AI-powered diagnostics, treatment optimization, and administrative automation. Revolutionizing medical research and clinical workflows.",
      icon: Heart,
      gradient: "from-rose-500 via-pink-500 to-red-500",
      stats: "150+ Hospitals",
      achievements: ["95% Diagnostic Accuracy", "40% Cost Reduction", "Healthcare Compliance"]
    },
    {
      name: "Financial Services & Banking",
      description: "Enable intelligent fraud detection, algorithmic trading, personalized financial advisory, and automated risk assessment with enterprise-grade AI solutions.",
      icon: TrendingUp,
      gradient: "from-emerald-500 via-teal-500 to-green-500",
      stats: "200+ Banks",
      achievements: ["99.8% Fraud Detection", "Real-time Processing", "Regulatory Compliant"]
    },
    {
      name: "Manufacturing & Industry 4.0",
      description: "Optimize production lines with predictive maintenance, quality control automation, supply chain intelligence, and smart factory solutions.",
      icon: Factory,
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      stats: "300+ Factories",
      achievements: ["35% Efficiency Gain", "Zero Downtime", "Smart Automation"]
    },
    {
      name: "Education & Research",
      description: "Personalized learning experiences, automated grading systems, research acceleration, and intelligent campus management powered by cutting-edge AI.",
      icon: GraduationCap,
      gradient: "from-amber-500 via-orange-500 to-yellow-500",
      stats: "500+ Institutions",
      achievements: ["Personalized Learning", "Research Acceleration", "Campus Intelligence"]
    },
    {
      name: "Retail & E-commerce",
      description: "Drive sales with AI-powered recommendation engines, inventory optimization, customer behavior analytics, and intelligent supply chain management.",
      icon: Briefcase,
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      stats: "250+ Retailers",
      achievements: ["30% Sales Increase", "Smart Inventory", "Customer Intelligence"]
    },
    {
      name: "Transportation & Logistics",
      description: "Optimize route planning, predictive maintenance for fleets, autonomous systems integration, and intelligent traffic management solutions.",
      icon: Car,
      gradient: "from-cyan-500 via-blue-500 to-teal-500",
      stats: "100+ Fleets",
      achievements: ["Route Optimization", "Fleet Intelligence", "Autonomous Ready"]
    }
  ];

  const companyStats = [
    { value: "500+", label: "Global Enterprises", icon: Building2, description: "Trusted worldwide" },
    { value: "50M+", label: "Daily AI Operations", icon: Zap, description: "Processing power" },
    { value: "99.99%", label: "System Reliability", icon: Shield, description: "Enterprise grade" },
    { value: "4.9/5", label: "Client Satisfaction", icon: Star, description: "Premium support" }
  ];

  const keyFeatures = [
    {
      title: "No-Code AI Platform",
      description: "Build sophisticated AI solutions without programming expertise",
      icon: Code2
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with complete data sovereignty and compliance",
      icon: Shield
    },
    {
      title: "Scalable Architecture",
      description: "From startup to enterprise - scales seamlessly with your growth",
      icon: TrendingUp
    },
    {
      title: "24/7 Global Support",
      description: "Round-the-clock technical support and strategic consultation",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/25"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-premium p-8 rounded-3xl max-w-5xl mx-auto text-center backdrop-blur-xl border border-white/10">
            <div className="animate-float-soft">
              <div className="mb-8">
                <div className="p-6 bg-gradient-to-r from-primary via-secondary to-accent rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-glow animate-pulse-glow">
                  <Brain className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                <span className="text-gradient-premium">AI-Powered</span>
                <br />
                <span className="text-gradient-titanium">Enterprise Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-4xl mx-auto font-medium leading-relaxed">
                Transform industries with intelligent automation, predictive analytics, and cognitive computing
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Serving 500+ global enterprises across healthcare, finance, manufacturing, education, retail, and transportation since September 2025
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="btn-iphone text-lg px-12 py-6 font-bold shadow-glow"
                  onClick={handleGetStarted}
                >
                  Transform Your Industry
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-12 py-6 hover-glow-soft border-primary/30 font-bold glass-premium"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Feature Carousel */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="glass-premium p-6 rounded-2xl border border-white/10 hover-scale-soft group">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-base mb-2 text-gradient-subtle text-center">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gradient-premium">
              Trusted Globally
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Industry-leading AI solutions powering the world's most innovative enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="card-iphone text-center p-6 hover-lift-soft group">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gradient-premium rounded-2xl shadow-glow group-hover:shadow-premium transition-all duration-500">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-display font-bold text-gradient-premium mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-semibold mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground/70">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Sectors - New Timeline Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 product-gradient opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Industry <span className="text-gradient-premium">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              Sector-specific AI solutions designed for enterprise excellence and operational transformation
            </p>
            <div className="w-24 h-1 bg-gradient-premium rounded-full mx-auto" />
          </div>

          {/* Timeline Layout for Sectors */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden lg:block" />
            
            <div className="space-y-12">
              {industrySectors.map((sector, index) => {
                const Icon = sector.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-glow hidden lg:flex items-center justify-center z-10">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className={`glass-premium p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover-lift-soft group bg-gradient-to-br ${sector.gradient} bg-opacity-5`}>
                        {/* Mobile Icon */}
                        <div className="flex items-center mb-6 lg:hidden">
                          <div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl mr-4 shadow-glow">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-display font-bold text-gradient-premium">{sector.name}</h3>
                            <div className="text-sm text-muted-foreground">{sector.stats}</div>
                          </div>
                        </div>
                        
                        {/* Desktop Title */}
                        <div className="hidden lg:block mb-6">
                          <h3 className="text-2xl font-display font-bold text-gradient-premium mb-2">{sector.name}</h3>
                          <div className="text-sm text-muted-foreground font-medium">{sector.stats}</div>
                        </div>
                        
                        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                          {sector.description}
                        </p>
                        
                        <div className="grid grid-cols-1 gap-2 mb-6">
                          {sector.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center text-muted-foreground">
                              <CheckCircle className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex gap-3">
                          <Button 
                            size="sm"
                            className="flex-1 btn-iphone text-sm font-bold"
                            onClick={() => handleLearnMore(sector.name)}
                          >
                            Learn More
                          </Button>
                          <Button 
                            size="sm"
                            variant="outline" 
                            className="border-primary/30 font-bold px-4 glass-premium text-sm"
                            onClick={() => handleScheduleConsultation(sector.name)}
                          >
                            Consult
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Spacer for opposite side */}
                    <div className="hidden lg:block w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button size="lg" className="btn-iphone text-lg px-12 py-6 font-bold shadow-glow">
                Explore All Solutions
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-premium text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-premium p-12 rounded-3xl backdrop-blur-xl border border-white/10">
            <div className="mb-8">
              <div className="p-6 bg-white/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="h-10 w-10 animate-pulse-glow" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Ready to Transform<br />Your Industry?
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-95 font-medium leading-relaxed">
              Join 500+ global enterprises revolutionizing their operations with our AI-powered solutions. 
              Start your digital transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/services">
                <Button size="lg" variant="secondary" className="btn-iphone-secondary text-lg px-12 py-6 font-bold">
                  Start Free Consultation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-12 py-6 border-white/30 text-white hover:bg-white/20 glass-premium font-bold">
                  Book Enterprise Demo
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base opacity-90">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>No Setup Costs</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Enterprise Support Included</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>45-Day Free Trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;