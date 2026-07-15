"use client";

import { useState } from "react";
import { Menu, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { siteConfig, whatsappHref } from "@/lib/site";
import { WhatsappIcon } from "@/app/_components/social-icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "About Us", href: "#why-us" },
  { label: "Catalogue", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-heading text-2xl font-bold text-blue-700 sm:text-3xl">
            Laxmi
          </span>
          <span className="text-xs font-semibold tracking-[0.3em] text-slate-700">
            HARDWARE &amp; INDUSTRIAL
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-base font-medium text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#products"
            aria-label="Search products"
            className="hidden size-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 sm:flex"
          >
            <Search className="size-5" />
          </a>
          <Button
            render={<a href={siteConfig.phoneHref} />}
            variant="outline"
            className="hidden gap-1.5 rounded-full text-sm font-medium md:inline-flex"
          >
            <Phone className="size-4" />
            Call Now
          </Button>
          <Button
            render={
              <a
                href={whatsappHref("Hi, I'm interested in your products.")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="hidden gap-1.5 rounded-full bg-green-600 text-sm font-medium text-white hover:bg-green-700 sm:inline-flex"
          >
            <WhatsappIcon className="size-4" />
            WhatsApp
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4 text-base font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-slate-100 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-2 p-4">
            <Button render={<a href={siteConfig.phoneHref} />} variant="outline">
              <Phone className="size-4" />
              Call Now
            </Button>
            <Button
              render={
                <a
                  href={whatsappHref("Hi, I'm interested in your products.")}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="bg-green-600 text-white hover:bg-green-700"
            >
              <WhatsappIcon className="size-4" />
              WhatsApp Us
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
