"use client"

import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  Package,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden pt-6 md:pt-12 pb-4 md:pb-8">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-4">

        {/* MAIN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-y-4 gap-x-2 md:gap-6">

          {/* BRAND (Full width on minimal mobile, 1 col otherwise) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 space-y-1.5 md:space-y-2">
            <Link href="/" className="block">
              <h2 className="text-sm sm:text-base font-bold tracking-tight text-white mb-0.5">
                HEXAMECH
              </h2>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-orange-500">
                LINICH TOOLS
              </span>
            </Link>

            <p className="text-[11px] sm:text-[12px] leading-relaxed text-zinc-300 max-w-xs">
              Trusted B2B supplier of professional automotive and industrial tools.
            </p>

            <div className="flex gap-2">
              {/* Instagram */}
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded border border-white/10 hover:border-[#E1306C]/50 text-[#E1306C] bg-white/5 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded border border-white/10 hover:border-[#1877F2]/50 text-[#1877F2] bg-white/5 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3 h-3" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917510638693"
                className="w-6 h-6 flex items-center justify-center rounded border border-white/10 hover:border-[#25D366]/50 text-[#25D366] bg-white/5 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div className="col-span-1 lg:col-span-2 text-left md:text-left mt-0">
            <h4 className="footer-title mb-1.5 md:mb-2 !text-[9px] !text-orange-500 lg:!text-white">Company</h4>
            <ul className="footer-list space-y-0.5">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Products</Link></li>
              <li><Link href="/brands">Brands</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* PRODUCTS (Hidden Mobile) */}
          <div className="hidden lg:block lg:col-span-2">
            <h4 className="footer-title mb-2 !text-[9px]">Products</h4>
            <ul className="footer-list space-y-0.5">
              <li>Welding Machines</li>
              <li>Lifting Equipment</li>
              <li>Pneumatic Tools</li>
              <li>Diagnostic Equipment</li>
            </ul>
          </div>

          {/* SUPPORT (Hidden Mobile) */}
          <div className="hidden lg:block lg:col-span-2">
            <h4 className="footer-title mb-2 !text-[9px]">Support</h4>
            <ul className="footer-list space-y-0.5">
              <li><Link href="/contact">Request a Quote</Link></li>
              <li>WhatsApp Sales</li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* ADDRESS */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 space-y-1.5">
            <h4 className="footer-title mb-1.5 md:mb-2 !text-[9px]">Contact Us</h4>
            <div className="footer-contact">
              <MapPin className="icon" />
              <span className="leading-tight">
                Door No 17/346,<br className="hidden sm:block" /> Chulliparamba, Calicut
              </span>
            </div>
            <div className="footer-contact">
              <Phone className="icon" />
              <a href="tel:+917510638693">+91 75106 38693</a>
            </div>
            <div className="footer-contact">
              <Mail className="icon" />
              <a href="mailto:hexamechlinichtools@gmail.com" className="truncate max-w-[140px] sm:max-w-none">
                hexamechlinichtools@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* TRUST STRIP - Tightened for Mobile */}
        <div className="grid grid-cols-3 gap-1 sm:gap-4 mt-3 pt-2 border-t border-white/5">
          <TrustItem icon={ShieldCheck} title="GST Verified" desc="Registered" />
          <TrustItem icon={Truck} title="India Shipping" desc="Fast Delivery" />
          <TrustItem icon={Package} title="Genuine Tools" desc="100% Original" />
        </div>

        {/* COPYRIGHT - Tightened */}
        <div className="mt-2 pt-2 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-[0.2em] text-center md:text-left">
              © 2025 Hexamech Linich Tools.
            </p>
            <div className="flex items-center gap-4 hidden sm:flex">
              <Link href="/privacy" className="text-[8px] text-zinc-600 hover:text-orange-500 font-bold uppercase tracking-widest transition-colors">Privacy</Link>
              <Link href="/terms" className="text-[8px] text-zinc-600 hover:text-orange-500 font-bold uppercase tracking-widest transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>

      {/* LOCAL STYLES */}
      <style jsx>{`
        .footer-title {
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: white;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .footer-list {
          font-size: 13px;
          line-height: 1.6;
        }
        .footer-list li {
          color: #e4e4e7;
        }
        .footer-list li:hover {
          color: #f97316;
        }
        .footer-contact {
          display: flex;
          gap: 8px;
          font-size: 13px;
          color: #e4e4e7;
        }
        .icon {
          width: 16px;
          height: 16px;
          color: #f97316;
          margin-top: 1px;
        }
      `}</style>
    </footer>
  )
}

function TrustItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: any
  title: string
  desc: string
}) {
  return (
    <div className="flex flex-col items-center text-center gap-1.5 px-1">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
      <div>
        <h5 className="text-[11px] sm:text-xs font-semibold text-white leading-tight">{title}</h5>
        <p className="text-[9px] sm:text-[10px] text-zinc-500 hidden sm:block">{desc}</p>
      </div>
    </div>
  )
}
