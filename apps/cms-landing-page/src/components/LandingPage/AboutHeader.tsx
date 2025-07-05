// components/about/AboutHeader.tsx
import { Rocket } from 'lucide-react';

export const AboutHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-16">
    <div className="inline-flex justify-center mb-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg shadow-lg">
        <Rocket className="h-12 w-12 text-white" />
      </div>
    </div>
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
      Empower Your Team, Accelerate Your Growth
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      Imagine a content management system designed not just to organize, but to unlock your team's
      full potential — boosting efficiency, enhancing collaboration, and driving measurable business
      success.
    </p>
  </div>
);
