import { Palette, Code, Monitor, Briefcase, TrendingUp, Camera } from 'lucide-react';
import type { Category } from '../../data/home';

const iconMap: Record<string, typeof Palette> = {
  palette: Palette,
  code: Code,
  monitor: Monitor,
  briefcase: Briefcase,
  'trending-up': TrendingUp,
  camera: Camera,
};

export function CategoryCard({ label, icon }: Category) {
  const Icon = iconMap[icon] ?? Palette;
  return (
    <button className="group flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-800 hover:shadow-lg">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white">
        <Icon className="h-7 w-7 text-blue-800 transition-colors duration-300 group-hover:text-white" />
      </div>
      <span className="font-satoshi text-label-m font-medium text-gray-950">{label}</span>
    </button>
  );
}
