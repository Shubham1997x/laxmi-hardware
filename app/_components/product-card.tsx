"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";
import { WhatsappIcon } from "@/app/_components/social-icons";
import { EnquiryDialog } from "@/app/_components/enquiry-dialog";
import type { Product } from "@/app/_data/products";

export function ProductCard({ product }: { product: Product }) {
  const enquiryMessage = `Hi, I'm interested in your ${product.name}. Could you share more details and pricing?`;
  const [imageIndex, setImageIndex] = useState(0);
  const hasMultipleImages = product.images.length > 1;

  function showImage(index: number) {
    setImageIndex((index + product.images.length) % product.images.length);
  }

  return (
    <Card className="overflow-hidden">
      <div className="group relative aspect-[4/3] w-full bg-slate-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={imageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={product.images[imageIndex]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {hasMultipleImages && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => showImage(imageIndex - 1)}
              className="absolute top-1/2 left-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-700 opacity-0 shadow transition-opacity group-hover:opacity-100"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => showImage(imageIndex + 1)}
              className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-700 opacity-0 shadow transition-opacity group-hover:opacity-100"
            >
              <ChevronRight className="size-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => showImage(i)}
                  className={`size-1.5 rounded-full transition-colors ${
                    i === imageIndex ? "bg-blue-700" : "bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col gap-2 pt-4">
        <div className="flex flex-wrap gap-1.5">
          <Badge className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100">
            {product.category}
          </Badge>
        </div>
        <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
        <CardDescription className="text-base">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2 border-t-0 bg-transparent px-4 pb-4">
        <EnquiryDialog
          productName={product.name}
          triggerRender={
            <Button
              variant="outline"
              className="flex-1 gap-1.5 border-blue-700 text-base font-medium text-blue-700 hover:bg-blue-50"
            />
          }
        >
          <Send className="size-4" />
          Send Enquiry
        </EnquiryDialog>
        <Button
          render={
            <a
              href={whatsappHref(enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className="flex-1 gap-1.5 bg-green-600 text-base font-medium text-white hover:bg-green-700"
        >
          <WhatsappIcon className="size-4" />
          WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
}
