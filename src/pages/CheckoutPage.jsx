import { ArrowLeft, CreditCard } from 'lucide-react'
import ProductImage from '../components/ProductImage'
import { inputClass } from '../styles/formClasses'
import { formatPrice } from '../utils/formatPrice'

function CheckoutPage({ cartItems, cartTotal, billingAddress, handleAddressChange, handleCheckoutSubmit, checkoutStatus, setPage }) {
  return (
    <main className="bg-slate-50 pt-28 pb-20">
      <div className="section-shell">
        <button type="button" onClick={() => setPage('cart')} className="mb-6 inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-blue-700">
          <ArrowLeft size={16} />
          Back to cart
        </button>

        <div className="grid gap-6 lg:grid-cols-[1fr_24rem]">
          <form onSubmit={handleCheckoutSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-black text-slate-950">Checkout</h1>
            <p className="mt-2 text-slate-600">Complete contact and delivery details.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-slate-700">Full name</span>
                <input required name="fullName" value={billingAddress.fullName} onChange={handleAddressChange} className={inputClass} placeholder="Full name" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-700">Email address</span>
                <input required name="email" value={billingAddress.email} onChange={handleAddressChange} type="email" className={inputClass} placeholder="Email address" />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-black text-slate-700">Mobile number</span>
              <input required name="phone" value={billingAddress.phone} onChange={handleAddressChange} type="tel" className={inputClass} placeholder="Mobile number" />
            </label>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <h2 className="text-xl font-black text-slate-950">Delivery address</h2>
              <label className="mt-4 block">
                <span className="text-sm font-black text-slate-700">Address line 1</span>
                <input required name="addressLine1" value={billingAddress.addressLine1} onChange={handleAddressChange} className={inputClass} placeholder="Street address" />
              </label>
              <label className="mt-4 block">
                <span className="text-sm font-black text-slate-700">Address line 2</span>
                <input name="addressLine2" value={billingAddress.addressLine2} onChange={handleAddressChange} className={inputClass} placeholder="Apartment, suite, area" />
              </label>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <label className="block">
                  <span className="text-sm font-black text-slate-700">City</span>
                  <input required name="city" value={billingAddress.city} onChange={handleAddressChange} className={inputClass} placeholder="City" />
                </label>
                <label className="block">
                  <span className="text-sm font-black text-slate-700">State</span>
                  <input required name="state" value={billingAddress.state} onChange={handleAddressChange} className={inputClass} placeholder="State" />
                </label>
                <label className="block">
                  <span className="text-sm font-black text-slate-700">Postal code</span>
                  <input required name="postalCode" value={billingAddress.postalCode} onChange={handleAddressChange} className={inputClass} placeholder="Postal code" />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="text-sm font-black text-slate-700">Country</span>
                <input required name="country" value={billingAddress.country} onChange={handleAddressChange} className={inputClass} placeholder="Country" />
              </label>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full">
              Place order
              <CreditCard size={18} />
            </button>
            {checkoutStatus && <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-bold text-emerald-700">{checkoutStatus}</p>}
          </form>

          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-slate-950">Order summary</h2>
            <div className="mt-5 divide-y divide-slate-200">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 py-4 first:pt-0">
                  <ProductImage title={item.title} compact />
                  <div className="flex-1">
                    <p className="font-black text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">Qty {item.quantity}</p>
                    <p className="mt-2 font-black text-blue-700">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-between border-t border-slate-200 pt-5 text-lg font-black text-slate-950">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default CheckoutPage
