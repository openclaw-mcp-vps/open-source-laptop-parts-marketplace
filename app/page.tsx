export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Open Hardware Marketplace
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Build Your Dream Laptop{" "}
          <span className="text-[#58a6ff]">From Open Parts</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          The marketplace connecting hardware makers with verified component suppliers and open-source design files. Source parts, share schematics, and build freely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start for $29/month
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-4 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚙️", title: "Verified Suppliers", desc: "Every component supplier is vetted for quality and reliability." },
            { icon: "📐", title: "Design File Sharing", desc: "Access and share open-source schematics, PCB layouts, and CAD files." },
            { icon: "🔧", title: "Maker Community", desc: "Connect with hobbyists, repair shops, and custom laptop builders." }
          ].map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="inline-block mb-2 px-3 py-1 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">Pro Maker</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-extrabold text-white">$29</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to source, share, and build.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited component listings",
              "Design file uploads & downloads",
              "Supplier verification badge",
              "Priority community support",
              "Early access to new features"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Who is this marketplace for?",
              a: "Hardware makers, electronics hobbyists, and repair shops who want to source open-source laptop components or share their own designs."
            },
            {
              q: "How are suppliers verified?",
              a: "Suppliers submit documentation and sample products for review. Verified suppliers receive a badge visible to all buyers on the platform."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your account dashboard. Your access continues until the end of the billing period."
            }
          ].map((item) => (
            <div key={item.q} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} OpenParts. All rights reserved.
      </footer>
    </main>
  );
}
