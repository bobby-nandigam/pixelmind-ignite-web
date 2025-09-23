import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Database,
  MessageSquare,
  BarChart3,
  Shield,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Services = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleGetService = (serviceName: string, price: string) => {
    toast({
      title: `Getting ${serviceName}`,
      description: `Redirecting to purchase ${serviceName} for ${price}...`,
    });
    // In a real app, this would redirect to a checkout or contact form
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
      color: "from-violet-600 via-purple-600 to-indigo-800",
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
      color: "from-emerald-500 via-teal-600 to-cyan-700",
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
      color: "from-orange-500 via-red-500 to-pink-600",
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
      color: "from-blue-600 via-indigo-600 to-purple-700",
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
      color: "from-cyan-500 via-blue-600 to-indigo-700",
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
      color: "from-rose-500 via-pink-600 to-purple-700",
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
      <section className="relative pt-32 pb-20 overflow-hidden hero-product">
        <div className="absolute inset-0 mesh-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-8 glass-premium px-8 py-4 text-xl font-semibold">
              <Sparkles className="w-6 h-6 mr-3" />
              No-Code AI Platform
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-iphone-display">
              Build AI Models
              <span className="block text-gradient-premium">Without Code</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed text-iphone-body mb-12">
              Empower everyone in your organization to create sophisticated AI solutions. 
              Our visual platform makes advanced AI accessible to teams of all technical levels.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
              <Button size="lg" className="btn-iphone text-xl px-10 py-6">
                Start Building Free
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button size="lg" variant="outline" className="glass-premium text-xl px-10 py-6 hover-lift-soft">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {aiProducts.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={index} className="card-iphone overflow-hidden relative">
                  {product.highlight && (
                    <div className="absolute top-6 right-6 z-20">
                      <Badge className="glass-premium backdrop-blur-md px-4 py-2 text-sm font-semibold">
                        {product.highlight}
                      </Badge>
                    </div>
                  )}
                  
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Product Visual */}
                    <div className={`relative p-12 lg:p-16 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="product-showcase">
                        <div className={`relative h-96 rounded-3xl bg-gradient-to-br ${product.color} p-8 overflow-hidden product-image`}>
                          <div className="absolute inset-0 mesh-gradient opacity-40" />
                          
                          <div className="relative z-10 h-full flex flex-col justify-between text-white">
                            <div className="flex items-start justify-between">
                              <div className="p-4 glass-premium rounded-2xl backdrop-blur-sm">
                                <Icon className="h-10 w-10" />
                              </div>
                            </div>

                            <div className="text-center">
                              <h3 className="text-3xl font-bold mb-2 text-iphone-display">
                                {product.title}
                              </h3>
                              <p className="text-lg opacity-90 mb-6">
                                {product.subtitle}
                              </p>
                              
                              <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="glass-premium p-4 rounded-xl backdrop-blur-sm">
                                  <div className="text-2xl font-bold">{product.pricing}</div>
                                  <div className="text-xs opacity-70">per month</div>
                                </div>
                                <div className="glass-premium p-4 rounded-xl backdrop-blur-sm">
                                  <div className="text-lg font-bold">{product.users}</div>
                                  <div className="text-xs opacity-70">included</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className={`p-12 lg:p-16 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="mb-8">
                        <h3 className="text-4xl font-bold mb-4 text-iphone-display">
                          {product.title}
                        </h3>
                        <p className="text-xl text-muted-foreground mb-8 text-iphone-body leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-6 text-iphone-display">Platform Features</h4>
                        <div className="grid grid-cols-1 gap-4">
                          {product.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors hover-lift-soft">
                              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                              <span className="text-iphone-body font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="glass-premium p-8 rounded-2xl mb-8">
                        <h4 className="text-lg font-semibold mb-6 text-gradient-premium">
                          How It Works
                        </h4>
                        <ul className="space-y-4">
                          {product.implementation.map((impl, iIndex) => (
                            <li key={iIndex} className="flex items-start gap-4">
                              <div className="w-6 h-6 rounded-full bg-gradient-blue flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                                {iIndex + 1}
                              </div>
                              <span className="text-muted-foreground text-iphone-body">{impl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="glass-premium p-8 rounded-2xl mb-8">
                        <h4 className="text-lg font-semibold mb-6 text-gradient-premium">
                          Complete Solution Includes
                        </h4>
                        <ul className="space-y-4">
                          {product.deliverables.map((deliverable, dIndex) => (
                            <li key={dIndex} className="flex items-start gap-4">
                              <div className="w-2 h-2 rounded-full bg-gradient-blue flex-shrink-0 mt-3" />
                              <span className="text-muted-foreground text-iphone-body">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="btn-iphone flex-1">
                          Start Free Trial
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="glass-premium hover-lift-soft">
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

      {/* Building Process */}
      <section className="py-24 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Build AI in <span className="text-gradient-hero">4 Simple Steps</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment - create enterprise AI solutions 
              without writing a single line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buildingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="hover-lift card-professional animate-professional-float relative" style={{animationDelay: `${index * 0.3}s`}}>
                  <CardContent className="p-10">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-3xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="pt-12">
                      <div className="p-5 bg-gradient-to-r from-primary to-secondary rounded-3xl w-fit mx-auto mb-8 glass-card">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold mb-6 text-gradient-hero text-center">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-body-premium leading-relaxed text-center text-lg">
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

      {/* Success Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Enterprise <span className="text-gradient-hero">Success Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift card-professional glass-card">
                <CardContent className="p-10">
                  <div className="mb-10">
                    <div className="text-7xl text-gradient-hero mb-8 font-display">"</div>
                    <p className="text-xl text-muted-foreground italic leading-relaxed text-body-premium">
                      {testimonial.quote}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-3xl flex items-center justify-center shadow-xl">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xl text-gradient-hero">{testimonial.author}</div>
                      <div className="text-lg text-muted-foreground font-medium">{testimonial.title}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 mesh-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <Sparkles className="h-20 w-20 mx-auto mb-8 text-gradient-premium animate-float-soft" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-iphone-display">
            Transform Your Business
            <span className="block text-gradient-premium">With AI Today</span>
          </h2>
          
          <p className="text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto text-iphone-body leading-relaxed">
            Join thousands of forward-thinking companies who've accelerated their growth with our 
            no-code AI platform. Build your first AI solution in minutes, not months.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-2xl mx-auto mb-12">
            <Button size="lg" className="btn-iphone text-xl px-12 py-8 font-bold">
              Start Building for Free
              <ArrowRight className="ml-3 h-7 w-7" />
            </Button>
            <Button size="lg" variant="outline" className="glass-premium text-xl px-12 py-8 hover-lift-soft font-bold">
              Schedule Demo
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground text-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span>Enterprise support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;