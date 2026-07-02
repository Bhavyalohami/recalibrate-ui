import { logoUrl } from '../utils/assets'

function Footer({ isAuthenticated, setPage }) {
  const goHomeSection = (sectionId) => {
    setPage('home')
    setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 20)
  }

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="section-shell grid gap-10 py-10 lg:grid-cols-[1fr_0.75fr_0.75fr]">
        <div>
          <button type="button" onClick={() => setPage('home')} className="inline-flex items-center">
            <span className="flex h-16 items-center overflow-hidden rounded-lg bg-white p-1">
              <img src={logoUrl} alt="Recalibrate 17" className="h-full w-auto object-contain" />
            </span>
          </button>
          <p className="mt-5 max-w-md leading-7 text-slate-400">
            Performance, focus, and balance in a store flow that feels premium, clear, and ready for real checkout.
          </p>
        </div>

        <div>
          <h3 className="font-black text-white">Shop</h3>
          <div className="mt-4 grid gap-3 text-sm font-bold">
            <button type="button" onClick={() => goHomeSection('products')} className="text-left hover:text-white">Products</button>
            <button type="button" onClick={() => goHomeSection('pricing')} className="text-left hover:text-white">Pricing</button>
            <button type="button" onClick={() => setPage('cart')} className="text-left hover:text-white">Cart</button>
            <button type="button" onClick={() => setPage(isAuthenticated ? 'account' : 'login')} className="text-left hover:text-white">Account</button>
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">Support</h3>
          <div className="mt-4 grid gap-3 text-sm font-bold">
            <button type="button" onClick={() => goHomeSection('faq')} className="text-left hover:text-white">FAQ</button>
            <button type="button" onClick={() => goHomeSection('contact')} className="text-left hover:text-white">Contact</button>
            <a href="mailto:hello@recalibrate17.com" className="hover:text-white">hello@recalibrate17.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-5 text-sm font-bold text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white">Recalibrate 17 &copy; 2026</p>
          <p>Balanced by design</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
