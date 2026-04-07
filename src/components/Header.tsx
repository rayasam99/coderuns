import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Digital Transformation', href: '/services/digital-transformation' },
      { label: 'Data Science & Analytics', href: '/services/data-science' },
      { label: 'Data Engineering', href: '/services/data-engineering' },
      { label: 'Data Analytics', href: '/services/data-analytics' },
      { label: 'Cloud Computing', href: '/services/cloud-computing' },
      { label: 'IT Consulting', href: '/services/it-consulting' },
      { label: 'Training', href: '/services/training' },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm h-16'
          : 'bg-white/60 backdrop-blur-sm h-20'
      }`}
    >
      <div className="max-w-325 mx-auto px-6 flex items-center justify-between h-full">

        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/Coderuns-PNG.png"
            alt="Code Runs Logo"
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-9' : 'h-13'}`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 font-['Poppins'] text-[14px] font-semibold text-[#333] hover:text-[#FD5F18] transition-colors"
                >
                  {link.label}
                  <span className="text-[10px]">▼</span>
                </a>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 pt-3 z-50">
                    <ul className="bg-white border border-gray-100 rounded-xl py-2 min-w-64 shadow-lg list-none">
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block px-5 py-2.5 font-['Poppins'] text-[13px] font-semibold text-[#333] hover:text-[#FD5F18] transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`font-['Poppins'] text-[14px] font-semibold transition-colors ${
                  link.active ? 'text-[#FD5F18]' : 'text-[#333] hover:text-[#FD5F18]'
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA Button */}
        <a href="/contact" className="hidden md:inline-block cr-btn">
          Let's Talk
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-[#333] rounded" />
          <span className="block w-6 h-0.5 bg-[#333] rounded" />
          <span className="block w-6 h-0.5 bg-[#333] rounded" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="flex flex-col gap-3">
                <button
                  type="button"
                  className="flex items-center justify-between bg-transparent border-none p-0 text-left cursor-pointer"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span className="font-['Poppins'] text-[14px] font-semibold text-[#333]">
                    {link.label}
                  </span>
                  <span className={`text-[12px] text-[#333] transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col gap-3 pl-4 border-l border-gray-200">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="font-['Poppins'] text-[13px] font-semibold text-[#555] transition-colors hover:text-[#FD5F18]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`font-['Poppins'] text-[14px] font-semibold transition-colors ${
                  link.active ? 'text-[#FD5F18]' : 'text-[#333]'
                }`}
              >
                {link.label}
              </a>
            )
          )}
          <a href="/contact" className="cr-btn text-center mt-2">
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
