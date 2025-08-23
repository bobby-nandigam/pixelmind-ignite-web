import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Zap, Heart, TrendingUp, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Healthcare AI Assistant",
      subtitle: "Revolutionizing Patient Care",
      description: "Comprehensive AI-powered healthcare platform that assists medical professionals with diagnosis support, treatment recommendations, and patient monitoring.",
      year: "2025",
      category: "Healthcare",
      client: "MedTech Solutions",
      status: "Live",
      image: "/placeholder.svg",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      metrics: {
        users: "5,000+",
        accuracy: "94%",
        timeSaved: "3 hours/day"
      },
      features: [
        "Symptom Analysis Engine",
        "Drug Interaction Checker", 
        "Patient History Integration",
        "Real-time Monitoring Dashboard"
      ],
      icon: Heart,
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Binance Trade Analyzer",
      subtitle: "Smart Trading Intelligence",
      description: "Advanced cryptocurrency trading analysis platform that provides real-time market insights, risk assessment, and automated trading recommendations.",
      year: "2025",
      category: "FinTech",
      client: "CryptoVision Analytics",
      status: "Live",
      image: "/placeholder.svg",
      technologies: ["Python", "FastAPI", "React", "Redis", "WebSocket"],
      metrics: {
        trades: "50K+",
        accuracy: "87%",
        roi: "+23%"
      },
      features: [
        "Real-time Market Analysis",
        "Risk Assessment Tools",
        "Portfolio Optimization",
        "Automated Alert System"
      ],
      icon: TrendingUp,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Smart Movie Recommendation Engine",
      subtitle: "Personalized Entertainment Discovery",
      description: "Intelligent recommendation system that learns user preferences and provides highly accurate movie and TV show suggestions based on viewing history and behavior patterns.",
      year: "2024-25",
      category: "Entertainment",
      client: "StreamPlex Media",
      status: "Live",
      image: "/placeholder.svg",
      technologies: ["Python", "Scikit-learn", "MongoDB", "Flask", "React"],
      metrics: {
        users: "100K+",
        engagement: "+45%",
        satisfaction: "92%"
      },
      features: [
        "Collaborative Filtering",
        "Content-Based Recommendations",
        "Mood-Based Discovery",
        "Social Integration"
      ],
      icon: Brain,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const achievements = [
    { metric: "15+", label: "Successful Projects", icon: Zap },
    { metric: "50K+", label: "Active Users", icon: Users },
    { metric: "95%", label: "Client Satisfaction", icon: Heart },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background neural-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-brand text-white">Case Studies</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-gradient-brand">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore real-world implementations of our AI solutions. Each project 
              showcases our commitment to innovation, quality, and measurable business impact.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-brand rounded-full glow-brand">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-display font-bold text-gradient-brand mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="overflow-hidden hover-lift glow-brand">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Project Image */}
                    <div className="lg:col-span-2 relative">
                      <div className={`h-full min-h-[300px] bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 neural-bg opacity-20" />
                        <div className="relative z-10 text-center text-white p-8">
                          <div className="p-6 bg-white/20 rounded-full mb-6 mx-auto w-fit backdrop-blur-sm">
                            <Icon className="h-16 w-16" />
                          </div>
                          <Badge className="bg-white/20 text-white mb-4">
                            {project.category}
                          </Badge>
                          <div className="text-sm opacity-80">
                            {project.client} • {project.year}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-3 p-8 lg:p-12">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <CardTitle className="text-3xl font-display font-bold mb-2">
                            {project.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-lg">
                            {project.subtitle}
                          </p>
                        </div>
                        <Badge className="bg-green-500 text-white">
                          {project.status}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gradient-brand rounded-full" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4">Project Impact</h4>
                        <div className="flex flex-wrap gap-6">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl font-display font-bold text-gradient-brand">
                                {value}
                              </div>
                              <div className="text-xs text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, tIndex) => (
                            <Badge key={tIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="gradient-brand text-white hover-lift">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live Project
                        </Button>
                        <Button variant="outline" className="hover-glow">
                          Case Study Details
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready for Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Our team is ready to bring 
            your AI vision to life with the same dedication and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-lift">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
              Schedule Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;