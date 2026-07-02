import { PackageCheck, ShoppingCart, UserRound } from 'lucide-react'
import { logoUrl } from '../utils/assets'

function Header({ cartCount, isAuthenticated, currentPage, setPage }) {
  const goHomeSection = (sectionId) => {
    setPage('home')
    setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 20)
  }

  const navItems = [
    ['Products', () => goHomeSection('products')],
    ['Benefits', () => goHomeSection('features')],
    ['Pricing', () => goHomeSection('pricing')],
    ['FAQ', () => goHomeSection('faq')],
  ]

  const navClass = (isActive = false) =>
    `text-sm font-bold transition ${isActive ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-5" aria-label="Main navigation">
        <button type="button" onClick={() => setPage('home')} className="flex items-center" aria-label="Recalibrate 17 home">
          <span className="flex h-16 items-center overflow-hidden rounded-lg bg-white p-1 ring-1 ring-slate-200 transition hover:ring-blue-200">
            <img src={logoUrl} alt="Recalibrate 17" className="h-full w-auto object-contain" />
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, action]) => (
            <button key={label} type="button" onClick={action} className={navClass(currentPage === 'home' && label === 'Products')}>
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {isAuthenticated && (
            <button
              type="button"
              onClick={() => setPage('account')}
              className="hidden h-11 items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 text-sm font-black text-blue-700 hover:bg-blue-100 lg:inline-flex"
            >
              <PackageCheck size={17} />
              Orders
            </button>
          )}
          <button
            type="button"
            onClick={() => setPage(isAuthenticated ? 'account' : 'login')}
            className={`hidden h-11 items-center gap-2 rounded-lg px-3 text-sm font-bold sm:inline-flex ${
              currentPage === 'account' ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <UserRound size={17} />
            {isAuthenticated ? 'Account' : 'Login'}
          </button>
          <button
            type="button"
            onClick={() => setPage('cart')}
            className={`relative inline-flex h-11 items-center gap-2 rounded-lg border px-3 text-sm font-black shadow-sm ${
              currentPage === 'cart'
                ? 'border-blue-700 bg-blue-700 text-white'
                : 'border-slate-200 bg-white text-slate-950 hover:border-blue-200 hover:text-blue-700'
            }`}
            aria-label={`Cart with ${cartCount} item${cartCount === 1 ? '' : 's'}`}
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-blue-700 px-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
