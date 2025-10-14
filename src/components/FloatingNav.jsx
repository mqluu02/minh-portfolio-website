import { motion } from 'framer-motion';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Software' },
  { href: '#hardware', label: 'Hardware' },
  { href: '#video-editing', label: 'Videos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

const FloatingNav = () => {
  return (
    <nav className="floating-nav">
      {navItems.map((item) => (
        <motion.a
          key={item.href}
          href={item.href}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="nav-link"
        >
          <span className="nav-dot"></span>
          <span className="nav-label">{item.label}</span>
        </motion.a>
      ))}
    </nav>
  );
};

export default FloatingNav;

