import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  const inputClass = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-[var(--font-body)] text-[14px] text-[#333] placeholder-gray-400 focus:outline-none focus:border-[#FD5F18] transition-colors";

  return (
    <section className="py-16 bg-white">
      <div className="max-w-325 mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left — Image placeholder */}
          <div className="lg:w-5/12 w-full rounded-2xl overflow-hidden bg-gray-100 min-h-[420px]">
            <img
              src="/images/contact-team.jpg"
              alt="Contact Team"
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = '#e5e7eb'; }}
            />
          </div>

          {/* Right — Form */}
          <div className="lg:w-7/12 w-full">
            <span className="cr-eyebrow mb-4 inline-flex">Contact Us</span>
            <h2 className="cr-heading-lg text-[#292929] mt-4 mb-2">
              Reach <span className="text-[#FD5F18]">& Get In Touch</span>
              <br />With Us !
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className={inputClass} type="text" name="name" placeholder="Your Name*" value={form.name} onChange={handleChange} required />
                <input className={inputClass} type="email" name="email" placeholder="Your Email*" value={form.email} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className={inputClass} type="tel" name="phone" placeholder="Your Number*" value={form.phone} onChange={handleChange} />
                <input className={inputClass} type="text" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
              </div>
              <input className={inputClass} type="text" name="subject" placeholder="Your Subject.." value={form.subject} onChange={handleChange} />
              <textarea
                className={`${inputClass} resize-none`}
                name="message"
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="cr-btn w-full text-center uppercase tracking-wider">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
