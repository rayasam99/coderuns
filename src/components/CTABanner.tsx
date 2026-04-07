export default function CTABanner() {
  return (
    <section className="bg-[#FD5F18] py-6">
      <div className="max-w-325 mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
            </div>
            <div>
              <p className="font-['Poppins'] text-[11px] font-600 text-white/80 uppercase tracking-wider">Get a free consultation</p>
              <p className="font-['Poppins'] text-[28px] font-700 text-white leading-tight">(305) 469-9346</p>
            </div>
          </div>

          {/* Text */}
          <p className="cr-heading-md text-white text-center">
            Consult with Our IT Experts Today!
          </p>

          {/* Button */}
          <a href="/contact" className="cr-btn-outline shrink-0">
            LET'S TALK
          </a>

        </div>
      </div>
    </section>
  );
}
