import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' }
];

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.report': 'Report Issue',
    'nav.dashboard': 'Dashboard',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.feedback': 'Feedback',
    'nav.agencies': 'Agencies',
    'nav.signin': 'Sign In',
    'nav.register': 'Register',
    
    // Hero Section
    'hero.tagline': 'Your Voice, Your City, Your Responsibility',
    'hero.title': 'Awaaz',
    'hero.subtitle': 'Empowering Citizens',
    'hero.description': 'Report civic issues, track progress in real-time, and collaborate with your municipal government to build a smarter, more responsive community.',
    'hero.report.button': 'Report an Issue',
    'hero.dashboard.button': 'View Dashboard',
    
    // Stats Section
    'stats.title': 'Impact in Numbers',
    'stats.description': 'See how Awaaz is transforming civic engagement across communities',
    'stats.total.reports': 'Total Reports',
    'stats.resolved.issues': 'Resolved Issues',
    'stats.active.citizens': 'Active Citizens',
    'stats.response.time': 'Avg Response Time',
    'stats.days': ' days',
    
    // Features Section
    'features.title': 'Empowering Citizens, Enabling Government',
    'features.description': 'Our platform bridges the gap between citizens and municipal services, creating transparency and accountability in civic management through cutting-edge technology.',
    'features.reporting.title': 'Easy Reporting',
    'features.reporting.description': 'Report issues with just a few taps. Add photos, location, and description instantly.',
    'features.tracking.title': 'Real-time Tracking',
    'features.tracking.description': 'Track your reports from submission to resolution with live status updates.',
    'features.maps.title': 'Interactive Maps',
    'features.maps.description': 'Visualize city-wide issues on interactive maps with heat zones and filters.',
    'features.engagement.title': 'Community Engagement',
    'features.engagement.description': 'Stay connected with municipal officers and get updates on progress.',
    
    // Achievements Section
    'achievements.title': 'Recognition & Trust',
    'achievements.description': 'Trusted by millions, recognized by industry leaders',
    'achievements.excellence.title': 'Excellence in Governance',
    'achievements.excellence.description': 'Winner of Digital India Award 2024',
    'achievements.trusted.title': 'Trusted Platform',
    'achievements.trusted.description': 'ISO 27001 certified for data security',
    'achievements.impact.title': 'Impact Driven',
    'achievements.impact.description': '89% citizen satisfaction rate',
    
    // Testimonials Section
    'testimonials.title': 'What Our Users Say',
    'testimonials.description': 'Real experiences from citizens and municipal officers',
    'testimonials.priya.content': 'Awaaz helped me report a broken streetlight in my area. It was fixed within 3 days! Amazing response time.',
    'testimonials.rajesh.content': 'The dashboard makes it so easy to track and manage citizen reports. Great tool for civic management.',
    'testimonials.anjali.content': 'Finally, a platform where citizens\' voices are heard. The transparency is commendable.',
    
    // CTA Section
    'cta.title': 'Ready to Make a Difference?',
    'cta.description': 'Join thousands of citizens already using Awaaz to improve their communities. Your voice matters, and together we can build smarter cities.',
    'cta.get.started': 'Get Started Free',
    'cta.report.now': 'Report Now',
    'cta.available': 'Always Available',
    'cta.free': 'Free to Use',
    'cta.secure': 'Data Protected',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.report': 'शिकायत दर्ज करें',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.services': 'सेवाएं',
    'nav.contact': 'संपर्क',
    'nav.feedback': 'प्रतिक्रिया',
    'nav.agencies': 'एजेंसियां',
    'nav.signin': 'साइन इन',
    'nav.register': 'रजिस्टर',
    
    // Hero Section
    'hero.tagline': 'आपकी आवाज़, आपका शहर, आपकी जिम्मेदारी',
    'hero.title': 'आवाज़',
    'hero.subtitle': 'नागरिकों को सशक्त बनाना',
    'hero.description': 'नागरिक समस्याओं की रिपोर्ट करें, वास्तविक समय में प्रगति को ट्रैक करें, और एक स्मार्ट, अधिक उत्तरदायी समुदाय बनाने के लिए अपनी नगरपालिका सरकार के साथ सहयोग करें।',
    'hero.report.button': 'समस्या रिपोर्ट करें',
    'hero.dashboard.button': 'डैशबोर्ड देखें',
    
    // Stats Section
    'stats.title': 'संख्याओं में प्रभाव',
    'stats.description': 'देखें कि कैसे आवाज़ समुदायों में नागरिक भागीदारी को बदल रहा है',
    'stats.total.reports': 'कुल रिपोर्ट्स',
    'stats.resolved.issues': 'हल की गई समस्याएं',
    'stats.active.citizens': 'सक्रिय नागरिक',
    'stats.response.time': 'औसत प्रतिक्रिया समय',
    'stats.days': ' दिन',
    
    // Features Section
    'features.title': 'नागरिकों को सशक्त बनाना, सरकार को सक्षम करना',
    'features.description': 'हमारा प्लेटफॉर्म नागरिकों और नगरपालिका सेवाओं के बीच की खाई को पाटता है, अत्याधुनिक तकनीक के माध्यम से नागरिक प्रबंधन में पारदर्शिता और जवाबदेही पैदा करता है।',
    'features.reporting.title': 'आसान रिपोर्टिंग',
    'features.reporting.description': 'केवल कुछ टैप के साथ समस्याओं की रिपोर्ट करें। तुरंत फोटो, स्थान और विवरण जोड़ें।',
    'features.tracking.title': 'रियल-टाइम ट्रैकिंग',
    'features.tracking.description': 'लाइव स्टेटस अपडेट के साथ सबमिशन से रिज़ॉल्यूशन तक अपनी रिपोर्ट्स को ट्रैक करें।',
    'features.maps.title': 'इंटरैक्टिव मैप्स',
    'features.maps.description': 'हीट ज़ोन और फिल्टर के साथ इंटरैक्टिव मैप्स पर शहर-व्यापी समस्याओं को विज़ुअलाइज़ करें।',
    'features.engagement.title': 'सामुदायिक भागीदारी',
    'features.engagement.description': 'नगरपालिका अधिकारियों के साथ जुड़े रहें और प्रगति पर अपडेट प्राप्त करें।',
    
    // Achievements Section
    'achievements.title': 'मान्यता और विश्वास',
    'achievements.description': 'लाखों लोगों द्वारा भरोसा किया गया, उद्योग के नेताओं द्वारा मान्यता प्राप्त',
    'achievements.excellence.title': 'गवर्नेंस में उत्कृष्टता',
    'achievements.excellence.description': 'डिजिटल इंडिया अवार्ड 2024 के विजेता',
    'achievements.trusted.title': 'विश्वसनीय प्लेटफॉर्म',
    'achievements.trusted.description': 'डेटा सुरक्षा के लिए ISO 27001 प्रमाणित',
    'achievements.impact.title': 'प्रभाव संचालित',
    'achievements.impact.description': '89% नागरिक संतुष्टि दर',
    
    // Testimonials Section
    'testimonials.title': 'हमारे उपयोगकर्ता क्या कहते हैं',
    'testimonials.description': 'नागरिकों और नगरपालिका अधिकारियों के वास्तविक अनुभव',
    'testimonials.priya.content': 'आवाज़ ने मुझे अपने क्षेत्र में एक टूटी हुई स्ट्रीट लाइट की रिपोर्ट करने में मदद की। यह 3 दिनों के भीतर ठीक हो गई! अद्भुत प्रतिक्रिया समय।',
    'testimonials.rajesh.content': 'डैशबोर्ड नागरिक रिपोर्ट्स को ट्रैक और प्रबंधित करना बहुत आसान बनाता है। नागरिक प्रबंधन के लिए बेहतरीन उपकरण।',
    'testimonials.anjali.content': 'आखिरकार, एक प्लेटफॉर्म जहां नागरिकों की आवाज़ सुनी जाती है। पारदर्शिता सराहनीय है।',
    
    // CTA Section
    'cta.title': 'बदलाव लाने के लिए तैयार हैं?',
    'cta.description': 'हजारों नागरिकों से जुड़ें जो पहले से ही अपने समुदायों को बेहतर बनाने के लिए आवाज़ का उपयोग कर रहे हैं। आपकी आवाज़ मायने रखती है, और मिलकर हम स्मार्ट शहर बना सकते हैं।',
    'cta.get.started': 'मुफ्त शुरुआत करें',
    'cta.report.now': 'अभी रिपोर्ट करें',
    'cta.available': 'हमेशा उपलब्ध',
    'cta.free': 'उपयोग के लिए मुफ्त',
    'cta.secure': 'डेटा सुरक्षित',
  },
  mr: {
    // Navigation
    'nav.home': 'मुख्यपृष्ठ',
    'nav.report': 'तक्रार नोंदवा',
    'nav.dashboard': 'डॅशबोर्ड',
    'nav.services': 'सेवा',
    'nav.contact': 'संपर्क',
    'nav.feedback': 'अभिप्राय',
    'nav.agencies': 'एजन्सी',
    'nav.signin': 'साइन इन',
    'nav.register': 'नोंदणी',
    
    // Hero Section
    'hero.tagline': 'तुमचा आवाज, तुमचे शहर, तुमची जबाबदारी',
    'hero.title': 'आवाज',
    'hero.subtitle': 'नागरिकांना सक्षम करणे',
    'hero.description': 'नागरी समस्यांचा अहवाल द्या, वास्तविक वेळेत प्रगती ट्रॅक करा, आणि एक स्मार्ट, अधिक प्रतिसादात्मक समुदाय तयार करण्यासाठी तुमच्या नगरपालिका सरकारसह सहकार्य करा.',
    'hero.report.button': 'समस्या नोंदवा',
    'hero.dashboard.button': 'डॅशबोर्ड पहा',
    
    // Stats Section
    'stats.title': 'संख्येतील प्रभाव',
    'stats.description': 'पहा की आवाज समुदायांमध्ये नागरी सहभाग कसा बदलत आहे',
    'stats.total.reports': 'एकूण अहवाल',
    'stats.resolved.issues': 'निराकरण झालेल्या समस्या',
    'stats.active.citizens': 'सक्रिय नागरिक',
    'stats.response.time': 'सरासरी प्रतिसाद वेळ',
    'stats.days': ' दिवस',
    
    // Features Section
    'features.title': 'नागरिकांना सक्षम करणे, सरकारला सक्षम करणे',
    'features.description': 'आमचे प्लॅटफॉर्म नागरिक आणि नगरपालिका सेवांमधील अंतर कमी करते, अत्याधुनिक तंत्रज्ञानाद्वारे नागरी व्यवस्थापनात पारदर्शकता आणि उत्तरदायित्व निर्माण करते.',
    'features.reporting.title': 'सोपी अहवाल',
    'features.reporting.description': 'फक्त काही टॅप्सने समस्यांचा अहवाल द्या. तत्काळ फोटो, स्थान आणि वर्णन जोडा.',
    'features.tracking.title': 'वास्तविक-वेळ ट्रॅकिंग',
    'features.tracking.description': 'लाइव्ह स्टेटस अपडेटसह सबमिशनपासून निराकरणापर्यंत तुमच्या अहवालांचा मागोवा घ्या.',
    'features.maps.title': 'परस्परसंवादी नकाशे',
    'features.maps.description': 'हीट झोन आणि फिल्टरसह परस्परसंवादी नकाशांवर शहर-व्यापी समस्यांचे दृश्यीकरण करा.',
    'features.engagement.title': 'सामुदायिक सहभाग',
    'features.engagement.description': 'नगरपालिका अधिकाऱ्यांशी जोडले रहा आणि प्रगतीवर अपडेट्स मिळवा.',
    
    // Achievements Section
    'achievements.title': 'ओळख आणि विश्वास',
    'achievements.description': 'लाखो लोकांचा विश्वास, उद्योग नेत्यांची मान्यता',
    'achievements.excellence.title': 'शासनातील उत्कृष्टता',
    'achievements.excellence.description': 'डिजिटल इंडिया पुरस्कार 2024 च्या विजेते',
    'achievements.trusted.title': 'विश्वसनीय प्लॅटफॉर्म',
    'achievements.trusted.description': 'डेटा सुरक्षेसाठी ISO 27001 प्रमाणित',
    'achievements.impact.title': 'प्रभाव संचालित',
    'achievements.impact.description': '89% नागरिक समाधान दर',
    
    // Testimonials Section
    'testimonials.title': 'आमचे वापरकर्ते काय म्हणतात',
    'testimonials.description': 'नागरिक आणि नगरपालिका अधिकाऱ्यांचे वास्तविक अनुभव',
    'testimonials.priya.content': 'आवाजने मला माझ्या भागातील तुटलेल्या स्ट्रीट लाइटची नोंद करण्यास मदत केली. ते 3 दिवसांत दुरुस्त झाले! आश्चर्यकारक प्रतिसाद वेळ.',
    'testimonials.rajesh.content': 'डॅशबोर्डमुळे नागरिकांच्या अहवालांचा मागोवा घेणे आणि व्यवस्थापन करणे खूप सोपे होते. नागरी व्यवस्थापनासाठी उत्तम साधन.',
    'testimonials.anjali.content': 'शेवटी, एक प्लॅटफॉर्म जेथे नागरिकांचा आवाज ऐकला जातो. पारदर्शकता प्रशंसनीय आहे.',
    
    // CTA Section
    'cta.title': 'बदल घडवण्यास तयार आहात?',
    'cta.description': 'हजारो नागरिकांसह सामील व्हा जे आधीच त्यांच्या समुदायांच्या सुधारणेसाठी आवाज वापरत आहेत. तुमचा आवाज महत्त्वाचा आहे, आणि एकत्र आपण स्मार्ट शहरे बनवू शकतो.',
    'cta.get.started': 'विनामूल्य सुरुवात करा',
    'cta.report.now': 'आता अहवाल द्या',
    'cta.available': 'नेहमी उपलब्ध',
    'cta.free': 'वापरण्यासाठी विनामूल्य',
    'cta.secure': 'डेटा संरक्षित',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const t = (key: string): string => {
    const translation = translations[currentLanguage.code as keyof typeof translations];
    return translation?.[key as keyof typeof translation] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};