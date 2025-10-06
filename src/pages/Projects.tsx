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
  TrendingUp, 
  Brain,
  Zap,
  Star,
  Award,
  Code2,
  BarChart3,
  Activity,
  Sparkles,
  Target,
  Rocket
} from "lucide-react";
import ParticleBackground from "@/components/futuristic/ParticleBackground";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "QuantumChat Enterprise",
      description: "Revolutionary conversational AI with quantum-inspired neural architecture. Processes complex multi-turn conversations with human-level understanding and emotional intelligence.",
      image: chatmindPreview,
      category: "Advanced Conversational AI",
      tags: ["Quantum NLP", "Emotional AI", "Multi-Agent"],
      status: "Live Production",
      complexity: "Enterprise Scale",
      technology: ["Transformer Architecture", "Quantum Computing", "Edge AI"],
      features: [
        "Quantum-enhanced language understanding across 100+ languages",
        "Advanced emotional intelligence with micro-expression analysis",
        "Multi-agent conversation orchestration",
        "Real-time learning and personality adaptation",
        "Cross-platform voice, text, and video integration",
        "Enterprise-grade security with end-to-end encryption"
      ],
      results: [
        { metric: "600%", label: "Improvement in conversation quality" },
        { metric: "95%", label: "Reduction in escalation to humans" },
        { metric: "99.9%", label: "Uptime with sub-100ms response" },
        { metric: "1B+", label: "Conversations processed" }
      ],
      implementation: [
        "Zero-code conversation designer",
        "Automated training pipeline",
        "One-click deployment to any platform",
        "Real-time performance optimization"
      ]
    },
    {
      id: 2,
      title: "VisionMind Pro",
      description: "Next-generation computer vision platform with 3D scene understanding and real-time object manipulation. Processes millions of images with human-level accuracy.",
      image: mediassistPreview,
      category: "Advanced Computer Vision",
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
      results: [
        { metric: "10x", label: "Faster processing speed" },
        { metric: "99.7%", label: "Accuracy on complex tasks" },
        { metric: "Real-time", label: "Processing on mobile devices" },
        { metric: "50M+", label: "Images processed daily" }
      ],
      implementation: [
        "Drag-and-drop model builder",
        "Automated dataset optimization",
        "Real-time deployment pipeline",
        "Performance monitoring dashboard"
      ]
    },
    {
      id: 3,
      title: "DataGenius Analytics",
      description: "Autonomous data intelligence platform that discovers patterns, predicts trends, and generates actionable insights without human intervention using advanced AutoML.",
      image: dataqueryPreview,
      category: "Predictive Analytics AI",
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
      results: [
        { metric: "300%", label: "Improvement in forecast accuracy" },
        { metric: "80%", label: "Reduction in time-to-insight" },
        { metric: "95%", label: "Automated anomaly detection" },
        { metric: "10TB+", label: "Data processed daily" }
      ],
      implementation: [
        "No-code pipeline builder",
        "Automated model selection",
        "Real-time data processing",
        "Custom dashboard creation"
      ]
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
      results: [
        { metric: "500%", label: "Improvement in problem solving" },
        { metric: "90%", label: "Autonomous business processes" },
        { metric: "24/7", label: "Operation with continuous learning" },
        { metric: "1000+", label: "Agents coordinated simultaneously" }
      ],
      implementation: [
        "Visual agent behavior designer", 
        "Automated task distribution",
        "Real-time coordination dashboard",
        "Performance analytics and optimization"
      ]
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
      results: [
        { metric: "95%", label: "Accuracy in diagnostic imaging" },
        { metric: "60%", label: "Reduction in diagnosis time" },
        { metric: "98%", label: "Early condition detection rate" },
        { metric: "100K+", label: "Medical records processed daily" }
      ],
      implementation: [
        "Medical workflow integration",
        "Automated report generation",
        "Real-time alert systems",
        "Clinical decision support"
      ]
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
      results: [
        { metric: "25%", label: "Better returns vs traditional" },
        { metric: "99.9%", label: "Uptime for HFT operations" },
        { metric: "1M+", label: "Market events per second" },
        { metric: "40%", label: "Risk reduction achieved" }
      ],
      implementation: [
        "No-code strategy builder",
        "Automated backtesting engine",
        "Real-time deployment system",
        "Performance tracking dashboard"
      ]
    }
  ];

  const achievements = [
    { 
      icon: Award, 
      metric: "2M+", 
      label: "AI Models Deployed",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Users, 
      metric: "50K+", 
      label: "Enterprise Clients",
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      icon: Star, 
      metric: "99.2%", 
      label: "Success Rate",
      gradient: "from-orange-500 to-amber-500"
    },
    { 
      icon: Zap, 
      metric: "100M+", 
      label: "Processes Automated",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      quote: "QuantumChat Enterprise revolutionized our customer service. The emotional intelligence is phenomenal - it handles complex queries better than our human agents.",
      author: "Rahul Sharma",
      title: "CTO, TechVision India",
      avatar: "R"
    },
    {
      quote: "VisionMind Pro processes our factory's visual inspection 100x faster with 99.7% accuracy. The real-time 3D understanding is game-changing.",
      author: "Priya Patel",
      title: "Head of Operations, Manufacturing Co",
      avatar: "P"
    },
    {
      quote: "AgentSwarm Platform manages our entire supply chain autonomously. 1000+ AI agents working together seamlessly - it's like science fiction come to life.",
      author: "Amit Kumar",
      title: "CEO, Global Logistics",
      avatar: "A"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="glass-3d px-8 py-3 text-lg font-semibold hover-glow">
              <Activity className="w-5 h-5 mr-2" />
              Live AI Projects
            </Badge>
            
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
              Enterprise AI
              <span className="block text-gradient-brand mt-2">In Action</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore real-world implementations of our AI platforms. From quantum-enhanced conversations 
              to autonomous multi-agent systems - see how enterprises are transforming with our technology.
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto pt-12">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="glass-3d p-8 hover-lift border-0 shadow-3d">
                    <CardContent className="p-0 text-center space-y-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient}`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-gradient-brand">
                        {achievement.metric}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
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
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <Card key={project.id} className="glass-3d overflow-hidden border-0 shadow-3d hover-lift">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Visual */}
                    <div className={`relative p-12 lg:p-16 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-3d hover-lift">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        <Badge className="absolute top-6 left-6 glass-3d text-white border-white/20">
                          <Activity className="w-4 h-4 mr-2" />
                          {project.status}
                        </Badge>
                        
                        <div className="absolute bottom-6 left-6 right-6 text-white space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tIndex) => (
                              <Badge key={tIndex} className="glass-3d text-white border-white/20">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="text-3xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`p-12 lg:p-16 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="space-y-8">
                        <div>
                          <Badge className="glass-3d mb-4">
                            {project.category}
                          </Badge>
                          <h3 className="text-4xl font-bold mb-4">
                            {project.title}
                          </h3>
                          <p className="text-xl text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <Card className="glass-3d p-4 border-0">
                            <div className="text-sm text-muted-foreground mb-1">Status</div>
                            <div className="font-semibold">{project.status}</div>
                          </Card>
                          <Card className="glass-3d p-4 border-0">
                            <div className="text-sm text-muted-foreground mb-1">Complexity</div>
                            <div className="font-semibold">{project.complexity}</div>
                          </Card>
                          <Card className="glass-3d p-4 border-0">
                            <div className="text-sm text-muted-foreground mb-1">Category</div>
                            <div className="font-semibold text-xs">{project.category.split(' ')[0]}</div>
                          </Card>
                        </div>

                        <div>
                          <h4 className="text-2xl font-semibold mb-4 text-gradient-brand">Technology Stack</h4>
                          <div className="flex flex-wrap gap-3 mb-6">
                            {project.technology.map((tech, tIndex) => (
                              <Badge key={tIndex} className="glass-3d px-4 py-2">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <h4 className="text-2xl font-semibold mb-4 text-gradient-brand">Advanced Features</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {project.features.slice(0, 4).map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-start gap-3 p-3 rounded-xl glass-3d hover-lift">
                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="glass-3d p-6 rounded-2xl">
                          <h4 className="text-xl font-semibold mb-4 text-gradient-brand">Key Results</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {project.results.map((result, rIndex) => (
                              <div key={rIndex} className="text-center">
                                <div className="text-3xl font-bold text-gradient-brand mb-1">
                                  {result.metric}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {result.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button 
                            size="lg" 
                            className="glass-3d hover-lift flex-1"
                          >
                            View Case Study
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button 
                            size="lg" 
                            variant="outline" 
                            className="glass-3d hover-glow flex-1"
                          >
                            <Code2 className="mr-2 h-5 w-5" />
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
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-brand">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from leaders who transformed their businesses with our AI platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-3d p-8 hover-lift border-0 shadow-3d">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-border/50">
                    <div className="font-semibold text-lg">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-muted/50 to-background/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Start Your
            <span className="block text-gradient-brand mt-2">AI Project Today</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of enterprises transforming their operations with our cutting-edge AI platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="glass-3d hover-lift text-lg px-12 py-7"
            >
              <Rocket className="mr-2 h-6 w-6" />
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-3d hover-glow text-lg px-12 py-7"
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