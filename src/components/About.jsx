import useReveal from '../useReveal'
 
export default function About() {
  const [ref, visible] = useReveal()
 
  return (
    <section id="about" className="px-6 py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div>
          <span className="text-brand-blue font-semibold text-sm">Who we are</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6 text-brand-navy">
            A technology partner, not just a vendor.
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            TECHZYN Systems is a software and technology studio focused on
            building digital products and intelligent solutions that solve
            real problems. We combine engineering, design, and AI to create
            reliable, easy-to-use experiences for startups and businesses.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our approach starts with understanding the problem, not the
            feature list — we research, design, build, test, and improve
            based on how the product is actually used.
          </p>
        </div>
 
        <div className="grid grid-cols-2 gap-5">
          {[
            ['Mission', 'Build accessible, intelligent technology that helps people and businesses move forward.'],
            ['Vision', 'Become a trusted studio creating impactful digital products.'],
            ['Approach', 'Discover → Design → Build → Test → Launch → Improve.'],
            ['Focus', 'Practical, scalable software — not complexity for its own sake.'],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 p-5 hover:border-brand-blue/50 hover:shadow-md transition-all"
            >
              <h3 className="font-heading font-semibold text-brand-navy mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 
