import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, Phone, Mail, MessageSquare, Clock, Users, CheckCircle } from "lucide-react";
import supportImage from "@/assets/contact-support-hero.jpg";

const HelpSupport = () => {
  const faqs = [
    {
      question: "How do I report a civic issue?",
      answer: "Click on the 'Report Issue' button, fill in the details, add photos if available, and submit. Your issue will be automatically assigned to the relevant department."
    },
    {
      question: "How can I track my reported issue?",
      answer: "Go to the Dashboard section to view all your reported issues, their current status, and resolution timeline."
    },
    {
      question: "What types of issues can I report?",
      answer: "You can report various civic issues including road problems, waste management, water supply, electricity, public safety, and infrastructure issues."
    },
    {
      question: "How long does it take to resolve issues?",
      answer: "Resolution time varies by issue type and severity. Most issues are acknowledged within 24 hours and resolved within 7-15 working days."
    }
  ];

  const supportStats = [
    { label: "Average Response Time", value: "2 Hours", icon: Clock },
    { label: "Issues Resolved", value: "15,000+", icon: CheckCircle },
    { label: "Happy Citizens", value: "50,000+", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background py-8 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Help & <span className="bg-gradient-primary bg-clip-text text-transparent">Support</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you make the most of Awaaz. Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        {/* Support Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {supportStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src={supportImage} 
            alt="Help and Support Center" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* FAQ Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <HelpCircle className="h-6 w-6 mr-2" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription>Find quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Contact Support
              </CardTitle>
              <CardDescription>Get personalized help from our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Describe your issue or question..." rows={4} />
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Other Ways to Reach Us</CardTitle>
              <CardDescription>Choose the method that works best for you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Phone Support</div>
                  <div className="text-sm text-muted-foreground">+91 1800-123-AWAAZ</div>
                  <div className="text-xs text-muted-foreground">Mon-Fri, 9 AM - 6 PM</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Email Support</div>
                  <div className="text-sm text-muted-foreground">support@awaaz.gov.in</div>
                  <div className="text-xs text-muted-foreground">Response within 24 hours</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Live Chat</div>
                  <div className="text-sm text-muted-foreground">Available on website</div>
                  <div className="text-xs text-muted-foreground">Mon-Fri, 9 AM - 6 PM</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our dedicated support team is here to assist you with any questions or issues.
          </p>
          <Button size="lg" variant="secondary">
            <MessageSquare className="mr-2 h-5 w-5" />
            Start Live Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;