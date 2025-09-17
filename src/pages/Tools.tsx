import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Bot, 
  Database, 
  MessageSquare, 
  Workflow,
  ArrowRight, 
  Play, 
  Star,
  Shield,
  Zap,
  Users,
  Code2
} from "lucide-react";

const Tools = () => {
  const aiTools = [
    {
      name: "AI Agent Builder Pro",
      tagline: "Create Intelligent Autonomous Agents",
      description: "Build sophisticated AI agents that handle complex workflows, customer interactions, and business processes. Features advanced learning capabilities, multi-modal AI, and enterprise-grade security for scalable automation.",
      features: [
        "Visual Agent Designer",
        "Multi-Modal AI Integration", 
        "Advanced Workflow Automation",
        "Real-time Learning & Adaptation",
        "Enterprise Security & Compliance",
        "API & Integration Hub"
      ],
      icon: Bot,
      preview: "/placeholder.svg",
      status: "Live",
      rating: 4.9,
      users: "2.5K+",
      category: "AI Agents"
    },
    {
      name: "Neural Workflow Engine",
      tagline: "Intelligent Process Automation",
      description: "Transform business processes with AI-powered workflow automation. Connect systems, automate decisions, and orchestrate complex operations with intelligent workflows that adapt to your business logic.",
      features: [
        "Drag & Drop Workflow Builder",
        "AI-Powered Decision Making",
        "Smart Data Processing",
        "Multi-System Integration",
        "Predictive Analytics Engine",
        "Auto-Scaling Infrastructure"
      ],
      icon: Workflow,
      preview: "/placeholder.svg",
      status: "Live",
      rating: 4.8,
      users: "1.8K+",
      category: "Automation"
    },
    {
      name: "Cognitive Data Platform",
      tagline: "AI-Powered Data Intelligence",
      description: "Unlock insights from your data with natural language queries, automated analysis, and intelligent visualization. Make complex data accessible to everyone in your organization with AI-driven analytics.",
      features: [
        "Natural Language to SQL",
        "Automated Data Discovery",
        "Intelligent Visualization",
        "Predictive Analytics",
        "Real-time Data Processing",
        "Multi-Source Integration"
      ],
      icon: Database,
      preview: "/placeholder.svg",
      status: "Live",
      rating: 4.7,
      users: "3.2K+",
      category: "Data Intelligence"
    },
    {
      name: "Conversational AI Suite",
      tagline: "Advanced Chatbot & Voice AI",
      description: "Create sophisticated conversational experiences with our comprehensive AI suite. Build chatbots, voice assistants, and interactive AI that understand context, emotion, and intent for exceptional user experiences.",
      features: [
        "Multilingual Conversation AI",
        "Emotion & Sentiment Analysis",
        "Voice & Text Integration",
        "Context-Aware Responses",
        "Learning from Interactions",
        "Omnichannel Deployment"
      ],
      icon: MessageSquare,
      preview: "/placeholder.svg",
      status: "Beta",
      rating: 4.6,
      users: "1.5K+",
      category: "Conversational AI"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500";
      case "Beta": return "bg-yellow-500";
      case "Coming Soon": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-muted/40 to-background neural-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-lg">
              Enterprise AI Tools
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Professional <span className="text-gradient-hero">AI Tools</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of enterprise-grade AI tools designed to transform 
              how businesses operate, communicate, and analyze data. Built for scale, security, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="hover-lift card-professional bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="h-24 w-24 text-primary" />
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={`${getStatusColor(tool.status)} text-white`}>
                        {tool.status}
                      </Badge>
                      <Badge variant="secondary">{tool.category}</Badge>
                    </div>
                    {tool.rating && (
                      <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{tool.rating}</span>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-display">{tool.name}</CardTitle>
                        <p className="text-lg text-muted-foreground font-medium">{tool.tagline}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>

                    <div>
                      <h4 className="text-xl font-display font-bold mb-4 text-gradient-hero">Key Features</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {tool.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                            <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0" />
                            <span className="text-lg font-medium text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <div className="flex items-center gap-6 text-lg text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          <span>{tool.users} users</span>
                        </div>
                        {tool.rating && (
                          <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                            <span>{tool.rating}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-3">
                        {tool.status === "Live" || tool.status === "Beta" ? (
                          <>
                            <Button variant="outline" size="lg" className="hover-glow font-bold">
                              <Play className="h-5 w-5 mr-2" />
                              Try Demo
                            </Button>
                            <Button size="lg" className="gradient-brand text-white hover-lift font-bold">
                              Get Started
                              <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                          </>
                        ) : (
                          <Button variant="outline" size="lg" className="hover-glow font-bold">
                            Join Waitlist
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
            Need a Custom AI Solution?
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-95 font-medium">
            Our enterprise team can build tailored AI solutions specifically for your business needs. 
            Transform your operations with custom AI that scales with your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button size="lg" variant="secondary" className="btn-premium text-xl px-12 py-8 hover-lift font-bold">
              Schedule Enterprise Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-white/30 text-white hover:bg-white/20 glass-card font-bold">
              View Case Studies
            </Button>
          </div>
          
          <div className="mt-12 text-lg opacity-80">
            ✨ Custom solutions • Enterprise support • Dedicated team
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;