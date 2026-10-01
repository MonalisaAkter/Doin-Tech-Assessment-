import { TestimonialCard, type Testimonial } from '../ui/TestimonialCard';
import { SectionHeadingSplit } from '../ui/SectionHeading';

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="relative overflow-hidden bg-snow py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-lime-400/5 blur-3xl" />
        <div className="absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-800/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-[1232px] flex-col gap-12 px-4 sm:px-6 lg:gap-[72px]">
        <SectionHeadingSplit
          title="Discover What Our Community Is Saying"
          description="At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators."
        />
        <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
