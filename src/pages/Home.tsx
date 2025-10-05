import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Sparkles, Zap, Code2, Shield, Database, Cpu, Network, CloudCog, Image, Mic, FileText, Bot, Boxes, TrendingUp, Target, Award, Star, PlayCircle, CheckCircle, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ParticleBackground from "@/components/futuristic/ParticleBackground";
import { useState, useRef } from "react";

const Home = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const categories = ["All", "NLP", "Image", "Audio", "Data", "Automation"];

  const aiTools = [
    {
      name: "Neural Translator",
      description: "Advanced multilingual translation with context awareness",
      category: "NLP",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
      stats: "50+ Languages"
    },
    {
      name: "Vision AI Studio",
      description: "Professional image generation and enhancement",
      category: "Image",
      icon: Image,
      gradient: "from-purple-500 to-pink-500",
      stats: "100M+ Images"
    },
    {
      name: "Audio Master AI",
      description: "Voice synthesis and audio processing platform",
      category: "Audio",
      icon: Mic,
      gradient: "from-green-500 to-emerald-500",
      stats: "Real-time"
    },
    {
      name: "DataMind Analytics",
      description: "Intelligent data analysis and predictive modeling",
      category: "Data",
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      stats: "TB-Scale"
    },
    {
      name: "AutoFlow Engine",
      description: "Workflow automation with intelligent decision-making",
      category: "Automation",
      icon: Bot,
      gradient: "from-indigo-500 to-violet-500",
      stats: "Zero-Code"
    },
    {
      name: "DocGenius AI",
      description: "Document processing and intelligent extraction",
      category: "NLP",
      icon: FileText,
      gradient: "from-teal-500 to-cyan-500",
      stats: "99.9% Accuracy"
    },
    {
      name: "CodeCraft AI",
      description: "AI-powered code generation and optimization",
      category: "Automation",
      icon: Code2,
      gradient: "from-yellow-500 to-amber-500",
      stats: "10+ Languages"
    },
    {
      name: "SentimentScope",
      description: "Advanced sentiment analysis and emotion detection",
      category: "NLP",
      icon: Sparkles,
      gradient: "from-pink-500 to-rose-500",
      stats: "Real-time"
    }
  ];

  const filteredTools = selectedCategory === "All" 
    ? aiTools 
    : aiTools.filter(tool => tool.category === selectedCategory);

  const projects = [
    {
      title: "Healthcare AI Platform",
      description: "End-to-end patient care automation system",
      image: "🏥",
      tags: ["Healthcare", "NLP", "Vision"],
      metrics: { users: "500K+", accuracy: "98%" },
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Financial Risk Engine",
      description: "Real-time fraud detection and prevention",
      image: "💼",
      tags: ["Finance", "ML", "Security"],
      metrics: { transactions: "10M+", detection: "99.8%" },
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Smart Manufacturing Suite",
      description: "Predictive maintenance and quality control",
      image: "🏭",
      tags: ["Manufacturing", "IoT", "AI"],
      metrics: { factories: "300+", efficiency: "+45%" },
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Retail Intelligence Hub",
      description: "Personalized shopping experiences at scale",
      image: "🛍️",
      tags: ["Retail", "Recommendations", "Analytics"],
      metrics: { retailers: "250+", sales: "+35%" },
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Education AI Tutor",
      description: "Adaptive learning powered by AI",
      image: "🎓",
      tags: ["Education", "NLP", "Personalization"],
      metrics: { students: "1M+", engagement: "+60%" },
      gradient: "from-indigo-500/20 to-violet-500/20"
    }
  ];

  const stats = [
    { value: "500+", label: "Tools Integrated", icon: Boxes },
    { value: "50K", label: "Active Users", icon: Zap },
    { value: "100+", label: "AI Projects", icon: Cpu },
    { value: "99.9%", label: "Uptime SLA", icon: Shield }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the Future! 🚀",
      description: "You've been added to our early access list.",
    });
    setEmail("");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-3d mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-gradient-premium animate-pulse" />
            <span className="text-sm font-medium">Next-Generation AI Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight animate-scale-in">
            <span className="text-gradient-premium">Empower Your World</span>
            <br />
            <span className="text-gradient-titanium">with AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
            Explore next-gen tools, APIs, and projects built for the future. 
            Transform your business with cutting-edge artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="btn-iphone px-8 py-6 text-lg group"
              onClick={() => {
                toast({ title: "Exploring Tools", description: "Navigating to AI tools showcase..." });
              }}
            >
              Explore Tools
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg glass-premium border-primary/30"
              onClick={() => {
                toast({ title: "Launching Dashboard", description: "Opening control panel..." });
              }}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Launch Dashboard
            </Button>
          </div>

          {/* Floating Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="glass-3d p-6 rounded-2xl hover-lift-soft group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-8 w-8 mb-3 mx-auto text-primary group-hover:text-secondary transition-colors" />
                  <div className="text-2xl md:text-3xl font-bold text-gradient-premium mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gradient-premium rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* AI Tools Showcase */}
      <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              AI <span className="text-gradient-premium">Tools</span> Showcase
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover powerful AI solutions designed for creators, developers, and enterprises
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2 rounded-full transition-all duration-300
                  ${selectedCategory === category 
                    ? 'gradient-premium text-white shadow-glow' 
                    : 'glass-premium border-primary/30 hover:border-primary/50'
                  }
                `}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card 
                  key={index} 
                  className="group card-iphone cursor-pointer hover-lift-soft overflow-hidden border-2 border-transparent hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${tool.gradient} rounded-2xl shadow-3d group-hover:shadow-glow transition-all duration-500`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge className="absolute top-0 right-0 glass-premium border-0">
                        {tool.stats}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-gradient-premium transition-all">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {tool.description}
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full gradient-blue text-white group-hover:shadow-glow transition-all"
                      onClick={() => {
                        toast({ title: `Launching ${tool.name}`, description: "Opening AI tool..." });
                      }}
                    >
                      Try Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects & Services */}
      <section className="relative py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Featured <span className="text-gradient-premium">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world AI solutions delivering measurable results across industries
            </p>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass-3d border-primary/30 hover:border-primary/50"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className={`flex-shrink-0 w-80 md:w-96 glass-3d border-2 border-primary/20 hover:border-primary/50 snap-center group cursor-pointer hover-lift-soft overflow-hidden`}
                >
                  <CardContent className="p-0">
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-8xl relative overflow-hidden`}>
                      {project.image}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gradient-premium transition-all">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="glass-premium border-primary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-gradient-premium">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass-3d border-primary/30 hover:border-primary/50"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* About AI Platform */}
      <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-3d p-12 rounded-3xl">
            <div className="inline-flex p-4 bg-gradient-premium rounded-2xl mb-6 shadow-glow">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-gradient-premium">Pixelmind Labs</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              We are pioneering the next generation of AI tools and services. Our mission is to democratize 
              artificial intelligence, making advanced AI capabilities accessible to everyone—from solo 
              developers to global enterprises. Built with cutting-edge technology and fueled by innovation.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              {[
                { icon: Target, label: "Mission-Driven" },
                { icon: Award, label: "Award-Winning" },
                { icon: TrendingUp, label: "Fast Growing" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex p-3 bg-gradient-premium rounded-xl mb-3 shadow-glow group-hover:shadow-premium transition-all">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-medium">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Join Us */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-3d mb-8">
            <Star className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">Join 50,000+ Users</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Start Building with <span className="text-gradient-premium">AI Today</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get early access to our latest AI tools and exclusive features. 
            Join the future of intelligent automation.
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="glass-3d border-primary/30 h-14 text-lg"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="gradient-premium text-white px-8 shadow-glow hover:shadow-premium"
              >
                <Mail className="mr-2 h-5 w-5" />
                Join Now
              </Button>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 items-center opacity-60">
            {[Shield, CheckCircle, Zap, Star].map((Icon, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  {index === 0 && "Secure"}
                  {index === 1 && "Verified"}
                  {index === 2 && "Fast"}
                  {index === 3 && "Trusted"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
