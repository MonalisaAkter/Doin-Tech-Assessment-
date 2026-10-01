export type Course = { title: string; author: string; image: string; lessons: number; duration: string; comments: number; rating: number; learners: string; price: number };
export type Category = { label: string; icon: string };

export const studentImage = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85';
export const creatorImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85';

export const categories: Category[] = [
  { label: 'Design', icon: 'palette' }, { label: 'Development', icon: 'code' }, { label: 'IT & Software', icon: 'monitor' },
  { label: 'Business', icon: 'briefcase' }, { label: 'Marketing', icon: 'trending-up' }, { label: 'Photography', icon: 'camera' },
];

export const courses: Course[] = [{ title: 'Modern UI/UX Design', author: 'Sarah Ahmed', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=85', lessons: 24, duration: '8h 30m', comments: 42, rating: 4.8, learners: '1,240', price: 49 }];
export const growthStats = [{ value: '10K+', label: 'Active Learners' }, { value: '500+', label: 'Courses' }, { value: '100+', label: 'Creators' }];
export const creatorPerks = ['Powerful course editor', 'Flexible content management', 'Reach local and global learners', 'Track course performance'];
export const testimonials = [
  { name: 'Nadia Rahman', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/100?img=47', quote: 'ByteSpace helped me turn my curiosity into practical skills. The learning experience is clear, engaging, and genuinely useful.' },
  { name: 'Arif Hasan', role: 'Software Developer', avatar: 'https://i.pravatar.cc/100?img=12', quote: 'The course library made it easy to find focused material and keep learning alongside my professional work.' },
  { name: 'Maya Sultana', role: 'Course Creator', avatar: 'https://i.pravatar.cc/100?img=32', quote: 'Publishing my course on ByteSpace gave me a simple way to organize knowledge and reach learners beyond my network.' },
];
