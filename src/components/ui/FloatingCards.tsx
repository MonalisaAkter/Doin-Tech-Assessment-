import { Star } from 'lucide-react';

const glass = 'rounded-2xl bg-white p-4 backdrop-blur-[10px]';

export function ProgressCard({ className = '' }: { className?: string }) {
  return (
    <div className={`${glass} flex flex-col gap-2 ${className}`}>
      <p className="font-satoshi text-label-s text-gray-950">Learning Progress</p>
      <p className="font-poppins text-5xl font-semibold leading-[1.2] tracking-[-0.48px] text-gray-950">55%</p>
      <div className="h-2 w-[200px] overflow-hidden rounded-3xl bg-gray-100"><div className="h-full w-[56%] rounded-3xl bg-lime-400" /></div>
    </div>
  );
}

export function HappyStudentsCard({ className = '', tone = 'white' }: { className?: string; tone?: 'white' | 'lime' }) {
  const lime = tone === 'lime';
  return (
    <div className={`flex w-[258px] flex-col justify-center gap-2 rounded-2xl p-4 backdrop-blur-[10px] ${lime ? 'bg-lime-400' : 'bg-white'} ${className}`}>
      <div>
        <p className="font-satoshi text-label-m text-gray-950">Happy Students</p>
        <div className="flex items-center"><p className="font-satoshi text-body-xs text-gray-400"><span className="text-gray-950">4.5 </span>(240)</p><Star className={`h-4 w-4 ${lime ? 'text-blue-800' : 'fill-lime-400 text-lime-400'}`} /></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">{[1, 2, 3, 4, 5, 6, 7].map((i) => <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-gray-300 to-gray-500" />)}</div>
        <span className={`rounded-full px-2 py-0.5 font-satoshi text-body-xs font-medium ${lime ? 'bg-gray-950 text-gray-50' : 'bg-gray-100 text-gray-950'}`}>2K+</span>
      </div>
    </div>
  );
}

export function TopicStatCard({ className = '' }: { className?: string }) {
  return (
    <div className={`${glass} flex flex-col justify-center ${className}`}>
      <p className="font-satoshi text-label-m text-gray-950">UI/UX Design</p>
      <p className="flex items-start gap-2 whitespace-nowrap text-gray-400"><span className="font-satoshi text-body-xs">200 Courses</span><span className="font-satoshi text-xs">•</span><span className="font-satoshi text-body-xs">1000+ Students</span></p>
    </div>
  );
}

export function RevenueCard({ title, period, amount, wide = false, className = '' }: { title: string; period: string; amount: string; wide?: boolean; className?: string }) {
  const badge = <span className="rounded-3xl bg-lime-500 px-2 py-0.5 font-satoshi text-[10px] font-medium leading-5 text-gray-950">+12$</span>;
  return (
    <div className={`flex flex-col items-start gap-2 rounded-2xl bg-blue-800 p-4 backdrop-blur-[10px] ${className}`}>
      <div className="whitespace-nowrap text-gray-50"><p className="font-satoshi text-label-m">{title}</p><p className="font-satoshi text-[10px] leading-[1.2]">{period}</p></div>
      {wide ? <><div className="flex w-[200px] items-center justify-between"><p className="font-poppins text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray-50">{amount}</p>{badge}</div><div className="h-2 w-[200px] overflow-hidden rounded-3xl bg-white"><div className="h-full w-[56%] rounded-3xl bg-lime-400" /></div></> : <><p className="whitespace-nowrap font-poppins text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray-50">{amount}</p>{badge}</>}
    </div>
  );
}
