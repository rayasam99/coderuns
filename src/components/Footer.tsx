const usefulLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

const services = [
  { label: 'Digital Transformation', href: '/services/digital-transformation' },
  { label: 'Data Science & Analytics', href: '/services/data-science' },
  { label: 'Data Engineering', href: '/services/data-engineering' },
  { label: 'Data Analytics', href: '/services/data-analytics' },
  { label: 'Cloud Computing', href: '/services/cloud-computing' },
  { label: 'IT Consulting', href: '/services/it-consulting' },
  { label: 'Training', href: '/services/training' },
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#272727]">
      <div className="max-w-325 mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-5">
            <a href="/" className="inline-block">
              <img src="/Coderuns-PNG.png" alt="Code Runs" className="h-14 w-auto" />
            </a>
            <p className="cr-body text-white/60">
              Coderuns is your trusted partner in IT consulting and Custom software development company.
            </p>
            <div className="flex gap-3 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#FD5F18] hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="cr-heading-md text-white mb-6">Useful Links</h4>
            <ul className="flex flex-col gap-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="cr-body text-white/60 hover:text-[#FD5F18] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="cr-heading-md text-white mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="cr-body text-white/60 hover:text-[#FD5F18] transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="cr-heading-md text-white mb-3">Contact Information</h4>
            <p className="cr-body text-white/60 mb-6">Feel free to contact & reach us !!</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <p className="cr-body text-white/60 leading-relaxed">
                  1580 Sawgrass Corporate Pkwy, Suite 130 Sunrise, FL 33323
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                </div>
                <a href="tel:3054899346" className="cr-body text-white/60 hover:text-[#FD5F18] transition-colors">
                  (305) 489-9346
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:sales@coderuns.com" className="cr-body text-white/60 hover:text-[#FD5F18] transition-colors">
                  sales@coderuns.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-325 mx-auto px-6 py-5 text-center">
          <p className="cr-body text-white/50">
            Copyright {currentYear} Coderuns. <span className="text-[#FD5F18]">All</span> rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
