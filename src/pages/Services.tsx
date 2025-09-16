import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, BarChart3, Code, ArrowRight, CheckCircle, Users, Zap, Target } from "lucide-react";

const Services = () => {
  const products = [
    {
      title: "No-Code AI Builder",
      subtitle: "Build AI Models Without Coding",
      description: "Create powerful AI models tailored to your specific needs with our intuitive drag-and-drop interface. No programming knowledge required - just define your requirements and let our platform generate your custom AI solution.",
      icon: Brain,
      features: [
        "Drag & Drop Model Builder",
        "Pre-trained AI Templates",
        "Custom Data Integration",
        "Real-time Model Training",
        "One-Click Deployment",
        "Performance Analytics"
      ],
      deliverables: [
        "Custom AI Model",
        "Web-based Dashboard",
        "API Access",
        "Mobile App Integration"
      ],
      pricing: "₹2,999/month",
      users: "Unlimited",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "AI Agent Studio",
      subtitle: "Intelligent Autonomous Agents",
      description: "Design and deploy AI agents that can automate complex workflows, handle customer interactions, and make intelligent decisions. Build chatbots, virtual assistants, and process automation agents with zero coding.",
      icon: BarChart3,
      features: [
        "Conversational AI Builder",
        "Workflow Automation",
        "Multi-channel Deployment",
        "Natural Language Processing",
        "Learning & Adaptation",
        "Integration Hub"
      ],
      deliverables: [
        "Custom AI Agent",
        "Training Dashboard",
        "Analytics Platform",
        "Multi-platform Support"
      ],
      pricing: "₹4,999/month",
      users: "Up to 10,000 interactions",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Enterprise AI Platform",
      subtitle: "Scalable AI Solutions",
      description: "Complete enterprise-grade AI platform for large organizations. Build, deploy, and manage multiple AI models and agents across your entire organization with advanced security and compliance features.",
      icon: Code,
      features: [
        "Multi-tenant Architecture",
        "Advanced Security & Compliance",
        "Custom Model Marketplace",
        "Team Collaboration Tools",
        "Enterprise Integrations",
        "24/7 Priority Support"
      ],
      deliverables: [
        "Enterprise AI Platform",
        "Custom Integrations",
        "Training & Support",
        "Dedicated Success Manager"
      ],
      pricing: "₹49,999/month",
      users: "Unlimited",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const buildingSteps = [
    {
      step: 1,
      title: "Define Requirements",
      description: "Describe what you want your AI to do in simple terms",
      icon: Target
    },
    {
      step: 2,
      title: "Design & Configure",
      description: "Use our visual builder to configure your AI model",
      icon: Brain
    },
    {
      step: 3,
      title: "Train & Test",
      description: "Your AI learns from your data automatically",
      icon: Code
    },
    {
      step: 4,
      title: "Deploy & Scale",
      description: "Launch your AI and scale as your needs grow",
      icon: Zap
    }
  ];

  const testimonials = [
    {
      quote: "I built my first AI chatbot in just 30 minutes without writing a single line of code. PixelMind's platform is incredibly intuitive and powerful.",
      author: "Arjun Patel",
      title: "Small Business Owner",
      company: "E-commerce Startup, Bangalore"
    },
    {
      quote: "Our team created 5 different AI agents for different departments. The no-code approach saved us months of development time and ₹50 lakhs in development costs.",
      author: "Sneha Gupta",
      title: "Head of Digital Innovation", 
      company: "Manufacturing Company, Mumbai"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background neural-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-brand text-white">AI Products Platform</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Build Your Own <span className="text-gradient-brand">AI Models</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create powerful AI models and intelligent agents without any coding knowledge. 
              Our no-code platform empowers everyone to build custom AI solutions tailored to their specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card key={index} className="overflow-hidden hover-lift card-professional">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className={`bg-gradient-to-br ${product.color} p-8 lg:p-12 text-white relative`}>
                      <div className="absolute inset-0 neural-bg opacity-20"></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-8">
                          <div className="p-4 bg-white/20 rounded-2xl mr-4 glass-card">
                            <Icon className="h-10 w-10" />
                          </div>
                          <div>
                            <h2 className="text-4xl font-display font-bold text-display">{product.title}</h2>
                            <p className="text-white/90 text-lg mt-1">{product.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-white/95 mb-10 leading-relaxed text-body-premium">
                          {product.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                          <div className="glass-card p-4 rounded-xl">
                            <h4 className="font-semibold mb-2 text-white/90 text-sm uppercase tracking-wider">Pricing</h4>
                            <p className="text-3xl font-display font-bold pricing-display text-white">{product.pricing}</p>
                          </div>
                          <div className="glass-card p-4 rounded-xl">
                            <h4 className="font-semibold mb-2 text-white/90 text-sm uppercase tracking-wider">Usage</h4>
                            <p className="text-lg font-display font-bold text-white">{product.users}</p>
                          </div>
                        </div>

                        <Button size="lg" variant="secondary" className="btn-premium hover-lift text-lg px-8 py-4">
                          Start Building Now
                          <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 bg-card glass-card">
                      <div className="mb-10">
                        <h3 className="text-2xl font-display font-bold mb-6 text-gradient-brand">
                          Premium Features Included
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {product.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm font-medium text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="glass-card p-6 rounded-xl">
                        <h3 className="text-2xl font-display font-bold mb-6 text-gradient-brand">
                          Project Deliverables
                        </h3>
                        <ul className="space-y-4">
                          {product.deliverables.map((deliverable, dIndex) => (
                            <li key={dIndex} className="flex items-start gap-3">
                              <div className="w-3 h-3 bg-gradient-brand rounded-full flex-shrink-0 mt-2" />
                              <span className="text-muted-foreground font-medium">{deliverable}</span>
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

      {/* Building Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              How to <span className="text-gradient-brand">Build Your AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create powerful AI models in 4 simple steps. No coding required - 
              just your vision and our intelligent platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buildingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="hover-lift card-professional animate-professional-float" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardContent className="p-8">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="pt-8">
                      <div className="p-4 bg-gradient-brand rounded-2xl w-fit mx-auto mb-6 glass-card">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold mb-4 text-gradient-brand">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-body-premium leading-relaxed">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              User <span className="text-gradient-brand">Success Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift card-professional glass-card">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <div className="text-6xl text-gradient-brand mb-6 font-display">"</div>
                    <p className="text-xl text-muted-foreground italic leading-relaxed text-body-premium">
                      {testimonial.quote}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-gradient-brand">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground font-medium">{testimonial.title}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Start Building Your AI Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of users who have already built their own AI models. 
            No coding required - start your free trial and create your first AI in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="btn-premium text-lg px-10 py-6 hover-lift">
              Start Free Trial
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/20 text-white hover:bg-white/10 glass-card">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;