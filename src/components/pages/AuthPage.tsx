import { useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { studentImage } from '../../data/home';

type AuthPageProps = { mode: 'login' | 'signup'; onBack: () => void; onSubmit: () => void };

function Field({ label, type = 'text', placeholder, value, onChange }: { label: string; type?: string; placeholder: string; value: string; onChange: (value: string) => void }) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === 'password';
  return (
    <label className="flex flex-col gap-2 font-satoshi text-label-s text-gray-950">
      {label}
      <span className="relative">
        <input type={isPassword && visible ? 'text' : type} required value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 font-satoshi text-body-m text-gray-950 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-800 focus:ring-1 focus:ring-blue-800" />
        {isPassword && <button type="button" aria-label={visible ? 'Hide password' : 'Show password'} onClick={() => setVisible((v) => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-950">{visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}</button>}
      </span>
    </label>
  );
}

export function AuthPage({ mode, onBack, onSubmit }: AuthPageProps) {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [name, setName] = useState(''); const [submitted, setSubmitted] = useState(false); const signup = mode === 'signup';
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); onSubmit(); };
  return (
    <div className="min-h-screen bg-gray-50 lg:grid lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-blue-800 lg:flex lg:items-center lg:justify-center"><div className="absolute inset-0 bg-grid opacity-60" /><div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full border-[3px] border-lime-400/30" /><img src={studentImage} alt="Student learning online" className="relative z-10 h-[70vh] w-[68%] rounded-[32px] object-cover shadow-card-a" /><div className="absolute bottom-16 left-16 z-20 max-w-[360px] rounded-2xl bg-lime-400 p-5"><p className="font-poppins text-2xl font-semibold text-gray-950">Learn without limits.</p><p className="mt-2 font-satoshi text-body-m text-gray-950/70">Build the skills that move your life forward with ByteSpace.</p></div></div>
      <div className="flex min-h-screen flex-col px-6 py-8 sm:px-12 lg:px-20 lg:py-12"><button onClick={onBack} className="flex w-fit items-center gap-2 font-satoshi text-label-s text-gray-700 hover:text-blue-800"><ArrowLeft className="h-4 w-4" />Back to home</button><div className="flex flex-1 items-center justify-center py-12"><div className="w-full max-w-[440px]"><Logo /><h1 className="mt-10 font-poppins text-heading-m font-semibold text-gray-950">{signup ? 'Sign up and come in' : 'Sign in with ease'}</h1><p className="mt-4 font-satoshi text-body-m text-gray-700">{signup ? 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.' : 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}</p>{submitted ? <div className="mt-10 rounded-2xl border border-lime-500/30 bg-lime-400/20 p-6"><p className="font-poppins text-heading-xs font-semibold text-gray-950">You're all set.</p><p className="mt-2 font-satoshi text-body-m text-gray-700">{signup ? 'Your account is ready to explore.' : 'Welcome back to ByteSpace.'}</p><Button className="mt-5" onClick={onBack}>Continue browsing</Button></div> : <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">{signup && <Field label="Full name" placeholder="Your full name" value={name} onChange={setName} />}<Field label="Email address" type="email" placeholder="you@example.com" value={email} onChange={setEmail} /><Field label="Password" type="password" placeholder="Enter your password" value={password} onChange={setPassword} />{!signup && <div className="flex justify-end"><button type="button" className="font-satoshi text-body-s text-blue-800 hover:underline">Forgot password?</button></div>}<Button type="submit" size="lg" className="mt-2 w-full">{signup ? 'Create account' : 'Sign in'}<ArrowRight className="h-5 w-5" /></Button></form>}<p className="mt-8 text-center font-satoshi text-body-s text-gray-700">{signup ? 'Already have an account?' : "Don't have an account?"}{' '}<button onClick={() => {}} className="font-medium text-blue-800 hover:underline">{signup ? 'Sign in' : 'Join us'}</button></p></div></div></div>
    </div>
  );
}
