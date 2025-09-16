import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, BarChart3, Code, ArrowRight, CheckCircle, Users, Zap, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "AI Consulting",
      subtitle: "Strategic AI Implementation",
      description: "Transform your business with strategic AI implementation. Our experts help you identify opportunities, create roadmaps, and execute AI initiatives that drive real business value.",
      icon: Brain,
      features: [
        "AI Strategy Development",
        "Use Case Identification", 
        "Technology Assessment",
        "Implementation Roadmap",
        "ROI Analysis",
        "Risk Assessment"
      ],
      deliverables: [
        "AI Strategy Document",
        "Technical Architecture",
        "Implementation Timeline",
        "Budget & Resource Plan"
      ],
      duration: "4-8 weeks",
      investment: "From ₹12,50,000",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Data Analytics",
      subtitle: "Intelligent Data Solutions",
      description: "Unlock the power of your data with advanced analytics, machine learning models, and intelligent dashboards that provide actionable insights for better decision-making.",
      icon: BarChart3,
      features: [
        "Data Pipeline Development",
        "Predictive Analytics",
        "Custom Dashboards",
        "Machine Learning Models",
        "Real-time Analytics",
        "Data Visualization"
      ],
      deliverables: [
        "Data Analytics Platform",
        "Custom ML Models",
        "Interactive Dashboards",
        "Training & Documentation"
      ],
      duration: "6-12 weeks",
      investment: "From ₹21,00,000",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Full-Stack Development",
      subtitle: "End-to-End Solutions",
      description: "Complete application development from concept to deployment. We build scalable, secure, and user-friendly applications that integrate seamlessly with AI capabilities.",
      icon: Code,
      features: [
        "Custom Web Applications",
        "Mobile App Development",
        "API Development",
        "Database Design",
        "Cloud Infrastructure",
        "DevOps & Deployment"
      ],
      deliverables: [
        "Production-Ready Application",
        "API Documentation",
        "Deployment Infrastructure",
        "Maintenance Plan"
      ],
      duration: "8-16 weeks",
      investment: "From ₹29,50,000",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery",
      description: "We understand your business needs, challenges, and goals",
      icon: Target
    },
    {
      step: 2,
      title: "Strategy",
      description: "We develop a tailored strategy and implementation plan",
      icon: Brain
    },
    {
      step: 3,
      title: "Development",
      description: "Our team builds and tests your solution iteratively",
      icon: Code
    },
    {
      step: 4,
      title: "Deployment",
      description: "We deploy, monitor, and optimize your solution",
      icon: Zap
    }
  ];

  const testimonials = [
    {
      quote: "PixelMind Labs transformed our data operations. Their AI consulting helped us identify ₹16.8 crores in annual savings opportunities.",
      author: "Rajesh Sharma",
      title: "CTO, TechVision India",
      company: "Leading Indian Technology Company"
    },
    {
      quote: "The custom analytics platform they built gives us insights we never had before. Our decision-making has never been better.",
      author: "Priya Nair",
      title: "VP of Operations", 
      company: "Mumbai Healthcare Innovation Hub"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background neural-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-brand text-white">Professional Services</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Transform Your <span className="text-gradient-brand">Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI strategy to full-stack development, our expert team delivers 
              end-to-end solutions that drive innovation and growth for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="overflow-hidden hover-lift card-professional">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className={`bg-gradient-to-br ${service.color} p-8 lg:p-12 text-white relative`}>
                      <div className="absolute inset-0 neural-bg opacity-20"></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-8">
                          <div className="p-4 bg-white/20 rounded-2xl mr-4 glass-card">
                            <Icon className="h-10 w-10" />
                          </div>
                          <div>
                            <h2 className="text-4xl font-display font-bold text-display">{service.title}</h2>
                            <p className="text-white/90 text-lg mt-1">{service.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-white/95 mb-10 leading-relaxed text-body-premium">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                          <div className="glass-card p-4 rounded-xl">
                            <h4 className="font-semibold mb-2 text-white/90 text-sm uppercase tracking-wider">Duration</h4>
                            <p className="text-3xl font-display font-bold pricing-display text-white">{service.duration}</p>
                          </div>
                          <div className="glass-card p-4 rounded-xl">
                            <h4 className="font-semibold mb-2 text-white/90 text-sm uppercase tracking-wider">Investment</h4>
                            <p className="text-3xl font-display font-bold pricing-display text-white">{service.investment}</p>
                          </div>
                        </div>

                        <Button size="lg" variant="secondary" className="btn-premium hover-lift text-lg px-8 py-4">
                          Get Premium Quote
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
                          {service.features.map((feature, fIndex) => (
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
                          {service.deliverables.map((deliverable, dIndex) => (
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

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient-brand">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery 
              and maximum value for your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
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
              Client <span className="text-gradient-brand">Success Stories</span>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and explore how PixelMind Labs can help 
            transform your business with intelligent solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="btn-premium text-lg px-10 py-6 hover-lift">
              Schedule Premium Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/20 text-white hover:bg-white/10 glass-card">
              View Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;