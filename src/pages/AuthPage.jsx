import { ArrowLeft, LockKeyhole, UserRound } from 'lucide-react'
import { inputClass } from '../styles/formClasses'

function AuthPage({ mode, postAuthPage, setPage, handleAuthSubmit, authStatus }) {
  const isSignup = mode === 'signup'

  return (
    <main className="bg-slate-50 pt-28 pb-20">
      <div className="section-shell grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <section className="pt-8">
          <button type="button" onClick={() => setPage('cart')} className="inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-blue-700">
            <ArrowLeft size={16} />
            Back to cart
          </button>
          <h1 className="mt-6 text-4xl font-black text-slate-950">{isSignup ? 'Create your account' : 'Welcome back'}</h1>
          <p className="mt-4 max-w-md leading-7 text-slate-600">
            Use this step to collect customer details before the address and payment-style checkout page.
          </p>
          <div className="mt-8 flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-600">
            <LockKeyhole className="text-blue-700" size={20} />
            Secure checkout flow enabled
          </div>
        </section>

        <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" onSubmit={(event) => handleAuthSubmit(event, mode)}>
          {isSignup && (
            <label className="block">
              <span className="text-sm font-black text-slate-700">Full name</span>
              <input required name="fullName" className={inputClass} placeholder="Your full name" />
            </label>
          )}
          <label className={`${isSignup ? 'mt-4 ' : ''}block`}>
            <span className="text-sm font-black text-slate-700">Email</span>
            <input required name="email" type="email" className={inputClass} placeholder="you@example.com" />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-black text-slate-700">Mobile number</span>
            <input required name="phone" type="tel" className={inputClass} placeholder="+1 555 000 0000" />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-black text-slate-700">Password</span>
            <input required name="password" type="password" className={inputClass} placeholder="Password" />
          </label>
          <button type="submit" className="btn-primary mt-6 w-full">
            <UserRound size={18} />
            {isSignup ? 'Create account' : 'Continue'}
          </button>
          {authStatus && <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-bold text-emerald-700">{authStatus}</p>}
          <button
            type="button"
            className="mt-5 text-sm font-black text-blue-700"
            onClick={() => setPage(isSignup ? 'login' : 'signup', postAuthPage)}
          >
            {isSignup ? 'Already have an account? Login' : 'New customer? Create account'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default AuthPage
