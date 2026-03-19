import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.jsx';
import { toast } from 'sonner';

const formSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  teamSize: z.string().min(1, 'Please select team size'),
  currentCRM: z.string().min(1, 'Please select your current CRM'),
  message: z.string().optional(),
});

const BookDemoModal = ({ open, onOpenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Store in localStorage
    const submission = {
      ...data,
      timestamp: new Date().toISOString(),
    };
    
    const existingSubmissions = JSON.parse(localStorage.getItem('demoRequests') || '[]');
    existingSubmissions.push(submission);
    localStorage.setItem('demoRequests', JSON.stringify(existingSubmissions));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast.success('Thanks! We\'ll be in touch within 24 hours to discuss your sales scenario.');
    
    // Reset form and close modal after 2 seconds
    setTimeout(() => {
      reset();
      setIsSuccess(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book a demo</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--accent-color))]/10">
              <svg
                className="h-6 w-6 text-[hsl(var(--accent-color))]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-foreground">
              Thanks! We'll be in touch within 24 hours to discuss your sales scenario.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-foreground">Company name</Label>
              <Input
                id="companyName"
                {...register('companyName')}
                placeholder="Acme Industries"
                className="bg-background text-foreground border-input"
              />
              {errors.companyName && (
                <p className="text-sm text-destructive">{errors.companyName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">Full name</Label>
              <Input
                id="fullName"
                {...register('fullName')}
                placeholder="Maya Chen"
                className="bg-background text-foreground border-input"
              />
              {errors.fullName && (
                <p className="text-sm text-destructive">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="maya@acme.com"
                className="bg-background text-foreground border-input"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Phone</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="+1 (555) 123-4567"
                className="bg-background text-foreground border-input"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamSize" className="text-foreground">Sales team size</Label>
              <Select onValueChange={(value) => setValue('teamSize', value)}>
                <SelectTrigger className="bg-background text-foreground border-input">
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5 reps</SelectItem>
                  <SelectItem value="6-15">6-15 reps</SelectItem>
                  <SelectItem value="16-50">16-50 reps</SelectItem>
                  <SelectItem value="51+">51+ reps</SelectItem>
                </SelectContent>
              </Select>
              {errors.teamSize && (
                <p className="text-sm text-destructive">{errors.teamSize.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentCRM" className="text-foreground">Current CRM</Label>
              <Select onValueChange={(value) => setValue('currentCRM', value)}>
                <SelectTrigger className="bg-background text-foreground border-input">
                  <SelectValue placeholder="Select your CRM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salesforce">Salesforce</SelectItem>
                  <SelectItem value="hubspot">HubSpot</SelectItem>
                  <SelectItem value="pipedrive">Pipedrive</SelectItem>
                  <SelectItem value="zoho">Zoho CRM</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.currentCRM && (
                <p className="text-sm text-destructive">{errors.currentCRM.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">Message (optional)</Label>
              <Textarea
                id="message"
                {...register('message')}
                placeholder="Tell us about your sales process..."
                rows={3}
                className="bg-background text-foreground border-input"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[hsl(var(--accent-color))] text-white hover:bg-[hsl(var(--accent-hover))] active:scale-[0.98] transition-all duration-200"
            >
              {isSubmitting ? 'Submitting...' : 'Submit request'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoModal;