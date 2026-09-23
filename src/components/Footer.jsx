export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white/60 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <span>© {new Date().getFullYear()} TECHZYN Systems. All rights reserved.</span>
        <div className="flex gap-5">
          <span>Dhaka, Bangladesh</span>
          <a href="https://twitter.com/techzyn" className="hover:text-white transition-colors">@techzyn</a>
        </div>
      </div>
    </footer>
  )
}