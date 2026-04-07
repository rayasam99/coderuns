import { useState } from 'react';

export default function CareersForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  const inputClass = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-[var(--font-body)] text-[14px] text-[#333] placeholder-gray-400 focus:outline-none focus:border-[#FD5F18] transition-colors";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-325 mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left — Why Work */}
          <div className="lg:w-5/12">
            <h2 className="cr-heading-lg text-[#292929] mb-3">
              Why Work with <span className="text-[#FD5F18]">Coderuns?</span>
            </h2>
            <p className="cr-body text-[#555] mb-4">
              At Coderuns, we're all about making a positive impact on users' lives through our innovative solutions. We're searching for individuals who understand and share our vision, eager to contribute to it. Our company thrives on open communication, teamwork, and ensuring equal opportunities for all.
            </p>
            <p className="cr-body text-[#555]">
              We have a strong passion for growth and are always thrilled to welcome dynamic talent. Join us to not only elevate our company's standards but also to advance your own career. Come be a part of the Coderuns community, where collaboration and continuous progress are at the heart of what we do.
            </p>
          </div>

          {/* Right — Form Card */}
          <div className="lg:w-7/12 w-full border border-gray-100 rounded-3xl p-8 shadow-sm">
            <button className="w-full cr-btn text-center mb-6 rounded-full cursor-default">
              Join Our Team
            </button>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input className={inputClass} type="text" name="name" placeholder="Your Name*" value={form.name} onChange={handleChange} required />
              <input className={inputClass} type="email" name="email" placeholder="Your Email*" value={form.email} onChange={handleChange} required />
              <input className={inputClass} type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
              <input className={inputClass} type="text" name="position" placeholder="Your Position*" value={form.position} onChange={handleChange} required />
              <textarea
                className={`${inputClass} resize-none`}
                name="message"
                placeholder="Enter your message"
                rows={5}
                value={form.message}
                onChange={handleChange}
              />
              <button type="submit" className="cr-btn w-full text-center uppercase tracking-wider">
                Send Application
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
