import { FetchPostQuery } from '@cms/data';
import { useSuspenseQuery } from '@tanstack/react-query';
import Hero from '../components/LandingPage/Hero';
import Service from '../components/LandingPage/Service';
import About from '../components/LandingPage/About';
import PageRequest from '../components/LandingPage/PageRequest';

export default function Home() {
  const { data, isLoading, error } = useSuspenseQuery(FetchPostQuery());

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading post</p>;

  return (
    <div>
      <Hero />
      <Service />
      <PageRequest />
      <About />
      <h1 className="text-xl font-bold mb-2">This is a cms landing page</h1>
      {data.map((item: { title: string }) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}
