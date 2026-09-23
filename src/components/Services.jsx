import useReveal from '../useReveal'
import Icon from './Icon'
 
const services = [
  { icon: 'code', title: 'Software & Web Apps', desc: 'Custom web applications and platforms built to scale with your business.' },
  { icon: 'mobile', title: 'Mobile Applications', desc: 'Native and cross-platform apps designed around how people actually use them.' },
  { icon: 'layers', title: 'SaaS & Digital Products', desc: 'End-to-end product builds, from first prototype to production-ready release.' },
  { icon: 'cpu', title: 'AI & Automation', desc: 'AI-driven features and workflow automation that remove repetitive work.' },
  { icon: 'briefcase', title: 'Business Management Systems', desc: 'Internal tools and dashboards that keep operations organized and visible.' },
  { icon: 'sliders', title: 'UI/UX Design', desc: 'Interfaces designed to be simple, clear, and easy for real users to navigate.' },
  { icon: 'server', title: 'API & Backend Development', desc: 'Secure, well-structured backends and APIs that your product can rely on.' },
  { icon: 'custom', title: 'Custom Technology Solutions', desc: 'Bespoke builds for problems that don\u2019t fit an off-the-shelf tool.' },
]
 
export default function Services() {
  const [ref, visible] = useReveal()
 
  return (
    <section id="services" className="px-6 py-24 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <span className="text-brand-blue font-semibold text-sm">What we do</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-brand-navy">
            Technology, handled end to end.
          </h2>
        </div>
 
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group rounded-2xl bg-white border border-slate-200 p-6 hover:border-transparent hover:shadow-xl hover:shadow-brand-blue/10 hover:-translate-y-1 transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: visible ? `${i * 70}ms` : '0ms' }}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name={s.icon} className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-brand-navy mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 