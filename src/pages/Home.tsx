import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import ParticleBackground from "@/components/futuristic/ParticleBackground";
import { 
  Sparkles, Zap, Brain, Rocket, Shield, Users, 
  ArrowRight, Play, CheckCircle, Star, TrendingUp,
  Code, Layers, Globe, Lock
} from "lucide-react";

const Home = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleGetStarted = () => {
    toast({
      title: "Welcome aboard! 🚀",
      description: "Redirecting you to get started...",
    });
  };

  const handleWatchDemo = () => {
    toast({
      title: "Demo Video",
      description: "Opening demo video...",
    });
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms that adapt to your needs in real-time.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process millions of data points in seconds with our optimized infrastructure.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "RESTful APIs, SDKs, and comprehensive documentation for seamless integration.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Built to scale from prototype to enterprise with zero configuration.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Deploy worldwide with edge computing and CDN for minimal latency.",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const stats = [
    { label: "Active Users", value: "2M+", icon: Users },
    { label: "Uptime", value: "99.99%", icon: TrendingUp },
    { label: "API Calls/day", value: "500M+", icon: Zap },
    { label: "Countries", value: "150+", icon: Globe }
  ];

  const testimonials = [
    {
      quote: "This platform transformed how we handle AI workflows. The speed and accuracy are unmatched.",
      author: "Sarah Chen",
      role: "CTO at TechCorp",
      avatar: "SC",
      rating: 5
    },
    {
      quote: "Integration was seamless. We went from prototype to production in just two weeks.",
      author: "Marcus Rodriguez",
      role: "Lead Engineer at DataFlow",
      avatar: "MR",
      rating: 5
    },
    {
      quote: "The best AI infrastructure platform we've used. Support team is incredibly responsive.",
      author: "Emily Watson",
      role: "VP Engineering at CloudScale",
      avatar: "EW",
      rating: 5
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams and projects",
      features: [
        "Up to 100K API calls/month",
        "5 team members",
        "Basic analytics",
        "Email support",
        "99.9% uptime SLA"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$99",
      description: "For growing businesses",
      features: [
        "Up to 1M API calls/month",
        "Unlimited team members",
        "Advanced analytics",
        "Priority support",
        "99.99% uptime SLA",
        "Custom integrations"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited API calls",
        "Dedicated account manager",
        "Advanced security",
        "24/7 phone support",
        "99.999% uptime SLA",
        "Custom SLA"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="hero-gradient absolute inset-0 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center space-y-8 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-2 text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              The Future of AI Infrastructure
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Build AI Products
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                10x Faster
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ship production-ready AI applications with our enterprise-grade infrastructure. 
              From prototype to scale, we handle the complexity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift rounded-full px-8 py-6 text-lg font-semibold group"
                onClick={handleGetStarted}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg font-semibold hover-scale border-primary/20 hover:border-primary/40"
                onClick={handleWatchDemo}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2 hover-scale cursor-default">
                  <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Everything You Need to
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ship Faster
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features built for developers, designed for scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="glass-card hover-lift group cursor-pointer border-border/50"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Rocket className="w-4 h-4 mr-2 inline" />
                Developer Experience
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Built for
                <br />
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Developers
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Intuitive APIs, comprehensive SDKs, and detailed documentation. 
                Start building in minutes with our quick-start guides and code examples.
              </p>
              <ul className="space-y-4">
                {["RESTful APIs", "WebSocket Support", "GraphQL Ready", "99.99% Uptime SLA"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift rounded-full px-8 group">
                View Documentation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <div className="bg-background/50 rounded-lg p-6 font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">// Initialize SDK</div>
                  <div><span className="text-purple-400">import</span> <span className="text-blue-400">{'{ PixelMind }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@pixelmind/sdk'</span></div>
                  <div className="h-4" />
                  <div className="text-muted-foreground">// Quick start</div>
                  <div><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-blue-400">PixelMind</span>({'{'})</div>
                  <div className="pl-4">apiKey: process.env.API_KEY</div>
                  <div>{'}'}) </div>
                  <div className="h-4" />
                  <div className="text-muted-foreground">// Make request</div>
                  <div><span className="text-purple-400">const</span> result = <span className="text-purple-400">await</span> client.generate({'{'})</div>
                  <div className="pl-4">prompt: <span className="text-green-400">"Your prompt here"</span></div>
                  <div>{'})'}</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Testimonials
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Loved by
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Developers Worldwide
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover-lift border-border/50">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Simple,
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index}
                className={`relative hover-lift ${
                  tier.highlighted 
                    ? 'glass-card border-primary/50 shadow-2xl shadow-primary/20' 
                    : 'glass-card border-border/50'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-5xl font-bold text-foreground">{tier.price}</span>
                    {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full rounded-full py-6 font-semibold ${
                      tier.highlighted
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                    }`}
                  >
                    {tier.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="hero-gradient absolute inset-0 z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Ready to Build the
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Future?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers shipping AI products faster with PixelMind Labs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift rounded-full px-8 py-6 text-lg font-semibold group"
              onClick={handleGetStarted}
            >
              Start Building Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 py-6 text-lg font-semibold hover-scale border-primary/20 hover:border-primary/40"
            >
              <Lock className="mr-2 w-5 h-5" />
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
