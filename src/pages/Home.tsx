import { Link } from "react-router-dom";
import { MapPin, FileText, Users, TrendingUp, Clock, CheckCircle2, AlertTriangle, Smartphone, Eye, MessageSquare, Shield, Award, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import civicCrowdImage from "@/assets/civic-crowd-1.jpg";
import civicCollaboration from "@/assets/civic-collaboration.jpg";
import smartCityCivic from "@/assets/smart-city-civic.jpg";
import civicMobileReporting from "@/assets/civic-mobile-reporting.jpg";
import civicControlRoom from "@/assets/civic-control-room.jpg";
import civicDashboardInterface from "@/assets/civic-dashboard-interface.jpg";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
const Home = () => {
  const { t } = useLanguage();
  
  const stats = [{
    label: t('stats.total.reports'),
    value: 12847,
    icon: FileText,
    color: "text-primary"
  }, {
    label: t('stats.resolved.issues'), 
    value: 10293,
    icon: CheckCircle2,
    color: "text-secondary"
  }, {
    label: t('stats.active.citizens'),
    value: 4562,
    icon: Users,
    color: "text-civic-emerald"
  }, {
    label: t('stats.response.time'),
    value: 2.3,
    suffix: t('stats.days'),
    icon: Clock,
    color: "text-civic-green"
  }];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Citizen, Mumbai",
      content: t('testimonials.priya.content'),
      rating: 5
    },
    {
      name: "Rajesh Kumar", 
      role: "Municipal Officer",
      content: t('testimonials.rajesh.content'),
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Community Leader", 
      content: t('testimonials.anjali.content'),
      rating: 5
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: t('achievements.excellence.title'),
      description: t('achievements.excellence.description')
    },
    {
      icon: Shield,
      title: t('achievements.trusted.title'),
      description: t('achievements.trusted.description')
    },
    {
      icon: BarChart3,
      title: t('achievements.impact.title'),
      description: t('achievements.impact.description')
    }
  ];
  const features = [{
    icon: Smartphone,
    title: t('features.reporting.title'),
    description: t('features.reporting.description')
  }, {
    icon: Eye,
    title: t('features.tracking.title'),
    description: t('features.tracking.description')
  }, {
    icon: MapPin,
    title: t('features.maps.title'),
    description: t('features.maps.description')
  }, {
    icon: MessageSquare,
    title: t('features.engagement.title'),
    description: t('features.engagement.description')
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden civic-gradient min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={civicMobileReporting} 
            alt="Citizens engaging in civic activities" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 civic-gradient opacity-95" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg-py-32">
          <div className="grid grid-cols-1 lg-grid-cols-2 gap-12 items-center">
            <div className="text-center lg-text-left">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-primary font-semibold mb-6 glass-effect">
                🎯 {t('hero.tagline')}
              </div>
              <h1 className="text-5xl md-text-7xl font-bold mb-6 text-primary">
                {t('hero.title')}
                <span className="block text-civic-forest">{t('hero.subtitle')}</span>
              </h1>
              <p className="text-xl md-text-2xl mb-8 text-civic-forest/80">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm-flex-row gap-4 justify-center lg-justify-start">
                <Link to="/report" className="civic-button-gradient text-lg px-8 py-6">
                  <FileText className="mr-2 h-6 w-6" />
                  {t('hero.report.button')}
                </Link>
                <Link to="/dashboard" className="civic-button-outline text-lg px-8 py-6">
                  <TrendingUp className="mr-2 h-6 w-6" />
                  {t('hero.dashboard.button')}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={civicCollaboration} 
                  alt="Municipal officers collaborating" 
                  className="rounded-2xl shadow-2xl animate-float civic-card-elevated" 
                />
                <img 
                  src={civicControlRoom} 
                  alt="Smart city civic engagement" 
                  className="rounded-2xl shadow-2xl animate-float civic-card-elevated" 
                  style={{ animationDelay: '2s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="professional-section civic-gradient-card relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-4 text-primary">
              {t('stats.title')}
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              {t('stats.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="civic-card-elevated text-center hover-scale transition-all">
                  <div className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold mb-2 text-primary">
                      <StatsCounter 
                        endValue={stat.value} 
                        suffix={stat.suffix || ""} 
                      />
                    </div>
                    <p className="text-sm text-muted font-medium">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="professional-section bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-6 text-primary">
              {t('features.title')}
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              {t('features.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="civic-card-elevated text-center group hover-scale transition-all">
                  <div className="pb-4">
                    <div className="w-20 h-20 mx-auto civic-gradient-accent rounded-full flex items-center justify-center mb-6 group-hover-scale transition-all">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl text-primary font-bold">{feature.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-base leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 grid grid-cols-1 md-grid-cols-3 gap-8">
            <img 
              src={civicDashboardInterface} 
              alt="Civic dashboard interface" 
              className="rounded-2xl shadow-lg civic-card-elevated" 
            />
            <img 
              src={smartCityCivic} 
              alt="Smart city technology" 
              className="rounded-2xl shadow-lg civic-card-elevated" 
            />
            <img 
              src={civicCrowdImage} 
              alt="Citizens collaboration" 
              className="rounded-2xl shadow-lg civic-card-elevated" 
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="professional-section civic-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-4 text-primary">
              {t('achievements.title')}
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              {t('achievements.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="civic-card-elevated text-center">
                  <div className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 civic-gradient-accent rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{achievement.title}</h3>
                    <p className="text-muted">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="professional-section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md-text-5xl font-bold mb-4 text-primary">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              {t('testimonials.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="professional-section civic-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={civicCrowdImage} 
            alt="Citizens working together" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md-text-6xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl md-text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm-flex-row gap-6 justify-center">
            <Link to="/register" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 font-semibold civic-button-primary">
              <Users className="mr-3 h-6 w-6" />
              {t('cta.get.started')}
            </Link>
            <Link to="/report" className="civic-button-outline border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 font-semibold">
              <AlertTriangle className="mr-3 h-6 w-6" />
              {t('cta.report.now')}
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md-grid-cols-3 gap-8 text-center">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-white/80">{t('cta.available')}</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-white/80">{t('cta.free')}</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">Secure</h3>
              <p className="text-white/80">{t('cta.secure')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;