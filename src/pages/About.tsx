import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Lightbulb, Rocket, Target, Zap, Brain, Sparkles, TrendingUp, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/futuristic/ParticleBackground";

const About = () => {
  const timeline = [
    {
      date: "August 25, 2025",
      phase: "Ideation",
      title: "The Vision Begins",
      description: "PixelMind Labs was founded with a revolutionary vision: making advanced AI accessible to every enterprise across the globe.",
      icon: Lightbulb,
      color: "from-yellow-400 via-orange-500 to-red-500"
    },
    {
      date: "September 2025",
      phase: "Development",
      title: "Quantum Leap",
      description: "Developed quantum-enhanced neural architectures and launched our first autonomous multi-agent system.",
      icon: Zap,
      color: "from-blue-400 via-purple-500 to-pink-500"
    },
    {
      date: "October 2025",
      phase: "Launch",
      title: "Enterprise Deployment",
      description: "Successfully deployed AI solutions across 500+ global enterprises, processing billions of operations daily.",
      icon: Rocket,
      color: "from-green-400 via-teal-500 to-cyan-600"
    },
    {
      date: "Present",
      phase: "Scale",
      title: "Global Dominance",
      description: "Leading the AI revolution with cutting-edge technology serving millions of users worldwide.",
      icon: Target,
      color: "from-purple-400 via-pink-500 to-rose-600"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Pushing boundaries with quantum computing, multi-agent systems, and next-gen AI architectures.",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Human-Centered",
      description: "AI that empowers humans, augmenting capabilities while maintaining ethical standards.",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Enterprise Excellence",
      description: "Bank-grade security, 99.99% uptime, and solutions that scale from startup to fortune 500.",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Future Ready",
      description: "Building tomorrow's AI today with quantum-enhanced learning and autonomous intelligence.",
      icon: Award,
      color: "from-orange-500 to-red-500"
    }
  ];

  const milestones = [
    { metric: "500+", label: "Global Enterprises", icon: TrendingUp },
    { metric: "2M+", label: "AI Models Deployed", icon: Brain },
    { metric: "50M+", label: "Daily Operations", icon: Zap },
    { metric: "99.99%", label: "System Uptime", icon: Shield }
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <ParticleBackground />

      {/* Futuristic Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center transform-3d">
            <div className="inline-flex p-4 glass-3d rounded-full mb-6 animate-float-soft">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            
            <Badge className="mb-6 glass-3d text-base px-8 py-3 border-0">
              Our Journey to the Future
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
              <span className="text-gradient-premium neon-glow">Shaping Tomorrow</span>
              <br />
              <span className="text-gradient-titanium">with AI Today</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From a bold vision to global AI leadership, we're transforming how enterprises 
              harness the power of artificial intelligence at unprecedented scale.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - 3D Cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass-3d hover-lift-soft transform-3d rotate-3d group border-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-12 relative z-10">
                <div className="mb-8">
                  <div className="inline-flex p-5 bg-gradient-premium rounded-2xl shadow-3d mb-6 animate-3d-spin">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-gradient-premium mb-6">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize advanced AI and make enterprise-grade intelligence accessible to every 
                  organization worldwide. We believe AI should empower humanity, not replace it—augmenting 
                  human potential with cognitive computing that scales infinitely.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-3d hover-lift-soft transform-3d rotate-3d group border-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-12 relative z-10">
                <div className="mb-8">
                  <div className="inline-flex p-5 bg-gradient-to-r from-secondary to-accent rounded-2xl shadow-3d mb-6 animate-float-soft">
                    <Rocket className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-gradient-premium mb-6">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create a future where quantum-enhanced AI, autonomous agents, and cognitive computing 
                  work seamlessly with human intelligence. We're building the infrastructure for planetary-scale 
                  AI that learns, adapts, and evolves with humanity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones - Holographic Stats */}
      <section className="py-20 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <Card key={index} className="glass-3d text-center p-8 hover-lift-soft group transform-3d border-0">
                  <div className="inline-flex p-4 bg-gradient-premium rounded-xl mb-4 shadow-3d group-hover:animate-3d-spin">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-display font-bold text-gradient-premium neon-glow mb-2">
                    {milestone.metric}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {milestone.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3D Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-gradient-premium neon-glow">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From revolutionary vision to global AI leadership—transforming industries one innovation at a time
            </p>
          </div>

          {/* Vertical 3D Timeline */}
          <div className="relative">
            {/* Central glowing line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full shadow-3d hidden lg:block" />
            
            <div className="space-y-20">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* 3D Icon Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:flex">
                      <div className={`p-6 bg-gradient-to-br ${item.color} rounded-2xl shadow-3d animate-float-soft hover:animate-3d-spin`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                      <Card className={`glass-3d hover-lift-soft transform-3d rotate-3d group border-0 overflow-hidden`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                        
                        <CardContent className="p-8 relative z-10">
                          {/* Mobile Icon */}
                          <div className="flex items-center mb-6 lg:hidden">
                            <div className={`p-4 bg-gradient-to-br ${item.color} rounded-xl mr-4 shadow-3d`}>
                              <Icon className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <Badge className="glass-3d mb-2 border-0">{item.phase}</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-2" />
                                {item.date}
                              </div>
                            </div>
                          </div>
                          
                          {/* Desktop Header */}
                          <div className="hidden lg:block mb-6">
                            <div className="flex items-center justify-between mb-4">
                              <Badge className="glass-3d border-0">{item.phase}</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-2" />
                                {item.date}
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-display font-bold text-gradient-premium mb-4">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Spacer */}
                    <div className="hidden lg:block w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - 3D Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-gradient-premium neon-glow">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that drive our innovation and guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="glass-3d hover-lift-soft transform-3d rotate-3d text-center group border-0 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${value.color} rounded-xl mb-6 shadow-3d group-hover:animate-float-soft`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-4 text-gradient-premium">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-premium" />
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute inset-0 holographic opacity-20" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-3d p-16 rounded-3xl border-0">
            <div className="inline-flex p-6 bg-white/20 rounded-full mb-8 animate-float-soft">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join 500+ global enterprises leveraging our AI to achieve unprecedented growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/services">
                <Button size="lg" variant="secondary" className="text-lg px-12 py-8 shadow-3d hover-lift-soft">
                  Explore Our Solutions
                  <Rocket className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-12 py-8 border-white/30 text-white hover:bg-white/20 glass-3d">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;