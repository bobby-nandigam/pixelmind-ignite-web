import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Award
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
      {/* Stunning Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--secondary)/0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-10 animate-fade-in">
            <Badge className="glass-3d px-8 py-3 text-base font-bold border-primary/30 shadow-lg hover-lift bg-background/40">
              <Sparkles className="w-5 h-5 mr-2 text-primary" />
              <span className="text-foreground">Enterprise No-Code AI Platform</span>
            </Badge>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              Build AI Solutions
              <span className="block text-gradient-brand mt-4">Without Code</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/75 max-w-5xl mx-auto leading-relaxed font-medium">
              Empower your entire organization to create sophisticated AI solutions. 
              Our visual platform makes advanced AI accessible to everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
              <Button 
                size="lg" 
                className="glass-3d hover-lift text-lg px-12 py-8 group shadow-xl border-primary/20 bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                onClick={handleStartFreeTrial}
              >
                Start Building Free
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-3d text-lg px-12 py-8 hover-glow border-2 shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <Rocket className="mr-3 h-6 w-6" />
                Watch Live Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-16 flex flex-wrap justify-center gap-8 items-center text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-bold">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-bold">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-bold">ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase - Premium Layout */}
      <section className="py-32 relative bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <Badge className="glass-3d px-6 py-2 border-primary/20">
              <Star className="w-4 h-4 mr-2" />
              Premium AI Products
            </Badge>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-brand">
              AI Products & Services
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Choose from our suite of enterprise-grade AI platforms designed for scale
            </p>
          </div>

          <div className="space-y-24">
            {aiProducts.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card 
                  key={index} 
                  className="glass-3d overflow-hidden border border-border/50 shadow-2xl hover-lift group transition-all duration-500"
                >
                  {product.highlight && (
                    <div className="absolute top-8 right-8 z-20">
                      <Badge className="glass-3d px-5 py-2.5 text-sm font-bold border-primary/30 shadow-lg bg-gradient-to-r from-primary/20 to-secondary/20">
                        <Star className="w-4 h-4 mr-2 text-primary" />
                        {product.highlight}
                      </Badge>
                    </div>
                  )}
                  
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Product Visual */}
                    <div className={`relative p-8 lg:p-12 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover-lift">
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90`} />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                        
                        <div className="relative z-10 h-full flex flex-col justify-between p-10 text-white">
                          <div className="flex items-start justify-between">
                            <div className="glass-3d p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                              <Icon className="h-14 w-14" />
                            </div>
                          </div>

                          <div className="space-y-8">
                            <div>
                              <h3 className="text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg">
                                {product.title}
                              </h3>
                              <p className="text-xl opacity-95 drop-shadow">
                                {product.subtitle}
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="glass-3d p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                                <div className="text-4xl font-bold mb-1">{product.pricing}</div>
                                <div className="text-sm opacity-80">per month</div>
                              </div>
                              <div className="glass-3d p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                                <div className="text-2xl font-bold mb-1">{product.users}</div>
                                <div className="text-sm opacity-80">included</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-3xl lg:text-4xl font-bold mb-5">
                            {product.title}
                          </h3>
                          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-2xl font-bold mb-6 text-gradient-brand flex items-center gap-2">
                            <Sparkles className="w-6 h-6" />
                            Platform Features
                          </h4>
                          <div className="grid gap-3">
                            {product.features.map((feature, fIndex) => (
                              <div 
                                key={fIndex} 
                                className="flex items-center gap-4 p-5 rounded-xl glass-3d hover-lift border border-border/30 transition-all duration-300 hover:border-primary/30"
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                  <CheckCircle className="h-5 w-5 text-white" />
                                </div>
                                <span className="font-medium text-base">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="glass-3d p-8 rounded-2xl space-y-5 border border-border/30 bg-gradient-to-br from-muted/30 to-transparent">
                          <h4 className="text-xl font-bold text-gradient-brand flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            How It Works
                          </h4>
                          {product.implementation.map((impl, iIndex) => (
                            <div key={iIndex} className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                {iIndex + 1}
                              </div>
                              <span className="text-muted-foreground pt-0.5">{impl}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                          <Button 
                            size="lg"
                            className="glass-3d hover-lift px-8 py-6 text-base font-semibold group shadow-lg bg-gradient-to-r from-primary to-secondary border-0"
                            onClick={() => handleGetService(product.title, product.pricing)}
                          >
                            Get Started Now
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button 
                            size="lg"
                            variant="outline"
                            className="glass-3d px-8 py-6 text-base font-semibold border-2 hover:border-primary/50 transition-all duration-300"
                            onClick={() => handleLearnMore(product.title)}
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Building Process */}
      <section className="py-32 relative bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <Badge className="glass-3d px-6 py-2 border-primary/20">
              <Rocket className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-brand">
              How It Works
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buildingSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <Card 
                  key={step.step}
                  className="glass-3d hover-lift p-8 text-center border border-border/50 shadow-xl group transition-all duration-500"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <StepIcon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge className="glass-3d text-lg px-4 py-2 border-primary/20">
                      Step {step.step}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <Badge className="glass-3d px-6 py-2 border-primary/20">
              <Star className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-brand">
              Trusted by Leaders
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              See how enterprises transform with our AI platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="glass-3d hover-lift p-10 border border-border/50 shadow-xl group transition-all duration-500"
              >
                <div className="space-y-6">
                  <div className="text-6xl text-primary opacity-20">"</div>
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                  <div className="pt-6 border-t border-border/50">
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.title}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            Ready to Transform
            <span className="block text-gradient-brand mt-2">Your Business with AI?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of enterprises building the future with our no-code AI platform
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              className="glass-3d hover-lift text-lg px-12 py-8 group shadow-2xl bg-gradient-to-r from-primary to-secondary border-0"
              onClick={handleStartFreeTrial}
            >
              Start Free Trial
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-3d text-lg px-12 py-8 hover-glow border-2 shadow-xl hover:border-primary/50"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
