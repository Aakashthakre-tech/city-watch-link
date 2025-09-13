import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  Send, 
  Users,
  TrendingUp,
  Award,
  Clock
} from "lucide-react";

const Feedback = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Local Resident", 
      rating: 5,
      feedback: "Awaaz has transformed how I interact with my local government. I reported a pothole and it was fixed within 3 days!",
      date: "2024-01-15"
    },
    {
      name: "Municipal Officer M. Patel",
      role: "Public Works Department",
      rating: 5, 
      feedback: "This platform has streamlined our workflow significantly. We can prioritize issues better and communicate with citizens effectively.",
      date: "2024-01-10"
    },
    {
      name: "David Chen",
      role: "Community Leader",
      rating: 4,
      feedback: "Great tool for civic engagement. The real-time tracking feature keeps everyone informed about progress on community issues.",
      date: "2024-01-08"
    }
  ];

  const stats = [
    { label: "Total Feedback", value: "3,247", icon: MessageSquare, color: "text-primary" },
    { label: "Average Rating", value: "4.6/5.0", icon: Star, color: "text-civic-orange" },
    { label: "Response Rate", value: "98%", icon: TrendingUp, color: "text-civic-green" },
    { label: "Satisfied Users", value: "94%", icon: Award, color: "text-secondary" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-civic-orange text-civic-orange' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            User <span className="bg-gradient-primary bg-clip-text text-transparent">Feedback</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your voice matters! Share your experience with Awaaz and help us improve our services 
            for better civic engagement and community development.
          </p>
        </div>

        {/* Feedback Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="civic-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-primary/10`}>
                      <Icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Feedback Form */}
          <Card className="civic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Submit Your Feedback
              </CardTitle>
              <CardDescription>
                Help us improve Awaaz by sharing your thoughts, suggestions, and experiences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="userType">User Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your user type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="citizen">Citizen</SelectItem>
                    <SelectItem value="officer">Municipal Officer</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="category">Feedback Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose feedback category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="bug">Bug Report</SelectItem>
                    <SelectItem value="improvement">Improvement Suggestion</SelectItem>
                    <SelectItem value="general">General Feedback</SelectItem>
                    <SelectItem value="support">Support Issue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="rating">Overall Rating</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Rate your experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                    <SelectItem value="4">⭐⭐⭐⭐ Very Good</SelectItem>
                    <SelectItem value="3">⭐⭐⭐ Good</SelectItem>
                    <SelectItem value="2">⭐⭐ Fair</SelectItem>
                    <SelectItem value="1">⭐ Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="feedback">Your Feedback</Label>
                <Textarea 
                  id="feedback" 
                  placeholder="Please share your detailed feedback, suggestions, or concerns..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Submit Feedback
              </Button>
            </CardContent>
          </Card>

          {/* User Testimonials */}
          <div className="space-y-6">
            <Card className="civic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  What Users Are Saying
                </CardTitle>
                <CardDescription>
                  Real feedback from citizens and municipal officers using Awaaz.
                </CardDescription>
              </CardHeader>
            </Card>

            {testimonials.map((testimonial, index) => (
              <Card key={index} className="civic-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.feedback}"
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {testimonial.date}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feedback Categories */}
        <Card className="civic-card mb-12">
          <CardHeader>
            <CardTitle>How We Use Your Feedback</CardTitle>
            <CardDescription>
              Your feedback directly contributes to making Awaaz better for everyone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-sm text-muted-foreground">
                  We regularly analyze feedback to identify areas for enhancement and prioritize feature development.
                </p>
              </div>
              
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-civic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-civic-blue" />
                </div>
                <h3 className="font-semibold mb-2">User-Centric Design</h3>
                <p className="text-sm text-muted-foreground">
                  Your suggestions help us design more intuitive interfaces and better user experiences.
                </p>
              </div>
              
              <div className="text-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-civic-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-civic-green" />
                </div>
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Bug reports and performance feedback help us maintain high-quality, reliable services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have More to Share?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our community discussions and help shape the future of civic engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="#feedback-form">
                <MessageSquare className="mr-2 h-5 w-5" />
                Submit Feedback
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Community Forum
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;