// components/Hero.tsx
import { HeroHeading } from './HeroHeading';
import { HeroFeatureList } from './HeroFeatureList';

const Hero = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroHeading />
        <HeroFeatureList />
      </div>
    </div>
  );
};

export default Hero;
