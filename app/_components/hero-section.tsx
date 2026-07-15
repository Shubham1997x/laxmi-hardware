"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Package, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/app/_components/enquiry-dialog";

const features = [
  { label: "Genuine Brands", icon: ShieldCheck },
  { label: "Bulk Supply", icon: Package },
  { label: "Industrial Grade", icon: Wrench },
  { label: "Fast Delivery", icon: Truck },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-900">
      <Image
        src="/hero.png"
        alt="Laxmi Hardware and Industrial store front"
        fill
        preload
        sizes="100vw"
        className="object-cover opacity-50"
      />
      {/* <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/40 to-slate-900/10" /> */}

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-20 pb-28 sm:pt-28 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl font-extrabold leading-[1.1] text-white sm:text-6xl">
            Quality Hardware
            <br />
            <span className="text-amber-400">& Industrial Supplies</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 sm:text-xl">
            Power tools, pipes & fittings, fasteners, safety gear and
            industrial supplies for every job.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              render={<a href="#products" />}
              size="lg"
              className="h-12 rounded-md bg-amber-500 px-7 text-base font-semibold text-slate-900 hover:bg-amber-400"
            >
              Browse Catalogue
            </Button>
            <EnquiryDialog
              triggerRender={
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-md border-white/40 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10"
                />
              }
            >
              Request Quotation
            </EnquiryDialog>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {features.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-base font-medium text-slate-200"
              >
                <Icon className="size-5 text-amber-400" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
