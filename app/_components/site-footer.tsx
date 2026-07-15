import { Mail, MapPin, Phone } from "lucide-react";
import { products } from "@/app/_data/products";
import { siteConfig, whatsappHref } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
} from "@/app/_components/social-icons";

const categories = Array.from(new Set(products.map((p) => p.category)));

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-3xl font-bold text-blue-400">
              Laxmi
            </span>
            <span className="text-xs font-semibold tracking-[0.3em] text-slate-400">
              HARDWARE &amp; INDUSTRIAL
            </span>
          </div>
          <p className="mt-4 text-base text-slate-400">
            Laxmi Hardware and Industrial is your trusted supplier of quality
            hardware, power tools, pipes, fittings, fasteners and industrial
            supplies.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FacebookIcon className="size-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="hover:text-white"
            >
              <Mail className="size-5" />
            </a>
          </div>
          <a
            href={whatsappHref("Hi, I'd like to know more about your products.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2.5 text-base font-semibold text-white hover:bg-green-700"
          >
            <WhatsappIcon className="size-5" />
            WhatsApp Us
          </a>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-base">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#industries" className="hover:text-white">Industries</a></li>
            <li><a href="#why-us" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Our Categories</h3>
          <ul className="mt-4 space-y-2.5 text-base">
            {categories.map((category) => (
              <li key={category}>
                <a href="#products" className="hover:text-white">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-base">
            <li className="text-slate-400">
              Owner: <span className="text-slate-200">{siteConfig.ownerName}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Laxmi Hardware and Industrial. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
