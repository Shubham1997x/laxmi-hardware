"use client";

import { useState, type ReactElement, type ReactNode } from "react";
import { CheckCircle2, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mailtoHref } from "@/lib/site";

type EnquiryDialogProps = {
  productName?: string;
  triggerRender: ReactElement;
  children: ReactNode;
};

export function EnquiryDialog({
  productName,
  triggerRender,
  children,
}: EnquiryDialogProps) {
  const defaultDetails = productName
    ? `I'm interested in ${productName}. Please share pricing and availability.`
    : "I'd like a quote for bulk pricing across your product range.";

  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    details: defaultDetails,
  });

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      `Product: ${productName ?? "General enquiry"}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      form.details,
    ].join("\n");
    window.location.href = mailtoHref(
      productName ? `Enquiry: ${productName}` : "Quote Request",
      body
    );
    setSubmitted(true);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", details: defaultDetails });
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={triggerRender}>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="size-12 text-green-600" />
            <DialogTitle className="text-xl">Enquiry ready to send</DialogTitle>
            <DialogDescription className="text-base">
              Your email app should have opened with the enquiry details
              pre-filled{productName ? ` for ${productName}` : ""}. Just hit
              send.
            </DialogDescription>
            <Button
              onClick={() => handleOpenChange(false)}
              className="mt-2 bg-orange-600 text-white hover:bg-orange-700"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <DialogHeader>
              <DialogTitle className="text-xl">
                {productName ? "Send Enquiry" : "Request a Quote"}
              </DialogTitle>
              <DialogDescription className="text-base">
                {productName ? (
                  <>
                    Share your details for <strong>{productName}</strong> and
                    we&apos;ll get back to you shortly.
                  </>
                ) : (
                  "Share your details and requirements and we'll get back to you with the best pricing."
                )}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-3 px-1">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enquiry-name">Full Name</Label>
                <Input
                  id="enquiry-name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="h-10 text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enquiry-email">Email</Label>
                <Input
                  id="enquiry-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className="h-10 text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enquiry-phone">Phone Number</Label>
                <Input
                  id="enquiry-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+91 98765 43210"
                  className="h-10 text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enquiry-details">
                  {productName ? "Product Details" : "Requirements"}
                </Label>
                <Textarea
                  id="enquiry-details"
                  required
                  value={form.details}
                  onChange={update("details")}
                  rows={4}
                  className="text-base"
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                type="submit"
                className="w-full gap-1.5 bg-orange-600 text-base font-semibold text-white hover:bg-orange-700 sm:w-auto"
              >
                <Send className="size-4" />
                {productName ? "Send Enquiry" : "Request Quote"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
