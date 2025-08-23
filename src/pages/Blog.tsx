import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User, TrendingUp, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "Why 2025 is the Year of AI-Driven Businesses",
    excerpt: "Discover how artificial intelligence is reshaping industries and why businesses that don't adapt will be left behind. We explore the key trends, opportunities, and strategies for AI implementation.",
    author: "PixelMind Labs Team",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "AI Trends",
    image: "/placeholder.svg",
    featured: true
  };

  const blogPosts = [
    {
      title: "The Story Behind PixelMind Labs",
      excerpt: "From ideation to innovation - learn about our journey, challenges, and the vision that drives our AI solutions.",
      author: "Founder's Desk",
      date: "January 10, 2025",
      readTime: "5 min read",
      category: "Company",
      image: "/placeholder.svg",
      icon: Brain
    },
    {
      title: "Building Scalable AI Solutions: Best Practices",
      excerpt: "Key principles and methodologies for developing AI systems that can grow with your business needs.",
      author: "Engineering Team",
      date: "January 8, 2025",
      readTime: "12 min read",
      category: "Development",
      image: "/placeholder.svg",
      icon: Zap
    },
    {
      title: "The Future of Healthcare AI: MediAssist Case Study",
      excerpt: "How our healthcare AI assistant is transforming patient care and supporting medical professionals.",
      author: "Product Team",
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "Healthcare",
      image: "/placeholder.svg",
      icon: Brain
    },
    {
      title: "Data Privacy in AI: Our Commitment to Security",
      excerpt: "Understanding how we protect user data while delivering powerful AI insights and recommendations.",
      author: "Security Team",
      date: "January 2, 2025",
      readTime: "7 min read",
      category: "Security",
      image: "/placeholder.svg",
      icon: Zap
    },
    {
      title: "ChatMind AI: Revolutionizing Business Communication",
      excerpt: "Deep dive into our conversational AI platform and how it's helping businesses automate customer interactions.",
      author: "Product Team",
      date: "December 28, 2024",
      readTime: "9 min read",
      category: "Product",
      image: "/placeholder.svg",
      icon: Brain
    },
    {
      title: "From SQL to Insights: DataQuery AI Success Stories",
      excerpt: "Real-world examples of how natural language database queries are transforming data analytics workflows.",
      author: "Customer Success",
      date: "December 25, 2024",
      readTime: "6 min read",
      category: "Analytics",
      image: "/placeholder.svg",
      icon: TrendingUp
    }
  ];

  const categories = [
    { name: "All Posts", count: 7 },
    { name: "AI Trends", count: 1 },
    { name: "Company", count: 1 },
    { name: "Development", count: 1 },
    { name: "Healthcare", count: 1 },
    { name: "Security", count: 1 },
    { name: "Product", count: 1 },
    { name: "Analytics", count: 1 }
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