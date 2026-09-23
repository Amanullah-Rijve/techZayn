export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-brand-blue font-semibold text-sm">Let's build something</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5 text-brand-navy">
          Have a project in mind?
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-9">
          Tell us what you're trying to build. We'll reply with how we'd
          approach it and what it would take to get there.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:sheikhrijve885@gmail.com"
            className="bg-brand-blue hover:bg-brand-navy text-white transition-colors font-semibold px-7 py-3 rounded-full"
          >
            sheikhrijve885@gmail.com
          </a>
          <a
            href="https://wa.me/8801308160423"
            className="border border-slate-300 hover:border-brand-blue hover:text-brand-blue transition-colors font-semibold px-7 py-3 rounded-full text-brand-navy"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}