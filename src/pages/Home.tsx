import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Database, Heart, Languages, Sparkles, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import chatmindPreview from "@/assets/chatmind-preview.jpg";
import dataqueryPreview from "@/assets/dataquery-preview.jpg";
import mediassistPreview from "@/assets/mediassist-preview.jpg";

const Home = () => {
  const aiTools = [
    {
      name: "ChatMind AI",
      description: "Smart chatbot for businesses with advanced conversational AI capabilities.",
      icon: Brain,
      preview: chatmindPreview,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "DataQuery AI", 
      description: "Converts natural language into SQL queries with intelligent data insights.",
      icon: Database,
      preview: dataqueryPreview,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "MediAssist AI",
      description: "Personalized healthcare assistant powered by medical AI technology.",
      icon: Heart,
      preview: mediassistPreview,
      color: "from-green-500 to-blue-500"
    },
    {
      name: "LinguaFlow",
      description: "Advanced language translator with context-aware AI processing.",
      icon: Languages,
      preview: "/placeholder.svg",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { value: "10K+", label: "AI Queries Processed", icon: Zap },
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "4", label: "AI Tools Launched", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 neural-bg" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="text-gradient-hero">Innovating Intelligence,</span>
              <br />
              <span className="text-gradient-brand">Pixel by Pixel</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              From ideation to innovation since August 25, 2025
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              We create AI solutions that empower businesses and individuals 
              through cutting-edge technology and intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/tools">
                <Button size="lg" className="gradient-brand text-white hover-lift text-lg px-8 py-6">
                  Explore AI Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-glow border-primary/20">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-pulse-glow" />
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-secondary/40 rounded-full animate-neural" />
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent/50 rounded-full animate-float" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-brand rounded-full glow-brand">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-display font-bold text-gradient-brand mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Tools Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient-brand">AI Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our suite of intelligent tools designed to transform 
              how you work with data, communication, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <img 
                        src={tool.preview} 
                        alt={tool.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-20`} />
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-brand rounded-lg mr-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-semibold">
                        {tool.name}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {tool.description}
                    </p>
                    
                    <Button className="w-full hover-glow" variant="outline">
                      Try Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/tools">
              <Button size="lg" className="gradient-secondary text-white hover-lift">
                View All Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the AI revolution and unlock the potential of intelligent automation 
            for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-lift">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;