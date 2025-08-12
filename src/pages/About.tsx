import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle } from "lucide-react";

export default function About() {
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
                {t.about.title}
              </h1>
              <p className="text-muted-foreground">
                {t.about.subtitle}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 relative" style={{ backgroundImage: `url('/lovable-uploads/55d7b6cc-5088-4747-beb7-0fcac32101fb.png')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">{t.about.story.title}</h2>
                <p className="text-white/80 mb-8">{t.about.story.content}</p>
                
                <h2 className="text-3xl font-bold mb-4 text-white">{t.about.mission.title}</h2>
                <p className="text-white/80">{t.about.mission.content}</p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">{t.about.values.title}</h2>
                <div className="space-y-6">
                  {t.about.values.items.map((value, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2 text-white">{value.title}</h3>
                        <p className="text-white/80">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}