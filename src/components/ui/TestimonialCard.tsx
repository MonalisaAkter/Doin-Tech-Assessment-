import { Star } from 'lucide-react';

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export function TestimonialCard({ name, role, avatar, quote }: Testimonial) {
  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-8">
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="h-14 w-14 rounded-full object-cover" />
        <div>
          <p className="font-poppins text-label-l font-semibold text-gray-950">{name}</p>
          <p className="font-satoshi text-body-s text-gray-400">{role}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-lime-400 text-lime-400" />)}
      </div>
      <p className="text-body-m leading-relaxed text-gray-700">{quote}</p>
    </article>
  );
}
