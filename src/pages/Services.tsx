import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Zap, Home, Settings, Wrench, Car } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/10 dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Smart Home GR
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.services.title}
              </h1>
              <p className="text-muted-foreground">
                {t.services.subtitle}
              </p>
            </div>
          </div>
        </section>
        
        {Object.keys(t.services.categories).map((category) => {
          const categoryData = t.services.categories[category as keyof typeof t.services.categories];
          const icons = {
            electrical: <Zap className="h-8 w-8" />,
            smartHome: <Home className="h-8 w-8" />,
            industrial: <Settings className="h-8 w-8" />,
            evCharging: <Car className="h-8 w-8" />
          };
          
          return (
            <section key={category} className="py-16">
              <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary inline-flex">
                    {icons[category as keyof typeof icons]}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    {categoryData.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {categoryData.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categoryData.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="glass-card p-6 rounded-xl flex flex-col items-center text-center animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                        <Wrench className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      
      <Footer />
    </div>
  );
}