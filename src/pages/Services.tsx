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

const Services = () => {
  const aiProducts = [
    {
      title: "NeuroForge Studio",
      subtitle: "Visual AI Model Builder",
      description: "Create sophisticated neural networks without code using our intuitive drag-and-drop interface. Build, train, and deploy AI models for any use case in minutes, not months.",
      icon: Bot,
      features: [
        "Visual Neural Network Designer",
        "Auto-Optimization Engine", 
        "Real-time Model Training",
        "One-Click Deployment",
        "Performance Monitoring",
        "API Integration Hub"
      ],
      deliverables: [
        "Custom AI Model Platform",
        "Training Infrastructure",
        "Deployment Pipeline",
        "24/7 Technical Support"
      ],
      pricing: "₹12,999/month",
      users: "Unlimited Models",
      color: "from-blue-600 via-purple-600 to-indigo-800",
      highlight: "Most Popular"
    },
    {
      title: "DataFlow Intelligence",
      subtitle: "Smart Data Processing Engine",
      description: "Transform raw data into intelligent insights using advanced AI algorithms. Process any data format, extract patterns, and generate actionable intelligence automatically.",
      icon: Database,
      features: [
        "Multi-Format Data Ingestion",
        "Intelligent Pattern Recognition",
        "Auto-Feature Engineering",
        "Real-time Processing",
        "Predictive Analytics",
        "Custom Visualization"
      ],
      deliverables: [
        "Data Processing Platform",
        "Custom Analytics Dashboard",
        "ML Pipeline Setup",
        "Training & Documentation"
      ],
      pricing: "₹18,999/month",
      users: "Unlimited Data Sources",
      color: "from-emerald-500 via-teal-600 to-cyan-700",
      highlight: "Enterprise"
    },
    {
      title: "ConversaGenius AI",
      subtitle: "Advanced Conversational Platform",
      description: "Build human-like AI assistants that understand context, emotion, and intent. Create sophisticated chatbots and voice agents for any industry or use case.",
      icon: MessageSquare,
      features: [
        "Multi-Language Understanding",
        "Emotion & Context Awareness",
        "Voice & Text Integration",
        "Personality Customization",
        "Learning from Conversations",
        "Omnichannel Deployment"
      ],
      deliverables: [
        "Custom Conversational AI",
        "Multi-Platform Integration",
        "Analytics & Insights",
        "Continuous Optimization"
      ],
      pricing: "₹8,999/month",
      users: "500K Conversations",
      color: "from-orange-500 via-red-500 to-pink-600",
      highlight: "Best Value"
    },
    {
      title: "VisionCraft AI",
      subtitle: "Computer Vision Platform",
      description: "Build powerful computer vision applications without coding. Process images, videos, and real-time camera feeds with state-of-the-art AI models.",
      icon: Brain,
      features: [
        "Object Detection & Recognition",
        "Facial Recognition System",
        "Video Analytics Engine",
        "Real-time Processing",
        "Custom Model Training",
        "Edge Device Deployment"
      ],
      deliverables: [
        "Computer Vision Platform",
        "Custom Detection Models",
        "Mobile & Web SDKs",
        "Implementation Support"
      ],
      pricing: "₹22,999/month",
      users: "Unlimited Processing",
      color: "from-violet-600 via-purple-600 to-indigo-800",
      highlight: "Premium"
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
      quote: "We built 3 AI agents for customer service, sales, and operations in just 2 weeks. The platform is incredibly powerful yet intuitive. Our efficiency increased by 400%.",
      author: "Rajesh Kumar",
      title: "CTO",
      company: "TechCorp Industries, Hyderabad"
    },
    {
      quote: "The Neural Workflow Engine transformed our entire supply chain management. We're processing 10x more data with intelligent automation that learns and improves daily.",
      author: "Priya Sharma",
      title: "Head of Operations", 
      company: "Global Logistics Ltd, Delhi"
    },
    {
      quote: "Our data team can now focus on strategy instead of queries. The Cognitive Data Platform made complex analytics accessible to our entire organization.",
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