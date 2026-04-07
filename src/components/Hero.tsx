export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* Background image placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/home/code-Runs-Hero-Img.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#292929]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-325 mx-auto px-6 w-full pt-32 pb-20 flex flex-col items-center text-center">

          {/* Eyebrow */}
          <span className="cr-eyebrow mb-6 inline-flex">Digital Agency</span>

          {/* Heading */}
          <h1 className="cr-heading-xl text-white mt-4 mb-4">
            <span className="text-[#FD5F18]">Software Consulting</span>
            <br />
            and Development
            <br />
            Company
          </h1>

          {/* Body */}
          <p className="cr-body text-white/80 max-w-145 mb-8">
            Welcome to Coderuns, your trusted partner in IT consulting and custom software development.
            As a dynamic software solution company, we specialize in transforming ambitious business
            goals into profitable digital realities.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="cr-btn">Talk To Us</a>
            <a href="/careers" className="cr-btn-outline">Hire Us Now</a>
          </div>

      </div>
    </section>
  );
}
