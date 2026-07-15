import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "@/app/_components/social-icons";

export function TopBar() {
  return (
    <div className="hidden bg-slate-900 text-slate-200 sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
        <p>Welcome to Laxmi Hardware and Industrial – Hardware, Tools & Industrial Supplies</p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-white"
          >
            <Mail className="size-4" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 hover:text-white"
          >
            <Phone className="size-4" />
            {siteConfig.phoneDisplay}
          </a>
          <div className="flex items-center gap-3 border-l border-slate-700 pl-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FacebookIcon className="size-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
