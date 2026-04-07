const posts = [
  {
    title: 'Mastering IT Consulting: A Comprehensive Guide to IT Consultancy Services',
    excerpt: 'In the fast-paced world of technology, businesses are increasingly turning to IT consulting firms to navigate the complex landscape...',
    image: '/home/Mastering IT Consulting A Comprehensive Guide to IT Consultancy Services.jpg',
    date: 'March 2024',
    href: '/blog/mastering-it-consulting',
  },
  {
    title: 'The Future of Cloud Computing in Enterprise Solutions',
    excerpt: 'Cloud computing continues to reshape how enterprises operate, offering unprecedented scalability and cost efficiency...',
    image: '/home/The Future of Cloud Computing in Enterprise Solutions.webp',
    date: 'February 2024',
    href: '/blog/cloud-computing-enterprise',
  },
  {
    title: 'Data Science & Analytics: Turning Raw Data Into Business Insights',
    excerpt: 'In today\'s data-driven world, organizations that harness the power of analytics gain a decisive competitive advantage...',
    image: '/home/Data Science  Analytics Turning Raw Data Into Business Insights.webp',
    date: 'January 2024',
    href: '/blog/data-science-analytics',
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-325 mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="cr-eyebrow mb-4 inline-flex">Our Blog</span>
          <h2 className="cr-heading-lg text-[#292929] mt-4 mb-3">
            Blog & <span className="text-[#FD5F18]">News From Us!</span>
          </h2>
          <p className="cr-body text-[#555] max-w-130 mx-auto">
            Our blog is your go-to source for industry trends, expert perspectives, and exciting news.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">

              {/* Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = '#e5e7eb'; }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-['Poppins'] text-[12px] font-600 text-[#FD5F18] uppercase tracking-wide mb-2">{post.date}</p>
                <h3 className="cr-list-item text-[#292929] mb-3 leading-snug group-hover:text-[#FD5F18] transition-colors">
                  <a href={post.href}>{post.title}</a>
                </h3>
                <p className="cr-body text-[#777] text-[14px] leading-relaxed line-clamp-3">{post.excerpt}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
