const reviews = [
  {
    name: 'James Smith',
    text: "Choosing IT consultancy was a game-changer. Expert guidance and innovative solutions, they truly understand our business needs.",
    stars: 5,
  },
  {
    name: 'Miley Cyrus',
    text: "Coderuns delivering services on time with seamless integration, and they following a user-centric approach. Trust them for cutting-edge solutions.",
    stars: 5,
  },
  {
    name: 'Thomas Walter',
    text: "Their team's commitment to quality and client satisfaction sets them apart. Highly recommended for IT consulting Services and development.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FD5F18]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-325 mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-4 mb-12">
          <div className="lg:w-5/12">
            <span className="cr-eyebrow mb-4 inline-flex" style={{backgroundColor:'#2a2a2a', borderColor:'#3a3a3a', color:'#fff'}}>Client Reviews</span>
            <h2 className="cr-heading-lg text-white mt-4">
              <span className="text-[#FD5F18]">Review's</span> Of Clients
            </h2>
          </div>
          <div className="lg:w-7/12">
            <p className="cr-body text-white/60">
              We take pride in the success stories written by our clients. Hear firsthand experiences
              from those who have partnered with us to turn their visions into reality.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-[#242424] border border-[#333] rounded-2xl p-6 flex flex-col gap-4">
              <p className="cr-body text-white/70 flex-1">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-['Poppins'] text-[15px] font-600 text-white">{review.name}</span>
                <Stars count={review.stars} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
