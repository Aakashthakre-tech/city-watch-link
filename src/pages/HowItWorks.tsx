import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Camera, 
  MapPin, 
  Bell, 
  CheckCircle2, 
  Users,
  FileText,
  BarChart3,
  ArrowRight
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Smartphone,
      title: "Sign Up & Get Started",
      description: "Create your free Awaaz account and access the civic reporting platform instantly.",
      details: ["Quick registration process", "Email verification", "Profile setup"]
    },
    {
      step: 2, 
      icon: Camera,
      title: "Report Issues",
      description: "Capture photos, add descriptions, and submit civic issues with automatic location tagging.",
      details: ["Photo/video capture", "GPS location", "Voice notes", "Category selection"]
    },
    {
      step: 3,
      icon: Bell,
      title: "Track Progress", 
      description: "Receive real-time updates as municipal departments address your reported issues.",
      details: ["Status notifications", "Progress timeline", "Department communication"]
    },
    {
      step: 4,
      icon: CheckCircle2,
      title: "See Resolution",
      description: "Get notified when issues are resolved and provide feedback on the service quality.",
      details: ["Resolution confirmation", "Before/after photos", "Service rating"]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">Awaaz</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple, step-by-step guide to using Awaaz for reporting civic issues and engaging with your local government.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <Card className="civic-card lg:w-1/3">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <CardTitle className="flex items-center justify-center gap-2">
                      <Icon className="h-6 w-6 text-primary" />
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center justify-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of citizens making their voices heard through Awaaz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">
                <Users className="mr-2 h-5 w-5" />
                Sign Up Now
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

export default HowItWorks;