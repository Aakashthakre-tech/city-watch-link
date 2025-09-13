import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  Building,
  Users
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+1 (555) 123-CIVIC",
      subtitle: "Mon-Fri, 8AM-6PM",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@awaaz.gov",
      subtitle: "Response within 24 hours",
      color: "text-civic-blue"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: "123 Municipal Plaza",
      subtitle: "Downtown Civic Center",
      color: "text-civic-green"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday",
      subtitle: "8:00 AM - 6:00 PM",
      color: "text-civic-orange"
    }
  ];

  const departments = [
    {
      name: "Public Works Department",
      contact: "publicworks@awaaz.gov",
      phone: "+1 (555) 123-7001",
      responsibilities: ["Road maintenance", "Street lighting", "Traffic signals"]
    },
    {
      name: "Sanitation Department", 
      contact: "sanitation@awaaz.gov",
      phone: "+1 (555) 123-7002",
      responsibilities: ["Waste collection", "Recycling", "Street cleaning"]
    },
    {
      name: "Water & Utilities",
      contact: "utilities@awaaz.gov", 
      phone: "+1 (555) 123-7003",
      responsibilities: ["Water supply", "Sewage", "Gas lines"]
    },
    {
      name: "Parks & Recreation",
      contact: "parks@awaaz.gov",
      phone: "+1 (555) 123-7004", 
      responsibilities: ["Park maintenance", "Public facilities", "Recreation programs"]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="bg-gradient-primary bg-clip-text text-transparent">Awaaz</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Reach out to us with questions, feedback, or support requests. 
            Our dedicated team is committed to providing you with excellent service.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="civic-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="civic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Send Us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your question or concern in detail..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Interactive Map Placeholder */}
          <Card className="civic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Find Our Office
              </CardTitle>
              <CardDescription>
                Visit us at our municipal office for in-person assistance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    123 Municipal Plaza, Downtown Civic Center
                  </p>
                  <Button variant="outline" className="mt-4">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Contacts */}
        <Card className="civic-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Department Contacts
            </CardTitle>
            <CardDescription>
              Connect directly with specific municipal departments for specialized assistance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <h3 className="font-semibold text-lg">{dept.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${dept.contact}`} className="text-primary hover:underline">
                        {dept.contact}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${dept.phone}`} className="text-primary hover:underline">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Responsibilities:</p>
                    <ul className="text-sm text-muted-foreground">
                      {dept.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="civic-card">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Common questions and answers about Awaaz services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">How long does it take to get a response to reported issues?</h3>
              <p className="text-muted-foreground text-sm">
                Response times vary by issue type and priority. Critical issues are addressed within 24 hours, 
                while routine matters may take 2-5 business days. You'll receive status updates throughout the process.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Can I track the progress of my reported issues?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! Once you submit a report, you'll receive a tracking ID and can monitor progress through 
                your dashboard. You'll also receive notifications when status changes occur.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Is there a mobile app available?</h3>
              <p className="text-muted-foreground text-sm">
                Currently, Awaaz is available as a responsive web application that works great on mobile devices. 
                We're working on dedicated mobile apps for iOS and Android - stay tuned!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;