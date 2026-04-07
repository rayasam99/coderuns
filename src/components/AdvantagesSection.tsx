interface Item {
  title: string;
  desc: string;
}

interface Props {
  heading: string;
  items: Item[];
  highlight?: number;
}

export default function AdvantagesSection({ heading, items, highlight = 1 }: Props) {
  const count = items.length;

  const gridClass =
    count === 4 ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-14 justify-items-center' :
    count === 5 ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 justify-items-center' :
    count === 6 ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 justify-items-center' :
    count === 3 ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 justify-items-center' :
    'flex flex-wrap justify-center gap-14';

  // For 5 items, center the last row (2 items in last row of a 3-col grid)
  const lastItemClass = count === 5 ? 'lg:col-start-2' : '';

  return (
    <section className="bg-[#292929] py-20">
      <div className="max-w-325 mx-auto px-6">
        <h2 className="cr-heading-lg text-white text-center mb-14">{heading}</h2>
        <div className={`${gridClass} pt-8`}>
          {items.map((item, i) => {
            const isHighlighted = i === highlight;
            const isLast = i === items.length - 1;

            return (
              <div
                key={i}
                className={`relative flex flex-col items-center text-center w-[min(100%,20rem)] h-[min(100vw-3rem,20rem)] sm:w-96 sm:h-96 rounded-full border-2 px-8 py-12 sm:px-12 sm:py-16 justify-center gap-3 sm:gap-4 ${
                  isHighlighted
                    ? 'border-[#FD5F18] bg-[#FD5F18]/10'
                    : 'border-white/20 bg-transparent'
                } ${count === 5 && isLast ? lastItemClass : ''}`}
              >
                <span
                  className={`absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-['Poppins'] text-[28px] sm:text-[32px] font-black leading-none ${
                    isHighlighted ? 'bg-[#FD5F18] text-white' : 'bg-[#3a3a3a] text-white/60'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="cr-heading-md max-w-52 sm:max-w-60 text-white leading-[1.2]">{item.title}</p>
                <p className="cr-body max-w-56 sm:max-w-64 text-white/50 text-[14px] sm:text-[15px] leading-[1.65] sm:leading-[1.7]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
