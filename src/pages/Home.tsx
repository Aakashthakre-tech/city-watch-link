import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, FileText, Users, TrendingUp, Clock, CheckCircle2, AlertTriangle, Smartphone, Eye, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-civic.jpg";
const Home = () => {
  const stats = [{
    label: "Total Reports",
    value: "12,847",
    icon: FileText,
    color: "text-primary"
  }, {
    label: "Resolved Issues",
    value: "10,293",
    icon: CheckCircle2,
    color: "text-secondary"
  }, {
    label: "Active Citizens",
    value: "4,562",
    icon: Users,
    color: "text-civic-blue"
  }, {
    label: "Avg Response Time",
    value: "2.3 days",
    icon: Clock,
    color: "text-civic-orange"
  }];
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
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Smart city civic reporting system" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Make Your City
              <span className="block text-secondary">Better Together</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Report civic issues, track progress, and collaborate with your municipal government 
              to build a smarter, more responsive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/report">
                  <FileText className="mr-2 h-5 w-5" />
                  Report an Issue
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/dashboard">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
            const Icon = stat.icon;
            return <Card key={index} className="civic-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-green-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering Citizens, Enabling Government
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform bridges the gap between citizens and municipal services,
              creating transparency and accountability in civic management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Card key={index} className="civic-card text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
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
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/report">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Report Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;