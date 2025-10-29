import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Star, 
  TrendingUp, 
  Users, 
  Zap,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Target,
  Shield,
  Rocket
} from "lucide-react";
import chatmindPreview from "@/assets/chatmind-preview.jpg";
import dataqueryPreview from "@/assets/dataquery-preview.jpg";
import mediassistPreview from "@/assets/mediassist-preview.jpg";
import ParticleBackground from "@/components/futuristic/ParticleBackground";

const Projects = () => {
  const projects = [
    {
      title: "ChatMind AI",
      description: "Advanced conversational AI platform powered by GPT-4 with contextual memory, multi-language support, and real-time sentiment analysis for enterprise customer service.",
      image: chatmindPreview,
      tags: ["AI", "NLP", "React", "Python", "TensorFlow"],
      status: "Production",
      metrics: {
        users: "50K+",
        uptime: "99.9%",
        satisfaction: "4.8/5"
      },
      features: [
        "Multi-language Support (27 languages)",
        "Real-time Sentiment Analysis",
        "Contextual Memory Retention",
        "Custom Training Pipeline",
        "Enterprise Security Standards"
      ],
      github: "https://github.com",
      demo: "https://chatmind.demo"
    },
    {
      title: "DataQuery Pro",
      description: "Intelligent data analytics platform with natural language querying, automated insights generation, and interactive visualization powered by machine learning algorithms.",
      image: dataqueryPreview,
      tags: ["Analytics", "ML", "TypeScript", "PostgreSQL", "D3.js"],
      status: "Beta",
      metrics: {
        users: "12K+",
        uptime: "99.5%",
        satisfaction: "4.6/5"
      },
      features: [
        "Natural Language to SQL Translation",
        "Automated Insight Discovery",
        "Real-time Data Processing",
        "Interactive Dashboard Builder",
        "Advanced Security & Encryption"
      ],
      github: "https://github.com",
      demo: "https://dataquery.demo"
    },
    {
      title: "MediaAssist AI",
      description: "Next-generation media management system with AI-powered content tagging, intelligent search, automatic categorization, and advanced editing capabilities.",
      image: mediassistPreview,
      tags: ["Computer Vision", "AI", "Node.js", "AWS", "React"],
      status: "Production",
      metrics: {
        users: "35K+",
        uptime: "99.8%",
        satisfaction: "4.7/5"
      },
      features: [
        "AI-Powered Content Tagging",
        "Intelligent Search & Discovery",
        "Automatic Content Categorization",
        "Cloud-Native Architecture",
        "Advanced Editing Suite"
      ],
      github: "https://github.com",
      demo: "https://mediaassist.demo"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: "Active Users",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Average Uptime",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      value: "4.7/5",
      label: "User Satisfaction",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      icon: Award,
      value: "50+",
      label: "Awards Won",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const testimonials = [
    {
      quote: "ChatMind AI transformed our customer service. Response times dropped by 70% while customer satisfaction soared to all-time highs.",
      author: "Sarah Chen",
      title: "VP of Customer Experience",
      company: "TechCorp Global",
      avatar: "SC"
    },
    {
      quote: "DataQuery Pro revolutionized how we analyze data. Our team can now generate insights in minutes instead of days.",
      author: "Michael Rodriguez",
      title: "Chief Data Officer",
      company: "Analytics Inc",
      avatar: "MR"
    },
    {
      quote: "MediaAssist AI is a game-changer for content management. The AI tagging and search capabilities are phenomenal.",
      author: "Emily Watson",
      title: "Creative Director",
      company: "Media Studios",
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--secondary)/0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-20">
            <Badge className="glass-3d px-8 py-3 text-base font-bold border-primary/30 shadow-lg hover-lift bg-background/40">
              <Sparkles className="w-5 h-5 mr-2 text-primary" />
              <span className="text-foreground">Featured Projects</span>
            </Badge>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              Our Best
              <span className="block text-gradient-brand mt-4">AI Projects</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/75 max-w-5xl mx-auto leading-relaxed font-medium">
              Explore our portfolio of cutting-edge AI solutions transforming industries worldwide
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index}
                  className="glass-3d hover-lift p-8 text-center border border-border/50 shadow-xl group transition-all duration-500"
                >
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70 font-bold">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 relative bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="glass-3d overflow-hidden border border-border/50 shadow-2xl hover-lift group transition-all duration-500"
              >
                <div className="absolute top-8 right-8 z-20">
                  <Badge className={`glass-3d px-5 py-2.5 font-bold border shadow-lg ${
                    project.status === "Production" 
                      ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-700 dark:text-emerald-300" 
                      : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-700 dark:text-blue-300"
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      project.status === "Production" ? "bg-emerald-500" : "bg-blue-500"
                    } animate-pulse`} />
                    {project.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Project Image */}
                  <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    
                    {/* Floating Metrics */}
                    <div className="absolute bottom-6 left-6 right-6 space-y-3">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div 
                          key={idx}
                          className="glass-3d p-4 rounded-xl border border-border/30 bg-background/40 backdrop-blur-xl"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground capitalize">{key}</span>
                            <span className="text-lg font-bold text-gradient-brand">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-3 p-10 lg:p-12 flex flex-col justify-between">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-5 text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {project.title}
                        </h2>
                        <p className="text-lg lg:text-xl text-foreground/70 leading-relaxed font-medium">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex}
                            className="glass-3d px-4 py-2 text-sm font-bold border-primary/30 hover-lift bg-background/40 text-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Key Features */}
                      <div>
                        <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
                          <Target className="w-6 h-6 text-primary" />
                          Key Features
                        </h3>
                        <div className="grid gap-3">
                          {project.features.map((feature, fIdx) => (
                            <div 
                              key={fIdx}
                              className="flex items-center gap-3 p-4 rounded-xl glass-3d border border-border/30 hover-lift transition-all duration-300 hover:border-primary/30"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-bold text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border/50">
                      <Button 
                        size="lg"
                        className="glass-3d hover-lift px-8 py-6 group/btn shadow-lg bg-gradient-to-r from-primary to-secondary border-0"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Live Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="glass-3d px-8 py-6 border-2 hover:border-primary/50 transition-all duration-300"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-5 w-5" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <Badge className="glass-3d px-6 py-2 border-primary/20">
              <Star className="w-4 h-4 mr-2" />
              Client Success
            </Badge>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-brand">
              What Our Clients Say
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading enterprises worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="glass-3d hover-lift p-10 border border-border/50 shadow-xl group transition-all duration-500"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{testimonial.author}</p>
                      <p className="text-sm text-primary">{testimonial.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <Badge className="glass-3d px-6 py-2 border-primary/20">
            <Rocket className="w-4 h-4 mr-2" />
            Start Your Project
          </Badge>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            Ready to Build
            <span className="block text-gradient-brand mt-2">Something Amazing?</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Let's transform your vision into reality with cutting-edge AI technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              className="glass-3d hover-lift text-lg px-12 py-8 group shadow-2xl bg-gradient-to-r from-primary to-secondary border-0"
            >
              Start Your Project
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-3d text-lg px-12 py-8 hover-glow border-2 shadow-xl hover:border-primary/50"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;