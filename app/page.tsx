const services = [
  {
    title: "Cloud Infrastructure",
    text: "Secure, scalable cloud systems designed to reduce downtime and support fast business growth.",
  },
  {
    title: "Custom Software",
    text: "Business-first applications engineered for better automation, productivity, and control.",
  },
  {
    title: "Managed IT Support",
    text: "Reliable monitoring, maintenance, and responsive technical support for day-to-day operations.",
  },
];

const steps = [
  "Discovery & Strategy",
  "Design & Planning",
  "Development & Delivery",
  "Launch & Support",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <header className="flex items-center justify-between rounded-full border border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
                KW
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">KodyWorks</p>
                <p className="text-xs text-slate-500">IT Company</p>
              </div>
            </div>

            <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#process" className="hover:text-slate-900">Process</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
          </header>

          <div className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_0.96fr] lg:py-24">
            <div>
              <span className="inline-flex rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">
                Digital Transformation Partner
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Future-ready IT solutions for growing companies.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                We design secure software, scalable infrastructure, and dependable support so your team can move faster with confidence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-cyan-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-cyan-400"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-900 transition hover:border-cyan-400 hover:text-cyan-600"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-cyan-600">120+</p>
                  <p className="mt-1 text-sm text-slate-600">Projects Completed</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-cyan-600">45+</p>
                  <p className="mt-1 text-sm text-slate-600">Team Experts</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-cyan-600">98%</p>
                  <p className="mt-1 text-sm text-slate-600">Client Retention</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-200 bg-white p-6 shadow-[0_25px_70px_-25px_rgba(14,165,233,0.35)]">
              <div className="rounded-[1.5rem] bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    Live Operations Snapshot
                  </span>
                  <span className="text-xs text-slate-500">Updated now</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>System uptime</span>
                      <span className="font-semibold text-slate-900">99.98%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-200">
                      <div className="h-2 w-[99%] rounded-full bg-cyan-500" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm text-slate-600">Servers Managed</p>
                      <p className="mt-2 text-3xl font-bold text-slate-900">86</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm text-slate-600">Automation Jobs</p>
                      <p className="mt-2 text-3xl font-bold text-slate-900">182</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-sm text-cyan-800">
                    End-to-end IT delivery with engineering excellence and business focus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">What we do</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Smart technology services tailored for growth</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-11 w-11 rounded-2xl bg-cyan-100" />
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">Our process</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">A clear path from idea to measurable results</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl bg-slate-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <p className="mt-4 font-semibold text-slate-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] bg-cyan-500 px-8 py-10 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-50">Let's Build</p>
              <h2 className="mt-2 text-3xl font-black">Need a dependable IT partner for your next move?</h2>
            </div>
            <a href="mailto:hello@kodyworks.com" className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
              hello@kodyworks.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}