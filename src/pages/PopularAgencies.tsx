import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users,
  CheckCircle2,
  TrendingUp,
  Star,
  ExternalLink
} from "lucide-react";

const PopularAgencies = () => {
  const agencies = [
    {
      name: "Department of Public Works",
      logo: "🏗️",
      description: "Responsible for maintaining city infrastructure including roads, bridges, and public facilities.",
      contact: {
        phone: "+1 (555) 123-7001",
        email: "publicworks@city.gov", 
        address: "123 Municipal Plaza, Suite 200",
        hours: "Mon-Fri, 8AM-5PM"
      },
      services: [
        "Road maintenance and repair",
        "Street lighting installation",
        "Traffic signal management", 
        "Sidewalk construction",
        "Public facility maintenance"
      ],
      stats: {
        issuesHandled: 2847,
        avgResponseTime: "2.1 days",
        satisfactionRate: "92%",
        activeProjects: 23
      },
      rating: 4.6,
      verified: true
    },
    {
      name: "Sanitation Department",
      logo: "🚛",
      description: "Manages waste collection, recycling programs, and maintains city cleanliness standards.",
      contact: {
        phone: "+1 (555) 123-7002",
        email: "sanitation@city.gov",
        address: "456 Service Center Blvd",
        hours: "Mon-Sat, 6AM-6PM"
      },
      services: [
        "Residential waste collection",
        "Recycling and composting",
        "Street cleaning operations",
        "Hazardous waste disposal",
        "Public space maintenance"
      ],
      stats: {
        issuesHandled: 1923,
        avgResponseTime: "1.8 days", 
        satisfactionRate: "89%",
        activeProjects: 12
      },
      rating: 4.4,
      verified: true
    },
    {
      name: "Water & Utilities Commission",
      logo: "💧",
      description: "Ensures reliable water supply, sewage systems, and utility infrastructure throughout the city.",
      contact: {
        phone: "+1 (555) 123-7003",
        email: "utilities@city.gov",
        address: "789 Utility Way, Building A",
        hours: "24/7 Emergency Service"
      },
      services: [
        "Water supply management", 
        "Sewage system maintenance",
        "Water quality monitoring",
        "Emergency leak repairs",
        "Infrastructure upgrades"
      ],
      stats: {
        issuesHandled: 1456,
        avgResponseTime: "3.2 days",
        satisfactionRate: "94%", 
        activeProjects: 8
      },
      rating: 4.7,
      verified: true
    },
    {
      name: "Parks & Recreation Department",
      logo: "🌳",
      description: "Maintains public parks, recreational facilities, and organizes community programs.",
      contact: {
        phone: "+1 (555) 123-7004",
        email: "parks@city.gov",
        address: "321 Park Administration Center",
        hours: "Mon-Fri, 8AM-6PM"
      },
      services: [
        "Park maintenance and landscaping",
        "Recreational facility management", 
        "Community event organization",
        "Sports program coordination",
        "Environmental conservation"
      ],
      stats: {
        issuesHandled: 892,
        avgResponseTime: "4.1 days",
        satisfactionRate: "91%",
        activeProjects: 15
      },
      rating: 4.5,
      verified: true
    },
    {
      name: "Transportation Authority",
      logo: "🚌",
      description: "Oversees public transportation systems, traffic management, and transportation planning.",
      contact: {
        phone: "+1 (555) 123-7005",
        email: "transport@city.gov",
        address: "654 Transit Hub Center",
        hours: "Mon-Fri, 7AM-7PM"
      },
      services: [
        "Public transit operations",
        "Traffic flow optimization", 
        "Transportation planning",
        "Parking management",
        "Accessibility improvements"
      ],
      stats: {
        issuesHandled: 1267,
        avgResponseTime: "2.9 days",
        satisfactionRate: "87%",
        activeProjects: 19
      },
      rating: 4.3,
      verified: true
    },
    {
      name: "Emergency Services Coordination",
      logo: "🚨",
      description: "Coordinates emergency response, public safety, and disaster preparedness initiatives.",
      contact: {
        phone: "+1 (555) 911-EMRG",
        email: "emergency@city.gov",
        address: "Emergency Operations Center",
        hours: "24/7 Operations"
      },
      services: [
        "Emergency response coordination",
        "Public safety management",
        "Disaster preparedness", 
        "Crisis communication",
        "Inter-agency coordination"
      ],
      stats: {
        issuesHandled: 634,
        avgResponseTime: "0.8 days",
        satisfactionRate: "96%",
        activeProjects: 6
      },
      rating: 4.8,
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-civic-orange text-civic-orange' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Popular <span className="bg-gradient-primary bg-clip-text text-transparent">Agencies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with municipal departments and agencies actively using Awaaz to resolve civic issues. 
            Find contact information, services offered, and performance metrics for transparent government interaction.
          </p>
        </div>

        {/* Agencies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {agencies.map((agency, index) => (
            <Card key={index} className="civic-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{agency.logo}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{agency.name}</CardTitle>
                      {agency.verified && (
                        <Badge className="status-resolved text-xs">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      {renderStars(agency.rating)}
                      <span className="text-sm text-muted-foreground">
                        {agency.rating}/5.0
                      </span>
                    </div>
                    <CardDescription className="text-base">
                      {agency.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 text-muted-foreground" />
                      <a href={`tel:${agency.contact.phone}`} className="text-primary hover:underline">
                        {agency.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 text-muted-foreground" />
                      <a href={`mailto:${agency.contact.email}`} className="text-primary hover:underline">
                        {agency.contact.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3 w-3 text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">{agency.contact.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{agency.contact.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="font-semibold mb-3">Services Offered</h3>
                  <ul className="space-y-1">
                    {agency.services.slice(0, 3).map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {service}
                      </li>
                    ))}
                    {agency.services.length > 3 && (
                      <li className="text-sm text-primary">
                        +{agency.services.length - 3} more services
                      </li>
                    )}
                  </ul>
                </div>

                {/* Performance Stats */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center p-2 bg-muted/50 rounded">
                      <p className="text-lg font-semibold">{agency.stats.issuesHandled}</p>
                      <p className="text-xs text-muted-foreground">Issues Handled</p>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded">
                      <p className="text-lg font-semibold">{agency.stats.avgResponseTime}</p>
                      <p className="text-xs text-muted-foreground">Avg Response</p>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded">
                      <p className="text-lg font-semibold">{agency.stats.satisfactionRate}</p>
                      <p className="text-xs text-muted-foreground">Satisfaction</p>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded">
                      <p className="text-lg font-semibold">{agency.stats.activeProjects}</p>
                      <p className="text-xs text-muted-foreground">Active Projects</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Agency
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Agency Stats Overview */}
        <Card className="civic-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Agency Network Overview
            </CardTitle>
            <CardDescription>
              Comprehensive statistics about municipal agencies using Awaaz platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <p className="text-2xl font-bold mb-1">24</p>
                <p className="text-sm text-muted-foreground">Active Agencies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-civic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-civic-blue" />
                </div>
                <p className="text-2xl font-bold mb-1">847</p>
                <p className="text-sm text-muted-foreground">Municipal Officers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-civic-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-civic-green" />
                </div>
                <p className="text-2xl font-bold mb-1">91%</p>
                <p className="text-sm text-muted-foreground">Avg Response Rate</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-civic-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-civic-orange" />
                </div>
                <p className="text-2xl font-bold mb-1">9,019</p>
                <p className="text-sm text-muted-foreground">Issues Resolved</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect with Your Local Government
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Use Awaaz to report issues directly to the right department and track progress in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Building className="mr-2 h-5 w-5" />
              Browse All Agencies
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Help Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularAgencies;