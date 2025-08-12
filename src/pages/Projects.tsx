import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/10 dark:to-background" style={{ backgroundImage: `url('/lovable-uploads/72f68b90-8e45-4cc5-a0d2-d3c8b1b5e709.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-white/80 dark:bg-background/80"></div>
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.projects.title}
              </h1>
              <p className="text-muted-foreground">
                {t.projects.subtitle}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 relative" style={{ backgroundImage: `url('/lovable-uploads/72f68b90-8e45-4cc5-a0d2-d3c8b1b5e709.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-white/90 dark:bg-background/90"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">{t.projects.completedProjects}</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">{t.projects.satisfiedClients}</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">{t.projects.yearsExperience}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}