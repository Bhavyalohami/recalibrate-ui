import {
  ArrowRight,
  CheckCheck,
  CircleCheck,
  CirclePlay,
  CircleGauge,
  ClipboardList,
  Cpu,
  Flame,
  Headset,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`
const logoUrl = assetUrl('assets/recalibrate-logo-tight.png')
const productUrl = assetUrl('assets/recalibrate-product-cropped.jpeg')

const navItems = [
  { label: 'Features', href: 'features' },
  { label: 'Products', href: 'products' },
  { label: 'Pricing', href: 'pricing' },
  { label: 'FAQ', href: 'faq' },
]

const products = [
  {
    title: 'Recalibrate Core',
    description: 'A daily baseline blend for focus, rhythm, and consistency.',
    details: ['Clean profile', 'Daily routine blocks', 'Balanced release'],
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Recalibrate Night',
    description: 'A calmer reset path designed for wind-down and smoother mornings.',
    details: ['Evening wind-down', 'Consistency reminders', 'Calm-forward formulas'],
    accent: 'from-indigo-500 to-violet-400',
  },
  {
    title: 'Recalibrate Motion',
    description: 'A stronger structure for active days and recovery checkpoints.',
    details: ['Performance pacing', 'Recovery checkpoints', 'Hydration pairing'],
    accent: 'from-sky-500 to-emerald-400',
  },
]

const featureItems = [
  {
    icon: <CircleGauge size={22} strokeWidth={1.8} />,
    title: 'Less noise, faster alignment',
    text: 'A focused product architecture that helps visitors understand the offer immediately.',
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
    title: 'Trust-forward presentation',
    text: 'Soft clinical cues, clear hierarchy, and restrained motion keep the brand credible.',
  },
  {
    icon: <Users size={22} strokeWidth={1.8} />,
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

const stats = [
  { label: 'Products', value: '3', icon: <CircleCheck size={20} /> },
  { label: 'Core principles', value: '8', icon: <Cpu size={20} /> },
  { label: 'Day baseline', value: '14', icon: <CirclePlay size={20} /> },
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

const plans = [
  {
    name: 'Starter',
    price: '$29',
    note: 'For testing consistency habits',
    items: ['1 product', 'Starter support path', 'Email updates'],
  },
  {
    name: 'Core',
    price: '$49',
    note: 'Best value for long-term use',
    items: ['2 products', 'Priority support', 'Guided cadence'],
    featured: true,
  },
  {
    name: 'Performance',
    price: '$79',
    note: 'Maximum structure and upgrades',
    items: ['All 3 products', 'Private guidance calls', 'Adaptive plans'],
  },
]

function Reveal({ children, delay = 0 }) {
  return (
    <div className="reveal" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function ProductVisual({ accent, title }) {
  return (
    <div className="relative h-72 overflow-hidden rounded-[1.75rem] border border-slate-100 bg-gradient-to-br from-white via-blue-50 to-slate-100 p-5">
      <div className={`absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-30`} />
      <div className="absolute inset-x-10 bottom-8 h-12 rounded-full bg-slate-400/20 blur-2xl" />
      <div className="absolute bottom-6 left-1/2 h-20 w-44 -translate-x-1/2 rounded-[100%] bg-white/80 shadow-[0_30px_70px_rgba(15,23,42,0.16)]" />
      <div className="relative flex h-full items-end justify-center">
        <div className="flex h-full max-h-[17rem] items-end justify-center overflow-hidden rounded-3xl bg-white/95 px-6 pt-5 shadow-[inset_0_0_0_1px_rgba(226,232,240,0.75),0_24px_60px_rgba(15,23,42,0.14)]">
          <img
            src={productUrl}
            alt={`${title} bottle`}
            className="h-full w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl py-2">
        <nav className="section-shell flex h-20 items-center justify-between gap-4" aria-label="Main navigation">
          <a className="flex items-center gap-3" href="#top" aria-label="Recalibrate 17 home">
            <span className="flex h-20 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-soft ring-1 ring-slate-200">
              <img
                src={logoUrl}
                alt="Recalibrate 17"
                className="h-full w-auto object-contain object-center"
              />
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex" role="list">
            {navItems.map((item) => (
              <a key={item.href} role="listitem" href={`#${item.href}`} className="text-sm font-bold text-slate-500 transition hover:text-brand-600">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a className="hidden text-sm font-bold text-slate-600 hover:text-brand-600 sm:inline-flex" href="#faq">
              Login
            </a>
            <a className="btn-primary" href="#products">
              Get Started
              <ArrowRight size={18} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="top" className="relative bg-hero-mesh pt-32 sm:pt-36">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
          <div className="section-shell relative grid min-h-[760px] items-center gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <p className="eyebrow"><Sparkles size={14} /> Recal17 Concept Experience</p>
              <h1 className="mt-7 max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.065em] text-slate-950 sm:text-7xl lg:text-8xl">
                Reset your routine. Rebuild your baseline.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                A premium landing page direction for Recalibrate 17 - calm, precise, and built to make three products feel like one confident system.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="#products">
                  Review products
                  <ArrowRight size={18} />
                </a>
                <a className="btn-secondary" href="#features">
                  Explore the system
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                    <div className="mb-3 text-brand-600">{item.icon}</div>
                    <p className="text-2xl font-black text-slate-950">{item.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-8 rounded-[3rem] bg-brand-500/10 blur-3xl" />
                <div className="glass-card relative overflow-hidden p-5 sm:p-7">
                  <div className="absolute inset-x-12 bottom-14 h-20 rounded-full bg-blue-500/20 blur-3xl" />
                  <div className="relative rounded-[2rem] bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 shadow-2xl">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-600">Performance • Focus • Balance</p>
                      <span className="shrink-0 rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">60 tablets</span>
                    </div>
                    <img
                      src={productUrl}
                      alt="Recalibrate 17 chewable tablets bottle"
                      className="mx-auto mt-3 h-[560px] max-h-[62vh] w-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                  <div className="relative mt-5 grid grid-cols-3 gap-3">
                    {['Performance', 'Focus', 'Balance'].map((item) => (
                      <div key={item} className="rounded-2xl bg-white/80 p-4 text-center text-sm font-bold text-slate-600 shadow-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="features" className="bg-white py-24 sm:py-32">
          <div className="section-shell">
            <Reveal>
              <p className="eyebrow">Features</p>
              <div className="mt-5 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">Not louder. Clearer, calmer, easier to trust.</h2>
                <p className="text-lg leading-8 text-slate-600">The page now uses a modern Tailwind system with better spacing, hierarchy, depth, and mobile behavior.</p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {featureItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <article className="group h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white" aria-hidden="true">
                      {item.icon}
                    </span>
                    <h3 className="mt-6 text-xl font-black tracking-tight text-slate-950">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="bg-slate-50 py-24 sm:py-32">
          <div className="section-shell">
            <Reveal>
              <p className="eyebrow">Products</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">Three tracks, one polished product story.</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {products.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <article className="h-full rounded-[2rem] border border-white bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <ProductVisual accent={item.accent} title={item.title} />
                    <div className="p-4">
                      <h3 className="text-2xl font-black tracking-tight text-slate-950">{item.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                      <ul className="mt-6 space-y-3">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                            <CheckCheck className="text-brand-600" size={16} strokeWidth={2.2} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">How it works</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">A clean path to consistency.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Four intentional milestones guide the first two weeks without making the experience feel heavy.</p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {workSteps.map((step, index) => (
                <Reveal key={step} delay={index * 90}>
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-black text-brand-600">0{index + 1}</p>
                    <p className="mt-4 text-lg font-black text-slate-950">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-24 text-white sm:py-32">
          <div className="section-shell">
            <Reveal>
              <p className="eyebrow border-white/10 bg-white/10 text-blue-200">Testimonials</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Premium without pretending.</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <Reveal key={item.author} delay={index * 100}>
                  <blockquote className="h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition hover:bg-white/[0.09]">
                    <div className="flex gap-1 text-blue-200">
                      {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={15} fill="currentColor" />)}
                    </div>
                    <p className="mt-6 text-lg leading-8 text-slate-200">"{item.quote}"</p>
                    <footer className="mt-7">
                      <strong className="block text-white">{item.author}</strong>
                      <span className="text-sm text-slate-400">{item.role}</span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-slate-50 py-24 sm:py-32">
          <div className="section-shell">
            <Reveal>
              <p className="eyebrow">Pricing</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">Start clean, scale with confidence.</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <Reveal key={plan.name} delay={index * 100}>
                  <article className={`relative h-full rounded-[2rem] border p-7 shadow-sm transition duration-300 hover:-translate-y-1 ${plan.featured ? 'border-brand-200 bg-slate-950 text-white shadow-glow' : 'border-white bg-white text-slate-950 hover:shadow-soft'}`}>
                    {plan.featured && <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-brand-600">Popular</span>}
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-500">{plan.name}</p>
                    <p className="mt-5 text-5xl font-black tracking-tight">{plan.price}</p>
                    <p className={`mt-3 ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.note}</p>
                    <ul className="mt-7 space-y-3">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm font-bold">
                          <Sparkles size={15} className={plan.featured ? 'text-blue-200' : 'text-brand-600'} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a className={plan.featured ? 'btn-secondary mt-8 w-full' : 'btn-primary mt-8 w-full'} href="#contact">Choose plan</a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-24 sm:py-32">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">Answers before objections.</h2>
            </Reveal>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Reveal key={item.q} delay={index * 100}>
                  <details className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm open:shadow-soft">
                    <summary className="cursor-pointer list-none text-lg font-black text-slate-950">
                      {item.q}
                    </summary>
                    <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-hero-mesh py-24 sm:py-32">
          <div className="section-shell">
            <div className="glass-card grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow">Launch ready</p>
                <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">Ready to move from concept to polished storefront?</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Swap in final product renders, brand copy, and checkout links - the structure is now ready for a real launch pass.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a className="btn-primary" href="#products">
                  Get started
                  <CircleCheck size={18} />
                </a>
                <a className="btn-secondary" href="mailto:hello@recalibrate17.com">
                  Contact sales
                  <Headset size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-10 text-slate-400">
        <div className="section-shell flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-center gap-3">
            <span className="flex h-16 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
              <img src={logoUrl} alt="Recalibrate 17" className="h-full w-auto object-contain object-center" />
            </span>
            <span>© 2026</span>
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white"><Flame size={16} /><ClipboardList size={16} /> Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
