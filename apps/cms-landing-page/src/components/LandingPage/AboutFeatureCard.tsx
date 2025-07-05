// components/about/FeatureCards.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@cms/ui/components/card';
import { Shield, Zap, Settings } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description:
      'Protect your critical content with enterprise-grade security, giving you peace of mind while empowering your team with precise, role-based access.',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-600',
  },
  {
    icon: Zap,
    title: 'Speed & Scalability',
    description:
      'Scale effortlessly as your business evolves. Experience lightning-fast performance that keeps your team productive without bottlenecks or delays.',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-600',
  },
  {
    icon: Settings,
    title: 'Automation that Works for You',
    description:
      'Free your team from repetitive tasks with intelligent automation, letting you focus on what truly matters — creating impact and delivering results.',
    borderColor: 'border-cyan-500',
    textColor: 'text-cyan-600',
  },
];

export const AboutFeatureCards = () => (
  <div className="grid md:grid-cols-3 gap-8 mb-20">
    {features.map(({ icon: Icon, title, description, borderColor, textColor }) => (
      <Card
        key={title}
        className={`border ${borderColor} rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300`}
      >
        <CardHeader className="pb-4">
          <CardTitle className={`flex items-center space-x-4 text-xl ${textColor}`}>
            <Icon className="h-8 w-8" />
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-700">{description}</CardDescription>
        </CardContent>
      </Card>
    ))}
  </div>
);
