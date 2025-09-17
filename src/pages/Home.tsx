import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Bot, Workflow, MessageSquare, Database, Sparkles, Users, Zap, Code2, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const aiProducts = [
    {
      name: "AI Agent Builder Pro",
      description: "Create intelligent autonomous agents that handle complex workflows and customer interactions with zero coding required.",
      icon: Bot,
      color: "from-blue-600 to-purple-600",
      stats: "500+ Enterprises"
    },
    {
      name: "Neural Workflow Engine", 
      description: "Automate business processes with AI-powered workflows that learn, adapt, and scale with your operations.",
      icon: Workflow,
      color: "from-emerald-600 to-teal-600",
      stats: "10M+ Processes"
    },
    {
      name: "Cognitive Data Platform",
      description: "Transform data into insights with natural language queries and intelligent visualization powered by advanced AI.",
      icon: Database,
      color: "from-violet-600 to-purple-600",
      stats: "1B+ Queries"
    },
    {
      name: "Conversational AI Suite",
      description: "Build sophisticated chatbots and voice assistants that understand context, emotion, and intent perfectly.",
      icon: MessageSquare,
      color: "from-cyan-600 to-blue-600",
      stats: "50M+ Conversations"
    }
  ];

  const stats = [
    { value: "500+", label: "Enterprise Clients", icon: Users },
    { value: "10M+", label: "AI Operations Daily", icon: Zap },
    { value: "99.9%", label: "Uptime Guaranteed", icon: Shield },
    { value: "4.9/5", label: "Customer Rating", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 neural-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <div className="mb-8">
              <Bot className="h-20 w-20 mx-auto mb-6 text-primary animate-pulse-glow" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8">
              <span className="text-gradient-hero">Enterprise AI</span>
              <br />
              <span className="text-gradient-brand">Without Code</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 max-w-4xl mx-auto font-medium">
              Build intelligent agents, automate workflows, and unlock data insights
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto">
              From ideation to innovation since August 25, 2025 - empowering 500+ enterprises 
              with no-code AI solutions that scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/services">
                <Button size="lg" className="gradient-brand text-white hover-lift text-xl px-12 py-8 font-bold">
                  Start Building AI
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/tools">
                <Button size="lg" variant="outline" className="text-xl px-12 py-8 hover-glow border-primary/30 font-bold">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-primary/40 rounded-full animate-pulse-glow" />
          <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-secondary/50 rounded-full animate-neural" />
          <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-accent/60 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/2 w-3 h-3 bg-primary/30 rounded-full animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-accent/40 rounded-full animate-neural" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-muted/40 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center p-8 hover-lift card-professional">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-6">
                      <div className="p-6 bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-xl">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="text-5xl font-display font-bold text-gradient-hero mb-4">
                      {stat.value}
                    </div>
                    <div className="text-lg text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Products Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Enterprise <span className="text-gradient-hero">AI Products</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              No-code platforms that empower enterprises to build, deploy, and scale 
              intelligent AI solutions without technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {aiProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card key={index} className="hover-lift card-professional group overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${product.color} p-8 text-white relative`}>
                      <div className="absolute inset-0 neural-bg opacity-20" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                            <div className="p-4 bg-white/20 rounded-2xl mr-4 backdrop-blur-sm">
                              <Icon className="h-8 w-8" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-display font-bold">{product.name}</h3>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm opacity-90">Trusted by</div>
                            <div className="font-bold">{product.stats}</div>
                          </div>
                        </div>
                        
                        <p className="text-lg text-white/95 mb-6 leading-relaxed">
                          {product.description}
                        </p>
                        
                        <div className="flex gap-3">
                          <Button variant="secondary" className="flex-1 hover-lift font-bold">
                            Learn More
                          </Button>
                          <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 font-bold">
                            Try Demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button size="lg" className="gradient-brand text-white hover-lift text-xl px-10 py-6 font-bold">
                Explore All Products
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Code2 className="h-16 w-16 mx-auto mb-6 animate-pulse-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Build Enterprise AI Today
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-95 font-medium">
            Join 500+ enterprises who've transformed their operations with our no-code AI platform. 
            Start your free trial and build your first AI solution in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/services">
              <Button size="lg" variant="secondary" className="text-xl px-12 py-8 hover-lift font-bold">
                Start Free Trial
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-white/30 text-white hover:bg-white/20 glass-card font-bold">
                Schedule Demo
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 text-lg opacity-80">
            ✨ No credit card required • Enterprise support included • 30-day free trial
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;