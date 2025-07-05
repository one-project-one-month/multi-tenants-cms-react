// components/about/AboutSection.tsx
import { AboutHeader } from './AboutHeader';
import { AboutFeatureCards } from './AboutFeatureCard';
import { AboutChoice } from './AboutChoice';

const About = () => (
  <section className="bg-white py-20 px-6    mx-auto  ">
    <AboutHeader />
    <AboutFeatureCards />
    <AboutChoice />
  </section>
);

export default About;
