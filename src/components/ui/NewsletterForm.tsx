import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); if (email.trim()) setSubmitted(true); };

  if (submitted) return <p className="font-satoshi text-body-s text-blue-800">Thanks for subscribing! Check your inbox for confirmation.</p>;

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-[504px] items-center gap-2">
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="h-12 flex-1 rounded-3xl border border-gray-200 bg-white px-5 font-satoshi text-body-m text-gray-950 outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800" />
      <button type="submit" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-blue-800 text-white transition-colors hover:bg-blue-900" aria-label="Subscribe"><ArrowRight className="h-5 w-5" /></button>
    </form>
  );
}
