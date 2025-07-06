import { useEffect, useState } from 'react';
import { Button } from '@cms/ui/components/button';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = (id: string) => {
    setActiveLink(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-transparent backdrop-blur-md px-8 py-4 flex justify-between items-center transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="text-xl font-bold text-blue-500">CMS</div>
      <ul className="flex gap-10 text-gray-700 font-medium">
        {navItems.map(({ label, href, id }) => (
          <li key={id}>
            <a
              href={href}
              onClick={() => handleClick(id)}
              className={`hover:text-blue-400 ${
                activeLink === id ? 'text-blue-500' : ''
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <Button className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
    </nav>
  );
};

export default Header;
