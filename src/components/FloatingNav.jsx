import { motion } from 'framer-motion';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Software Projects' },
  { href: '#hardware', label: 'Hardware Projects' },
  { href: '#video-editing', label: 'Video Editing' },
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
          whileHover={{ scale: 1.5 }}
          className="nav-dot"
        >
          <span>{item.label}</span>
        </motion.a>
      ))}
    </nav>
  );
};

export default FloatingNav;

