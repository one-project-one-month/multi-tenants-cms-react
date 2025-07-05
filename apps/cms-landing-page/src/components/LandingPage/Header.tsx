import { NavLink } from 'react-router-dom';
const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `transition hover:text-blue-600 ${
    isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
  }`;

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-blue-600">CMS</div>

      <nav className="hidden md:flex gap-10 text-base font-medium">
        <NavLink to="/" className={navLinkClasses}>Home</NavLink>
        <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
        <NavLink to="/about" className={navLinkClasses}>About</NavLink>
        <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
      </nav>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Login
      </button>
    </header>
  );
};

export default Header;
