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
  Users,
  Code2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ParticleBackground from "@/components/futuristic/ParticleBackground";

const Tools = () => {
  const { toast } = useToast();

  const handleTryTool = (toolName: string, status: string) => {
    if (status === "Beta") {
      toast({
        title: `${toolName} Beta Access`,
        description: "Requesting beta access - we'll contact you within 24 hours!",
      });
    } else {
      toast({
        title: `Starting ${toolName}`,
        description: "Loading tool interface...",
      });
    }
  };

  const handleWatchDemo = (toolName: string) => {
    toast({
      title: `${toolName} Demo`,
      description: "Loading interactive demo...",
    });
  };

  const handleLearnMore = (toolName: string) => {
    toast({
      title: `Learning About ${toolName}`,
      description: "Opening detailed tool documentation...",
    });
  };

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
      status: "Beta",
      rating: 4.6,
      users: "1.5K+",
      category: "Conversational AI"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500 text-white";
      case "Beta": return "bg-yellow-500 text-black";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen pt-16 glacier-bg">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="mb-6 glacier-card border-primary/20 px-6 py-2 text-lg">
              Enterprise AI Tools
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Professional <span className="text-gradient-brand">AI Tools</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of enterprise-grade AI tools designed to transform 
              how businesses operate, communicate, and analyze data. Built for scale, security, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="relative py-24">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="glacier-card hover-lift overflow-hidden">
                  <div className="relative">
                    <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="h-24 w-24 text-primary" />
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={getStatusColor(tool.status)}>
                        {tool.status}
                      </Badge>
                      <Badge variant="secondary">{tool.category}</Badge>
                    </div>
                    {tool.rating && (
                      <div className="absolute top-4 right-4 glacier-card rounded-lg px-3 py-1 flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{tool.rating}</span>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 gradient-brand rounded-xl">
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
                      <h4 className="text-xl font-display font-bold mb-4 text-gradient-brand">Key Features</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {tool.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-3 p-3 rounded-lg glacier-card hover:border-primary/30 transition-colors">
                            <div className="w-3 h-3 gradient-brand rounded-full flex-shrink-0" />
                            <span className="text-lg font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border/50">
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
                            <Button 
                              variant="outline" 
                              size="lg" 
                              className="glacier-card hover-glow font-bold"
                              onClick={() => handleWatchDemo(tool.name)}
                            >
                              <Play className="h-5 w-5 mr-2" />
                              Try Demo
                            </Button>
                            <Button 
                              size="lg" 
                              className="gradient-brand text-white hover-lift font-bold"
                              onClick={() => handleTryTool(tool.name, tool.status)}
                            >
                              Get Started
                              <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                          </>
                        ) : (
                          <Button 
                            variant="outline" 
                            size="lg" 
                            className="glacier-card hover-glow font-bold"
                            onClick={() => handleTryTool(tool.name, tool.status)}
                          >
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-brand" />
        <div className="absolute inset-0 neural-bg opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Code2 className="h-16 w-16 mx-auto mb-6 text-white animate-pulse-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">
            Need a Custom AI Solution?
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-medium">
            Our enterprise team can build tailored AI solutions specifically for your business needs. 
            Transform your operations with custom AI that scales with your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-xl px-12 py-8 hover-lift font-bold"
              onClick={() => handleLearnMore("Enterprise Consultation")}
            >
              Schedule Enterprise Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-12 py-8 border-white/30 text-white hover:bg-white/20 font-bold"
              onClick={() => handleLearnMore("Case Studies")}
            >
              View Case Studies
            </Button>
          </div>
          
          <div className="mt-12 text-lg text-white/80">
            ✨ Custom solutions • Enterprise support • Dedicated team
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
