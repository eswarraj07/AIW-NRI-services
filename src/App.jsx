import {
  Home,
  Key,
  MapPin,
  FileText,
  Hammer,
  Landmark,
  Banknote,
  Lightbulb,
} from 'lucide-react';

const services = [
  { icon: Home,      label: 'House Rental' },
  { icon: Key,       label: 'Oyo / Airbnb Model Rental' },
  { icon: MapPin,    label: 'Remote Land Registration' },
  { icon: FileText,  label: 'Power of Attorney Document' },
  { icon: Hammer,    label: 'Construction Assistance' },
  { icon: Landmark,  label: 'Government Documents Processing' },
  { icon: Banknote,  label: 'Banking Services — NOC / Loan Clearance / Loan Services' },
  { icon: Lightbulb, label: 'Business Ideas & Advisory' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900">

      {/* ── Floating Nav ── */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
        <div className="flex items-center justify-between px-4 py-2.5 bg-white/80 backdrop-blur-xl rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-gray-100">

          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold tracking-tight select-none">
              AW
            </div>
            <span className="font-medium text-sm text-gray-900 whitespace-nowrap">AW NRI Services</span>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-1">
            {['Home', 'Services', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-full transition-colors hover:bg-gray-100"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="shrink-0 px-4 py-1.5 text-sm font-medium border border-orange-500 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="pt-40 pb-32 px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-8 tracking-wide uppercase">
          Trusted by NRIs worldwide
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-gray-900 leading-[1.05] mb-7 max-w-3xl">
          Miles Away, Yet in Complete Control of Your Indian Assets.
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 max-w-xl mb-10 leading-relaxed">
          All is well with AW. We handle your properties, documents, and investments while you are abroad.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors text-sm"
        >
          Book a Consultation
        </a>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">

            {/* Left sticky column */}
            <div className="md:sticky md:top-28 self-start">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-gray-900 leading-tight mb-8">
                Simplify your NRI life with us.
              </h2>

              <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-4">
                How we help
              </p>
              <div className="flex flex-wrap gap-2">
                {['Reliable', 'Transparent', 'Fast', 'Trusted', 'Remote-Ready'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right service list */}
            <div className="divide-y divide-gray-100">
              {services.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-5 py-6 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:bg-orange-600 transition-colors">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-xl font-medium text-gray-900 leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Footer ── */}
      <section id="contact" className="py-28 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">Contact us</p>
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-gray-900 mb-16 leading-tight">
            Let's work together.
          </h2>

          {/* Row 1 — Phone numbers */}
          <div className="flex flex-col gap-6 mb-14">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">Tamilalazhan</p>
              <a
                href="tel:8525893351"
                className="text-2xl font-bold text-gray-900 tracking-tight hover:text-gray-500 transition-colors"
              >
                85258 93351
              </a>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">Eswarraj</p>
              <a
                href="tel:9600620041"
                className="text-2xl font-bold text-gray-900 tracking-tight hover:text-gray-500 transition-colors"
              >
                96006 20041
              </a>
            </div>
          </div>

          {/* Row 2 — Addresses */}
          <div className="grid sm:grid-cols-3 gap-10">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">Chennai Office</p>
              <address className="not-italic text-gray-700 text-sm leading-relaxed">
                No.2/4, Ground Floor,<br />
                Deviparasakthi Nagara First Street,<br />
                Karambakam, Porur,<br />
                Chennai — 600116
              </address>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">Thanjavur Office</p>
              <address className="not-italic text-gray-700 text-sm leading-relaxed">
                Plot No.14, 3166/17,<br />
                A.S Anbalagan Nagar,<br />
                Thanjavur — 613003
              </address>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">Pondicherry Office</p>
              <address className="not-italic text-gray-700 text-sm leading-relaxed">
                494/A, Vazhudhavour Road,<br />
                Muthrayarpalayam,<br />
                Pondicherry — 605009
              </address>
            </div>
          </div>

          {/* Divider + copyright */}
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <span>© 2024 AW NRI Services. All rights reserved.</span>
            <span className="italic">All is well.</span>
          </div>
        </div>
      </section>

      {/* ── Floating Action Button (Bottom) ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <a
          href="https://wa.me/919600620041"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 pl-5 pr-2 py-2 bg-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(0,0,0,0.20)] transition-shadow"
        >
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
            WhatsApp us
          </span>
          <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        </a>
      </div>

    </div>
  );
}
