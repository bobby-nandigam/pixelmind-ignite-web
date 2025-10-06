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
  Star
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
      deliverables: [
        "Custom Neural Networks",
        "Cloud Training Pipeline",
        "Mobile/Edge SDKs",
        "Enterprise Support"
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
      deliverables: [
        "Intelligent Workflow System",
        "Multi-Agent Platform",
        "Decision Analytics",
        "Custom Integration APIs"
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
      deliverables: [
        "Computer Vision Platform",
        "Custom Detection Models",
        "Mobile & Web SDKs",
        "Cloud Infrastructure"
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
      deliverables: [
        "Conversational AI Platform",
        "Multi-Channel Integration",
        "Analytics & Insights",
        "Voice Capabilities"
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
      deliverables: [
        "Predictive Analytics Platform",
        "Custom ML Models",
        "Real-time Dashboards",
        "Data Pipeline"
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
      deliverables: [
        "Multi-Agent Platform",
        "Custom Agent Networks",
        "Coordination System",
        "Enterprise Integration"
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
      company: "TechCorp Industries, Hyderabad"
    },
    {
      quote: "QuantumMind Studio transformed our R&D. We're now creating neural architectures that would have taken months in just days, with performance that exceeds expectations.",
      author: "Priya Sharma",
      title: "Head of AI",
      company: "Global Dynamics Ltd, Delhi"
    },
    {
      quote: "DataMind Intelligence revolutionized our analytics. We process 10TB+ data in real-time with predictive models that continuously improve themselves.",
      author: "Amit Patel",
      title: "Data Science Director",
      company: "FinTech Solutions, Mumbai"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="glass-3d px-8 py-3 text-lg font-semibold hover-glow">
              <Sparkles className="w-5 h-5 mr-2" />
              No-Code AI Platform
            </Badge>
            
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
              Build AI Models
              <span className="block text-gradient-brand mt-2">Without Code</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empower everyone in your organization to create sophisticated AI solutions. 
              Our visual platform makes advanced AI accessible to teams of all technical levels.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                size="lg" 
                className="glass-3d hover-lift text-lg px-10 py-7 group"
                onClick={handleStartFreeTrial}
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-3d text-lg px-10 py-7 hover-glow"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-brand">
              AI Products & Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our suite of enterprise-grade AI platforms
            </p>
          </div>

          <div className="space-y-32">
            {aiProducts.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={index} className="glass-3d overflow-hidden border-0 shadow-3d hover-lift">
                  {product.highlight && (
                    <div className="absolute top-6 right-6 z-20">
                      <Badge className="glass-3d px-4 py-2 text-sm font-semibold hover-glow">
                        <Star className="w-4 h-4 mr-1" />
                        {product.highlight}
                      </Badge>
                    </div>
                  )}
                  
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Product Visual */}
                    <div className={`relative p-12 lg:p-16 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-3d hover-lift">
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
                        
                        <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                          <div className="flex items-start justify-between">
                            <div className="glass-3d p-5 rounded-2xl">
                              <Icon className="h-12 w-12" />
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h3 className="text-4xl font-bold mb-2">
                                {product.title}
                              </h3>
                              <p className="text-lg opacity-90">
                                {product.subtitle}
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="glass-3d p-5 rounded-xl">
                                <div className="text-3xl font-bold">{product.pricing}</div>
                                <div className="text-sm opacity-70">per month</div>
                              </div>
                              <div className="glass-3d p-5 rounded-xl">
                                <div className="text-xl font-bold">{product.users}</div>
                                <div className="text-sm opacity-70">included</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className={`p-12 lg:p-16 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-4xl font-bold mb-4">
                            {product.title}
                          </h3>
                          <p className="text-xl text-muted-foreground leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-2xl font-semibold mb-6 text-gradient-brand">Platform Features</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {product.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-center gap-4 p-4 rounded-xl glass-3d hover-lift">
                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                <span className="font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="glass-3d p-8 rounded-2xl space-y-4">
                          <h4 className="text-xl font-semibold text-gradient-brand">
                            How It Works
                          </h4>
                          {product.implementation.map((impl, iIndex) => (
                            <div key={iIndex} className="flex items-start gap-4">
                              <div className="w-7 h-7 rounded-full bg-gradient-brand flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                {iIndex + 1}
                              </div>
                              <span className="text-muted-foreground">{impl}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button 
                            size="lg" 
                            className="glass-3d hover-lift flex-1"
                            onClick={() => handleGetService(product.title, product.pricing)}
                          >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button 
                            size="lg" 
                            variant="outline" 
                            className="glass-3d hover-glow flex-1"
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
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-brand">
              Building Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buildingSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="glass-3d p-8 hover-lift border-0 shadow-3d">
                  <CardContent className="p-0 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="glass-3d p-4 rounded-2xl">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-6xl font-bold text-gradient-brand opacity-20">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
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

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-brand">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how leading companies are transforming with our AI platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-3d p-8 hover-lift border-0 shadow-3d">
                <CardContent className="p-0 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-border/50">
                    <div className="font-semibold text-lg">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-muted/50 to-background/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to Build Your
            <span className="block text-gradient-brand mt-2">AI Solution?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Start your journey today with our no-code AI platform. 
            No credit card required for trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="glass-3d hover-lift text-lg px-12 py-7"
              onClick={handleStartFreeTrial}
            >
              <Rocket className="mr-2 h-6 w-6" />
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-3d hover-glow text-lg px-12 py-7"
            >
              Talk to Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;