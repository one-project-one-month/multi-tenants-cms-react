import { useState, useEffect } from 'react';
import { Button } from '@cms/ui/components/button';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    setActiveLink(id);
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!activeLink) return;
    const element = document.getElementById(activeLink);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeLink]);

  return (
    <nav
      className="
        sticky top-0 w-full z-50
        bg-transparent backdrop-blur
        px-6 md:px-8 py-3
      "
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-bold text-blue-600 select-none cursor-default">CMS</div>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map(({ label, href, id }) => (
            <li key={id}>
              <a
                href={href}
                onClick={() => handleClick(id)}
                className={`transition-colors duration-200 hover:text-blue-500 ${
                  activeLink === id ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            onClick={() => navigate('/login')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            Get Started
          </Button>
        </div>

        <Button
          className="md:hidden text-gray-700 bg-blue-400 hover:bg-blue-500 p-2 rounded-md transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-md shadow-lg px-4 py-4 space-y-4 max-w-xs mx-auto">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            {navItems.map(({ label, href, id }) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={() => handleClick(id)}
                  className={`block transition-colors duration-200 hover:text-blue-500 ${
                    activeLink === id ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => navigate('/login')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Header;
