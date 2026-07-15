import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";
import { WhatsappIcon } from "@/app/_components/social-icons";
import { EnquiryDialog } from "@/app/_components/enquiry-dialog";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need Bulk Quantity?
          </h2>
          <p className="mt-2 text-base text-slate-300">
            Get best pricing for bulk orders and custom requirements.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            render={
              <a
                href={whatsappHref(
                  "Hi, I'd like a bulk quotation for your products."
                )}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="lg"
            className="h-12 gap-1.5 rounded-md bg-green-600 px-6 text-base font-semibold text-white hover:bg-green-700"
          >
            <WhatsappIcon className="size-5" />
            WhatsApp Us
          </Button>
          <EnquiryDialog
            triggerRender={
              <Button
                size="lg"
                className="h-12 gap-1.5 rounded-md bg-amber-500 px-6 text-base font-semibold text-slate-900 hover:bg-amber-400"
              />
            }
          >
            Request a Quote
            <ArrowRight className="size-4" />
          </EnquiryDialog>
        </div>

        <div className="relative hidden h-20 w-32 shrink-0 sm:block">
          <Image
            src="/hero.png"
            alt=""
            fill
            className="rounded-md object-cover opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
