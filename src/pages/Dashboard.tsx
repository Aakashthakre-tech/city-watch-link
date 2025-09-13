import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Filter,
  Download,
  Calendar,
  Users,
  FileText
} from "lucide-react";

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState("30d");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock data for demonstration
  const stats = [
    { 
      title: "Total Reports", 
      value: "12,847", 
      change: "+12%", 
      icon: FileText, 
      color: "text-primary" 
    },
    { 
      title: "Resolved Issues", 
      value: "10,293", 
      change: "+8%", 
      icon: CheckCircle2, 
      color: "text-secondary" 
    },
    { 
      title: "In Progress", 
      value: "1,834", 
      change: "+15%", 
      icon: Clock, 
      color: "text-civic-orange" 
    },
    { 
      title: "Critical Issues", 
      value: "47", 
      change: "-23%", 
      icon: AlertTriangle, 
      color: "text-destructive" 
    }
  ];

  const recentReports = [
    {
      id: "RPT-2024-001",
      title: "Pothole on Main Street",
      category: "Road Issues",
      status: "In Progress",
      priority: "High",
      location: "Main St & 5th Ave",
      submittedBy: "John Doe",
      date: "2024-01-15",
      assignedTo: "Public Works Dept"
    },
    {
      id: "RPT-2024-002", 
      title: "Broken Street Light",
      category: "Lighting",
      status: "Resolved",
      priority: "Medium",
      location: "Park Avenue",
      submittedBy: "Jane Smith",
      date: "2024-01-14",
      assignedTo: "Electrical Dept"
    },
    {
      id: "RPT-2024-003",
      title: "Garbage Collection Missed",
      category: "Waste Management", 
      status: "Pending",
      priority: "Low",
      location: "Oak Street",
      submittedBy: "Mike Johnson",
      date: "2024-01-13",
      assignedTo: "Sanitation Dept"
    },
    {
      id: "RPT-2024-004",
      title: "Water Main Break",
      category: "Water & Utilities",
      status: "Critical",
      priority: "Critical",
      location: "Elm Street",
      submittedBy: "Sarah Wilson",
      date: "2024-01-12",
      assignedTo: "Water Dept"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "resolved": return "status-resolved";
      case "in progress": return "status-in-progress";
      case "pending": return "status-pending";
      case "critical": return "status-critical";
      default: return "status-pending";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "critical": return "bg-destructive text-destructive-foreground";
      case "high": return "bg-civic-red text-white";
      case "medium": return "bg-civic-orange text-white";
      case "low": return "bg-civic-green text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Civic Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor and manage civic issues across your municipality
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 3 months</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="civic-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-primary/10`}>
                      <Icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-3 lg:flex">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="civic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Latest updates from your municipality</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReports.slice(0, 4).map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{report.title}</p>
                          <p className="text-sm text-muted-foreground">{report.location}</p>
                        </div>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card className="civic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Performance Metrics
                  </CardTitle>
                  <CardDescription>Key performance indicators this month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Resolution Rate</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <Progress value={87} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Response Time</span>
                      <span className="font-medium">2.3 days avg</span>
                    </div>
                    <Progress value={76} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Citizen Satisfaction</span>
                      <span className="font-medium">4.2/5.0</span>
                    </div>
                    <Progress value={84} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Issues by Category Chart */}
            <Card className="civic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Issues by Category
                </CardTitle>
                <CardDescription>Distribution of reported issues across different categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center border-2 border-dashed rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive chart will be displayed here</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Connect to Supabase to enable real-time data visualization
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="roads">Road Issues</SelectItem>
                  <SelectItem value="lighting">Street Lighting</SelectItem>
                  <SelectItem value="waste">Waste Management</SelectItem>
                  <SelectItem value="water">Water & Utilities</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>

            <Card className="civic-card">
              <CardHeader>
                <CardTitle>All Reports</CardTitle>
                <CardDescription>Manage and track all civic issue reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold">{report.title}</h3>
                              <p className="text-sm text-muted-foreground">ID: {report.id}</p>
                            </div>
                            <Badge className={getPriorityColor(report.priority)}>
                              {report.priority}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {report.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {report.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {report.assignedTo}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(report.status)}>
                            {report.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="civic-card">
                <CardHeader>
                  <CardTitle>Trends Over Time</CardTitle>
                  <CardDescription>Issue reporting and resolution trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Trend chart placeholder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="civic-card">
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Issues mapped by location</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive map placeholder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;