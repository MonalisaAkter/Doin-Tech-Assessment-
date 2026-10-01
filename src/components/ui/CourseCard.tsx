import { Star } from 'lucide-react';
import type { Course } from '../../data/home';

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgb(0_0_0/0.08)]">
      <div className="relative aspect-[341/195] w-full overflow-hidden rounded-xl bg-gray-900">
        <img src={course.image} alt={course.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
          <span className="rounded-3xl bg-white/60 px-3 py-1.5 font-satoshi text-xs font-medium text-black-700 backdrop-blur-[4px]">{course.lessons} Lessons</span>
          <span className="rounded-3xl bg-white/60 px-3 py-1.5 font-satoshi text-xs font-medium text-black-700 backdrop-blur-[4px]">{course.duration}</span>
          <span className="rounded-3xl bg-white/60 px-3 py-1.5 font-satoshi text-xs font-medium text-black-700 backdrop-blur-[4px]">{course.comments} Comments</span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate font-poppins text-heading-xs font-semibold text-black" title={course.title}>{course.title}</h3>
          <p className="font-satoshi text-xs leading-5 text-black-700">by <span className="cursor-pointer text-blue-800 hover:underline">{course.author}</span></p>
        </div>
        <p className="mr-px flex shrink-0 items-center font-satoshi text-body-l text-black-700">
          {course.rating}&nbsp;<Star className="h-4 w-4 fill-lime-400 text-lime-400" />
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">{[1, 2, 3].map((i) => <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-gray-300 to-gray-400" />)}</div>
          <span className="font-satoshi text-body-xs text-black-700">{course.learners} learners</span>
        </div>
        <span className="font-poppins text-body-l font-semibold text-blue-800">${course.price}</span>
      </div>
    </article>
  );
}
