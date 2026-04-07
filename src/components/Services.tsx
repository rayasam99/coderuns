const services = [
  { 
    title: 'Digital Transformation', 
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    title: 'IT Consulting', 
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  { 
    title: 'Cloud Computing', 
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    )
  },
  { 
    title: 'Data Science & Analytics', 
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
];

const listItems = [
  'Data Engineering Services',
  'Outsourcing Services',
  'Data Analytics Services',
  'IT Staffing Services',
  'IT Training Services',
  'Internet of Things (IoT)',
];

export default function Services() {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-325 mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left */}
          <div className="lg:w-5/12">
            <span className="cr-eyebrow mb-4 inline-flex" style={{backgroundColor:'#2a2a2a', borderColor:'#3a3a3a', color:'#fff'}}>Services</span>
            <h2 className="cr-heading-lg text-white mt-4 mb-4">
              Services <span className="text-[#FD5F18]">We Can Help</span>
              <br />You With !
            </h2>
            <p className="cr-body text-white/70 mb-6">
              We provide a comprehensive suite of tailored IT services crafted to meet your unique needs.
              From developing customized software solutions to delivering expert guidance on IT matters,
              our commitment is to ensure that our offerings align precisely with your requirements and,
              where possible, exceed your expectations.
            </p>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
              {listItems.map((item) => (
                <li key={item} className="cr-list-item text-white/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FD5F18] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="/contact" className="cr-btn">Hire Us</a>
          </div>

          {/* Right — Service Cards */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative bg-cover bg-top border border-[#333] rounded-2xl p-10 flex flex-col items-start gap-4 hover:border-[#FD5F18] transition-all duration-300 group overflow-hidden"
                style={{ backgroundImage: 'url(/home/agency-img22.png)' }}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#FD5F18] flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="cr-heading-md text-white group-hover:text-[#FD5F18] transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
