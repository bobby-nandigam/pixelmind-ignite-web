import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Brain, 
  Bot, 
  Workflow, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Zap, 
  Target,
  Code2,
  MessageSquare,
  BarChart3,
  Sparkles,
  Rocket,
  Star,
  Shield,
  TrendingUp,
  Award,
  Play,
  ChevronRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ParticleBackground from "@/components/futuristic/ParticleBackground";

const Services = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleGetService = (serviceName: string, price: string) => {
    toast({
      title: `Getting ${serviceName}`,
      description: `Redirecting to purchase ${serviceName} for ${price}...`,
    });
    setTimeout(() => {
      window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
    }, 1500);
  };

  const handleLearnMore = (serviceName: string) => {
    toast({
      title: `Learning About ${serviceName}`,
      description: "Opening detailed service information...",
    });
    setSelectedService(serviceName);
  };

  const handleStartFreeTrial = () => {
    toast({
      title: "Starting Free Trial",
      description: "Setting up your enterprise AI trial account...",
    });
    setTimeout(() => {
      window.location.href = "/contact?trial=true";
    }, 1500);
  };

  const aiProducts = [
    {
      title: "QuantumMind Studio",
      subtitle: "Next-Gen Neural Architecture Builder",
      description: "Revolutionary quantum-inspired AI model builder with zero-code interface. Create transformer models, CNNs, and custom architectures using advanced AutoML with real-time optimization.",
      icon: Brain,
      features: [
        "Quantum Neural Architecture Search",
        "Auto-Hyperparameter Optimization",
        "Multi-Modal Model Training",
        "Edge Device Deployment",
        "Federated Learning Support",
        "Real-time Performance Analytics"
      ],
      implementation: [
        "Drag-drop neural layers with quantum-inspired algorithms",
        "Automated data preprocessing with feature engineering", 
        "One-click cloud deployment with auto-scaling",
        "Real-time monitoring with performance optimization"
      ],
      pricing: "₹15,999/month",
      users: "Unlimited Models",
      gradient: "from-violet-600 via-purple-600 to-indigo-800",
      highlight: "Enterprise AI"
    },
    {
      title: "CognitiveFlow Engine",
      subtitle: "Autonomous Decision Intelligence",
      description: "Build self-learning decision systems that adapt and evolve. Create intelligent workflows with advanced reasoning capabilities and multi-agent orchestration.",
      icon: Workflow,
      features: [
        "Multi-Agent System Builder",
        "Autonomous Decision Trees",
        "Real-time Learning Loops",
        "Context-Aware Reasoning",
        "Predictive Workflow Optimization",
        "Natural Language Planning"
      ],
      implementation: [
        "Visual workflow designer with AI agent coordination",
        "Behavior scripting using natural language instructions",
        "Real-time monitoring with adaptive optimization",
        "Automated decision tree generation and learning"
      ],
      pricing: "₹22,999/month",
      users: "Unlimited Workflows",
      gradient: "from-emerald-500 via-teal-600 to-cyan-700",
      highlight: "Most Advanced"
    },
    {
      title: "NeuralVision Pro",
      subtitle: "Advanced Computer Vision Platform",
      description: "Create sophisticated computer vision models without coding. From object detection to facial recognition, build production-ready vision AI with enterprise-grade performance.",
      icon: Bot,
      features: [
        "Advanced Object Detection",
        "3D Scene Understanding",
        "Real-time Video Analytics",
        "Custom Model Training",
        "Edge Device Optimization",
        "API-First Architecture"
      ],
      implementation: [
        "Pre-trained model library with transfer learning",
        "Custom dataset integration with augmentation",
        "Real-time inference with sub-100ms latency",
        "Mobile deployment with model compression"
      ],
      pricing: "₹18,999/month",
      users: "Unlimited Processing",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      highlight: "Vision Leader"
    },
    {
      title: "DialogueGenius AI",
      subtitle: "Conversational Intelligence Platform",
      description: "Build human-like AI agents with advanced reasoning, memory, and personality. Create sophisticated chatbots and voice assistants with enterprise-grade natural language understanding.",
      icon: MessageSquare,
      features: [
        "Advanced NLP Understanding",
        "Emotional Intelligence",
        "Multi-Turn Conversations",
        "Voice & Text Integration",
        "Custom Personality Design",
        "Learning from Interactions"
      ],
      implementation: [
        "Conversation flow builder with intent recognition",
        "Emotional intelligence training with sentiment analysis",
        "Multi-channel deployment across platforms",
        "Real-time learning with conversation analytics"
      ],
      pricing: "₹11,999/month",
      users: "1M Conversations",
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
      highlight: "Best Value"
    },
    {
      title: "DataMind Intelligence",
      subtitle: "Predictive Analytics Engine",
      description: "Transform raw data into actionable insights using advanced machine learning. Build predictive models, anomaly detection systems, and intelligent forecasting without any coding.",
      icon: BarChart3,
      features: [
        "AutoML Pipeline Builder",
        "Time Series Forecasting",
        "Anomaly Detection",
        "Pattern Recognition",
        "Real-time Processing",
        "Custom Visualization"
      ],
      implementation: [
        "Automated feature engineering with AI-driven selection",
        "Model selection algorithms with hyperparameter tuning",
        "Real-time deployment with streaming data processing",
        "Custom dashboards with interactive visualizations"
      ],
      pricing: "₹19,999/month",
      users: "Unlimited Data Sources",
      gradient: "from-cyan-500 via-blue-600 to-indigo-700",
      highlight: "Data Science"
    },
    {
      title: "AgentForge Studio",
      subtitle: "Multi-Agent System Builder",
      description: "Create collaborative AI agent networks that work together to solve complex problems. Build autonomous agents with specialized skills and advanced coordination capabilities.",
      icon: Users,
      features: [
        "Multi-Agent Orchestration",
        "Autonomous Task Planning",
        "Agent Communication Protocols",
        "Skill-Based Architecture",
        "Dynamic Team Formation",
        "Continuous Learning"
      ],
      implementation: [
        "Agent behavior modeling with skill specialization",
        "Task distribution algorithms with load balancing",
        "Communication interfaces with protocol management",
        "Performance optimization with continuous learning"
      ],
      pricing: "₹25,999/month",
      users: "Unlimited Agents",
      gradient: "from-rose-500 via-pink-600 to-purple-700",
      highlight: "Future Tech"
    }
  ];

  const buildingSteps = [
    {
      step: 1,
      title: "Define AI Requirements",
      description: "Describe your AI goals and business objectives in simple terms",
      icon: Target
    },
    {
      step: 2,
      title: "Design & Configure",
      description: "Use our visual builders to design your AI solution architecture",
      icon: Brain
    },
    {
      step: 3,
      title: "Train & Optimize",
      description: "AI learns from your data and processes automatically",
      icon: Code2
    },
    {
      step: 4,
      title: "Deploy & Scale",
      description: "Launch your AI and scale seamlessly as demands grow",
      icon: Zap
    }
  ];

  const testimonials = [
    {
      quote: "We built 5 AI agents for different departments using AgentForge in just 3 weeks. The multi-agent coordination is phenomenal - our efficiency increased by 600%.",
      author: "Rajesh Kumar",
      title: "CTO",
      company: "TechCorp Industries"
    },
    {
      quote: "QuantumMind Studio transformed our R&D. We're now creating neural architectures that would have taken months in just days, with performance that exceeds expectations.",
      author: "Priya Sharma",
      title: "Head of AI",
      company: "Global Dynamics Ltd"
    },
    {
      quote: "DataMind Intelligence revolutionized our analytics. We process 10TB+ data in real-time with predictive models that continuously improve themselves.",
      author: "Amit Patel",
      title: "Data Science Director",
      company: "FinTech Solutions"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section - Ultra Modern */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <ParticleBackground />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.15),transparent_60%)]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12 animate-fade-in">
            
            {/* Premium Badge */}
            <div className="inline-flex">
              <Badge className="glass-3d px-6 py-3 text-sm font-semibold border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 hover-lift shadow-lg">
                <Sparkles className="w-4 h-4 mr-2 text-primary animate-pulse" />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Enterprise No-Code AI Platform
                </span>
              </Badge>
            </div>
            
            {/* Hero Title */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                <span className="block text-foreground">Build Advanced AI</span>
                <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  Without Writing Code
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                Create enterprise-grade AI solutions with visual builders. 
                <span className="block mt-2 text-foreground/80 font-medium">
                  From neural networks to autonomous agents—all in minutes, not months.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="group relative overflow-hidden px-10 py-7 text-base font-semibold bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground border-0 shadow-2xl hover-lift"
                onClick={handleStartFreeTrial}
              >
                <span className="relative z-10 flex items-center">
                  Start Building Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="group px-10 py-7 text-base font-semibold glass-3d border-2 border-border hover:border-primary/50 hover-glow shadow-xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass-3d p-4 rounded-xl border border-border/50 hover-lift">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold text-foreground">Enterprise Security</div>
                <div className="text-xs text-muted-foreground mt-1">ISO 27001 Certified</div>
              </div>
              <div className="glass-3d p-4 rounded-xl border border-border/50 hover-lift">
                <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold text-foreground">99.9% Uptime</div>
                <div className="text-xs text-muted-foreground mt-1">SLA Guaranteed</div>
              </div>
              <div className="glass-3d p-4 rounded-xl border border-border/50 hover-lift">
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold text-foreground">Award Winning</div>
                <div className="text-xs text-muted-foreground mt-1">Industry Leader</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase - Ultra Premium */}
      <section className="py-32 relative bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-24 space-y-6 animate-fade-in">
            <Badge className="glass-3d px-6 py-2.5 border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <Star className="w-4 h-4 mr-2 text-primary animate-pulse" />
              <span className="text-foreground font-semibold">Premium AI Products</span>
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="block text-foreground mb-2">Enterprise AI Solutions</span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Powerful no-code AI platforms that transform how you build, deploy, and scale intelligent solutions
            </p>
          </div>

          {/* Products Grid */}
          <div className="space-y-12">
            {aiProducts.map((product, index) => {
              const Icon = product.icon;
              
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border border-border/50 bg-gradient-to-br from-card/50 via-card to-card/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:border-primary/30 transition-all duration-500 hover-lift"
                >
                  {/* Highlight Badge */}
                  {product.highlight && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="px-4 py-1.5 text-xs font-bold border border-primary/30 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-xl shadow-lg">
                        <Star className="w-3 h-3 mr-1.5 text-primary" />
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {product.highlight}
                        </span>
                      </Badge>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    
                    {/* Left: Product Hero */}
                    <div className="relative overflow-hidden">
                      <div className="relative h-[400px] lg:h-full min-h-[500px]">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90`} />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_70%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.2),transparent_60%)]" />
                        
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between p-10 text-white">
                          
                          {/* Icon */}
                          <div className="inline-flex">
                            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-110 transition-transform duration-300">
                              <Icon className="h-12 w-12" />
                            </div>
                          </div>

                          {/* Title & Pricing */}
                          <div className="space-y-8">
                            <div>
                              <h3 className="text-4xl font-bold mb-3 drop-shadow-lg leading-tight">
                                {product.title}
                              </h3>
                              <p className="text-base opacity-95 drop-shadow font-medium">
                                {product.subtitle}
                              </p>
                            </div>
                            
                            {/* Pricing Cards */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:bg-white/15 transition-colors">
                                <div className="text-3xl font-bold mb-1">{product.pricing}</div>
                                <div className="text-sm opacity-80">per month</div>
                              </div>
                              <div className="p-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:bg-white/15 transition-colors">
                                <div className="text-xl font-bold mb-1">{product.users}</div>
                                <div className="text-sm opacity-80">included</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Product Details */}
                    <div className="p-10 flex flex-col space-y-8">
                      
                      {/* Description */}
                      <div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Platform Features - Scrollable */}
                      <div className="flex-1">
                        <h4 className="text-base font-bold mb-4 flex items-center gap-2 text-foreground">
                          <Sparkles className="w-5 h-5 text-primary" />
                          Platform Features
                        </h4>
                        <ScrollArea className="h-[200px] pr-4">
                          <div className="space-y-3">
                            {product.features.map((feature, fIndex) => (
                              <div 
                                key={fIndex}
                                className="flex items-start gap-3 p-3 rounded-lg glass-3d border border-border/50 hover:border-primary/30 hover-lift transition-all group/item"
                              >
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                                <span className="text-sm text-foreground font-medium leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>

                      {/* Implementation Steps - Scrollable */}
                      <div className="flex-1">
                        <h4 className="text-base font-bold mb-4 flex items-center gap-2 text-foreground">
                          <Code2 className="w-5 h-5 text-primary" />
                          How It Works
                        </h4>
                        <ScrollArea className="h-[160px] pr-4">
                          <div className="space-y-3">
                            {product.implementation.map((step, sIndex) => (
                              <div 
                                key={sIndex}
                                className="flex items-start gap-3 p-3 rounded-lg glass-3d border border-border/50 hover:border-secondary/30 hover-lift transition-all group/item"
                              >
                                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold group-hover/item:scale-110 transition-transform">
                                  {sIndex + 1}
                                </div>
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {step}
                                </span>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:opacity-90 transition-all shadow-xl hover-lift border-0 group/btn font-semibold"
                          onClick={() => handleGetService(product.title, product.pricing)}
                        >
                          Get Started Now
                          <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1 glass-3d border-2 border-border hover:border-primary/50 hover-glow transition-all font-semibold"
                          onClick={() => handleLearnMore(product.title)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Modern */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-muted/5 via-background to-muted/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.08),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <Badge className="glass-3d px-6 py-2.5 border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <Zap className="w-4 h-4 mr-2 text-primary" />
              <span className="text-foreground font-semibold">Simple 4-Step Process</span>
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="block text-foreground mb-2">Build AI Solutions</span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                In Days, Not Months
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology transforms complex AI development into a simple, repeatable process
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildingSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.step} 
                  className="group relative overflow-hidden border border-border/50 bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover-lift"
                >
                  {/* Animated Background Accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent rounded-bl-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 space-y-6 relative z-10">
                    
                    {/* Header: Icon + Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-primary/20 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300 shadow-lg">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-7xl font-bold bg-gradient-to-br from-primary/5 to-secondary/10 bg-clip-text text-transparent group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium */}
      <section className="py-32 relative bg-gradient-to-b from-background via-muted/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.05),transparent_60%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <Badge className="glass-3d px-6 py-2.5 border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <Users className="w-4 h-4 mr-2 text-primary" />
              <span className="text-foreground font-semibold">Customer Success Stories</span>
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="block text-foreground mb-2">Trusted by</span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of enterprises transforming their business with our AI platform
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border border-border/50 bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover-lift"
              >
                {/* Accent Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 space-y-6 relative z-10">
                  
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-primary text-primary group-hover:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-muted-foreground leading-relaxed text-sm min-h-[120px]">
                    <span className="text-primary/50 text-4xl leading-none">"</span>
                    {testimonial.quote}
                    <span className="text-primary/50 text-4xl leading-none">"</span>
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="pt-4 border-t border-border/30">
                    <div className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {testimonial.title}
                    </div>
                    <div className="text-xs text-muted-foreground/70 mt-0.5">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Ultra Premium */}
      <section className="py-32 relative overflow-hidden">
        <ParticleBackground />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          {/* Badge */}
          <div className="inline-flex">
            <Badge className="glass-3d px-6 py-3 border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 shadow-xl">
              <Rocket className="w-5 h-5 mr-2 text-primary animate-pulse" />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">
                Start Your AI Journey Today
              </span>
            </Badge>
          </div>
          
          {/* Heading */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
              <span className="block text-foreground">Transform Your Business</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                with Enterprise AI
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join leading enterprises building the future with no-code AI. 
              <span className="block mt-2 text-foreground/80 font-medium">
                Start your free trial or schedule a personalized demo today.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="group relative overflow-hidden px-12 py-7 text-base font-semibold bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground border-0 shadow-2xl hover-lift"
              onClick={handleStartFreeTrial}
            >
              <span className="relative z-10 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group px-12 py-7 text-base font-semibold glass-3d border-2 border-border hover:border-primary/50 hover-glow shadow-xl transition-all duration-300"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Schedule Demo
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;