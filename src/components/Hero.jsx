export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-navy text-white pt-40 pb-32 px-6"
    >
      {/* ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-brand-blue/30 blur-3xl animate-drift" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-brand-purple/20 blur-3xl animate-drift" style={{ animationDelay: '2s' }} />
      </div>
 
      {/* orbit rings echoing the logo mark */}
      <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-70">
        <div className="relative w-80 h-80">
          <div className="absolute inset-0 rounded-full border border-brand-cyan/30 animate-orbit" />
          <div className="absolute inset-8 rounded-full border border-brand-purple/30 animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '16s' }} />
          <div className="absolute inset-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple opacity-80 flex items-center justify-center">
            <span className="font-heading font-extrabold text-4xl">TZ</span>
          </div>
        </div>
      </div>
 
      <div className="relative max-w-6xl mx-auto">
        <p className="text-brand-cyan font-medium tracking-wide mb-4 animate-fade-up">
          Software · AI · Web &amp; Mobile
        </p>
        <h1 className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Built for What&apos;s Next.
        </h1>
        <p className="max-w-xl mt-6 text-lg text-white/70 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          TECHZYN Systems designs and builds intelligent, scalable software —
          from websites and mobile apps to AI-driven tools — for startups and
          businesses who need technology that actually moves them forward.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#contact"
            className="bg-brand-blue hover:bg-brand-cyan hover:text-brand-navy transition-colors font-semibold px-7 py-3 rounded-full"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="border border-white/30 hover:border-white transition-colors font-semibold px-7 py-3 rounded-full"
          >
            See what we do
          </a>
        </div>
      </div>
    </section>
  )
}
 