import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  MapPin, 
  Mic, 
  Upload, 
  AlertCircle,
  CheckCircle2,
  FileImage,
  FileText,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    location: ""
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDraft, setIsDraft] = useState(false);
  const [pendingRequests, setPendingRequests] = useState(23);
  const [totalReports, setTotalReports] = useState(847);
  const [acceptedReports, setAcceptedReports] = useState(734);
  const { toast } = useToast();

  // Mock pending reports data
  const myReports = [
    { id: "RPT-001", title: "Pothole near school", status: "Pending", date: "2024-01-15" },
    { id: "RPT-002", title: "Broken streetlight", status: "In Progress", date: "2024-01-14" },
    { id: "RPT-003", title: "Water leak", status: "Under Review", date: "2024-01-13" }
  ];

  const issueCategories = [
    { value: "pothole", label: "Potholes & Road Issues" },
    { value: "streetlight", label: "Street Lighting" },
    { value: "garbage", label: "Waste Management" },
    { value: "traffic", label: "Traffic Signals" },
    { value: "water", label: "Water & Drainage" },
    { value: "parks", label: "Parks & Recreation" },
    { value: "noise", label: "Noise Complaints" },
    { value: "other", label: "Other Issues" }
  ];

  const priorityLevels = [
    { value: "low", label: "Low", color: "bg-civic-green" },
    { value: "medium", label: "Medium", color: "bg-civic-orange" },
    { value: "high", label: "High", color: "bg-civic-red" },
    { value: "critical", label: "Critical", color: "bg-destructive" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({ 
            ...prev, 
            location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}` 
          }));
          toast({
            title: "Location detected",
            description: "Your current location has been added to the report.",
          });
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Unable to detect location. Please enter manually.",
            variant: "destructive",
          });
        }
      );
    }
  };

  const simulateSubmission = async () => {
    setIsSubmitting(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Report Submitted Successfully!",
        description: "Your issue has been reported. You'll receive updates via email.",
      });
      
      // Reset form
      setFormData({ title: "", description: "", category: "", priority: "", location: "" });
      setFiles([]);
      setUploadProgress(0);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    simulateSubmission();
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Report a Civic Issue</h1>
          <p className="text-xl text-muted-foreground">
            Help us make your community better by reporting problems that need attention.
          </p>
          
          {/* Statistics Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
            <div className="bg-primary/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">{pendingRequests}</div>
              <div className="text-sm text-muted-foreground">Your Pending Reports</div>
            </div>
            <div className="bg-civic-green/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-civic-green">{acceptedReports}</div>
              <div className="text-sm text-muted-foreground">Reports Accepted</div>
            </div>
            <div className="bg-civic-blue/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-civic-blue">{totalReports}</div>
              <div className="text-sm text-muted-foreground">Total City Reports</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card className="civic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Issue Details
              </CardTitle>
              <CardDescription>
                Provide a clear title and description of the issue you're reporting.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Issue Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Pothole on Main Street near City Hall"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Issue Category *</Label>
                  <Select onValueChange={(value) => handleInputChange("category", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {issueCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priority Level</Label>
                  <Select onValueChange={(value) => handleInputChange("priority", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {priorityLevels.map((priority) => (
                        <SelectItem key={priority.value} value={priority.value}>
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${priority.color}`} />
                            {priority.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide detailed information about the issue, including when you first noticed it and any safety concerns..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={4}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="civic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Location Information
              </CardTitle>
              <CardDescription>
                Help us locate the issue precisely for faster resolution.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter address or coordinates"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={getCurrentLocation}
                  className="shrink-0"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Use Current Location
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Click "Use Current Location" to automatically detect your position, or enter the address manually.
              </p>
            </CardContent>
          </Card>

          {/* Media Upload */}
          <Card className="civic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
                Photos & Media
              </CardTitle>
              <CardDescription>
                Add photos, videos, or voice notes to help illustrate the issue.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="h-20 flex-col"
                  onClick={() => document.getElementById('photo-upload')?.click()}
                >
                  <Camera className="h-6 w-6 mb-2" />
                  Take Photo
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="h-20 flex-col"
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  <Upload className="h-6 w-6 mb-2" />
                  Upload Files
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="h-20 flex-col"
                >
                  <Mic className="h-6 w-6 mb-2" />
                  Voice Note
                </Button>
              </div>

              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                capture="environment"
                multiple
                className="hidden"
                onChange={handleFileUpload}
              />
              
              <input
                id="file-upload"
                type="file"
                accept="image/*,video/*"
                multiple
                className="hidden"
                onChange={handleFileUpload}
              />

              {files.length > 0 && (
                <div className="space-y-2">
                  <Label>Uploaded Files</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {files.map((file, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center gap-2 p-2 border rounded-lg">
                          <FileImage className="h-4 w-4" />
                          <span className="text-xs truncate">{file.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="h-6 w-6 p-0"
                          >
                            ×
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit Section */}
          <Card className="civic-card">
            <CardContent className="p-6">
              {isSubmitting && (
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Uploading report...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} />
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Submit Report
                    </>
                  )}
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  Save as Draft
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4 text-center">
                By submitting this report, you agree to our Terms of Service and Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* My Reports Section */}
          <Card className="civic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Your Recent Reports
              </CardTitle>
              <CardDescription>
                Track the status of your previously submitted reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {myReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{report.title}</p>
                      <p className="text-sm text-muted-foreground">ID: {report.id} • {report.date}</p>
                    </div>
                    <Badge className={
                      report.status === "Pending" ? "bg-civic-orange text-white" :
                      report.status === "In Progress" ? "bg-civic-blue text-white" :
                      "bg-muted text-muted-foreground"
                    }>
                      {report.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All My Reports ({pendingRequests})
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;