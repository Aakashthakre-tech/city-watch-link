import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  BarChart3, 
  Bell, 
  MapPin, 
  Camera, 
  Clock, 
  Shield, 
  Smartphone,
  Users,
  TrendingUp,
  MessageSquare,
  Zap,
  Globe,
  Award
} from "lucide-react";
import featuresImage from "@/assets/civic-services-hero.jpg";

const Features = () => {
  const coreFeatures = [
    {
      icon: FileText,
      title: "Smart Issue Reporting",
      description: "Report civic issues with photos, GPS location, and voice notes in seconds.",
      features: [
        "One-click photo capture",
        "Automatic GPS tagging",
        "Voice note recording",
        "Multi-category selection",
        "Priority classification"
      ]
    },
    {
      icon: BarChart3,
      title: "Real-time Tracking",
      description: "Monitor your reported issues from submission to resolution with live updates.",
      features: [
        "Live status updates",
        "Progress timeline",
        "Department notifications",
        "Resolution estimates",
        "Completion certificates"
      ]
    },
    {
      icon: Bell,
      title: "Intelligent Notifications",
      description: "Stay informed with smart notifications about your reports and civic updates.",
      features: [
        "Push notifications",
        "Email alerts",
        "SMS updates",
        "Custom preferences",
        "Community announcements"
      ]
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Access comprehensive insights about civic issues and city-wide trends.",
      features: [
        "Interactive dashboards",
        "Trend analysis",
        "Geographic mapping",
        "Performance metrics",
        "Predictive insights"
      ]
    }
  ];

  const advancedFeatures = [
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Use Awaaz in English, Hindi, Marathi, and other regional languages.",
      benefit: "Accessible to all citizens"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is protected with end-to-end encryption and privacy controls.",
      benefit: "Complete data protection"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Fully responsive design works perfectly on all devices and screen sizes.",
      benefit: "Report anywhere, anytime"
    },
    {
      icon: Zap,
      title: "AI-Powered Routing",
      description: "Intelligent assignment of issues to appropriate departments automatically.",
      benefit: "Faster resolution times"
    },
    {
      icon: Users,
      title: "Community Features",
      description: "Connect with fellow citizens and participate in civic discussions.",
      benefit: "Stronger community engagement"
    },
    {
      icon: Award,
      title: "Recognition System",
      description: "Earn badges and recognition for active civic participation.",
      benefit: "Gamified civic engagement"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Platform <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make Awaaz the most comprehensive civic engagement platform for modern cities.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src={featuresImage} 
            alt="Awaaz Platform Features" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Core Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    <div className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                      {feature.benefit}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Feature Comparison */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Why Choose Awaaz?</CardTitle>
            <CardDescription>See how we compare to traditional civic reporting methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Feature</th>
                    <th className="text-center py-3 px-4">Traditional Methods</th>
                    <th className="text-center py-3 px-4">Awaaz Platform</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Reporting Speed</td>
                    <td className="text-center py-3 px-4">Hours/Days</td>
                    <td className="text-center py-3 px-4 text-primary font-medium">Seconds</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Photo Evidence</td>
                    <td className="text-center py-3 px-4">Manual Upload</td>
                    <td className="text-center py-3 px-4 text-primary font-medium">One-Click Capture</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Status Tracking</td>
                    <td className="text-center py-3 px-4">Phone Calls</td>
                    <td className="text-center py-3 px-4 text-primary font-medium">Real-time Updates</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Language Support</td>
                    <td className="text-center py-3 px-4">Limited</td>
                    <td className="text-center py-3 px-4 text-primary font-medium">Multi-language</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Data Analytics</td>
                    <td className="text-center py-3 px-4">Not Available</td>
                    <td className="text-center py-3 px-4 text-primary font-medium">Advanced Insights</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience All Features Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of citizens already using Awaaz to make their cities better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">
                <Users className="mr-2 h-5 w-5" />
                Get Started Free
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/report">
                <FileText className="mr-2 h-5 w-5" />
                Try Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;