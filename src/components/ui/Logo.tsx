import { GraduationCap } from 'lucide-react';

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const textColor = tone === 'light' ? 'text-white' : 'text-gray-950';
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400"><GraduationCap className="h-5 w-5 text-gray-950" /></div>
      <span className={`font-poppins text-xl font-semibold tracking-[-0.01em] ${textColor}`}>ByteSpace</span>
    </div>
  );
}
