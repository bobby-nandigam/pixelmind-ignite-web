import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Heart,
  Brain,
  Database,
  MessageSquare,
  Shield,
  Zap,
  Star,
  Award,
  ChevronRight
} from "lucide-react";

const Projects = () => {
  const aiProducts = [
    {
      id: 1,
      name: "NeuroMind Pro",
      tagline: "Advanced AI Brain for Everyone",
      description: "Build sophisticated neural networks with zero coding. Our visual AI builder creates intelligent systems that learn, adapt, and scale automatically.",
      image: "/src/assets/chatmind-preview.jpg",
      color: "from-blue-600 via-purple-600 to-indigo-800",
      features: ["Visual Neural Designer", "AutoML Integration", "Real-time Learning", "Enterprise Security"],
      metrics: { accuracy: "99.2%", speed: "5x Faster", users: "50K+" },
      price: "₹29,999",
      category: "AI Development",
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "DataGenius Suite",
      tagline: "Intelligent Data Platform",
      description: "Transform raw data into actionable insights using advanced AI algorithms. No data science expertise required.",
      image: "/src/assets/dataquery-preview.jpg",
      color: "from-emerald-500 via-teal-600 to-cyan-700",
      features: ["Natural Language Queries", "Auto-Visualization", "Predictive Analytics", "Real-time Processing"],
      metrics: { insights: "10M+", accuracy: "94.8%", time: "80% Saved" },
      price: "₹19,999",
      category: "Data Intelligence",
      badge: "Best Value"
    },
    {
      id: 3,
      name: "VoiceFlow AI",
      tagline: "Conversational Intelligence",
      description: "Create human-like AI assistants that understand context, emotion, and intent across multiple languages.",
      image: "/src/assets/mediassist-preview.jpg",
      color: "from-orange-500 via-red-500 to-pink-600",
      features: ["Multi-language Support", "Emotion Recognition", "Context Awareness", "Voice Synthesis"],
      metrics: { languages: "150+", accuracy: "96.7%", interactions: "1M+" },
      price: "₹24,999",
      category: "Conversational AI",
      badge: "Premium"
    }
  ];

  const achievements = [
    { 
      icon: Award, 
      metric: "500K+", 
      label: "AI Models Created",
      color: "text-blue-600"
    },
    { 
      icon: Users, 
      metric: "10K+", 
      label: "Enterprise Clients",
      color: "text-emerald-600"
    },
    { 
      icon: Star, 
      metric: "98.5%", 
      label: "Satisfaction Rate",
      color: "text-orange-600"
    },
    { 
      icon: Zap, 
      metric: "2.5M+", 
      label: "Hours Automated",
      color: "text-purple-600"
    }
  ];

  const testimonials = [
    {
      quote: "NeuroMind Pro helped us build a customer service AI that handles 90% of inquiries automatically. Implementation took just 2 weeks.",
      author: "Rahul Sharma",
      title: "CTO, TechVision India",
      avatar: "R",
      rating: 5
    },
    {
      quote: "DataGenius transformed our analytics. We now get insights in minutes that used to take our team weeks to generate.",
      author: "Priya Patel",
      title: "Head of Data, FinTech Solutions",
      avatar: "P",
      rating: 5
    },
    {
      quote: "The VoiceFlow AI we built serves 100K+ customers daily in 12 languages. The ROI has been incredible.",
      author: "Amit Kumar",
      title: "VP Engineering, GlobalCorp",
      avatar: "A",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-product">
        <div className="absolute inset-0 mesh-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 glass-premium px-6 py-3 text-lg font-semibold">
              <Sparkles className="w-5 h-5 mr-2" />
              AI Product Showcase
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-iphone-display">
              Build AI That
              <span className="block text-gradient-premium">Changes Everything</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 text-iphone-body">
              Create powerful AI solutions without writing code. Our enterprise platform 
              empowers everyone to build, deploy, and scale intelligent systems.
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 glass-premium rounded-2xl">
                        <Icon className={`h-8 w-8 ${achievement.color}`} />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-iphone-display mb-2 text-gradient-premium">
                      {achievement.metric}
                    </div>
                    <div className="text-muted-foreground text-iphone-body">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-iphone-display">
              Our <span className="text-gradient-blue">AI Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-iphone-body">
              Enterprise-grade AI solutions designed for teams of all sizes
            </p>
          </div>

          <div className="space-y-32">
            {aiProducts.map((product, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={product.id} className="relative">
                  <Card className="card-iphone overflow-hidden">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Product Visual */}
                      <div className={`relative p-12 lg:p-16 ${!isEven ? 'lg:col-start-2' : ''}`}>
                        <div className="product-showcase">
                          <div className={`relative h-96 rounded-3xl bg-gradient-to-br ${product.color} p-8 overflow-hidden`}>
                            <div className="absolute inset-0 mesh-gradient opacity-30" />
                            
                            {product.badge && (
                              <Badge className="absolute top-6 right-6 bg-white/20 text-white backdrop-blur-sm">
                                {product.badge}
                              </Badge>
                            )}

                            <div className="relative z-10 h-full flex flex-col justify-between text-white">
                              <div>
                                <Badge className="mb-4 bg-white/20 text-white">
                                  {product.category}
                                </Badge>
                                <h3 className="text-3xl font-bold mb-2 text-iphone-display">
                                  {product.name}
                                </h3>
                                <p className="text-lg opacity-90">
                                  {product.tagline}
                                </p>
                              </div>

                              <div className="grid grid-cols-3 gap-4 text-center">
                                {Object.entries(product.metrics).map(([key, value]) => (
                                  <div key={key} className="glass-premium p-3 rounded-xl">
                                    <div className="text-xl font-bold">{value}</div>
                                    <div className="text-xs opacity-70 capitalize">{key}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className={`p-12 lg:p-16 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                        <div className="mb-8">
                          <div className="pricing-iphone mb-4">{product.price}</div>
                          <div className="text-muted-foreground mb-2">per month</div>
                          <h3 className="text-4xl font-bold mb-4 text-iphone-display">
                            {product.name}
                          </h3>
                          <p className="text-xl text-muted-foreground mb-8 text-iphone-body leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div className="mb-8">
                          <h4 className="text-lg font-semibold mb-4 text-iphone-display">Key Features</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {product.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-gradient-blue" />
                                <span className="text-sm text-iphone-body">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button className="btn-iphone flex-1">
                            Start Building
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button variant="outline" className="glass-premium hover-lift-soft">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-iphone-display">
              What Our <span className="text-gradient-premium">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-iphone p-8 hover-lift-soft">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-muted-foreground mb-6 text-iphone-body italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-premium flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-iphone-display">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
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
          <div className="mb-8">
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-gradient-premium animate-float-soft" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-iphone-display">
            Ready to Build Your
            <span className="block text-gradient-premium">AI Future?</span>
          </h2>
          
          <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-iphone-body">
            Join thousands of companies who've transformed their operations with our AI platform. 
            Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
            <Button size="lg" className="btn-iphone text-lg px-8 py-6">
              Start Free Trial
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="glass-premium text-lg px-8 py-6 hover-lift-soft">
              Book Demo
            </Button>
          </div>
          
          <div className="mt-8 text-muted-foreground">
            ✨ No credit card required • 30-day free trial • Enterprise support
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;