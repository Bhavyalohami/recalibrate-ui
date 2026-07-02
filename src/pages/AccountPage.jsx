import { ArrowRight, MapPin, PackageCheck, PencilLine, UserRound } from 'lucide-react'
import { inputClass } from '../styles/formClasses'
import { formatPrice } from '../utils/formatPrice'

function AccountPage({ userProfile, billingAddress, orders, cartCount, accountStatus, setPage, handleProfileUpdate }) {
  return (
    <main className="bg-slate-50 pt-28 pb-20">
      <div className="section-shell">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Account</p>
            <h1 className="mt-4 text-4xl font-black text-slate-950">Your Recalibrate account</h1>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Manage basic details, saved checkout information, and previous orders from one place.
            </p>
          </div>
          <button type="button" onClick={() => setPage('cart')} className="btn-secondary">
            View cart
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
                <UserRound size={21} />
              </span>
              <div>
                <h2 className="text-xl font-black text-slate-950">Basic details</h2>
                <p className="text-sm text-slate-500">Editable customer profile</p>
              </div>
            </div>

            <form className="mt-6" onSubmit={handleProfileUpdate}>
              <label className="block">
                <span className="text-sm font-black text-slate-700">Full name</span>
                <input required name="fullName" defaultValue={userProfile.fullName} className={inputClass} />
              </label>
              <label className="mt-4 block">
                <span className="text-sm font-black text-slate-700">Email address</span>
                <input required name="email" type="email" defaultValue={userProfile.email} className={inputClass} />
              </label>
              <label className="mt-4 block">
                <span className="text-sm font-black text-slate-700">Mobile number</span>
                <input required name="phone" type="tel" defaultValue={userProfile.phone} className={inputClass} />
              </label>
              <button type="submit" className="btn-primary mt-6 w-full">
                <PencilLine size={18} />
                Save details
              </button>
              {accountStatus && <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-bold text-emerald-700">{accountStatus}</p>}
            </form>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
                <MapPin size={21} />
              </span>
              <div>
                <h2 className="text-xl font-black text-slate-950">Saved checkout details</h2>
                <p className="text-sm text-slate-500">Used automatically at checkout</p>
              </div>
            </div>
            <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              <p className="font-black text-slate-950">{billingAddress.fullName || userProfile.fullName}</p>
              <p>{billingAddress.email || userProfile.email || 'No email added yet'}</p>
              <p>{billingAddress.phone || userProfile.phone || 'No phone added yet'}</p>
              <p className="mt-3">
                {[billingAddress.addressLine1, billingAddress.addressLine2, billingAddress.city, billingAddress.state, billingAddress.postalCode, billingAddress.country]
                  .filter(Boolean)
                  .join(', ') || 'Address will appear here after checkout.'}
              </p>
            </div>
            <button type="button" onClick={() => setPage(cartCount > 0 ? 'checkout' : 'home')} className="btn-secondary mt-5 w-full">
              {cartCount > 0 ? 'Edit during checkout' : 'Start a new order'}
            </button>
          </section>
        </div>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
                <PackageCheck size={21} />
              </span>
              <div>
                <h2 className="text-xl font-black text-slate-950">Previous orders</h2>
                <p className="text-sm text-slate-500">Order history and status</p>
              </div>
            </div>
          </div>

          {orders.length === 0 ? (
            <div className="p-8 text-center">
              <PackageCheck className="mx-auto text-blue-700" size={34} />
              <h3 className="mt-4 text-xl font-black text-slate-950">No orders yet.</h3>
              <p className="mt-2 text-slate-600">Completed checkout orders will show here.</p>
              <button type="button" onClick={() => setPage('home')} className="btn-primary mt-5">
                Shop products
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {orders.map((order) => (
                <article key={order.id} className="grid gap-4 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-black text-slate-950">{order.id}</h3>
                      <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-black uppercase text-blue-700">{order.status}</span>
                    </div>
                    <p className="mt-1 text-sm font-bold text-slate-500">{order.date}</p>
                    <p className="mt-3 text-sm text-slate-600">
                      {order.items.map((item) => `${item.title} x ${item.quantity}`).join(', ')}
                    </p>
                  </div>
                  <p className="text-xl font-black text-slate-950">{formatPrice(order.total)}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default AccountPage
