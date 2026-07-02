import {
  ArrowRight,
  Check,
  CheckCheck,
  CircleGauge,
  Mail,
  PackageCheck,
  Phone,
  Send,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Star,
  Truck,
  Users,
} from 'lucide-react'
import ProductImage from '../components/ProductImage'
import { products } from '../data/products'
import { inputClass, textareaClass } from '../styles/formClasses'
import { productUrl } from '../utils/assets'
import { formatPrice } from '../utils/formatPrice'

const featureItems = [
  {
    icon: CircleGauge,
    title: 'Less noise, faster alignment',
    text: 'A focused product architecture helps visitors understand the offer immediately.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust-forward presentation',
    text: 'Clinical cues, clear hierarchy, and restrained motion keep the brand credible.',
  },
  {
    icon: Users,
    title: 'Built for real routines',
    text: 'Messaging centers practical habit loops instead of vague transformation language.',
  },
]

const workSteps = [
  'Assess your current routine',
  'Choose one product track',
  'Follow the 14-day cadence',
  'Review, refine, and scale gently',
]

const testimonials = [
  {
    quote: 'The product lineup finally feels intentional. It gives direction without overwhelming people.',
    author: 'Alec Morgan',
    role: 'Program Lead',
  },
  {
    quote: 'I like the clarity in every section. It feels premium and practical at the same time.',
    author: 'Nina Flores',
    role: 'Founder',
  },
  {
    quote: 'Much cleaner than our competitors - the experience feels fast, calm, and premium.',
    author: 'Jordan Lee',
    role: 'Early Adopter',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '$29',
    note: 'For testing consistency habits',
    items: ['Recalibrate Core', 'Starter support path', 'Email updates'],
    productIds: ['core'],
  },
  {
    name: 'Core',
    price: '$68',
    note: 'Best value for long-term use',
    items: ['Recalibrate Core + Night', 'Priority support', 'Guided cadence'],
    productIds: ['core', 'night'],
    featured: true,
  },
  {
    name: 'Performance',
    price: '$117',
    note: 'Maximum structure and upgrades',
    items: ['All 3 Recalibrate products', 'Private guidance calls', 'Adaptive plans'],
    productIds: ['core', 'night', 'motion'],
  },
]

const faqItems = [
  {
    q: 'How many products do I need to start?',
    a: 'Start with one product and one routine. Add a second after two consistent weeks.',
  },
  {
    q: 'Can I pause or swap products?',
    a: 'Yes. The system is built for flexible routines and transparent transitions.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes, with regional shipping options and tracking available at checkout.',
  },
]

function HomePage({ addToCart, addPlanToCart, contactStatus, handleContactSubmit, setPage }) {
  return (
    <main>
      <section id="top" className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_54%,#edf6ff_100%)] pt-28">
        <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow">Recalibrate 17</p>
            <h1 className="mt-6 text-5xl font-black leading-none text-slate-950 sm:text-6xl lg:text-7xl">
              Performance, focus, and balance in one daily system.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A premium Recalibrate 17 storefront built around the actual product, clear benefits, and a complete checkout journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                Shop products
                <ArrowRight size={18} />
              </button>
              <button type="button" onClick={() => setPage('cart')} className="btn-secondary">
                View cart
                <ShoppingBag size={18} />
              </button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ['3', 'tracks'],
                ['60', 'tablets'],
                ['14', 'day reset'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-slate-950">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[520px] items-end justify-center">
            <div className="absolute inset-x-4 bottom-8 h-24 rounded-full bg-slate-300/50 blur-2xl" />
            <img
              src={productUrl}
              alt="Recalibrate 17 bottle"
              className="relative h-[560px] max-h-[70vh] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Features</p>
              <h2 className="mt-4 text-4xl font-black text-slate-950">Not louder. Clearer, calmer, easier to trust.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">
              The site should feel premium and practical at the same time: strong product presence, clear buying decisions, and no clutter.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featureItems.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-white py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Products</p>
              <h2 className="mt-4 text-4xl font-black text-slate-950">Choose your track.</h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Each option uses the same product system, framed for a specific customer routine.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <ProductImage title={product.title} />
                <div className="border-t border-slate-100 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`inline-block h-2 w-8 rounded-full ${product.accent}`} />
                      <h3 className="mt-4 text-2xl font-black text-slate-950">{product.title}</h3>
                      <p className="mt-1 text-sm font-black uppercase text-blue-700">{product.tag}</p>
                    </div>
                    <p className="text-3xl font-black text-slate-950">{formatPrice(product.price)}</p>
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">{product.description}</p>
                  <ul className="mt-5 space-y-2">
                    {product.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check size={16} className="text-blue-700" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button type="button" onClick={() => addToCart(product)} className="btn-primary mt-6 w-full">
                    Add to cart
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="section-shell grid gap-4 md:grid-cols-3">
          {[
            [ShieldCheck, 'Secure checkout', 'Login, contact details, address, and order summary in one clear flow.'],
            [Truck, 'Shipping ready', 'The checkout form captures the formalities needed for real fulfilment.'],
            [PackageCheck, 'Product focused', 'The bottle stays visible and central across the commerce journey.'],
          ].map(([Icon, title, text]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-6">
              <Icon className="text-blue-700" size={24} />
              <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 text-4xl font-black text-slate-950">A clean path to consistency.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Four intentional milestones guide the first two weeks without making the experience feel heavy.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {workSteps.map((step, index) => (
              <div key={step} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-blue-700">0{index + 1}</p>
                <p className="mt-4 text-lg font-black text-slate-950">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell">
          <p className="eyebrow border-white/10 bg-white/10 text-blue-100">Testimonials</p>
          <h2 className="mt-4 text-4xl font-black">Premium without pretending.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
                <div className="flex gap-1 text-blue-200">
                  {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={15} fill="currentColor" />)}
                </div>
                <p className="mt-5 leading-8 text-slate-200">"{item.quote}"</p>
                <footer className="mt-6">
                  <strong className="block text-white">{item.author}</strong>
                  <span className="text-sm text-slate-400">{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-slate-50 py-20">
        <div className="section-shell">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black text-slate-950">Start clean, scale with confidence.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-lg border p-6 shadow-sm transition hover:-translate-y-1 ${
                  plan.featured ? 'border-blue-200 bg-slate-950 text-white shadow-glow' : 'border-slate-200 bg-white text-slate-950'
                }`}
              >
                {plan.featured && <span className="absolute right-5 top-5 rounded-md bg-white px-3 py-1 text-xs font-black uppercase text-blue-700">Popular</span>}
                <p className="text-sm font-black uppercase text-blue-600">{plan.name}</p>
                <p className="mt-5 text-5xl font-black">{plan.price}</p>
                <p className={`mt-3 ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.note}</p>
                <ul className="mt-7 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold">
                      <CheckCheck size={15} className={plan.featured ? 'text-blue-200' : 'text-blue-700'} />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() =>
                    addPlanToCart({
                      ...plan,
                      products: products.filter((product) => plan.productIds.includes(product.id)),
                    })
                  }
                  className={plan.featured ? 'btn-secondary mt-8 w-full' : 'btn-primary mt-8 w-full'}
                >
                  Add {plan.name} plan
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 text-4xl font-black text-slate-950">Answers before objections.</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm open:shadow-soft">
                <summary className="cursor-pointer list-none text-lg font-black text-slate-950">{item.q}</summary>
                <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-4xl font-black text-slate-950">Need help before ordering?</h2>
            <div className="mt-6 grid gap-3">
              <a href="mailto:hello@recalibrate17.com" className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 font-black text-slate-950 hover:border-blue-200 hover:text-blue-700">
                <Mail size={18} />
                hello@recalibrate17.com
              </a>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 font-black text-slate-950">
                <Phone size={18} />
                Support Mon-Fri
              </div>
            </div>
          </div>
          <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" onSubmit={handleContactSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-slate-700">Name</span>
                <input required name="name" className={inputClass} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-700">Email</span>
                <input required name="email" type="email" className={inputClass} placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-black text-slate-700">Message</span>
              <textarea required name="message" rows="5" className={textareaClass} placeholder="Tell us what you need help with" />
            </label>
            <button type="submit" className="btn-primary mt-5 w-full">
              Send message
              <Send size={18} />
            </button>
            {contactStatus && <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-bold text-emerald-700">{contactStatus}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}

export default HomePage
