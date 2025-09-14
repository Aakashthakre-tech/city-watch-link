import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Menu, MapPin, FileText, BarChart3, LogIn, User, Settings, HelpCircle, MessageSquare, ChevronDown, Phone, BookOpen, Building } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigationItems = [{
    href: "/",
    label: "Home",
    icon: MapPin
  }, {
    href: "/report",
    label: "Report Issue",
    icon: FileText
  }, {
    href: "/dashboard",
    label: "Dashboard",
    icon: BarChart3
  }];
  const servicesDropdown = [{
    href: "/services",
    label: "All Services",
    icon: Settings
  }, {
    href: "/services#reporting",
    label: "Reporting",
    icon: FileText
  }, {
    href: "/services#tracking",
    label: "Tracking",
    icon: BarChart3
  }];
  const researchDropdown = [{
    href: "/research",
    label: "Research & Details",
    icon: BookOpen
  }, {
    href: "/research#case-studies",
    label: "Case Studies",
    icon: FileText
  }, {
    href: "/research#statistics",
    label: "Statistics",
    icon: BarChart3
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">{/* Fixed: removed bg-black */}
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-gradient-primary flex items-center justify-center">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            Awaaz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map(item => {
          const Icon = item.icon;
          return <Link key={item.href} to={item.href} className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`}>
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>;
        })}

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <Settings className="h-4 w-4" />
              <span>Services</span>
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              {servicesDropdown.map(item => {
              const Icon = item.icon;
              return <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="flex items-center space-x-2">
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>;
            })}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/contact" className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>Contact</span>
          </Link>

          <Link to="/feedback" className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span>Feedback</span>
          </Link>

          <Link to="/agencies" className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
            <Building className="h-4 w-4" />
            <span>Agencies</span>
          </Link>
        </nav>

        {/* Desktop Auth Buttons & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </Button>
          <Button size="sm" className="civic-button-gradient" asChild>
            <Link to="/register">
              <User className="h-4 w-4 mr-2" />
              Register
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map(item => {
                const Icon = item.icon;
                return <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className={`flex items-center space-x-3 text-sm font-medium p-3 rounded-lg transition-colors hover:bg-accent ${isActive(item.href) ? "bg-accent text-primary" : "text-muted-foreground"}`}>
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>;
              })}
                <div className="border-t pt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                  <Button className="w-full justify-start" asChild>
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                      <User className="h-4 w-4 mr-2" />
                      Register
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Navigation;