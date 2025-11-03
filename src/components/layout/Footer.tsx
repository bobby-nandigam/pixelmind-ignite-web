import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter, Mail, Send, Sparkles, Heart } from "lucide-react";
import pixelmindLogo from "@/assets/pixelmind-logo.png";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Subscribed Successfully!",
      description: "You'll receive our latest AI insights and updates.",
    });
    setEmail("");
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    products: [
      { name: "AI Solutions", href: "/services" },
      { name: "Enterprise Tools", href: "/tools" },
      { name: "Integrations", href: "/integrations" },
      { name: "Projects", href: "/projects" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "API", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-cyan-500" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-purple-500" },
    { name: "Email", icon: Mail, href: "mailto:contact@pixelmindlabs.com", color: "hover:text-orange-500" },
  ];

  return (
    <footer className="relative bg-background/50 backdrop-blur-xl border-t border-border/50 overflow-hidden">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Newsletter Section - Holographic Card */}
        <div className="mb-16">
          <div className="glass-3d p-12 rounded-3xl text-center transform-3d hover-lift-soft border-0">
            <div className="inline-flex p-4 bg-gradient-premium rounded-full mb-6 shadow-3d animate-float-soft">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-display font-bold mb-4 text-gradient-premium">
              Stay Ahead of the AI Curve
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get exclusive insights, product updates, and industry breakthroughs delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="glass-3d border-0 text-lg px-6 py-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                size="lg" 
                className="bg-gradient-premium text-white px-8 py-6 text-lg shadow-3d hover-lift-soft"
              >
                <Send className="h-5 w-5 mr-2" />
                Subscribe
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              Join 50,000+ AI innovators. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Glowing Separator */}
        <div className="relative h-px mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30 blur-sm" />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Company Info - Futuristic Branding */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <img 
                  src={pixelmindLogo} 
                  alt="PixelMind Labs" 
                  className="h-12 w-12 rounded-xl shadow-3d group-hover:animate-3d-spin"
                />
                <div className="absolute inset-0 bg-gradient-premium rounded-xl opacity-0 group-hover:opacity-30 transition-opacity" />
              </div>
              <span className="font-display font-bold text-2xl text-gradient-premium neon-glow">
                PixelMind Labs
              </span>
            </Link>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building the future of AI. From quantum-enhanced neural networks to autonomous 
              multi-agent systems—we're shaping tomorrow's intelligence today.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`glass-3d p-3 rounded-xl ${item.color} transition-all hover-lift-soft group border-0`}
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links - Holographic Style */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-6 text-gradient-premium text-lg">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors relative group inline-block"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-premium group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Glowing Separator */}
        <div className="relative h-px mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 blur-sm" />
        </div>

        {/* Bottom Bar - Futuristic */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© 2025 PixelMind Labs. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-muted-foreground">Powered by</span>
            <div className="glass-3d px-4 py-2 rounded-lg border-0">
              <span className="text-gradient-premium font-semibold">Quantum AI</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse-glow" />
              <span>for the future</span>
            </div>
          </div>
        </div>

        {/* Trust Badges - Holographic */}
        <div className="mt-12 pt-12 border-t border-border/50">
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-muted-foreground">
            <div className="glass-3d px-6 py-3 rounded-lg border-0 hover-lift-soft">
              <span className="text-gradient-premium font-semibold">🔒 Enterprise Security</span>
            </div>
            <div className="glass-3d px-6 py-3 rounded-lg border-0 hover-lift-soft">
              <span className="text-gradient-premium font-semibold">⚡ 99.99% Uptime</span>
            </div>
            <div className="glass-3d px-6 py-3 rounded-lg border-0 hover-lift-soft">
              <span className="text-gradient-premium font-semibold">🌍 Global Scale</span>
            </div>
            <div className="glass-3d px-6 py-3 rounded-lg border-0 hover-lift-soft">
              <span className="text-gradient-premium font-semibold">🏆 Industry Leader</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;