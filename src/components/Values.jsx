import useReveal from '../useReveal'
 
const values = [
  ['Innovation', 'We continuously explore better ways to solve problems.'],
  ['User First', 'We build technology around real user needs.'],
  ['Simplicity', 'We make complex technology simple and accessible.'],
  ['Quality', 'Great products require strong engineering and attention to detail.'],
  ['Integrity', 'We build relationships through honesty and trust.'],
  ['Impact', 'We measure success by the value our technology creates.'],
]
 
export default function Values() {
  const [ref, visible] = useReveal()
 
  return (
    <section id="values" className="px-6 py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-brand-purple/10 blur-3xl" />
 
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <span className="text-brand-cyan font-semibold text-sm">Why work with us</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            What guides every project.
          </h2>
        </div>
 
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {values.map(([title, body], i) => (
            <div
              key={title}
              className={`border-l-2 border-brand-cyan/40 pl-5 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
            >
              <h3 className="font-heading font-semibold text-white mb-1.5">{title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 