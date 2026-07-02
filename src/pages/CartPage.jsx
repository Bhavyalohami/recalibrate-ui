import { ArrowLeft, ArrowRight, BadgeCheck, Minus, Plus, ShoppingCart, Trash2, Truck } from 'lucide-react'
import ProductImage from '../components/ProductImage'
import { formatPrice } from '../utils/formatPrice'

function CartPage({ cartItems, cartTotal, updateCartQuantity, removeFromCart, beginCheckout, setPage }) {
  return (
    <main className="bg-slate-50 pt-28 pb-20">
      <div className="section-shell">
        <button type="button" onClick={() => setPage('home')} className="mb-6 inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-blue-700">
          <ArrowLeft size={16} />
          Continue shopping
        </button>

        <div className="grid gap-6 lg:grid-cols-[1fr_24rem]">
          <section className="rounded-lg border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-6">
              <p className="eyebrow">Step 1 of 3</p>
              <h1 className="mt-4 text-3xl font-black text-slate-950">Review your cart</h1>
              <p className="mt-2 text-slate-600">Confirm quantities, then continue to login and delivery details.</p>
            </div>
            <div className="divide-y divide-slate-200">
              {cartItems.length === 0 ? (
                <div className="p-10 text-center">
                  <ShoppingCart className="mx-auto text-blue-700" size={36} />
                  <h2 className="mt-4 text-xl font-black text-slate-950">Your cart is empty.</h2>
                  <button type="button" onClick={() => setPage('home')} className="btn-primary mt-5">
                    Browse products
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <article key={item.id} className="grid gap-4 p-5 sm:grid-cols-[7rem_1fr_auto] sm:items-center">
                    <ProductImage title={item.title} compact />
                    <div>
                      <h2 className="text-xl font-black text-slate-950">{item.title}</h2>
                      <p className="mt-1 text-sm font-bold text-blue-700">{formatPrice(item.price)}</p>
                      {item.planName && (
                        <p className="mt-2 inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-xs font-black uppercase text-blue-700">
                          {item.planName} plan
                        </p>
                      )}
                      <button type="button" onClick={() => removeFromCart(item.id)} className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-red-600">
                        <Trash2 size={16} />
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-6 sm:block">
                      <div className="inline-flex items-center rounded-lg border border-slate-200">
                        <button type="button" onClick={() => updateCartQuantity(item.id, -1)} className="grid h-10 w-10 place-items-center hover:bg-slate-50" aria-label="Decrease quantity">
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center text-sm font-black">{item.quantity}</span>
                        <button type="button" onClick={() => updateCartQuantity(item.id, 1)} className="grid h-10 w-10 place-items-center hover:bg-slate-50" aria-label="Increase quantity">
                          <Plus size={16} />
                        </button>
                      </div>
                      <p className="font-black text-slate-950 sm:mt-4 sm:text-right">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>

          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-slate-950">Order summary</h2>
            <div className="mt-5 space-y-3 text-sm font-semibold text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated next</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-3 text-lg font-black text-slate-950">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
            </div>
            <button type="button" onClick={beginCheckout} disabled={cartItems.length === 0} className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50">
              Checkout
              <ArrowRight size={18} />
            </button>
            <div className="mt-5 grid gap-3 border-t border-slate-200 pt-5 text-sm font-bold text-slate-600">
              <p className="flex items-center gap-2">
                <Truck size={17} className="text-blue-700" />
                Shipping calculated at checkout
              </p>
              <p className="flex items-center gap-2">
                <BadgeCheck size={17} className="text-blue-700" />
                Login required before placing order
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default CartPage
