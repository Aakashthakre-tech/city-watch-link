import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  BarChart3, 
  FileText, 
  TrendingUp, 
  Users, 
  MapPin,
  Calendar,
  Download,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Clock
} from "lucide-react";

const Research = () => {
  const caseStudies = [
    {
      id: "CS-001",
      title: "Pothole Management Revolution: Downtown District Success Story",
      category: "Infrastructure",
      status: "Completed",
      duration: "6 months",
      impact: "87% reduction in pothole complaints",
      description: "How Awaaz transformed pothole reporting and repair in the downtown district, leading to faster response times and improved road conditions.",
      metrics: {
        reportsSubmitted: 342,
        issuesResolved: 298,
        avgResponseTime: "2.3 days",
        citizenSatisfaction: "94%"
      },
      date: "2024-01-15"
    },
    {
      id: "CS-002", 
      title: "Street Lighting Enhancement Project",
      category: "Public Safety",
      status: "Ongoing",
      duration: "4 months", 
      impact: "45% improvement in lighting coverage",
      description: "A comprehensive study on how citizen reporting through Awaaz led to systematic improvements in street lighting infrastructure.",
      metrics: {
        reportsSubmitted: 156,
        issuesResolved: 127,
        avgResponseTime: "1.8 days",
        citizenSatisfaction: "91%"
      },
      date: "2024-01-10"
    },
    {
      id: "CS-003",
      title: "Waste Management Optimization",
      category: "Environment", 
      status: "Analysis",
      duration: "8 months",
      impact: "62% improvement in collection efficiency", 
      description: "Analyzing the impact of citizen feedback on waste collection routes and scheduling optimization across residential areas.",
      metrics: {
        reportsSubmitted: 523,
        issuesResolved: 487,
        avgResponseTime: "3.1 days", 
        citizenSatisfaction: "88%"
      },
      date: "2024-01-05"
    }
  ];

  const statistics = [
    { label: "Total Issues Reported", value: "12,847", change: "+12%", period: "This Month" },
    { label: "Average Resolution Time", value: "2.3 days", change: "-18%", period: "Last Quarter" },
    { label: "Citizen Participation Rate", value: "73%", change: "+25%", period: "Year over Year" },
    { label: "Municipal Response Rate", value: "96%", change: "+8%", period: "This Quarter" }
  ];

  const problemDefinitions = [
    {
      category: "Infrastructure",
      problems: [
        "Road surface deterioration and pothole formation",
        "Inadequate street lighting in residential areas",
        "Sidewalk accessibility issues", 
        "Traffic signal malfunctions and timing problems"
      ]
    },
    {
      category: "Environmental",
      problems: [
        "Irregular waste collection schedules",
        "Illegal dumping in public spaces",
        "Air quality monitoring gaps",
        "Water drainage and flooding issues"
      ]
    },
    {
      category: "Public Safety",
      problems: [
        "Insufficient emergency response coverage",
        "Vandalism and property damage",
        "Inadequate pedestrian crossing safety",
        "Public space security concerns"
      ]
    },
    {
      category: "Community Services", 
      problems: [
        "Limited access to public facilities",
        "Insufficient recreational space maintenance",
        "Public transportation service gaps",
        "Community program accessibility"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed": return "status-resolved";
      case "ongoing": return "status-in-progress"; 
      case "analysis": return "status-pending";
      default: return "status-pending";
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Research & <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore comprehensive research, case studies, and data-driven insights that demonstrate 
            the impact of civic engagement through the Awaaz platform.
          </p>
        </div>

        {/* Research Tabs */}
        <Tabs defaultValue="case-studies" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-3 lg:flex">
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
            <TabsTrigger value="definitions">Problem Definitions</TabsTrigger>
          </TabsList>

          {/* Case Studies Tab */}
          <TabsContent value="case-studies" className="space-y-6">
            <Card className="civic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Featured Case Studies
                </CardTitle>
                <CardDescription>
                  In-depth analysis of successful civic engagement initiatives and their measurable impact on communities.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <Card key={index} className="civic-card">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{study.title}</h3>
                          <Badge className={getStatusColor(study.status)}>
                            {study.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{study.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {study.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {study.duration}
                          </span>
                          <Badge variant="outline">{study.category}</Badge>
                        </div>
                      </div>
                      <div className="text-center lg:text-right">
                        <p className="text-2xl font-bold text-primary">{study.impact}</p>
                        <p className="text-sm text-muted-foreground">Primary Impact</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-lg font-semibold">{study.metrics.reportsSubmitted}</p>
                        <p className="text-xs text-muted-foreground">Reports Submitted</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-lg font-semibold">{study.metrics.issuesResolved}</p>
                        <p className="text-xs text-muted-foreground">Issues Resolved</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-lg font-semibold">{study.metrics.avgResponseTime}</p>
                        <p className="text-xs text-muted-foreground">Avg Response Time</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-lg font-semibold">{study.metrics.citizenSatisfaction}</p>
                        <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Report
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Full Study
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Statistics Tab */}
          <TabsContent value="statistics" className="space-y-6">
            <Card className="civic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Civic Engagement Statistics
                </CardTitle>
                <CardDescription>
                  Key performance indicators and trends in civic participation and municipal responsiveness.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statistics.map((stat, index) => (
                <Card key={index} className="civic-card">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                      <Badge variant="outline" className={`text-xs ${
                        stat.change.startsWith('+') ? 'text-civic-green' : 'text-civic-blue'
                      }`}>
                        {stat.change} {stat.period}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="civic-card">
                <CardHeader>
                  <CardTitle>Issue Categories Trend</CardTitle>
                  <CardDescription>Monthly distribution of reported issues by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center border-2 border-dashed rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Trend Chart</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Connect to Supabase for real-time data visualization
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="civic-card">
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Issues reported by district and neighborhood</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center border-2 border-dashed rounded-lg">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Geographic Heat Map</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Interactive map showing issue density
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Problem Definitions Tab */}
          <TabsContent value="definitions" className="space-y-6">
            <Card className="civic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Civic Problem Definitions
                </CardTitle>
                <CardDescription>
                  Comprehensive categorization and definition of common civic issues to improve reporting accuracy and response efficiency.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemDefinitions.map((category, index) => (
                <Card key={index} className="civic-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category} Issues</CardTitle>
                    <CardDescription>
                      Common problems and their standard definitions for reporting purposes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.problems.map((problem, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contribute to Civic Research
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Your participation in Awaaz helps generate valuable data for improving municipal services and civic engagement strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <FileText className="mr-2 h-5 w-5" />
              Submit Research Proposal
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Full Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;