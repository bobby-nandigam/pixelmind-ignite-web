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
      title: "AI Agent Builder Pro",
      subtitle: "Create Intelligent Autonomous Agents",
      description: "Build sophisticated AI agents that can handle complex workflows, customer interactions, and business processes. Our visual builder makes it easy to create agents that learn, adapt, and scale with your business needs.",
      icon: Bot,
      features: [
        "Visual Agent Designer",
        "Multi-Modal AI Capabilities", 
        "Advanced Workflow Automation",
        "Real-time Learning & Adaptation",
        "Enterprise-Grade Security",
        "API & Integration Hub"
      ],
      deliverables: [
        "Custom AI Agent Platform",
        "Multi-Channel Deployment",
        "Analytics & Monitoring Dashboard",
        "24/7 Support & Maintenance"
      ],
      pricing: "₹8,999/month",
      users: "Unlimited Agents",
      color: "from-blue-600 to-purple-600",
      highlight: "Most Popular"
    },
    {
      title: "Neural Workflow Engine",
      subtitle: "Intelligent Process Automation",
      description: "Transform your business processes with AI-powered workflow automation. Connect systems, automate decisions, and orchestrate complex operations with intelligent workflows that adapt to your business logic.",
      icon: Workflow,
      features: [
        "Drag & Drop Workflow Builder",
        "AI-Powered Decision Making",
        "Smart Data Processing",
        "Multi-System Integration",
        "Predictive Analytics",
        "Auto-Scaling Infrastructure"
      ],
      deliverables: [
        "Custom Workflow Platform",
        "System Integrations",
        "Performance Analytics",
        "Training & Documentation"
      ],
      pricing: "₹12,999/month",
      users: "Enterprise Scale",
      color: "from-emerald-600 to-teal-600",
      highlight: "Enterprise"
    },
    {
      title: "Cognitive Data Platform",
      subtitle: "AI-Powered Data Intelligence",
      description: "Unlock insights from your data with our advanced AI platform. Natural language queries, automated analysis, and intelligent visualization make data accessible to everyone in your organization.",
      icon: Database,
      features: [
        "Natural Language to SQL",
        "Automated Data Discovery",
        "Intelligent Visualization",
        "Predictive Analytics",
        "Real-time Processing",
        "Multi-Source Integration"
      ],
      deliverables: [
        "AI Data Platform",
        "Custom Dashboards",
        "Data Pipeline Setup",
        "Training & Support"
      ],
      pricing: "₹15,999/month",
      users: "Unlimited Users",
      color: "from-violet-600 to-purple-600",
      highlight: "Premium"
    },
    {
      title: "Conversational AI Suite",
      subtitle: "Advanced Chatbot & Voice AI",
      description: "Create sophisticated conversational experiences with our AI suite. Build chatbots, voice assistants, and interactive AI that understand context, emotion, and intent for exceptional user experiences.",
      icon: MessageSquare,
      features: [
        "Multilingual Conversation AI",
        "Emotion & Sentiment Analysis",
        "Voice & Text Integration",
        "Context-Aware Responses",
        "Learning from Interactions",
        "Omnichannel Deployment"
      ],
      deliverables: [
        "Custom Conversational AI",
        "Multi-Platform Integration",
        "Analytics Dashboard",
        "Ongoing Optimization"
      ],
      pricing: "₹6,999/month",
      users: "100K Conversations",
      color: "from-cyan-600 to-blue-600",
      highlight: "Best Value"
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
      <section className="py-24 bg-gradient-to-br from-muted/40 to-background neural-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-lg">
              AI Product Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Build Enterprise <span className="text-gradient-hero">AI Solutions</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Create powerful AI agents, intelligent workflows, and data platforms without coding. 
              Our no-code platform empowers enterprises to build custom AI solutions that scale.
            </p>
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
                <Card key={index} className="overflow-hidden hover-lift card-professional relative">
                  {product.highlight && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1">
                        {product.highlight}
                      </Badge>
                    </div>
                  )}
                  
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`bg-gradient-to-br ${product.color} p-12 lg:p-16 text-white relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="absolute inset-0 neural-bg opacity-30" />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-10">
                          <div className="p-5 bg-white/20 rounded-3xl mr-6 glass-card backdrop-blur-sm">
                            <Icon className="h-12 w-12" />
                          </div>
                          <div>
                            <h2 className="text-5xl font-display font-bold text-display mb-2">{product.title}</h2>
                            <p className="text-white/90 text-xl font-medium">{product.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-xl text-white/95 mb-12 leading-relaxed font-medium">
                          {product.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                          <div className="glass-card p-6 rounded-2xl backdrop-blur-sm">
                            <h4 className="font-bold mb-3 text-white/90 text-sm uppercase tracking-wider">Monthly Investment</h4>
                            <p className="text-4xl font-display font-bold text-white">{product.pricing}</p>
                          </div>
                          <div className="glass-card p-6 rounded-2xl backdrop-blur-sm">
                            <h4 className="font-bold mb-3 text-white/90 text-sm uppercase tracking-wider">Scale</h4>
                            <p className="text-xl font-display font-bold text-white">{product.users}</p>
                          </div>
                        </div>

                        <Button size="lg" variant="secondary" className="btn-premium hover-lift text-xl px-10 py-6 font-bold">
                          Start Building Today
                          <ArrowRight className="ml-3 h-7 w-7" />
                        </Button>
                      </div>
                    </div>

                    <div className={`p-12 lg:p-16 bg-card glass-card ${!isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="mb-12">
                        <h3 className="text-3xl font-display font-bold mb-8 text-gradient-hero">
                          Enterprise Features
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                          {product.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors">
                              <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                              <span className="text-lg font-medium text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="glass-card p-8 rounded-2xl border border-primary/10">
                        <h3 className="text-3xl font-display font-bold mb-8 text-gradient-neural">
                          What You Get
                        </h3>
                        <ul className="space-y-5">
                          {product.deliverables.map((deliverable, dIndex) => (
                            <li key={dIndex} className="flex items-start gap-4">
                              <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0 mt-2" />
                              <span className="text-lg text-muted-foreground font-medium">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
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
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Sparkles className="h-16 w-16 mx-auto mb-6 animate-pulse-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Ready to Build Your AI Empire?
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-95 font-medium">
            Join 500+ enterprises who have transformed their operations with our AI platform. 
            Start your free trial and build your first AI solution in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button size="lg" variant="secondary" className="btn-premium text-xl px-12 py-8 hover-lift font-bold">
              Start Free Enterprise Trial
              <ArrowRight className="ml-3 h-7 w-7" />
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-white/30 text-white hover:bg-white/20 glass-card font-bold">
              Book Demo Call
            </Button>
          </div>
          
          <div className="mt-12 text-lg opacity-80">
            ✨ No credit card required • 30-day free trial • Enterprise support included
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;