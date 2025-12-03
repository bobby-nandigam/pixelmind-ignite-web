import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Cloud, Code, Brain, Zap, Lock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ParticleBackground from "@/components/futuristic/ParticleBackground";

const Integrations = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleConfigure = (integrationName: string, status: string) => {
    if (status === "Coming Soon") {
      toast({
        title: "Coming Soon!",
        description: `${integrationName} integration is currently in development. We'll notify you when it's ready.`,
      });
    } else {
      toast({
        title: `Configuring ${integrationName}`,
        description: "Opening integration setup wizard...",
      });
    }
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    toast({
      title: `Filtering by ${category}`,
      description: category === "All" ? "Showing all integrations" : `Showing ${category} integrations`,
    });
  };

  const handleViewDocs = () => {
    toast({
      title: "Opening Documentation",
      description: "Redirecting to our comprehensive API documentation...",
    });
    setTimeout(() => {
      window.open("https://docs.pixelmindlabs.com", "_blank");
    }, 1000);
  };

  const handleDownloadSDK = () => {
    toast({
      title: "Downloading SDK",
      description: "Starting download of PixelMind SDK package...",
    });
  };

  const handleRequestIntegration = () => {
    toast({
      title: "Integration Request",
      description: "Redirecting to integration request form...",
    });
    setTimeout(() => {
      window.location.href = "/contact";
    }, 1000);
  };

  const integrations = [
    { name: "PostgreSQL", description: "Seamless database integration for complex data operations", icon: Database, category: "Database", status: "Active" },
    { name: "AWS", description: "Cloud infrastructure and deployment solutions", icon: Cloud, category: "Cloud", status: "Active" },
    { name: "Streamlit", description: "Interactive web applications for data science", icon: Code, category: "Framework", status: "Active" },
    { name: "Flask", description: "Lightweight web framework for API development", icon: Code, category: "Framework", status: "Active" },
    { name: "Hugging Face", description: "State-of-the-art machine learning models", icon: Brain, category: "AI/ML", status: "Active" },
    { name: "TensorFlow", description: "Deep learning and neural network frameworks", icon: Brain, category: "AI/ML", status: "Active" },
    { name: "OpenAI", description: "Advanced language models and AI capabilities", icon: Zap, category: "AI/ML", status: "Active" },
    { name: "Auth0", description: "Secure authentication and authorization", icon: Lock, category: "Security", status: "Coming Soon" }
  ];

  const categories = ["All", "Database", "Cloud", "Framework", "AI/ML", "Security"];

  const apiFeatures = [
    { title: "RESTful APIs", description: "Clean, documented APIs for seamless integration", icon: Code },
    { title: "Real-time Updates", description: "WebSocket support for live data synchronization", icon: Zap },
    { title: "Enterprise Security", description: "Bank-grade security with OAuth 2.0 and JWT", icon: Lock },
    { title: "Auto Scaling", description: "Infrastructure that scales with your needs", icon: Cloud }
  ];

  return (
    <div className="min-h-screen pt-16 glacier-bg">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-6 glacier-card border-primary/20 px-6 py-2">Platform Integrations</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Seamless <span className="text-gradient-brand">Integrations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect PixelMind Labs with your existing tools and platforms. 
              Our comprehensive integration ecosystem ensures your AI solutions 
              work perfectly with your current technology stack.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="relative py-20">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Supported <span className="text-gradient-brand">Platforms</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant={selectedCategory === category ? "default" : "outline"} 
                  size="sm" 
                  className={selectedCategory === category ? "gradient-brand text-white" : "glacier-card hover-glow"}
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <Card key={index} className="glacier-card hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="p-4 gradient-brand rounded-full w-fit mx-auto mb-4 shadow-glacier">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {integration.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {integration.description}
                    </p>
                    
                    <div className="flex justify-center gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {integration.category}
                      </Badge>
                      <Badge className={`text-xs ${
                        integration.status === "Active" 
                          ? "bg-green-500 text-white" 
                          : "bg-yellow-500 text-black"
                      }`}>
                        {integration.status}
                      </Badge>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full glacier-card hover-glow"
                      disabled={integration.status === "Coming Soon"}
                      onClick={() => handleConfigure(integration.name, integration.status)}
                    >
                      {integration.status === "Active" ? "Configure" : "Notify Me"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="relative py-20">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Developer <span className="text-gradient-brand">Friendly</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with developers in mind. Our APIs are designed for ease of use, 
              reliability, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glacier-card hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="p-3 gradient-brand rounded-full w-fit mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Simple <span className="text-gradient-brand">Integration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get started with just a few lines of code.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto glacier-card overflow-hidden">
            <div className="bg-gray-900 dark:bg-gray-950 p-8">
              <pre className="text-sm text-green-400 overflow-x-auto">
                <code>{`import { PixelMindAPI } from '@pixelmind/sdk';

const client = new PixelMindAPI({
  apiKey: 'your-api-key',
  endpoint: 'https://api.pixelmindlabs.com'
});

// ChatMind AI Integration
const response = await client.chatmind.chat({
  message: "Hello, how can you help me today?",
  context: { userId: "user-123" }
});

// DataQuery AI Integration  
const query = await client.dataquery.generate({
  question: "Show me sales by region this month",
  schema: "sales_database"
});

console.log(response.message);
console.log(query.sql);`}</code>
              </pre>
            </div>
          </Card>

          <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-brand text-white hover-lift"
              onClick={handleViewDocs}
            >
              View Documentation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glacier-card hover-glow"
              onClick={handleDownloadSDK}
            >
              Download SDK
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-brand" />
        <div className="absolute inset-0 neural-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Need Custom Integration?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Don't see your platform listed? Our team can build custom integrations 
            tailored to your specific technology stack and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 hover-lift"
              onClick={handleRequestIntegration}
            >
              Request Integration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/20"
            >
              Contact Engineering
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
