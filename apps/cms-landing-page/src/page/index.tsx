import Hero from '../components/LandingPage/Hero';
import Service from '../components/LandingPage/Service';
import About from '../components/LandingPage/About';
import PageRequest from '../components/LandingPage/PageRequest';

export default function Home() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Hero />
      <Service />
      <PageRequest />
      <About />
    </div>
  );
}
