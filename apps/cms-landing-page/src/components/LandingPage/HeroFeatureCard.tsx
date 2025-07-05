// components/hero/HeroFeatureCard.tsx
import { LucideIcon, TrendingUp } from 'lucide-react';

interface HeroFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  stat: string;
  statColor: string;
}

export const HeroFeatureCard = ({
  icon: Icon,
  title,
  description,
  iconBg,
  iconColor,
  stat,
  statColor,
}: HeroFeatureCardProps) => (
  <div className="text-center p-8 bg-white rounded-2xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl">
    <div
      className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
    >
      <Icon className={`h-8 w-8 ${iconColor}`} />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
    <div className={`mt-4 flex items-center justify-center text-sm font-semibold ${statColor}`}>
      <TrendingUp className="h-4 w-4 mr-1" />
      {stat}
    </div>
  </div>
);
