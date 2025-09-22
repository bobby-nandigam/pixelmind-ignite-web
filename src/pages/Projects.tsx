import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Heart,
  Brain,
  Database,
  MessageSquare,
  Shield,
  Zap,
  Star,
  Award,
  ChevronRight,
  Code2,
  BarChart3,
  Activity
} from "lucide-react";

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
        "600% improvement in conversation quality scores",
        "95% reduction in escalation to human agents",
        "99.9% uptime with sub-100ms response times",
        "1B+ conversations processed with 98% satisfaction rate"
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
        "10x faster processing than traditional methods",
        "99.7% accuracy on complex visual tasks",
        "Real-time processing on mobile devices",
        "50M+ images processed daily across 500+ clients"
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
        "300% improvement in forecast accuracy",
        "80% reduction in time-to-insight",
        "Automated detection of 95% of anomalies",
        "Processing 10TB+ data daily with real-time updates"
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
        "500% improvement in complex problem solving",
        "Autonomous handling of 90% of business processes",
        "24/7 operation with continuous learning",
        "Coordination of 1000+ agents simultaneously"
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
        "95% accuracy in diagnostic imaging",
        "60% reduction in diagnosis time",
        "Early detection of critical conditions with 98% accuracy",
        "Processing 100K+ medical records daily"
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
        "25% better returns than traditional methods",
        "99.9% uptime for high-frequency trading",
        "Processing 1M+ market events per second",
        "Risk reduction of 40% through advanced analytics"
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
      color: "text-blue-600"
    },
    { 
      icon: Users, 
      metric: "50K+", 
      label: "Enterprise Clients",
      color: "text-emerald-600"
    },
    { 
      icon: Star, 
      metric: "99.2%", 
      label: "Success Rate",
      color: "text-orange-600"
    },
    { 
      icon: Zap, 
      metric: "100M+", 
      label: "Processes Automated",
      color: "text-purple-600"
    }
  ];

  const testimonials = [
    {
      quote: "QuantumChat Enterprise revolutionized our customer service. The emotional intelligence is phenomenal - it handles complex queries better than our human agents.",
      author: "Rahul Sharma",
      title: "CTO, TechVision India",
      avatar: "R",
      rating: 5
    },
    {
      quote: "VisionMind Pro processes our factory's visual inspection 100x faster with 99.7% accuracy. The real-time 3D understanding is game-changing.",
      author: "Priya Patel",
      title: "Head of Operations, Manufacturing Co",
      avatar: "P",
      rating: 5
    },
    {
      quote: "AgentSwarm Platform manages our entire supply chain autonomously. 1000+ AI agents working together seamlessly - it's like science fiction come to life.",
      author: "Amit Kumar",
      title: "CEO, Global Logistics",
      avatar: "A",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-product">
        <div className="absolute inset-0 mesh-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-8 glass-premium px-8 py-4 text-xl font-semibold">
              <Activity className="w-6 h-6 mr-3" />
              Live AI Projects
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-iphone-display">
              Enterprise AI
              <span className="block text-gradient-premium">In Action</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed text-iphone-body mb-12">
              Explore real-world implementations of our AI platforms. From quantum-enhanced conversations 
              to autonomous multi-agent systems - see how enterprises are transforming with our technology.
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="glass-iphone p-6 text-center hover-lift-soft">
                    <Icon className={`h-8 w-8 mx-auto mb-3 ${achievement.color}`} />
                    <div className="text-3xl font-bold text-gradient-iphone mb-2">
                      {achievement.metric}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <Card key={project.id} className="card-iphone overflow-hidden relative">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Visual */}
                    <div className={`relative p-12 lg:p-16 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="project-showcase">
                        <div className="relative h-96 rounded-3xl overflow-hidden project-image">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          <Badge className="absolute top-6 left-6 glass-premium backdrop-blur-md">
                            {project.status}
                          </Badge>
                          
                          <div className="absolute bottom-6 left-6 right-6 text-white">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag, tIndex) => (
                                <Badge key={tIndex} className="glass-premium backdrop-blur-sm text-white border-white/20">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`p-12 lg:p-16 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="mb-8">
                        <Badge className="mb-4 glass-iphone">
                          {project.category}
                        </Badge>
                        <h3 className="text-4xl font-bold mb-4 text-iphone-display">
                          {project.title}
                        </h3>
                        <p className="text-xl text-muted-foreground mb-8 text-iphone-body leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card className="glass-iphone p-6">
                          <div className="text-lg font-semibold text-gradient-iphone mb-2">
                            Status
                          </div>
                          <div className="text-sm text-muted-foreground">{project.status}</div>
                        </Card>
                        <Card className="glass-iphone p-6">
                          <div className="text-lg font-semibold text-gradient-iphone mb-2">
                            Complexity
                          </div>
                          <div className="text-sm text-muted-foreground">{project.complexity}</div>
                        </Card>
                        <Card className="glass-iphone p-6">
                          <div className="text-lg font-semibold text-gradient-iphone mb-2">
                            Category
                          </div>
                          <div className="text-sm text-muted-foreground">{project.category}</div>
                        </Card>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-6 text-iphone-display">Technology Stack</h4>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {project.technology.map((tech, tIndex) => (
                            <Badge key={tIndex} className="glass-iphone px-4 py-2 text-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <h4 className="text-xl font-semibold mb-6 text-iphone-display">Advanced Features</h4>
                        <div className="grid grid-cols-1 gap-4">
                          {project.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-4 p-4 rounded-xl glass-iphone hover-lift-soft">
                              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-iphone-body">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-6 text-iphone-display">Implementation Process</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          {project.implementation.map((impl, iIndex) => (
                            <Card key={iIndex} className="glass-iphone p-6 hover-lift-soft">
                              <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-iphone flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                  {iIndex + 1}
                                </div>
                                <div>
                                  <div className="text-iphone-body font-medium">{impl}</div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                        
                        <h4 className="text-xl font-semibold mb-6 text-iphone-display">Production Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {project.results.map((result, rIndex) => (
                            <Card key={rIndex} className="glass-iphone p-6 hover-lift-soft">
                              <div className="flex items-start gap-4">
                                <div className="w-3 h-3 rounded-full bg-gradient-iphone flex-shrink-0 mt-2" />
                                <div>
                                  <div className="text-iphone-body font-medium">{result}</div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="btn-iphone flex-1">
                          View Live Demo
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="glass-iphone hover-lift-soft">
                          Technical Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Client <span className="text-gradient-hero">Success Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift card-professional glass-card">
                <CardContent className="p-10">
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-lg text-muted-foreground italic leading-relaxed text-body-premium">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-gradient-hero">{testimonial.author}</div>
                      <div className="text-muted-foreground">{testimonial.title}</div>
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
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-iphone-display">
            Ready to Build
            <span className="block text-gradient-premium">Your AI Project?</span>
          </h2>
          
          <p className="text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto text-iphone-body leading-relaxed">
            Start with our no-code platform and create enterprise-grade AI solutions. 
            Join the companies already transforming their industries with intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-2xl mx-auto">
            <Button size="lg" className="btn-iphone text-xl px-12 py-8 font-bold">
              Start Building Now
              <ArrowRight className="ml-3 h-7 w-7" />
            </Button>
            <Button size="lg" variant="outline" className="glass-premium text-xl px-12 py-8 hover-lift-soft font-bold">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;