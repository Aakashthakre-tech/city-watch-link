import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' }
];

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const handleLanguageChange = (language: typeof languages[0]) => {
    setCurrentLanguage(language);
    // In a real app, this would trigger translation logic
    console.log(`Language changed to: ${language.name}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-9 px-3 text-foreground hover:bg-accent/50 transition-colors"
        >
          <Globe className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
          <span className="sm:hidden">{currentLanguage.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-card border shadow-lg">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={`cursor-pointer transition-colors ${
              currentLanguage.code === language.code 
                ? 'bg-primary/10 text-primary font-medium' 
                : 'hover:bg-accent/50'
            }`}
          >
            <span className="font-medium">{language.nativeName}</span>
            <span className="text-muted-foreground ml-auto text-xs">
              {language.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;