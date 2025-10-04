import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Sparkles, Users, Zap, Code2, Shield, BarChart3, Building2, Factory, Briefcase, Heart, GraduationCap, Car, TrendingUp, Globe, CheckCircle, Star, PlayCircle, Rocket, Target, Award, ChevronRight, LineChart, Cpu, Network, CloudCog, Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const { toast } = useToast();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      description: "Redirecting to our services to get started...",
    });
  };

  const handleScheduleConsultation = (sector: string) => {
    toast({
      title: `${sector} Consultation`,
      description: "Scheduling personalized consultation for your industry needs...",
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

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const heroSlides = [
    {
      title: "Shaping the Future with AI Agents",
      subtitle: "Transform your business with intelligent automation and cognitive computing solutions",
      icon: Brain,
      gradient: "from-primary via-secondary to-accent"
    },
    {
      title: "Next-Gen AI Solutions",
      subtitle: "Enterprise-grade artificial intelligence powering innovation across industries",
      icon: Cpu,
      gradient: "from-accent via-primary to-secondary"
    },
    {
      title: "Intelligent Automation",
      subtitle: "Streamline operations with cutting-edge AI-powered workflows",
      icon: Network,
      gradient: "from-secondary via-accent to-primary"
    }
  ];

  const industrySectors = [
    {
      name: "Healthcare & Life Sciences",
      description: "Transform patient care with AI-powered diagnostics, treatment optimization, and administrative automation.",
      icon: Heart,
      gradient: "from-rose-500 via-pink-500 to-red-500",
      stats: "150+ Hospitals",
      achievements: ["95% Diagnostic Accuracy", "40% Cost Reduction", "Healthcare Compliance"]
    },
    {
      name: "Financial Services & Banking",
      description: "Enable intelligent fraud detection, algorithmic trading, and automated risk assessment.",
      icon: TrendingUp,
      gradient: "from-emerald-500 via-teal-500 to-green-500",
      stats: "200+ Banks",
      achievements: ["99.8% Fraud Detection", "Real-time Processing", "Regulatory Compliant"]
    },
    {
      name: "Manufacturing & Industry 4.0",
      description: "Optimize production lines with predictive maintenance and smart factory solutions.",
      icon: Factory,
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      stats: "300+ Factories",
      achievements: ["35% Efficiency Gain", "Zero Downtime", "Smart Automation"]
    },
    {
      name: "Education & Research",
      description: "Personalized learning experiences and intelligent campus management powered by AI.",
      icon: GraduationCap,
      gradient: "from-amber-500 via-orange-500 to-yellow-500",
      stats: "500+ Institutions",
      achievements: ["Personalized Learning", "Research Acceleration", "Campus Intelligence"]
    },
    {
      name: "Retail & E-commerce",
      description: "Drive sales with AI-powered recommendation engines and customer behavior analytics.",
      icon: Briefcase,
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      stats: "250+ Retailers",
      achievements: ["30% Sales Increase", "Smart Inventory", "Customer Intelligence"]
    },
    {
      name: "Transportation & Logistics",
      description: "Optimize route planning and predictive maintenance for autonomous systems.",
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

  const aiSolutions = [
    {
      title: "Intelligent Automation",
      description: "Automate complex workflows with cognitive AI agents",
      icon: Cpu,
      features: ["Process Automation", "Decision Intelligence", "Predictive Analytics"]
    },
    {
      title: "Natural Language AI",
      description: "Advanced NLP for understanding and generation",
      icon: Brain,
      features: ["Conversational AI", "Sentiment Analysis", "Document Processing"]
    },
    {
      title: "Computer Vision",
      description: "Visual intelligence for real-world applications",
      icon: Target,
      features: ["Object Detection", "Image Recognition", "Video Analytics"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable AI deployment on enterprise cloud",
      icon: CloudCog,
      features: ["Auto-scaling", "Global Distribution", "99.99% Uptime"]
    }
  ];

  const testimonials = [
    {
      quote: "PixelMind Labs transformed our operations with their AI solutions. ROI in just 3 months!",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      rating: 5
    },
    {
      quote: "The most advanced AI platform we've used. Their team is exceptional.",
      author: "Michael Chen",
      role: "VP Engineering, InnovateCo",
      rating: 5
    },
    {
      quote: "Incredible results! Our efficiency increased by 45% within the first quarter.",
      author: "Priya Sharma",
      role: "Director of Operations, GlobalTech",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      company: "Healthcare Solutions Inc.",
      result: "Reduced diagnosis time by 60%",
      metrics: "₹50M+ saved annually",
      icon: Heart
    },
    {
      company: "FinTech Global",
      result: "99.9% fraud detection rate",
      metrics: "₹200M+ protected",
      icon: Shield
    },
    {
      company: "Smart Manufacturing Co.",
      result: "40% efficiency improvement",
      metrics: "₹75M+ cost reduction",
      icon: Factory
    }
  ];

  const team = [
    {
      name: "Dr. Arjun Patel",
      role: "Chief AI Scientist",
      expertise: "Machine Learning & Deep Learning"
    },
    {
      name: "Sneha Reddy",
      role: "Head of Product",
      expertise: "AI Product Strategy"
    },
    {
      name: "Vikram Kumar",
      role: "Engineering Lead",
      expertise: "Distributed Systems"
    },
    {
      name: "Ananya Iyer",
      role: "Research Director",
      expertise: "Natural Language Processing"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Enterprise",
      excerpt: "Exploring how AI agents are revolutionizing business operations",
      date: "Dec 15, 2025",
      category: "AI Trends"
    },
    {
      title: "Building Scalable AI Systems",
      excerpt: "Best practices for deploying AI at enterprise scale",
      date: "Dec 10, 2025",
      category: "Engineering"
    },
    {
      title: "AI Ethics and Governance",
      excerpt: "Ensuring responsible AI development and deployment",
      date: "Dec 5, 2025",
      category: "Research"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Futuristic Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        
        <div className="embla relative h-full" ref={emblaRef}>
          <div className="embla__container h-full flex">
            {heroSlides.map((slide, index) => {
              const Icon = slide.icon;
              return (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url(${heroBg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-10`} />
                  
                  <div className="relative h-full flex items-center justify-center">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <div className="mb-6 animate-float-soft">
                        <div className={`inline-flex p-6 bg-gradient-to-r ${slide.gradient} rounded-full shadow-glow animate-pulse-glow`}>
                          <Icon className="h-16 w-16 text-white" />
                        </div>
                      </div>
                      
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
                        <span className="text-gradient-premium">{slide.title.split(' ').slice(0, -2).join(' ')}</span>
                        <br />
                        <span className="text-gradient-titanium">{slide.title.split(' ').slice(-2).join(' ')}</span>
                      </h1>
                      
                      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button 
                          size="lg" 
                          className="btn-iphone text-base px-10 py-6 font-semibold shadow-glow group"
                          onClick={handleGetStarted}
                        >
                          Try Our AI Agent
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="text-base px-10 py-6 border-primary/30 font-semibold glass-premium group"
                          onClick={handleWatchDemo}
                        >
                          <PlayCircle className="mr-2 h-5 w-5" />
                          Watch Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Company Vision - Timeline */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient-premium">Vision</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Leading the AI revolution with innovative solutions that transform industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Rocket, title: "Mission", text: "Democratize AI for every enterprise" },
              { icon: Target, title: "Vision", text: "Shape the future of intelligent automation" },
              { icon: Award, title: "Values", text: "Innovation, excellence, and integrity" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass-premium p-8 rounded-2xl text-center hover-lift-soft group">
                  <div className="inline-flex p-4 bg-gradient-premium rounded-xl mb-4 shadow-glow">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gradient-subtle">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Solutions with Glowing Effects */}
      <section className="py-20 relative">
        <div className="absolute inset-0 product-gradient opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              AI <span className="text-gradient-premium">Solutions</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI technology tailored for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="card-iphone group hover-lift-soft cursor-pointer border-2 border-transparent hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex p-3 bg-gradient-premium rounded-lg shadow-glow group-hover:shadow-premium transition-all duration-500">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gradient-subtle">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-background relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="card-iphone text-center p-6 hover-lift-soft group">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-gradient-premium rounded-xl shadow-glow group-hover:shadow-premium transition-all duration-500">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-display font-bold text-gradient-premium mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-semibold mb-1">
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

      {/* Industry Sectors - Sleek Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Industry <span className="text-gradient-premium">Leadership</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Sector-specific AI solutions designed for enterprise excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div key={index} className="glass-premium p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover-lift-soft group">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${sector.gradient} rounded-xl mr-3 shadow-glow`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gradient-premium">{sector.name}</h3>
                      <div className="text-xs text-muted-foreground">{sector.stats}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {sector.description}
                  </p>
                  
                  <div className="space-y-1 mb-4">
                    {sector.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground">
                        <CheckCircle className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                        <span className="text-xs">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      className="flex-1 btn-iphone text-xs font-semibold"
                      onClick={() => handleLearnMore(sector.name)}
                    >
                      Learn More
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline" 
                      className="border-primary/30 font-semibold px-3 glass-premium text-xs"
                      onClick={() => handleScheduleConsultation(sector.name)}
                    >
                      Consult
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background relative">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Success <span className="text-gradient-premium">Stories</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <Card key={index} className="card-iphone p-6 hover-lift-soft group">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gradient-premium rounded-xl shadow-glow">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold mb-2 text-center">{study.company}</h3>
                    <p className="text-sm text-muted-foreground text-center mb-2">{study.result}</p>
                    <p className="text-xl font-display font-bold text-gradient-premium text-center">{study.metrics}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 product-gradient opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient-premium">Team</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              World-class AI experts and innovators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="card-iphone p-6 text-center hover-lift-soft group border-2 border-transparent hover:border-primary/30 transition-all">
                <CardContent className="p-0">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-premium flex items-center justify-center shadow-glow group-hover:shadow-premium transition-all">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-1">{member.name}</h3>
                  <p className="text-xs text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Client <span className="text-gradient-premium">Testimonials</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-iphone p-6 hover-lift-soft">
                <CardContent className="p-0">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-sm font-bold">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Insights */}
      <section className="py-20 relative">
        <div className="absolute inset-0 product-gradient opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Latest <span className="text-gradient-premium">Insights</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
              Thoughts on AI innovation and industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-iphone hover-lift-soft group cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-xs text-primary font-semibold mb-2">{post.category}</div>
                  <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button className="btn-iphone">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background relative">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Let's Build the <span className="text-gradient-premium">Future Together</span>
              </h2>
              <p className="text-base text-muted-foreground mb-8">
                Ready to transform your business with AI? Get in touch with our team for a consultation.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "contact@pixelmindlabs.com" },
                  { icon: Phone, text: "+91 98765 43210" },
                  { icon: MapPin, text: "Bangalore, Karnataka, India" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div className="p-2 bg-gradient-premium rounded-lg mr-3 shadow-glow">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="card-iphone p-6">
              <CardContent className="p-0">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full btn-iphone">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-premium text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="p-5 bg-white/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="h-8 w-8 animate-pulse-glow" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto opacity-95">
            Join 500+ global enterprises revolutionizing their operations with AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/services">
              <Button size="lg" variant="secondary" className="btn-iphone-secondary text-base px-10 py-6 font-semibold">
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-base px-10 py-6 border-white/30 text-white hover:bg-white/20 glass-premium font-semibold">
                Book Enterprise Demo
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm opacity-90">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>No Setup Costs</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Enterprise Support</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>45-Day Free Trial</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;