import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'react-hot-toast';
import { CheckCircle2, ShieldCheck, Clock, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  zipCode: z.string().min(5, "Valid ZIP code required"),
  service: z.string().min(1, "Please select a service"),
});

type FormValues = z.infer<typeof formSchema>;

export const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "Replacement"
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://yl5vj5e4--submit-lead.functions.blink.new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast.success("Estimate Request Sent! We'll call you shortly.", {
        style: { background: '#1F2937', color: '#fff' }
      });
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="estimate" className="py-24 relative overflow-hidden light-section">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Get Your <span className="text-primary">Free Quote</span> <br />
                In Minutes.
              </h2>
              <p className="text-lg mb-8 leading-relaxed max-w-xl">
                Ready to protect your home with the best roofing service in the area? Fill out the form and our team will contact you within 24 hours for a free, no-obligation inspection and estimate.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-slate-800">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold">No hidden fees or surprises</span>
                </div>
                <div className="flex items-center gap-4 text-slate-800">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold">Fast response & same-day tarping</span>
                </div>
                <div className="flex items-center gap-4 text-slate-800">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold">Fully licensed, bonded & insured</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-slate-50 backdrop-blur-xl border border-slate-200 p-8 md:p-12 rounded-[2rem] shadow-2xl relative"
          >
            <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg animate-bounce">
              Special Offer Available
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-900 font-bold ml-1">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Torres" 
                    {...register('name')}
                    className="bg-white border-slate-200 h-12 rounded-xl focus:border-primary focus:ring-primary transition-all text-slate-900 placeholder:text-slate-400"
                  />
                  {errors.name && <p className="text-red-500 text-xs ml-1 font-medium">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-900 font-bold ml-1">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="(555) 000-0000" 
                    {...register('phone')}
                    className="bg-white border-slate-200 h-12 rounded-xl focus:border-primary focus:ring-primary transition-all text-slate-900 placeholder:text-slate-400"
                  />
                  {errors.phone && <p className="text-red-500 text-xs ml-1 font-medium">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-slate-900 font-bold ml-1 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> ZIP Code
                  </Label>
                  <Input 
                    id="zipCode" 
                    placeholder="12345" 
                    {...register('zipCode')}
                    className="bg-white border-slate-200 h-12 rounded-xl focus:border-primary focus:ring-primary transition-all text-slate-900 placeholder:text-slate-400"
                  />
                  {errors.zipCode && <p className="text-red-500 text-xs ml-1 font-medium">{errors.zipCode.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-slate-900 font-bold ml-1">What do you need?</Label>
                  <Select onValueChange={(val) => setValue('service', val)}>
                    <SelectTrigger className="bg-white border-slate-200 h-12 rounded-xl focus:ring-primary text-slate-900">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-slate-200 text-slate-900">
                      <SelectItem value="Repair">Roof Repair</SelectItem>
                      <SelectItem value="Replacement">Roof Replacement</SelectItem>
                      <SelectItem value="Inspection">Roof Inspection</SelectItem>
                      <SelectItem value="Storm">Storm Damage Help</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-red-500 text-xs ml-1 font-medium">{errors.service.message}</p>}
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-black h-14 rounded-xl text-lg shadow-lg shadow-primary/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? "Sending Request..." : "Request My Free Estimate Now"}
              </Button>
              
              <p className="text-[10px] text-center text-slate-400 px-8">
                By submitting this form, you agree to be contacted by Torres Roofing Co. regarding your service request. We value your privacy and never sell your data.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />
    </section>
  );
};
