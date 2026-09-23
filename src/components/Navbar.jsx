import { useEffect, useState } from 'react'
 
const links = [
  {href: '#top', label: 'Home'},
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#values', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
 
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-brand-navy/90 backdrop-blur shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full border-2 border-brand-cyan/60 animate-orbit" />
            <span className="w-3.5 h-3.5 rounded-sm bg-gradient-to-br from-brand-blue to-brand-purple" />
          </span>
          <span className="font-heading font-bold text-lg tracking-tight text-white">
            TECHZYN<span className="text-brand-cyan"> Systems</span>
          </span>
        </a>
 
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand-cyan hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold text-brand-navy bg-brand-cyan hover:bg-white transition-colors px-4 py-2 rounded-full"
          >
            Start a project
          </a>
        </div>
 
        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </nav>
 
      {open && (
        <div className="md:hidden bg-brand-navy px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/90 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-brand-navy bg-brand-cyan text-sm font-semibold px-4 py-2 rounded-full text-center"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  )
}
 