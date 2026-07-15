import {
  ShieldCheck,
  Boxes,
  Truck,
  Users,
  Clock3,
  BadgeIndianRupee,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Genuine Brands",
    subtitle: "Authorized dealer for trusted brands.",
  },
  {
    icon: Boxes,
    title: "Wide Range",
    subtitle: "Tools, pipes, fasteners & more under one roof.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Bulk Pricing",
    subtitle: "Best rates for bulk & contractor orders.",
  },
  {
    icon: Users,
    title: "Expert Advice",
    subtitle: "Guidance to pick the right product every time.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "Quick delivery across the local area.",
  },
  {
    icon: Clock3,
    title: "Trusted for Years",
    subtitle: "Serving customers with reliable service.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Why Choose <span className="text-blue-700">Laxmi Hardware?</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {reasons.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex size-16 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700">
                <Icon className="size-7" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
