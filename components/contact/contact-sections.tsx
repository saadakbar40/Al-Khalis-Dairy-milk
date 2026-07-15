'use client';

import { useState } from 'react';
import { Send, Check, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SiteConfig } from '@/lib/site-config';
import { Reveal } from '@/components/shared/reveal';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('done');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  if (status === 'done') {
    return (
      <Reveal>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="h-7 w-7" />
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold">Message Sent!</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Thank you for reaching out. We&apos;ll get back to you within one business day.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" required value={form.name} onChange={update('name')} placeholder="Saad Akbar" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" value={form.phone} onChange={update('phone')} placeholder="03061487240" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="saad.akbar.global@gmail.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" value={form.subject} onChange={update('subject')} placeholder="How can we help?" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          required
          value={form.message}
          onChange={update('message')}
          rows={5}
          placeholder="Tell us what you need..."
        />
      </div>
      <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? (
          'Sending...'
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send Message
          </>
        )}
      </Button>
    </form>
  );
}

export function ContactInfoCards() {
  const { contact, hours, whatsappNumber } = SiteConfig;
  const socialEntries = Object.entries(SiteConfig.social);

  return (
    <div className="space-y-4">
      {/* Address */}
      <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold">Business Address</h3>
          <p className="mt-1 text-sm text-muted-foreground">{contact.address.full}</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Phone className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">Phone Numbers</h3>
          <div className="mt-1 space-y-0.5 text-sm">
            <a href={`tel:${contact.phonePrimary.replace(/\s/g, '')}`} className="block text-muted-foreground hover:text-primary">
              {contact.phonePrimary}
            </a>
            <a href={`tel:${contact.phoneSecondary.replace(/\s/g, '')}`} className="block text-muted-foreground hover:text-primary">
              {contact.phoneSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold">Email</h3>
          <a href={`mailto:${contact.email}`} className="mt-1 block text-sm text-muted-foreground hover:text-primary">
            {contact.email}
          </a>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
          <MessageCircle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold">WhatsApp</h3>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-sm text-muted-foreground hover:text-primary"
          >
            {contact.whatsapp}
          </a>
        </div>
      </div>

      {/* Hours */}
      <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Clock className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">Business Hours</h3>
          <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-right">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-semibold">Follow Us</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {socialEntries.map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-3 py-1.5 text-xs font-medium capitalize text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
