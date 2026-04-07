import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be wired later
    console.log(form);
  };

  const inputClass = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-['Poppins'] text-[14px] text-[#333] placeholder-gray-400 focus:outline-none focus:border-[#FD5F18] transition-colors";

  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-325 mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* Left — Info */}
          <div className="lg:w-4/12 w-full">
            <div className="mb-6">
              <span className="cr-eyebrow text-[#292929]">Contact Us</span>
            </div>

            <h2 className="cr-heading-lg text-[#292929] mb-6">
              Contact <span className="text-[#FD5F18]">& Join</span>
              <br />Together
            </h2>

            <p className="cr-body text-[#555] mb-10">
              Whether you're seeking collaboration, have inquiries, or want to explore partnership opportunities,
              please Email or Call Us directly.
            </p>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  ),
                  label: 'Office Address :',
                  lines: ['CodeRuns LLC', '1580 Sawgrass Corporate Pkwy, Suite 130', 'Sunrise, FL 33323'],
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                    </svg>
                  ),
                  label: 'Phone Number :',
                  lines: ['(305) 489-9346'],
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Mail Address :',
                  lines: ['sales@coderuns.com'],
                },
              ].map(({ icon, label, lines }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-3xl bg-[#292929] flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[#FD5F18] font-semibold mb-1">{label}</p>
                    {lines.map((l) => (
                      <p key={l} className="cr-body text-[#292929] leading-snug">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center — CTA image */}
          <div className="hidden lg:block lg:w-3/12 w-full h-full overflow-hidden">
            <img src="/home/CTA-Image.png" alt="Contact CTA" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = '#f3f4f6'; }} />
          </div>

          {/* Right — Form */}
          <div className="lg:w-5/12 w-full bg-white rounded-[40px] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.08)] border border-gray-100">
            <h3 className="cr-heading-md text-[#292929] mb-4">Get In Touch !</h3>
            <p className="cr-body text-[#555] mb-8">
              Let's start a conversation that could shape the future of your business with us.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input className={inputClass} type="text" name="name" placeholder="Your Name*" value={form.name} onChange={handleChange} required />
              <input className={inputClass} type="email" name="email" placeholder="Your Email*" value={form.email} onChange={handleChange} required />
              <input className={inputClass} type="tel" name="phone" placeholder="Phone Number*" value={form.phone} onChange={handleChange} required />
              <input className={inputClass} type="text" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
              <textarea
                className={`${inputClass} resize-none min-h-[180px]`}
                name="message"
                placeholder="Enter Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="cr-btn w-full text-center uppercase tracking-[0.08em] py-4">
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
