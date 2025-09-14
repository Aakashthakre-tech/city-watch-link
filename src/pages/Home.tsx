import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, FileText, Users, TrendingUp, Clock, CheckCircle2, AlertTriangle, Smartphone, Eye, MessageSquare, Shield, Award, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-civic.jpg";
import civicCrowdImage from "@/assets/civic-crowd-1.jpg";
import civicCollaboration from "@/assets/civic-collaboration.jpg";
import smartCityCivic from "@/assets/smart-city-civic.jpg";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
const Home = () => {
  const stats = [{
    label: "Total Reports",
    value: 12847,
    icon: FileText,
    color: "text-primary"
  }, {
    label: "Resolved Issues", 
    value: 10293,
    icon: CheckCircle2,
    color: "text-secondary"
  }, {
    label: "Active Citizens",
    value: 4562,
    icon: Users,
    color: "text-civic-emerald"
  }, {
    label: "Avg Response Time",
    value: 2.3,
    suffix: " days",
    icon: Clock,
    color: "text-civic-green"
  }];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Citizen, Mumbai",
      content: "Awaaz helped me report a broken streetlight in my area. It was fixed within 3 days! Amazing response time.",
      rating: 5
    },
    {
      name: "Rajesh Kumar", 
      role: "Municipal Officer",
      content: "The dashboard makes it so easy to track and manage citizen reports. Great tool for civic management.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Community Leader", 
      content: "Finally, a platform where citizens' voices are heard. The transparency is commendable.",
      rating: 5
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Excellence in Governance",
      description: "Winner of Digital India Award 2024"
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "ISO 27001 certified for data security"
    },
    {
      icon: BarChart3,
      title: "Impact Driven",
      description: "89% citizen satisfaction rate"
    }
  ];
  const features = [{
    icon: Smartphone,
    title: "Easy Reporting",
    description: "Report issues with just a few taps. Add photos, location, and description instantly."
  }, {
    icon: Eye,
    title: "Real-time Tracking",
    description: "Track your reports from submission to resolution with live status updates."
  }, {
    icon: MapPin,
    title: "Interactive Maps",
    description: "Visualize city-wide issues on interactive maps with heat zones and filters."
  }, {
    icon: MessageSquare,
    title: "Community Engagement",
    description: "Stay connected with municipal officers and get updates on progress."
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden civic-gradient min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={civicCrowdImage} 
            alt="Citizens engaging in civic activities" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 civic-gradient opacity-95" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-primary font-semibold mb-6 glass-effect">
                🎯 Your Voice, Your City, Your Responsibility
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
                Awaaz
                <span className="block text-civic-forest">Empowering Citizens</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-civic-forest/80">
                Report civic issues, track progress in real-time, and collaborate with your municipal government 
                to build a smarter, more responsive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="civic-button-gradient text-lg px-8 py-6">
                  <Link to="/report">
                    <FileText className="mr-2 h-6 w-6" />
                    Report an Issue
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6" asChild>
                  <Link to="/dashboard">
                    <TrendingUp className="mr-2 h-6 w-6" />
                    View Dashboard
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={civicCollaboration} 
                  alt="Municipal officers collaborating" 
                  className="rounded-2xl shadow-2xl animate-float civic-card-elevated" 
                />
                <img 
                  src={smartCityCivic} 
                  alt="Smart city civic engagement" 
                  className="rounded-2xl shadow-2xl animate-float civic-card-elevated" 
                  style={{ animationDelay: '2s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="professional-section civic-gradient-card relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Awaaz is transforming civic engagement across communities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="civic-card-elevated text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold mb-2 text-primary">
                      <StatsCounter 
                        endValue={stat.value} 
                        suffix={stat.suffix || ""} 
                      />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="professional-section bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Empowering Citizens, Enabling Government
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform bridges the gap between citizens and municipal services,
              creating transparency and accountability in civic management through cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="civic-card-elevated text-center group hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-20 h-20 mx-auto civic-gradient-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="professional-section civic-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Recognition & Trust
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by millions, recognized by industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="civic-card-elevated text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 civic-gradient-accent rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="professional-section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from citizens and municipal officers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="professional-section civic-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={civicCrowdImage} 
            alt="Citizens working together" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Join thousands of citizens already using Awaaz to improve their communities. 
            Your voice matters, and together we can build smarter cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 font-semibold" asChild>
              <Link to="/register">
                <Users className="mr-3 h-6 w-6" />
                Get Started Free
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 font-semibold" asChild>
              <Link to="/report">
                <AlertTriangle className="mr-3 h-6 w-6" />
                Report Now
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-white/80">Always Available</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-white/80">Free to Use</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">Secure</h3>
              <p className="text-white/80">Data Protected</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;