import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Heart, Languages, ArrowRight, Play, Star } from "lucide-react";
import chatmindPreview from "@/assets/chatmind-preview.jpg";
import dataqueryPreview from "@/assets/dataquery-preview.jpg";
import mediassistPreview from "@/assets/mediassist-preview.jpg";

const Tools = () => {
  const aiTools = [
    {
      name: "ChatMind AI",
      tagline: "Smart Conversations, Smarter Business",
      description: "Advanced conversational AI that understands context, learns from interactions, and provides intelligent responses for customer service, support, and business automation.",
      features: [
        "Natural Language Processing",
        "Context-Aware Responses", 
        "Multi-Language Support",
        "Integration Ready",
        "Real-time Learning"
      ],
      icon: Brain,
      preview: chatmindPreview,
      status: "Live",
      rating: 4.9,
      users: "2.5K+",
      category: "Communication"
    },
    {
      name: "DataQuery AI",
      tagline: "Speak Data, Get Insights",
      description: "Transform natural language into powerful SQL queries. Perfect for analysts, developers, and business users who need to access data without complex coding.",
      features: [
        "Natural Language to SQL",
        "Database Schema Analysis",
        "Query Optimization",
        "Visual Data Insights",
        "Multi-Database Support"
      ],
      icon: Database,
      preview: dataqueryPreview,
      status: "Live",
      rating: 4.8,
      users: "1.8K+",
      category: "Analytics"
    },
    {
      name: "MediAssist AI",
      tagline: "Personalized Healthcare Intelligence",
      description: "AI-powered healthcare assistant that provides personalized health insights, medication reminders, and medical information with privacy-first approach.",
      features: [
        "Health Monitoring",
        "Medication Management",
        "Symptom Analysis",
        "Doctor Recommendations",
        "Privacy Compliant"
      ],
      icon: Heart,
      preview: mediassistPreview,
      status: "Beta",
      rating: 4.7,
      users: "950+",
      category: "Healthcare"
    },
    {
      name: "LinguaFlow",
      tagline: "Break Language Barriers",
      description: "Context-aware translation service that preserves meaning, tone, and cultural nuances. Perfect for global businesses and international communication.",
      features: [
        "120+ Languages",
        "Context Preservation",
        "Cultural Adaptation",
        "Real-time Translation",
        "API Integration"
      ],
      icon: Languages,
      preview: "/placeholder.svg",
      status: "Coming Soon",
      rating: null,
      users: "Waitlist",
      category: "Translation"
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
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background neural-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-brand text-white">AI Tools Suite</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Intelligent <span className="text-gradient-brand">AI Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered tools designed to transform 
              how you work, communicate, and analyze data. Each tool is crafted with 
              precision to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    <img 
                      src={tool.preview} 
                      alt={tool.name}
                      className="w-full h-64 object-cover"
                    />
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

                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-brand rounded-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-display">{tool.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{tool.tagline}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      {tool.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tool.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gradient-brand rounded-full" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{tool.users} users</span>
                        {tool.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{tool.rating}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        {tool.status === "Live" || tool.status === "Beta" ? (
                          <>
                            <Button variant="outline" size="sm" className="hover-glow">
                              <Play className="h-4 w-4 mr-2" />
                              Try Demo
                            </Button>
                            <Button size="sm" className="gradient-brand text-white hover-lift">
                              Get Started
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </>
                        ) : (
                          <Button variant="outline" size="sm" className="hover-glow">
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
      <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Need a Custom AI Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our team can build tailored AI tools specifically for your business needs. 
            Let's discuss how we can help transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-lift">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;