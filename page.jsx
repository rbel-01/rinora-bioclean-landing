
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Leaf, Droplet, Recycle, Sparkles, ShieldCheck, Factory, ChevronRight, Mail, Phone, Globe2, Instagram, Linkedin, MapPin, ShoppingCart } from "lucide-react";
import "./globals.css";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 ${className}`}>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm bg-white/70 backdrop-blur shadow-sm">
    {children}
  </span>
);

export default function Page() {
  const t = {
    nav: { product: "Products", how: "How it works", impact: "Impact", partners: "Partners", faq: "FAQ", contact: "Contact" },
    hero: {
      title: "Replace plastic with natural loofah fibers",
      subtitle: "Rinora BioClean manufactures sustainable solutions for skincare, homecare and industry – using only biodegradable plant fibers.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "Explore products",
    },
    pillars: {
      skincare: { title: "Skincare", desc: "Loofah sponges for natural exfoliation – polyurethane alternative." },
      homecare: { title: "Homecare", desc: "Kitchen & bathroom sponges – zero microplastics, durable and compostable." },
      industrial: { title: "Industrial", desc: "Washing‑machine microfiber filters & oil‑spill absorbents." },
    },
    products: {
      title: "Key products",
      items: {
        face: { name: "Loofah face pads", desc: "2–3×/week for clearer pores and glowing skin." },
        body: { name: "Body loofah sponge", desc: "Gentle exfoliation, circulation boost – plastic sponge replacement." },
        kitchen: { name: "BioClean kitchen sponge", desc: "Dual‑layer (loofah + cotton) for scratch‑free dishwashing." },
        bathroom: { name: "Bathroom & tile pad", desc: "Efficient cleaning of tiles/surfaces – without harsh chemicals." },
        filter: { name: "Microfiber filter for washers", desc: "Traps hundreds of thousands of microfibers per load." },
        oil: { name: "Oil/grease absorbents", desc: "Loofah booms & sorbents for polluted waters." },
      },
    },
    how: {
      title: "How BioClean works",
      steps: [
        { title: "Farm‑sourced fibers", desc: "We grow, select and process loofah to sustainable standards.", icon: <Leaf className="w-5 h-5" /> },
        { title: "Product engineering", desc: "We optimize thickness, durability and ergonomics per use‑case.", icon: <Sparkles className="w-5 h-5" /> },
        { title: "Testing & compliance", desc: "Lab tests for performance & safety; docs for grants/CE.", icon: <ShieldCheck className="w-5 h-5" /> },
        { title: "Scale & supply", desc: "Sustainable production, recyclable packaging, B2C/B2B logistics.", icon: <Factory className="w-5 h-5" /> },
      ],
    },
    impact: {
      title: "Measurable impact",
      stats: [
        { label: "Microplastics avoided", value: "~0.5 g/load" },
        { label: "Biodegradation", value: "< 60 days" },
        { label: "Plastic materials saved", value: "up to 90%" },
        { label: "Local employment", value: "+ artisans & farms" },
      ],
      note: "Indicative values – tuned per client specs & lab tests.",
    },
    partners: { title: "Trusted by sustainability pioneers", desc: "Space for partner logos, certifications & grant programmes (EU, UNDP, RCC, EBRD, CBE JU)." },
    cta: { title: "Ready to pilot BioClean in your business?", subtitle: "Get a demo & quote within the next business day", btn: "Request a quote" },
    contact: { title: "Contact us", name: "Name", email: "Email", msg: "Message", submit: "Send request", placeholder: "E.g. need 500 kitchen sponges with our logo. Delivery timeframe?" },
    faq: {
      title: "Frequently asked questions",
      q1: { q: "Can you customize sizes and packaging?", a: "Yes. OEM/white‑label available: sizes, thickness, sets, labels and recycled cardboard boxes." },
      q2: { q: "How to clean BioClean sponges?", a: "Rinse + air‑dry. Hygiene boost: dip in hot water 60–70°C for 1–2 min, or quick steam." },
      q3: { q: "Do you support B2B volumes?", a: "Yes. Scalable production, documented QC, 2–6 week lead times depending on volume." },
    },
    footer: { rights: `© ${new Date().getFullYear()} Rinora BioClean. All rights reserved.`, addr: "Kuç, Berat, Albania" },
  };

  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-emerald-600 text-white grid place-items-center shadow">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-semibold">Rinora BioClean</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-emerald-700">{t.nav.product}</a>
            <a href="#how" className="hover:text-emerald-700">{t.nav.how}</a>
            <a href="#impact" className="hover:text-emerald-700">{t.nav.impact}</a>
            <a href="#partners" className="hover:text-emerald-700">{t.nav.partners}</a>
            <a href="#faq" className="hover:text-emerald-700">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-emerald-700">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact"><button className="rounded-2xl bg-emerald-600 text-white px-4 py-2">Request a quote</button></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <Section id="hero" className="pt-16 pb-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Pill><Droplet className="w-4 h-4"/> Bio · Eco · Circular</Pill>
            <motion.h1 initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
              {t.hero.title}
            </motion.h1>
            <p className="mt-4 text-slate-600 text-lg">{t.hero.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact"><button className="rounded-2xl bg-emerald-600 text-white px-5 py-3 flex items-center gap-2">{t.hero.ctaPrimary} <ChevronRight className="w-4 h-4"/></button></a>
              <a href="#products"><button className="rounded-2xl border px-5 py-3">{t.hero.ctaSecondary}</button></a>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {[t.pillars.skincare, t.pillars.homecare, t.pillars.industrial].map((p,i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-emerald-600"/>
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-slate-600">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-100/60 blur-2xl rounded-full"/>
            <div className="relative rounded-3xl shadow-xl border bg-white">
              <div className="p-6 border-b">
                <div className="text-lg font-semibold">BioClean Stack</div>
                <div className="text-sm text-slate-600">Skincare · Homecare · Industrial</div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-6">
                <div className="rounded-2xl border p-4 text-center">
                  <Leaf className="mx-auto"/>
                  <div className="mt-2 font-medium">Loofah</div>
                  <div className="text-xs text-slate-600">Plant fiber</div>
                </div>
                <div className="rounded-2xl border p-4 text-center">
                  <Recycle className="mx-auto"/>
                  <div className="mt-2 font-medium">Circular</div>
                  <div className="text-xs text-slate-600">Waste → value</div>
                </div>
                <div className="rounded-2xl border p-4 text-center">
                  <ShieldCheck className="mx-auto"/>
                  <div className="mt-2 font-medium">Safe</div>
                  <div className="text-xs text-slate-600">No microplastics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section id="products">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.products.title}</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(t.products.items).map((item, idx) => (
            <div key={idx} className="rounded-3xl border">
              <div className="p-6 border-b">
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-slate-600">{item.desc}</div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <button className="rounded-2xl border px-4 py-2 flex items-center gap-2"><ShoppingCart className="w-4 h-4"/> Order</button>
                <button className="rounded-2xl bg-emerald-600 text-white px-4 py-2">Get quote</button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW */}
      <Section id="how">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.how.title}</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.how.steps.map((s, i) => (
            <div key={i} className="rounded-3xl border">
              <div className="p-6 flex items-start gap-3">
                <div className="h-10 w-10 rounded-2xl bg-emerald-600 text-white grid place-items-center">{s.icon}</div>
                <div>
                  <div className="text-base font-semibold">{s.title}</div>
                  <div className="text-slate-600">{s.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* IMPACT */}
      <Section id="impact">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.impact.title}</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.impact.stats.map((st, i) => (
            <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-2xl font-semibold">{st.value}</div>
              <div className="text-slate-600 mt-1">{st.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4">{t.impact.note}</p>
      </Section>

      {/* PARTNERS */}
      <Section id="partners">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.partners.title}</h2>
        <p className="text-slate-600 mt-2">{t.partners.desc}</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 opacity-80">
          {["EU", "UNDP", "RCC", "EBRD", "CBE JU", "Challenge Fund"].map((p) => (
            <div key={p} className="rounded-2xl border bg-white h-16 grid place-items-center text-sm font-medium">{p}</div>
          ))}
        </div>
      </Section>

      {/* BIG CTA */}
      <Section className="py-16">
        <div className="rounded-3xl bg-emerald-600 text-white p-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to pilot BioClean in your business?</h3>
            <p className="mt-2 text-emerald-100">Get a demo & quote within the next business day</p>
          </div>
          <div className="flex md:justify-end items-center gap-3">
            <a href="#contact"><button className="rounded-2xl bg-white text-emerald-700 px-5 py-3">Request a quote</button></a>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contact us</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-8">
          <div className="rounded-3xl border lg:col-span-2 bg-white">
            <div className="p-6">
              <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="sm:col-span-1">
                  <label className="text-sm">Name</label>
                  <input placeholder="Your name" className="rounded-2xl mt-1 w-full border px-3 py-2" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm">Email</label>
                  <input type="email" placeholder="name@example.com" className="rounded-2xl mt-1 w-full border px-3 py-2" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Message</label>
                  <textarea placeholder="E.g. need 500 kitchen sponges with our logo. Delivery timeframe?" className="rounded-2xl mt-1 w-full border px-3 py-2 min-h-[140px]" />
                </div>
                <div className="sm:col-span-2">
                  <button className="rounded-2xl w-full bg-emerald-600 text-white px-4 py-2" type="submit">Send request</button>
                </div>
              </form>
              <p className="text-xs text-slate-500 mt-3">* Demo form – wire to your email/CRM.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border bg-white p-6">
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4"/><span>Kuç, Berat, Albania</span></div>
              <div className="flex items-center gap-3 mt-2"><Mail className="w-4 h-4"/><a href="mailto:hello@rinorabioclean.com" className="hover:underline">hello@rinorabioclean.com</a></div>
              <div className="flex items-center gap-3 mt-2"><Phone className="w-4 h-4"/><a href="tel:+355698489173" className="hover:underline">+355 69 848 9173</a></div>
              <div className="flex items-center gap-3 mt-2"><Globe2 className="w-4 h-4"/><a className="hover:underline" href="#">rinora.al</a></div>
            </div>
            <div className="rounded-3xl border bg-white p-6">
              <div className="flex items-center gap-3"><Instagram className="w-4 h-4"/><a className="hover:underline" href="#">@rinorahandmade</a></div>
              <div className="flex items-center gap-3 mt-2"><Linkedin className="w-4 h-4"/><a className="hover:underline" href="#">LinkedIn / Rinora</a></div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Frequently asked questions</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {q: "Can you customize sizes and packaging?", a: "Yes. OEM/white‑label available: sizes, thickness, sets, labels and recycled cardboard boxes."},
            {q: "How to clean BioClean sponges?", a: "Rinse + air‑dry. Hygiene boost: dip in hot water 60–70°C for 1–2 min, or quick steam."},
            {q: "Do you support B2B volumes?", a: "Yes. Scalable production, documented QC, 2–6 week lead times depending on volume."},
          ].map((qa, i) => (
            <div key={i} className="rounded-3xl border bg-white">
              <div className="p-6">
                <div className="text-base font-semibold">{qa.q}</div>
                <div className="text-slate-600">{qa.a}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t bg-white/70">
        <Section className="py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4"/>
              <span>Rinora BioClean</span>
            </div>
            <div className="text-slate-500">© {new Date().getFullYear()} Rinora BioClean. All rights reserved.</div>
          </div>
        </Section>
      </footer>
    </div>
  );
}
