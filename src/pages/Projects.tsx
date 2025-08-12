import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle } from "lucide-react";

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
        
        <section className="py-16">
          <div className="container">
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

        {/* Featured Project Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {t.projects.categories.smartHome}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4">
                    {t.projects.featured.intercom.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t.projects.featured.intercom.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {/* Image Carousel */}
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/bca7083d-6baa-4452-93c4-1e30c8f894d3.png"
                              alt="Θυροτηλεόραση με έγχρωμη οθόνη και κουμπιά ελέγχου"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/7abf9671-1090-4643-a313-8c0048a9117b.png"
                              alt="Εγκατεστημένη θυροτηλεόραση σε τοίχο με διακόπτες"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/d06f734b-c422-4d97-9d16-0856362c5222.png"
                              alt="Πάνελ ελέγχου εισόδου με κάμερα και αναγνώστη καρτών"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {t.projects.featured.intercom.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}