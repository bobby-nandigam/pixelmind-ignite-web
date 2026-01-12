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
  Rocket,
  Eye,
  Heart,
  MessageCircle,
  Clock,
  Globe,
  Code2,
  Layers,
  Play
} from "lucide-react";
import chatmindPreview from "@/assets/chatmind-preview.jpg";
import dataqueryPreview from "@/assets/dataquery-preview.jpg";
import mediassistPreview from "@/assets/mediassist-preview.jpg";
import ParticleBackground from "@/components/futuristic/ParticleBackground";
import { useState } from "react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

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
      demo: "https://chatmind.demo",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgGradient: "from-violet-500/30 to-fuchsia-500/10"
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
      demo: "https://dataquery.demo",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/30 to-teal-500/10"
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
      demo: "https://mediaassist.demo",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-500/30 to-yellow-500/10"
    }
  ];

  const stats = [
    { icon: Users, value: "100K+", label: "Active Users", color: "from-violet-500 to-purple-600" },
    { icon: Zap, value: "99.9%", label: "Average Uptime", color: "from-blue-500 to-cyan-600" },
    { icon: TrendingUp, value: "4.7/5", label: "User Satisfaction", color: "from-emerald-500 to-teal-600" },
    { icon: Award, value: "50+", label: "Awards Won", color: "from-orange-500 to-amber-600" }
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

  const techStack = [
    { name: "React", icon: Code2 },
    { name: "Python", icon: Code2 },
    { name: "TensorFlow", icon: Layers },
    { name: "AWS", icon: Globe },
    { name: "PostgreSQL", icon: Layers },
    { name: "Node.js", icon: Code2 }
  ];

  return (
    <div className="min-h-screen pt-16 glacier-bg overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-10 animate-fade-in-up">
            
            {/* Badge */}
            <Badge className="glacier-card px-6 py-3 text-sm font-semibold border-primary/30 shadow-glacier hover-lift">
              <Sparkles className="w-4 h-4 mr-2 text-primary animate-pulse" />
              <span className="text-gradient-brand font-bold">Featured AI Projects</span>
            </Badge>
            
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
              <span className="block text-foreground">Our Best</span>
              <span className="block mt-3 text-gradient-brand">AI Projects</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of cutting-edge AI solutions
              <span className="block mt-2 text-foreground font-medium">
                transforming industries worldwide
              </span>
            </p>

            {/* Stats Grid */}
            <div className="pt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="glacier-card p-5 rounded-2xl hover-lift group"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-gradient-brand">{stat.value}</div>
                        <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-28 relative">
        <div className="absolute inset-0 section-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <Badge className="glacier-card px-6 py-2.5 border-primary/20 shadow-glacier">
              <Rocket className="w-4 h-4 mr-2 text-primary" />
              <span className="font-bold text-foreground">Project Showcase</span>
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
              <span className="block text-foreground mb-2">Production-Ready</span>
              <span className="text-gradient-brand">AI Solutions</span>
            </h2>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group glacier-card border-2 overflow-hidden shadow-glacier-lg transition-all duration-500 hover-lift ${
                  activeProject === index ? 'border-primary/50' : 'border-border/50'
                }`}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <Badge className={`px-4 py-2 font-bold shadow-lg ${
                    project.status === "Production" 
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0" 
                      : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0"
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 bg-white animate-pulse`} />
                    {project.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  
                  {/* Image Section */}
                  <div className="relative h-[400px] lg:h-auto overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`} />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Floating Metrics */}
                    <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="glacier-card p-3 rounded-xl text-center">
                          <div className="text-lg font-black text-gradient-brand">{value}</div>
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-8 lg:p-10 flex flex-col justify-between">
                    <div className="space-y-6">
                      
                      {/* Title */}
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-black text-foreground group-hover:text-gradient-brand transition-all duration-300 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            className={`px-3 py-1.5 text-xs font-bold bg-gradient-to-r ${project.gradient} text-white border-0 shadow`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-bold mb-3 flex items-center gap-2 text-foreground">
                          <Target className="w-4 h-4 text-primary" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.map((feature, fIdx) => (
                            <div 
                              key={fIdx} 
                              className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors"
                            >
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-xs font-medium text-foreground line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-8">
                      <Button 
                        size="lg"
                        className={`flex-1 bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg hover:opacity-90 font-bold rounded-xl`}
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="flex-1 glacier-card border-2 hover:border-primary/50 font-bold rounded-xl"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="glacier-card px-6 py-2 border-primary/20 shadow-glacier">
              <Layers className="w-4 h-4 mr-2 text-primary" />
              <span className="font-bold text-foreground">Technology Stack</span>
            </Badge>
            <h2 className="text-3xl font-black mt-4 text-gradient-brand">Built with Modern Tech</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="glacier-card px-6 py-4 rounded-2xl hover-lift flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                  <tech.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 relative">
        <div className="absolute inset-0 section-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <Badge className="glacier-card px-6 py-2.5 border-primary/20 shadow-glacier">
              <Star className="w-4 h-4 mr-2 text-primary" />
              <span className="font-bold text-foreground">Client Success</span>
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gradient-brand">
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group glacier-card border-2 border-border/50 hover:border-primary/40 shadow-glacier hover:shadow-glacier-lg transition-all duration-500 hover-lift"
              >
                <CardContent className="p-8 space-y-6">
                  
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-muted-foreground leading-relaxed text-sm italic min-h-[100px]">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center text-white font-bold shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                      <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-brand opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <ParticleBackground />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          
          <Badge className="glass-3d px-6 py-3 border-white/30 text-white shadow-xl">
            <Rocket className="w-5 h-5 mr-2 animate-pulse" />
            Start Your Project
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
            Ready to Build
            <span className="block mt-3 text-white/90">Something Amazing?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Let's transform your vision into reality with cutting-edge AI technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              variant="secondary"
              className="group px-12 py-7 text-base font-bold shadow-glacier-lg hover-lift rounded-2xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-12 py-7 text-base font-bold border-2 border-white/40 text-white hover:bg-white/20 rounded-2xl backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
