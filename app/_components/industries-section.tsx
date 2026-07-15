import {
  HardHat,
  Factory,
  Wrench,
  Zap,
  Droplets,
  Hammer,
  Building2,
  Tractor,
} from "lucide-react";

const industries = [
  { icon: HardHat, label: "Construction" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Wrench, label: "Automobile" },
  { icon: Zap, label: "Electrical Contractors" },
  { icon: Droplets, label: "Plumbing" },
  { icon: Hammer, label: "Fabrication" },
  { icon: Building2, label: "Real Estate" },
  { icon: Tractor, label: "Agriculture" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Industries We Serve
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {industries.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="flex size-16 items-center justify-center rounded-full border border-slate-200 text-slate-700">
                <Icon className="size-7" />
              </div>
              <p className="mt-3 text-base font-medium text-slate-800">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
