const industries = [
  'Automotive',
  'Telecom',
  'Logistics & Inventory',
  'Travel & Hospitality',
  'Banking & Financial',
  'Healthcare',
  'Media & Information Services',
  'Higher Education',
];

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-325 mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">

          {/* Right — Image collage */}
          <div className="lg:w-5/12 w-full">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Square rounded image */}
              <div className="w-full h-56 rounded-3xl overflow-hidden bg-gray-200 shadow-2xl border-6 border-white">
                <img src="/home/Our-Industries-Img-1.jpg" alt="Industry Services" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = '#e5e7eb'; }} />
              </div>
              
              {/* Top Right - Rounded rectangular image */}
              <div className="w-full h-56 rounded-3xl overflow-hidden bg-gray-200 shadow-2xl border-6 border-white">
                <img src="/home/Our-Industries-Img-3.jpg" alt="Industry Solutions" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = '#d1d5db'; }} />
              </div>
              
              {/* Bottom - Large rounded rectangular image spanning full width */}
              <div className="col-span-2 w-full h-56 rounded-3xl overflow-hidden bg-gray-200 shadow-2xl border-6 border-white">
                <img src="/home/Our-Industries-Img-2.jpg" alt="Industry Innovation" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = '#d1d5db'; }} />
              </div>
            </div>
          </div>

          {/* Left — Content */}
          <div className="lg:w-7/12">
            <span className="cr-eyebrow mb-4 inline-flex">Industries</span>

            <h2 className="cr-heading-lg text-[#292929] mt-4 mb-4">
              Industries <span className="text-[#FD5F18]">We Serve</span>
            </h2>

            <p className="cr-body text-[#555] mb-6">
              Welcome to Coderuns, a versatile partner dedicated to delivering unparalleled technology
              services across a spectrum of industries. Our commitment to excellence extends across these
              diverse industries, and we are dedicated to driving meaningful digital innovation within each
              sector we serve.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {industries.map((item) => (
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
          </div>

        </div>
      </div>
    </section>
  );
}
