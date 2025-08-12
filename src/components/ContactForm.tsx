import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.contactForm.success,
      description: "Θα επικοινωνήσουμε μαζί σας σύντομα."
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="glass-card p-6 rounded-xl animate-fade-in [animation-delay:200ms]">
      <h3 className="text-xl font-semibold mb-6">{t.contactForm.title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder={t.contactForm.name}
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <Input
          type="tel"
          placeholder={t.contactForm.phone}
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          required
        />
        <Input
          type="email"
          placeholder={t.contactForm.email}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
          <SelectTrigger>
            <SelectValue placeholder={t.contactForm.service} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electrical">Ηλεκτρολογικές Εργασίες</SelectItem>
            <SelectItem value="smart-home">Έξυπνο Σπίτι</SelectItem>
            <SelectItem value="industrial">Βιομηχανικά Έργα</SelectItem>
            <SelectItem value="maintenance">Συντήρηση</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          placeholder={t.contactForm.message}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        />
        <Button type="submit" className="w-full btn-primary">
          {t.contactForm.submit}
        </Button>
      </form>
    </div>
  );
}