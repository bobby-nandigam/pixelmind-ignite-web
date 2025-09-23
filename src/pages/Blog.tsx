import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User, TrendingUp, Brain, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "Quantum-Enhanced AI: The September 2025 Breakthrough That's Changing Everything",
    excerpt: "Just this month, quantum-enhanced neural networks achieved human-level reasoning in multiple domains. We break down the implications for businesses and how to prepare for the quantum AI revolution.",
    author: "PixelMind Labs Research Team",
    date: "September 22, 2025",
    readTime: "12 min read",
    category: "Quantum AI",
    image: "/placeholder.svg",
    featured: true
  };

  const blogPosts = [
    {
      title: "Multi-Agent Systems: September 2025 Production Deployment Success",
      excerpt: "How Fortune 500 companies are now using our AgentSwarm platform for autonomous business operations, achieving 500% efficiency gains.",
      author: "Enterprise Solutions Team",
      date: "September 20, 2025",
      readTime: "8 min read",
      category: "Multi-Agent AI",
      image: "/placeholder.svg",
      icon: Brain
    },
    {
      title: "Real-Time AI Model Training: The Zero-Latency Revolution",
      excerpt: "Our latest breakthrough in continuous learning allows AI models to adapt in real-time without retraining, transforming how businesses handle dynamic data.",
      author: "AI Research Lab",
      date: "September 18, 2025",
      readTime: "15 min read",
      category: "Machine Learning",
      image: "/placeholder.svg",
      icon: Zap
    },
    {
      title: "NeuroHealth AI Passes Clinical Trials: 95% Diagnostic Accuracy",
      excerpt: "Our medical AI platform has officially been approved for clinical use, showing superior performance to human specialists in multiple diagnostic categories.",
      author: "Healthcare AI Division",
      date: "September 15, 2025",
      readTime: "11 min read",
      category: "Healthcare",
      image: "/placeholder.svg",
      icon: Brain
    },
    {
      title: "Quantum Computing Meets AI: Production-Ready Quantum Neural Networks",
      excerpt: "We've successfully deployed the first commercial quantum-enhanced neural networks, achieving 1000x speedup in complex reasoning tasks.",
      author: "Quantum AI Team",
      date: "September 12, 2025",
      readTime: "13 min read",
      category: "Quantum Computing",
      image: "/placeholder.svg",
      icon: Zap
    },
    {
      title: "Edge AI Revolution: Running GPT-Level Models on Smartphones",
      excerpt: "Our breakthrough in model compression allows running large language models directly on mobile devices while maintaining full functionality.",
      author: "Edge Computing Team",
      date: "September 10, 2025",
      readTime: "9 min read",
      category: "Edge AI",
      image: "/placeholder.svg",
      icon: Brain
    },
    {
      title: "FinanceIQ Platform: ₹84,000Cr+ Managed Through Autonomous AI Trading",
      excerpt: "Our algorithmic trading platform now manages over ₹84,000 crores in assets, delivering consistent 25% better returns than traditional methods.",
      author: "Financial AI Team",
      date: "September 8, 2025",
      readTime: "10 min read",
      category: "Financial AI",
      image: "/placeholder.svg",
      icon: TrendingUp
    },
    {
      title: "Building the Future: Our Vision for AI in 2026 and Beyond",
      excerpt: "Looking ahead to the next phase of AI evolution, including consciousness simulation, cross-reality integration, and planetary-scale intelligence networks.",
      author: "Chief Technology Officer",
      date: "September 5, 2025",
      readTime: "14 min read",
      category: "Future Tech",
      image: "/placeholder.svg",
      icon: Sparkles
    },
    {
      title: "Zero-Code AI: How Non-Technical Users Built 1M+ AI Models This Month",
      excerpt: "September 2025 milestone: Over 1 million AI models created by business users without writing a single line of code using our platform.",
      author: "Product Success Team",
      date: "September 3, 2025",
      readTime: "7 min read",
      category: "No-Code AI",
      image: "/placeholder.svg",
      icon: Zap
    }
  ];

  const categories = [
    { name: "All Posts", count: 9 },
    { name: "Quantum AI", count: 2 },
    { name: "Multi-Agent AI", count: 1 },
    { name: "Machine Learning", count: 1 },
    { name: "Healthcare", count: 1 },
    { name: "Edge AI", count: 1 },
    { name: "Financial AI", count: 1 },
    { name: "Future Tech", count: 1 },
    { name: "No-Code AI", count: 1 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background neural-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-brand text-white">Insights & Updates</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              PixelMind <span className="text-gradient-brand">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and updates from the PixelMind Labs team. 
              Stay ahead of the curve with the latest in AI technology and innovation.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <Card className="mb-16 overflow-hidden hover-lift glow-brand">
              <div className="relative h-64 bg-gradient-brand">
                <div className="absolute inset-0 neural-bg opacity-20" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 text-black">Featured</Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="h-24 w-24 text-white/30" />
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                </div>

                <h2 className="text-3xl font-display font-bold mb-4 hover:text-primary transition-colors">
                  <Link to="#" className="hover:text-primary">
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{featuredPost.author}</div>
                    </div>
                  </div>

                  <Button className="gradient-brand text-white hover-lift">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => {
                const Icon = post.icon;
                return (
                  <Card key={index} className="hover-lift overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <Icon className="h-16 w-16 text-muted-foreground/30" />
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                      
                      <CardTitle className="text-xl font-display leading-tight hover:text-primary transition-colors">
                        <Link to="#" className="hover:text-primary">
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        
                        <Button variant="ghost" size="sm" className="text-primary hover-glow">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="hover-glow">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-24">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-display">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted/50 cursor-pointer transition-colors">
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-brand text-white">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-white/20 rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold mb-3">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    Get the latest AI insights and updates delivered to your inbox.
                  </p>
                  <Button variant="secondary" size="sm" className="w-full hover-lift">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-display">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["AI", "Machine Learning", "Healthcare", "Automation", "Data Science", "Innovation", "Technology", "Business"].map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;