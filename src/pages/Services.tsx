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
  ChevronRight,
  Cpu,
  Layers,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ParticleBackground from "@/components/futuristic/ParticleBackground";

const Services = () => {
  const { toast } = useToast();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handleGetService = (serviceName: string, price: string) => {
    toast({
      title: `Getting ${serviceName}`,
      description: `Redirecting to purchase ${serviceName} for ${price}...`,
    });
    setTimeout(() => {
      window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
    }, 1500);
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
      pricing: "₹15,999",
      users: "Unlimited Models",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgGradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/5",
      highlight: "Enterprise AI",
      accentColor: "violet"
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
      pricing: "₹22,999",
      users: "Unlimited Workflows",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/5",
      highlight: "Most Advanced",
      accentColor: "emerald"
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
      pricing: "₹18,999",
      users: "Unlimited Processing",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/5",
      highlight: "Vision Leader",
      accentColor: "orange"
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
      pricing: "₹11,999",
      users: "1M Conversations",
      gradient: "from-blue-500 via-indigo-500 to-violet-500",
      bgGradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/5",
      highlight: "Best Value",
      accentColor: "blue"
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
      pricing: "₹19,999",
      users: "Unlimited Data Sources",
      gradient: "from-cyan-500 via-sky-500 to-blue-500",
      bgGradient: "from-cyan-500/20 via-sky-500/10 to-blue-500/5",
      highlight: "Data Science",
      accentColor: "cyan"
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
      pricing: "₹25,999",
      users: "Unlimited Agents",
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      bgGradient: "from-rose-500/20 via-pink-500/10 to-fuchsia-500/5",
      highlight: "Future Tech",
      accentColor: "rose"
    }
  ];

  const buildingSteps = [
    {
      step: 1,
      title: "Define Requirements",
      description: "Describe your AI goals and business objectives using natural language",
      icon: Target,
      color: "from-violet-500 to-purple-600"
    },
    {
      step: 2,
      title: "Design & Configure",
      description: "Use visual builders to design your custom AI solution architecture",
      icon: Layers,
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: 3,
      title: "Train & Optimize",
      description: "AI learns and optimizes from your data automatically",
      icon: Cpu,
      color: "from-emerald-500 to-teal-600"
    },
    {
      step: 4,
      title: "Deploy & Scale",
      description: "Launch globally and scale seamlessly as demands grow",
      icon: Globe,
      color: "from-orange-500 to-amber-600"
    }
  ];

  const testimonials = [
    {
      quote: "We built 5 AI agents for different departments using AgentForge in just 3 weeks. The multi-agent coordination is phenomenal - our efficiency increased by 600%.",
      author: "Rajesh Kumar",
      title: "CTO",
      company: "TechCorp Industries",
      avatar: "RK"
    },
    {
      quote: "QuantumMind Studio transformed our R&D. We're now creating neural architectures that would have taken months in just days, with performance that exceeds expectations.",
      author: "Priya Sharma",
      title: "Head of AI",
      company: "Global Dynamics Ltd",
      avatar: "PS"
    },
    {
      quote: "DataMind Intelligence revolutionized our analytics. We process 10TB+ data in real-time with predictive models that continuously improve themselves.",
      author: "Amit Patel",
      title: "Data Science Director",
      company: "FinTech Solutions",
      avatar: "AP"
    }
  ];

  const stats = [
    { value: "500+", label: "Enterprise Clients", icon: Users },
    { value: "99.9%", label: "Platform Uptime", icon: Shield },
    { value: "10M+", label: "Models Deployed", icon: Cpu },
    { value: "50+", label: "Countries Served", icon: Globe }
  ];

  return (
    <div className="min-h-screen pt-16 glacier-bg overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <ParticleBackground />
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary)/0.15),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-10 animate-fade-in-up">
            
            {/* Premium Badge */}
            <div className="inline-flex">
              <Badge className="glacier-card px-6 py-3 text-sm font-semibold border-primary/30 shadow-glacier hover-lift">
                <Sparkles className="w-4 h-4 mr-2 text-primary animate-pulse" />
                <span className="text-gradient-brand font-bold">Enterprise No-Code AI Platform</span>
              </Badge>
            </div>
            
            {/* Hero Title */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
                <span className="block text-foreground">Build Advanced AI</span>
                <span className="block mt-3 text-gradient-brand">Without Writing Code</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Create enterprise-grade AI solutions with visual builders.
                <span className="block mt-2 text-foreground font-medium">
                  From neural networks to autonomous agents—all in minutes, not months.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="group relative overflow-hidden px-10 py-7 text-base font-bold gradient-brand text-white border-0 shadow-glacier-lg hover-lift rounded-2xl"
                onClick={handleStartFreeTrial}
              >
                <span className="relative z-10 flex items-center">
                  Start Building Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="group px-10 py-7 text-base font-bold glacier-card border-2 border-border hover:border-primary/50 hover-glow shadow-glacier transition-all duration-300 rounded-2xl"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats Row */}
            <div className="pt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="glacier-card p-5 rounded-2xl hover-lift group"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-2xl font-black text-gradient-brand">{stat.value}</div>
                        <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-28 relative">
        <div className="absolute inset-0 section-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6 animate-fade-in-up">
            <Badge className="glacier-card px-6 py-2.5 border-primary/20 shadow-glacier">
              <Star className="w-4 h-4 mr-2 text-primary" />
              <span className="font-bold text-foreground">Premium AI Products</span>
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
              <span className="block text-foreground mb-2">Enterprise AI Solutions</span>
              <span className="text-gradient-brand">Built for Scale</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful no-code AI platforms that transform how you build, deploy, and scale intelligent solutions
            </p>
          </div>

          {/* Products Grid - New Bento Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiProducts.map((product, index) => {
              const Icon = product.icon;
              const isHovered = hoveredProduct === index;
              
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden glacier-card border-2 shadow-glacier-lg transition-all duration-500 hover-lift ${
                    isHovered ? 'border-primary/40' : 'border-border/50'
                  }`}
                  onMouseEnter={() => setHoveredProduct(index)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <Badge className={`px-4 py-1.5 text-xs font-bold bg-gradient-to-r ${product.gradient} text-white border-0 shadow-lg`}>
                      <Star className="w-3 h-3 mr-1.5" />
                      {product.highlight}
                    </Badge>
                  </div>

                  <CardContent className="relative z-10 p-8">
                    {/* Header */}
                    <div className="flex items-start gap-5 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-2xl font-black text-foreground group-hover:text-gradient-brand transition-all duration-300">
                          {product.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground mt-1">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Pricing Row */}
                    <div className="flex items-center gap-4 mb-6 p-4 rounded-xl glacier-card border border-border/50">
                      <div>
                        <div className="text-3xl font-black text-gradient-brand">{product.pricing}</div>
                        <div className="text-xs text-muted-foreground">per month</div>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div>
                        <div className="text-lg font-bold text-foreground">{product.users}</div>
                        <div className="text-xs text-muted-foreground">included</div>
                      </div>
                    </div>

                    {/* Features - Scrollable */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold mb-3 flex items-center gap-2 text-foreground">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Key Features
                      </h4>
                      <ScrollArea className="h-[140px]">
                        <div className="grid grid-cols-2 gap-2 pr-4">
                          {product.features.map((feature, fIndex) => (
                            <div 
                              key={fIndex}
                              className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors"
                            >
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-xs font-medium text-foreground line-clamp-1">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        className={`flex-1 bg-gradient-to-r ${product.gradient} text-white border-0 shadow-lg hover:opacity-90 transition-all font-bold rounded-xl`}
                        onClick={() => handleGetService(product.title, product.pricing)}
                      >
                        Get Started
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 glacier-card border-2 hover:border-primary/50 font-bold rounded-xl"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.08),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <Badge className="glacier-card px-6 py-2.5 border-primary/20 shadow-glacier">
              <Zap className="w-4 h-4 mr-2 text-primary" />
              <span className="font-bold text-foreground">Simple 4-Step Process</span>
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
              <span className="block text-foreground mb-2">Build AI Solutions</span>
              <span className="text-gradient-brand">In Days, Not Months</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology transforms complex AI development into a simple, repeatable process
            </p>
          </div>

          {/* Steps - Timeline Style */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-blue-500 via-emerald-500 to-orange-500 -translate-y-1/2 rounded-full opacity-30" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {buildingSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <Card 
                    key={step.step} 
                    className="group glacier-card border-2 border-border/50 hover:border-primary/40 shadow-glacier hover:shadow-glacier-lg transition-all duration-500 hover-lift overflow-hidden"
                  >
                    <CardContent className="p-8 space-y-6 relative">
                      {/* Step Number Background */}
                      <div className="absolute -top-4 -right-4 text-[120px] font-black text-muted/10 leading-none pointer-events-none">
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                          {step.step}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-3">
                        <h3 className="text-xl font-black text-foreground group-hover:text-gradient-brand transition-all">
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 section-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <Badge className="glacier-card px-6 py-2.5 border-primary/20 shadow-glacier">
              <Users className="w-4 h-4 mr-2 text-primary" />
              <span className="font-bold text-foreground">Customer Success Stories</span>
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
              <span className="block text-foreground mb-2">Trusted by</span>
              <span className="text-gradient-brand">Industry Leaders</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group glacier-card border-2 border-border/50 hover:border-primary/40 shadow-glacier hover:shadow-glacier-lg transition-all duration-500 hover-lift"
              >
                <CardContent className="p-8 space-y-6">
                  
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-primary text-primary" 
                      />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-muted-foreground leading-relaxed text-sm italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center text-white font-bold shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                      <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-brand opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <ParticleBackground />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          
          {/* Badge */}
          <Badge className="glass-3d px-6 py-3 border-white/30 text-white shadow-xl">
            <Rocket className="w-5 h-5 mr-2 animate-pulse" />
            Start Your AI Journey Today
          </Badge>
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
            Transform Your Business
            <span className="block mt-3 text-white/90">with Enterprise AI</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Join leading enterprises building the future with no-code AI.
            <span className="block mt-2 text-white font-medium">
              Start your free trial or schedule a personalized demo today.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              variant="secondary"
              className="group px-12 py-7 text-base font-bold shadow-glacier-lg hover-lift rounded-2xl"
              onClick={handleStartFreeTrial}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group px-12 py-7 text-base font-bold border-2 border-white/40 text-white hover:bg-white/20 rounded-2xl backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="pt-10 flex flex-wrap justify-center gap-6">
            {[
              "No credit card required",
              "14-day free trial",
              "Cancel anytime"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
