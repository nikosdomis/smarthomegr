
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in [animation-delay:100ms]">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/a25c13ff-0a30-4acc-82b4-cb409346e62d.png" 
                alt="Smart Home GR Logo" 
                className="h-10 w-auto"
              />
              
            </div>
            <p className="text-muted-foreground mb-4">
              {t.footer.description}
            </p>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">{t.nav.projects}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t.nav.contact}</Link></li>
              <li><a href="tel:+306972362235" className="hover:text-primary transition-colors">{t.nav.callNow}</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  {t.footer.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">{t.footer.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">info@smarthomegr.gr</span>
              </li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-3">Ακολουθήστε μας</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/p/Smart-Home-GR-Electrical-solutions-61565048170292/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Facebook size={18} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a 
                  href="https://www.youtube.com/@SmartHome_GR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Youtube size={18} />
                  <span className="sr-only">YouTube</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@smart.home.gr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span className="sr-only">TikTok</span>
                </a>
                <a 
                  href="https://www.instagram.com/smart_home__gr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Instagram size={18} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:400ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.newsletter}</h4>
            <p className="text-muted-foreground mb-4">
              {t.footer.newsletterDesc}
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder={t.footer.yourEmail} 
                className="rounded-md px-4 py-2 bg-muted text-foreground"
                required 
              />
              <button 
                type="submit" 
                className="btn-primary mt-2"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground relative">
          {/* Logo positioned on the right side of the border line */}
          <div className="absolute right-0 -top-16">
            <img 
              src="/lovable-uploads/a25c13ff-0a30-4acc-82b4-cb409346e62d.png" 
              alt="Smart Home GR Logo" 
              className="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <p>&copy; {currentYear} Smart Home GR - Electrical Solutions. {t.footer.allRights}</p>
        </div>
      </div>
    </footer>
  );
}
