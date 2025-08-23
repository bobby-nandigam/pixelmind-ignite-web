import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Cloud, Code, Brain, Zap, Lock, ArrowRight } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      name: "PostgreSQL",
      description: "Seamless database integration for complex data operations",
      icon: Database,
      category: "Database",
      status: "Active",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "AWS",
      description: "Cloud infrastructure and deployment solutions",
      icon: Cloud,
      category: "Cloud",
      status: "Active",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Streamlit",
      description: "Interactive web applications for data science",
      icon: Code,
      category: "Framework",
      status: "Active",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Flask",
      description: "Lightweight web framework for API development",
      icon: Code,
      category: "Framework", 
      status: "Active",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Hugging Face",
      description: "State-of-the-art machine learning models",
      icon: Brain,
      category: "AI/ML",
      status: "Active",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "TensorFlow",
      description: "Deep learning and neural network frameworks",
      icon: Brain,
      category: "AI/ML",
      status: "Active",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "OpenAI",
      description: "Advanced language models and AI capabilities",
      icon: Zap,
      category: "AI/ML",
      status: "Active",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "Auth0",
      description: "Secure authentication and authorization",
      icon: Lock,
      category: "Security",
      status: "Coming Soon",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const categories = ["All", "Database", "Cloud", "Framework", "AI/ML", "Security"];

  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, documented APIs for seamless integration",
      icon: Code
    },
    {
      title: "Real-time Updates",
      description: "WebSocket support for live data synchronization",
      icon: Zap
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with OAuth 2.0 and JWT",
      icon: Lock
    },
    {
      title: "Auto Scaling", 
      description: "Infrastructure that scales with your needs",
      icon: Cloud
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background neural-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-brand text-white">Platform Integrations</Badge>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Supported <span className="text-gradient-brand">Platforms</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm" className="hover-glow">
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <Card key={index} className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className={`p-4 bg-gradient-to-br ${integration.color} rounded-full w-fit mx-auto mb-4 glow-brand`}>
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
                      <Badge 
                        className={`text-xs ${
                          integration.status === "Active" 
                            ? "bg-green-500 text-white" 
                            : "bg-yellow-500 text-white"
                        }`}
                      >
                        {integration.status}
                      </Badge>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full hover-glow"
                      disabled={integration.status === "Coming Soon"}
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Card key={index} className="hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="p-3 bg-gradient-brand rounded-full w-fit mx-auto mb-4">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Simple <span className="text-gradient-brand">Integration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get started with just a few lines of code.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-gray-900 text-green-400 overflow-hidden">
            <CardContent className="p-8">
              <pre className="text-sm overflow-x-auto">
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
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" className="gradient-brand text-white hover-lift mr-4">
              View Documentation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="hover-glow">
              Download SDK
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Need Custom Integration?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't see your platform listed? Our team can build custom integrations 
            tailored to your specific technology stack and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-lift">
              Request Integration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
              Contact Engineering
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;