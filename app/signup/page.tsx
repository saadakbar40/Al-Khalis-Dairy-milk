'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Loader2, Check } from 'lucide-react';
import { AuthLayout } from '@/components/shared/auth-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/providers/auth-provider';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function SignUpPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Frontend-only simulation — ready for Supabase auth integration
    setTimeout(() => {
      signIn({
        id: `user-${Date.now()}`,
        name: form.name,
        email: form.email,
      });
      toast.success('Account created! Welcome to Al Khalis Dairy.');
      setLoading(false);
      router.push('/');
    }, 1200);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const passwordChecks = [
    { label: 'At least 8 characters', valid: form.password.length >= 8 },
    { label: 'Contains a number', valid: /\d/.test(form.password) },
    { label: 'Contains a letter', valid: /[a-zA-Z]/.test(form.password) },
  ];

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join Al Khalis Dairy for fresh, pure dairy delivered to your door."
      footer={
        <>
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="name"
              required
              value={form.name}
              onChange={update('name')}
              placeholder="Saad Akbar"
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              placeholder="you@example.com"
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={form.password}
              onChange={update('password')}
              placeholder="Create a strong password"
              className="pl-10 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          {/* Password strength indicator */}
          {form.password.length > 0 && (
            <div className="mt-2 space-y-1.5">
              {passwordChecks.map((check) => (
                <div
                  key={check.label}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <span
                    className={cn(
                      'flex h-4 w-4 items-center justify-center rounded-full transition-colors',
                      check.valid ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    )}
                  >
                    {check.valid && <Check className="h-2.5 w-2.5" />}
                  </span>
                  {check.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
          />
          <span>
            I agree to the{' '}
            <Link href="/terms" className="font-medium text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>
          </span>
        </label>

        <Button type="submit" size="lg" disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating account…
            </>
          ) : (
            <>
              Create Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </AuthLayout>
  );
}
