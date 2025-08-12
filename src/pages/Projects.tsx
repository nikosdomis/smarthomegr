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

        {/* Featured Projects Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Intercom Project */}
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

              {/* LED Wardrobe Project */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {t.projects.categories.smartHome}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4">
                    {t.projects.featured.ledWardrobe.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t.projects.featured.ledWardrobe.description}
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
                              src="/lovable-uploads/444c6354-d57c-441c-a3aa-52511ed72ccd.png"
                              alt="Ντουλάπα με φωτισμό LED και ράφια"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/76584640-8c13-40d0-8e6d-f128320e5003.png"
                              alt="Λεπτομέρεια ταινίας LED COB σε ντουλάπα"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/0ee6db5f-b4c1-4043-9b38-26af95d547d0.png"
                              alt="Εσωτερικό ντουλάπας με φωτισμό LED"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/b64a2a78-a8d9-49b3-afc3-6da1d6fc4ae7.png"
                              alt="Ολοκληρωμένη ντουλάπα με φωτισμό LED"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/4675449c-abfc-42af-a85b-0f0a44793919.png"
                              alt="Ντουλάπα με ανοιχτές πόρτες και φωτισμό LED"
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
                    {t.projects.featured.ledWardrobe.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Comprehensive Lighting Project */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {t.projects.categories.smartHome}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4">
                    {t.projects.featured.comprehensiveLighting.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t.projects.featured.comprehensiveLighting.description}
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
                              src="/lovable-uploads/ceiling-led-fixture.jpg"
                              alt="Εγκατεστημένος φωτισμός οροφής LED"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/pendant-led-light.jpg"
                              alt="Μοντέρνος κρεμαστός φωτισμός LED"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/linear-led-ceiling.jpg"
                              alt="Γραμμικός φωτισμός LED σε οροφή"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/kitchen-led-strips.jpg"
                              alt="Φωτισμός κουζίνας κάτω από ντουλάπια"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/track-led-spots.jpg"
                              alt="Σποτ φωτισμός σε ράγα"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/smart-intercom-led.jpg"
                              alt="Σύστημα θυροτηλεόρασης με φωτισμό LED"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/floor-led-lighting.jpg"
                              alt="Φωτισμός δαπέδου LED κάτω από πόρτα"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/mirror-led-backlight.jpg"
                              alt="Καθρέφτης μπάνιου με οπίσθιο φωτισμό LED"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/bathroom-ceiling-led.jpg"
                              alt="Φωτισμός οροφής μπάνιου με ταινία LED"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/shower-ceiling-led.jpg"
                              alt="Φωτισμός ντουζιέρας με ταινία LED στην οροφή"
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
                    {t.projects.featured.comprehensiveLighting.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Dimmable LED Project */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {t.projects.categories.smartHome}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4">
                    {t.projects.featured.dimmableLed.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t.projects.featured.dimmableLed.description}
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
                              src="/lovable-uploads/423759a7-9b01-494a-a8f3-28139dc33a42.png"
                              alt="Γραμμικός φωτισμός LED σε εξωτερικό χώρο"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/88cfac4b-f082-484d-b6d1-5ad16fbf6576.png"
                              alt="Περιμετρικός φωτισμός LED σε βεράντα"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img 
                              src="/lovable-uploads/95318472-d238-4e79-a2c7-fb096bb7be54.png"
                              alt="Ντιμαρισμένος φωτισμός LED σε χαμηλή ένταση"
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
                    {t.projects.featured.dimmableLed.features.map((feature, index) => (
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