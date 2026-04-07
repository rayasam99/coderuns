const checkItems = [
  'Enhanced IT Services',
  'Customer-Focused Approach',
  'Competitive Advantages',
  'Competitive Pricing',
  'Advanced Functionality',
  'Strategic Partnerships',
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-325 mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left — Image collage with grid layout */}
          <div className="lg:w-5/12 w-full">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Square rounded image */}
              <div className="w-full h-56 rounded-3xl overflow-hidden bg-gray-200 shadow-2xl border-6 border-white">
                <img src="/about/Coderuns-about-Us-Img.jpg" alt="Team Collaboration" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = '#e5e7eb'; }} />
              </div>
              
              {/* Top Right - Rounded rectangular image */}
              <div className="w-full h-56 rounded-3xl overflow-hidden bg-gray-200 shadow-2xl border-6 border-white">
                <img src="/about/Coderuns-about-Us-Img-1.jpg" alt="Office Meeting" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = '#d1d5db'; }} />
              </div>
              
              {/* Bottom - Large rounded rectangular image spanning full width */}
              <div className="col-span-2 w-full h-56 rounded-3xl overflow-hidden bg-gray-200 shadow-2xl border-6 border-white">
                <img src="/home/Code-Runs-About-Us-Img-3.jpg" alt="Team Working" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = '#d1d5db'; }} />
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:w-7/12">
            <span className="cr-eyebrow mb-4 inline-flex">About Us</span>

            <h2 className="cr-heading-lg text-[#292929] mt-4 mb-4">
              Explore the <span className="text-[#FD5F18]">Coderuns</span>
              <br />Digital Journey
            </h2>

            <p className="cr-body text-[#555] mb-6">
              Coderuns stands out as a top-notch software development and IT consulting company, with a
              wealth of experience in various IT services and a track record of delivering expert guidance
              on IT matters. Our goal is not just to meet business objectives but to provide unexpected
              competitive advantages; we're not just about solutions, we're about helping businesses thrive
              in the ever-changing world of technology and business.
            </p>

            {/* Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8">
              {checkItems.map((item) => (
                <li key={item} className="flex items-center gap-2 cr-list-item text-[#333]">
                  <span className="w-5 h-5 rounded-full bg-[#FD5F18] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Years badge + button */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full border-2 border-[#FD5F18] shrink-0">
                <span className="font-['Poppins'] text-[26px] font-900 text-[#FD5F18] leading-none">7</span>
                <span className="font-['Poppins'] text-[10px] font-600 text-[#333] uppercase tracking-wide text-center leading-tight">Years<br/>Experience</span>
              </div>
              <a href="/about" className="cr-btn">Learn More</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
