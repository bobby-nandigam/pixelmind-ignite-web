import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import chatmindPreview from "@/assets/chatmind-preview.jpg";
import dataqueryPreview from "@/assets/dataquery-preview.jpg"; 
import mediassistPreview from "@/assets/mediassist-preview.jpg";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Brain,
  Zap,
  Star,
  Award,
  Code2,
  Activity,
  Sparkles,
  Target,
  Rocket,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Clock
} from "lucide-react";
import ParticleBackground from "@/components/futuristic/ParticleBackground";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "QuantumChat Enterprise",
      description: "Revolutionary conversational AI with quantum-inspired neural architecture. Processes complex multi-turn conversations with human-level understanding and emotional intelligence.",
      image: chatmindPreview,
      category: "Conversational AI",
      tags: ["Quantum NLP", "Emotional AI", "Multi-Agent"],
      status: "Live Production",
      complexity: "Enterprise Scale",
      technology: ["Transformer Architecture", "Quantum Computing", "Edge AI"],
      features: [
        "Quantum-enhanced language understanding across 100+ languages",
        "Advanced emotional intelligence with micro-expression analysis",
        "Multi-agent conversation orchestration with seamless handoffs",
        "Real-time learning and personality adaptation",
        "Cross-platform voice, text, and video integration",
        "Enterprise-grade security with end-to-end encryption"
      ],
      metrics: [
        { value: "600%", label: "Quality Improvement" },
        { value: "95%", label: "Automation Rate" },
        { value: "99.9%", label: "Uptime SLA" },
        { value: "1B+", label: "Conversations" }
      ],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "VisionMind Pro",
      description: "Next-generation computer vision platform with 3D scene understanding and real-time object manipulation. Processes millions of images with human-level accuracy.",
      image: mediassistPreview,
      category: "Computer Vision",
      tags: ["3D Vision", "Real-time Processing", "Edge AI"],
      status: "Live Production",
      complexity: "High Performance",
      technology: ["Neural Architecture Search", "Edge Computing", "3D Reconstruction"],
      features: [
        "Advanced 3D scene reconstruction and understanding",
        "Real-time object detection with 99.7% accuracy",
        "Multi-camera fusion and depth estimation",
        "Custom model training with synthetic data generation",
        "Edge device optimization for mobile and IoT",
        "API-first architecture with sub-10ms inference"
      ],
      metrics: [
        { value: "10x", label: "Processing Speed" },
        { value: "99.7%", label: "Accuracy Rate" },
        { value: "Real-time", label: "Mobile Processing" },
        { value: "50M+", label: "Daily Images" }
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "DataGenius Analytics",
      description: "Autonomous data intelligence platform that discovers patterns, predicts trends, and generates actionable insights without human intervention using advanced AutoML.",
      image: dataqueryPreview,
      category: "Predictive Analytics",
      tags: ["AutoML", "Predictive Modeling", "Time Series"],
      status: "Live Production", 
      complexity: "Enterprise Scale",
      technology: ["AutoML Pipelines", "Time Series Analysis", "Anomaly Detection"],
      features: [
        "Fully automated feature engineering and selection",
        "Advanced time series forecasting with uncertainty quantification",
        "Real-time anomaly detection and alerting",
        "Natural language query interface for complex analytics",
        "Multi-modal data fusion (text, images, numerical)",
        "Automated report generation and insight discovery"
      ],
      metrics: [
        { value: "300%", label: "Forecast Accuracy" },
        { value: "80%", label: "Time Savings" },
        { value: "95%", label: "Anomaly Detection" },
        { value: "10TB+", label: "Daily Processing" }
      ],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "AgentSwarm Platform",
      description: "Multi-agent AI system where specialized AI agents collaborate autonomously to solve complex business problems. Features dynamic team formation and task distribution.",
      image: chatmindPreview,
      category: "Multi-Agent Systems",
      tags: ["Agent Networks", "Autonomous Systems", "Collaboration"],
      status: "Beta Testing",
      complexity: "Cutting Edge",
      technology: ["Multi-Agent RL", "Swarm Intelligence", "Distributed Computing"],
      features: [
        "Autonomous agent creation with specialized skills",
        "Dynamic team formation based on task requirements",
        "Inter-agent communication and knowledge sharing",
        "Self-improving agent behaviors through reinforcement learning",
        "Task planning and execution coordination",
        "Real-time monitoring and performance optimization"
      ],
      metrics: [
        { value: "500%", label: "Problem Solving" },
        { value: "90%", label: "Automation Rate" },
        { value: "24/7", label: "Operation" },
        { value: "1000+", label: "Active Agents" }
      ],
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "NeuroHealth AI",
      description: "Advanced medical AI that combines computer vision, NLP, and predictive analytics for comprehensive healthcare automation. Processes medical imaging, reports, and patient data.",
      image: mediassistPreview,
      category: "Healthcare AI",
      tags: ["Medical AI", "Diagnostic Imaging", "Clinical Decision"],
      status: "Clinical Trials",
      complexity: "Medical Grade",
      technology: ["Medical Imaging AI", "Clinical NLP", "Predictive Diagnostics"],
      features: [
        "Advanced medical imaging analysis with radiologist-level accuracy",
        "Clinical report generation and summarization",
        "Drug interaction and dosage optimization",
        "Patient risk stratification and early warning systems",
        "Multi-modal medical data integration",
        "HIPAA-compliant processing and storage"
      ],
      metrics: [
        { value: "95%", label: "Diagnostic Accuracy" },
        { value: "60%", label: "Time Reduction" },
        { value: "98%", label: "Early Detection" },
        { value: "100K+", label: "Daily Records" }
      ],
      gradient: "from-rose-600 to-pink-600"
    },
    {
      id: 6,
      title: "FinanceIQ Platform",
      description: "Intelligent financial analysis and trading AI that processes market data, news sentiment, and economic indicators for autonomous investment decisions and risk management.",
      image: dataqueryPreview,
      category: "Financial AI",
      tags: ["Algorithmic Trading", "Risk Analysis", "Market Intelligence"],
      status: "Live Production",
      complexity: "High Frequency",
      technology: ["Quantitative Analysis", "Sentiment Analysis", "Real-time Processing"],
      features: [
        "Real-time market data processing and analysis",
        "Multi-source news and sentiment analysis",
        "Automated trading strategy optimization",
        "Advanced risk management and portfolio balancing",
        "Regulatory compliance and audit trail",
        "Custom financial model building and backtesting"
      ],
      metrics: [
        { value: "25%", label: "Better Returns" },
        { value: "99.9%", label: "HFT Uptime" },
        { value: "1M+", label: "Events/Second" },
        { value: "40%", label: "Risk Reduction" }
      ],
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  const achievements = [
    { 
      icon: Award, 
      metric: "2M+", 
      label: "AI Models Deployed",
      gradient: "from-blue-600 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    },
    { 
      icon: Users, 
      metric: "50K+", 
      label: "Enterprise Clients",
      gradient: "from-emerald-600 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
    },
    { 
      icon: Star, 
      metric: "99.2%", 
      label: "Success Rate",
      gradient: "from-orange-600 to-amber-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/30"
    },
    { 
      icon: Zap, 
      metric: "100M+", 
      label: "Processes Automated",
      gradient: "from-purple-600 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30"
    }
  ];

  const testimonials = [
    {
      quote: "QuantumChat Enterprise revolutionized our customer service. The emotional intelligence is phenomenal - it handles complex queries better than our human agents.",
      author: "Rahul Sharma",
      title: "CTO",
      company: "TechVision India",
      avatar: "R",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      quote: "VisionMind Pro processes our factory's visual inspection 100x faster with 99.7% accuracy. The real-time 3D understanding is game-changing.",
      author: "Priya Patel",
      title: "Head of Operations",
      company: "Manufacturing Co",
      avatar: "P",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      quote: "AgentSwarm Platform manages our entire supply chain autonomously. 1000+ AI agents working together seamlessly - it's like science fiction come to life.",
      author: "Amit Kumar",
      title: "CEO",
      company: "Global Logistics",
      avatar: "A",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all">
              <Activity className="w-5 h-5" />
              Live AI Projects
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Enterprise AI
              <span className="block text-gradient-brand mt-4">In Action</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Explore real-world implementations of our AI platforms. From quantum-enhanced conversations 
              to autonomous multi-agent systems - see how enterprises are transforming with our technology.
            </p>

            {/* Achievement Stats - Enhanced Visibility */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pt-16">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className={`${achievement.bgColor} border-2 border-border/50 hover:border-primary/30 transition-all hover:scale-105 shadow-lg`}>
                    <CardContent className="p-8 text-center space-y-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className={`text-5xl font-bold bg-gradient-to-br ${achievement.gradient} bg-clip-text text-transparent`}>
                        {achievement.metric}
                      </div>
                      <div className="text-sm font-semibold text-foreground/80">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-gradient-brand">Projects</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Discover how leading enterprises leverage our AI solutions
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <Card key={project.id} className="overflow-hidden border-2 hover:border-primary/30 transition-all shadow-xl hover:shadow-2xl bg-card">
                  <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Visual - 2 columns */}
                    <div className={`lg:col-span-2 relative ${!isEven ? 'lg:col-start-4' : ''}`}>
                      <div className="relative h-full min-h-[500px] overflow-hidden group">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        
                        <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                          <Badge className="bg-primary text-primary-foreground border-0 font-semibold px-4 py-2">
                            <Activity className="w-4 h-4 mr-2" />
                            {project.status}
                          </Badge>
                          <Badge className="bg-secondary text-secondary-foreground border-0 font-semibold px-4 py-2">
                            {project.complexity}
                          </Badge>
                        </div>
                        
                        <div className="absolute bottom-6 left-6 right-6 text-white space-y-4">
                          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 font-semibold mb-2">
                            {project.category}
                          </Badge>
                          <h3 className="text-3xl font-bold">{project.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tIndex) => (
                              <Badge key={tIndex} className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details - 3 columns */}
                    <div className={`lg:col-span-3 p-10 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-4xl font-bold mb-4 text-foreground">
                            {project.title}
                          </h3>
                          <p className="text-lg text-foreground/70 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Technology Stack */}
                        <div>
                          <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                            <Code2 className="w-5 h-5 text-primary" />
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technology.map((tech, tIndex) => (
                              <Badge key={tIndex} className="bg-primary/10 text-primary border-primary/20 font-medium px-3 py-1">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Key Features */}
                        <div>
                          <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                            <Sparkles className="w-5 h-5 text-primary" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            {project.features.slice(0, 4).map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm font-medium text-foreground/90">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-6 rounded-2xl border border-border/50">
                          <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            Performance Metrics
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {project.metrics.map((metric, mIndex) => (
                              <div key={mIndex} className="text-center p-4 bg-background/80 rounded-xl border border-border/30">
                                <div className={`text-3xl font-bold bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent mb-1`}>
                                  {metric.value}
                                </div>
                                <div className="text-xs font-semibold text-foreground/70">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button 
                            size="lg" 
                            className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-xl transition-all`}
                          >
                            View Case Study
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button 
                            size="lg" 
                            variant="outline" 
                            className="flex-1 border-2 font-semibold hover:bg-muted"
                          >
                            <Lightbulb className="mr-2 h-5 w-5" />
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="text-gradient-brand">Success Stories</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Hear from leaders who transformed their businesses with our AI platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-all shadow-lg hover:shadow-xl bg-card">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-foreground/80 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-bold text-lg text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-foreground/70 font-medium">{testimonial.title}</div>
                    <div className="text-sm text-foreground/60">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-muted/30">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-muted/80 to-background/90" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Start Your
            <span className="block text-gradient-brand mt-4">AI Project Today</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Join thousands of enterprises transforming their operations with our cutting-edge AI platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 text-primary-foreground font-semibold text-lg px-12 py-7 shadow-xl hover:shadow-2xl transition-all"
            >
              <Rocket className="mr-2 h-6 w-6" />
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 font-semibold text-lg px-12 py-7 hover:bg-muted"
            >
              <Target className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;