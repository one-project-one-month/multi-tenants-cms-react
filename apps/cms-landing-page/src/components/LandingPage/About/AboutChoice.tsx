// components/about/AboutWhyAndFact.tsx
import { Clock } from 'lucide-react';
import { Badge } from '@cms/ui/components/badge';

const highlights = [
  'Proven ROI',
  'User-Friendly Experience',
  '24/7 Support',
  'Seamless Updates',
  'Custom Workflows',
];

export const AboutChoice = () => (
  <section className="w-full bg-white min-h-screen flex items-start pt-0 pb-12 text-gray-900">
    <div className="mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
      {/* Left Column: Visual Fact Highlight */}
      <div className="flex flex-col items-start">
        <Clock className="text-blue-600 h-16 w-16 mb-4" />
        <h3 className="text-2xl font-bold mb-2">One Project. One Month.</h3>
        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
          <strong>We don’t just talk speed — we make it real.</strong>
          {'\n'}
          In just 30 days, we deliver complete software:{'\n'}
          from UX/UI and backend to database design and deployment.
        </p>
      </div>

      {/* Right Column: Persuasive Reasoning */}
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-6">Why Enterprises Choose Us</h2>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Built for momentum and scale, our all-in-one platform empowers teams to move fast with
          clarity, security, and precision. We eliminate complexity and delays so you can focus on
          driving real business impact.
        </p>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Whether you're streamlining workflows, enhancing collaboration, or scaling operations, our
          platform adapts seamlessly to your evolving needs.
        </p>
        <div className="flex flex-wrap gap-4">
          {highlights.map((item, index) => (
            <Badge
              key={index}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </section>
);
