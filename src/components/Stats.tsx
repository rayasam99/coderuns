import { useEffect, useState } from 'react';

const stats = [
  {
    value: '42+',
    target: 42,
    suffix: '+',
    label: 'Completed Projects',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    value: '100+',
    target: 100,
    suffix: '+',
    label: 'Happy Customers',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: '99%',
    target: 99,
    suffix: '%',
    label: 'Satisfaction Rate',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map((stat) => ({ value: 0, suffix: stat.suffix })));

  useEffect(() => {
    const duration = 1200;
    const interval = 30;
    const steps = Math.ceil(duration / interval);

    const increments = stats.map((stat) => Math.max(1, Math.ceil(stat.target / steps)));
    let current = Array(stats.length).fill(0);
    const timer = setInterval(() => {
      current = current.map((value, index) => {
        const next = Math.min(value + increments[index], stats[index].target);
        return next;
      });
      setCounts(current.map((value, index) => ({ value, suffix: stats[index].suffix })));
      if (current.every((value, index) => value >= stats[index].target)) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#292929] py-12">
      <div className="max-w-325 mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
              <div className="w-14 h-14 rounded-full bg-[#FD5F18] flex items-center justify-center">
                {stat.icon}
              </div>
              <p className="font-['Poppins'] text-[42px] font-900 text-white leading-none">
                {counts[index].value}{counts[index].suffix || ''}
              </p>
              <p className="cr-list-item text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
