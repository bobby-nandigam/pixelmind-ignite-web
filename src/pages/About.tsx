import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Lightbulb, Rocket, Target, Users, Zap } from "lucide-react";

const About = () => {
  const timeline = [
    {
      date: "August 25, 2025",
      phase: "Ideation",
      title: "The Beginning",
      description: "PixelMind Labs was founded with a vision to bridge the gap between imagination and AI innovation.",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-500"
    },
    {
      date: "September 2025",
      phase: "Prototyping",
      title: "First Prototypes",
      description: "Developed initial AI prototypes and established core technology framework.",
      icon: Zap,
      color: "from-blue-400 to-purple-500"
    },
    {
      date: "October 2025",
      phase: "Launch",
      title: "First AI Launch",
      description: "Successfully launched ChatMind AI, our flagship conversational AI platform.",
      icon: Rocket,
      color: "from-green-400 to-blue-500"
    },
    {
      date: "Present",
      phase: "Expansion",
      title: "Labs Expansion",
      description: "Growing our AI toolkit with DataQuery AI, MediAssist AI, and LinguaFlow.",
      icon: Target,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI technology.",
      icon: Lightbulb
    },
    {
      title: "Human-Centered",
      description: "Our AI solutions are designed to empower and augment human capabilities.",
      icon: Users
    },
    {
      title: "Quality Focus",
      description: "Every pixel, every algorithm, every solution is crafted with precision.",
      icon: Target
    },
    {
      title: "Future Ready",
      description: "Building tomorrow's AI solutions with today's cutting-edge technology.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background neural-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-brand text-white">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About <span className="text-gradient-brand">PixelMind Labs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Born from a passion for artificial intelligence, we're on a mission to 
              simplify intelligence and deliver AI solutions that transform businesses and lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover-lift glow-brand">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="p-3 bg-gradient-brand rounded-full w-fit mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gradient-brand mb-4">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To simplify intelligence and deliver AI solutions that empower businesses 
                  and individuals. We believe that artificial intelligence should be accessible, 
                  practical, and transformative for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift glow-neural">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="p-3 bg-gradient-secondary rounded-full w-fit mb-4">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gradient-brand mb-4">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create a future where AI bridges imagination and innovation. We envision 
                  a world where intelligent automation enhances human potential and opens 
                  new possibilities for creativity and progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient-brand">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From ideation to innovation - the story of how PixelMind Labs 
              evolved into a leading AI solutions provider.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className={`p-4 bg-gradient-to-br ${item.color} rounded-full glow-brand`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <Card className="flex-1 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2 sm:mb-0">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                          <Badge variant="secondary">{item.phase}</Badge>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient-brand">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at PixelMind Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="p-3 bg-gradient-brand rounded-full w-fit mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;