'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { Mail, ShieldCheck, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setSubmitSuccess('Thank you. Your inquiry has been transmitted to our management team.');
        reset();
      } else {
        setSubmitError(result.error || 'Failed to send message.');
      }
    } catch (err) {
      setSubmitError('An unexpected server error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF9F6] border-b border-[#E7E7E7] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Title */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#666666] block mb-3">Get In Touch</span>
          <h2 className="font-serif text-5xl md:text-8xl font-light text-[#111111] tracking-tight uppercase leading-none">
            Inquiries
          </h2>
          <div className="w-16 h-[1px] bg-[#111111] mt-6"></div>
        </div>

        {/* 2 Column Editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Portrait & Booking Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-[4/5] bg-white border border-[#E7E7E7] p-2">
              <img 
                src="/profile/jon-roseman-agent-murdered-television-presenter-jill-440nw-9032981a.jpg" 
                alt="Jon Roseman Contact Representation" 
                className="w-full h-full object-cover grayscale" 
              />
            </div>

            {/* Direct Contacts list */}
            <div className="space-y-6 pt-4 text-xs">
              <div className="border-b border-[#E7E7E7] pb-4">
                <span className="text-[9px] uppercase tracking-widest text-[#666666] block mb-1">Press & Media Contact</span>
                <a href="mailto:press@jonroseman.com" className="font-semibold text-[#111111] hover:underline">press@jonroseman.com</a>
              </div>
              <div className="border-b border-[#E7E7E7] pb-4">
                <span className="text-[9px] uppercase tracking-widest text-[#666666] block mb-1">Corporate Speaking & Booking</span>
                <a href="mailto:booking@jonroseman.com" className="font-semibold text-[#111111] hover:underline">booking@jonroseman.com</a>
              </div>
              <div className="pb-4">
                <span className="text-[9px] uppercase tracking-widest text-[#666666] block mb-1">Representation & Management</span>
                <a href="mailto:management@jonroseman.com" className="font-semibold text-[#111111] hover:underline">management@jonroseman.com</a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-3xl md:text-4xl font-light text-[#111111] leading-tight">
                Let's Create Something Timeless.
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed font-light">
                Submit an inquiry below for literary contracts, consulting bookings, and broadcast comments. 
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-semibold text-[#111111] block">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full bg-white border border-[#E7E7E7] px-4 py-3 text-xs focus:border-[#111111] outline-hidden transition-colors"
                  placeholder="e.g. Sterling Cooper"
                />
                {errors.name && (
                  <p className="text-[10px] text-red-600 font-semibold">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-semibold text-[#111111] block">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full bg-white border border-[#E7E7E7] px-4 py-3 text-xs focus:border-[#111111] outline-hidden transition-colors"
                  placeholder="e.g. email@company.com"
                />
                {errors.email && (
                  <p className="text-[10px] text-red-600 font-semibold">{errors.email.message}</p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label htmlFor="company" className="text-[10px] uppercase tracking-widest font-semibold text-[#111111] block">
                  Company / Organization
                </label>
                <input
                  id="company"
                  type="text"
                  {...register('company')}
                  className="w-full bg-white border border-[#E7E7E7] px-4 py-3 text-xs focus:border-[#111111] outline-hidden transition-colors"
                  placeholder="e.g. Broadcast Corporation"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-semibold text-[#111111] block">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message')}
                  className="w-full bg-white border border-[#E7E7E7] px-4 py-3 text-xs focus:border-[#111111] outline-hidden transition-colors resize-y"
                  placeholder="Describe your inquiry..."
                ></textarea>
                {errors.message && (
                  <p className="text-[10px] text-red-600 font-semibold">{errors.message.message}</p>
                )}
              </div>

              {/* Status Feedbacks */}
              {submitSuccess && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 text-xs font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 stroke-1.5" />
                  <span>{submitSuccess}</span>
                </div>
              )}
              {submitError && (
                <div className="bg-red-50 border border-red-300 text-red-800 p-4 text-xs font-medium">
                  {submitError}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#111111] text-[#FAF9F6] border border-[#111111] py-4 px-10 text-[10px] uppercase tracking-widest font-semibold hover:bg-[#666666] hover:border-[#666666] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
