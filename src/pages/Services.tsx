import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import workflowImage from "@/assets/civic-workflow-process.jpg";
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
  Download
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Issue Reporting",
      description: "Report civic issues with photos, descriptions, and automatic location tagging. Submit reports in seconds with our user-friendly interface.",
      features: [
        "Photo & video capture",
        "GPS auto-location",
        "Voice note recording",
        "Category selection",
        "Priority assignment"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your reported issues from submission to resolution with real-time status updates and progress indicators.",
      features: [
        "Real-time status updates",
        "Progress timeline",
        "Resolution notifications",
        "Department assignments",
        "Performance metrics"
      ],
      color: "text-civic-blue",
      bgColor: "bg-civic-blue/10"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay informed with intelligent notifications about your reports and important civic announcements.",
      features: [
        "Push notifications",
        "Email updates",
        "SMS alerts",
        "Custom preferences",
        "Community bulletins"
      ],
      color: "text-civic-orange",
      bgColor: "bg-civic-orange/10"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Access comprehensive analytics and insights about civic issues in your area and city-wide trends.",
      features: [
        "Interactive dashboards",
        "Trend analysis",
        "Geographic mapping",
        "Performance reports",
        "Data visualization"
      ],
      color: "text-civic-green",
      bgColor: "bg-civic-green/10"
    },
    {
      icon: MessageSquare,
      title: "Community Engagement",
      description: "Connect with fellow citizens and municipal officers through our community features.",
      features: [
        "Public comment system",
        "Issue discussions",
        "Officer communication",
        "Community forums",
        "Feedback collection"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Your data is protected with enterprise-grade security and privacy measures.",
      features: [
        "End-to-end encryption",
        "Secure authentication",
        "Privacy controls",
        "Data anonymization",
        "GDPR compliance"
      ],
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Awaaz</span>?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The most comprehensive civic engagement platform designed to empower citizens and streamline municipal operations for a smarter, more responsive city.
          </p>
          
          {/* Platform Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Issue Resolution Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-civic-green mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Active Citizens</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-civic-blue mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Platform Availability</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="civic-card h-full">
                <CardHeader>
                  <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Platform Workflow */}
        <Card className="civic-card mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl">Complete Civic Engagement Workflow</CardTitle>
            <CardDescription className="text-lg">
              From report to resolution - see how Awaaz transforms civic engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <img 
                src={workflowImage} 
                alt="Awaaz Civic Workflow Process" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Report</h3>
                <p className="text-muted-foreground text-sm">
                  Capture issues with photos, GPS location, and detailed descriptions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-civic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-civic-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Assign</h3>
                <p className="text-muted-foreground text-sm">
                  AI-powered routing to appropriate departments with priority classification
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-civic-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-civic-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Track</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time updates with transparent progress tracking and timelines
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-civic-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-civic-orange" />
                </div>
                <h3 className="text-lg font-semibold mb-2">4. Analyze</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive analytics for continuous civic improvement
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make Your Voice Heard?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of citizens already using Awaaz to improve their communities.
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
                Report Your First Issue
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;