export type Product = {
  slug: string;
  name: string;
  description: string;
  images: string[];
  category: string;
};

export const products: Product[] = [
  // Rotary Hammers & Drills
  {
    slug: "hikoki-d10vsta-drill",
    name: "Hikoki D10VSTA 10mm Drill Machine",
    description: "Compact 10mm drill with soft-grip handle and variable speed control switch for precise drilling.",
    images: ["/images/bosch-power-tools/2d4ab2ad-a80a-44ce-b766-268d22ec807d.jpg"],
    category: "Rotary Hammers & Drills",
  },
  {
    slug: "eurostar-eu2-26-rotary-hammer",
    name: "Eurostar EU2-26 Rotary Hammer Drill (3000W)",
    description: "High-power 3000W rotary hammer drill with 100% copper winding for heavy-duty concrete work.",
    images: ["/images/bosch-power-tools/a2043a4e-6c84-4da4-82db-1bc6178c1f1b.jpg"],
    category: "Rotary Hammers & Drills",
  },
  {
    slug: "hid-hd2-26-rotary-hammer",
    name: "HID HD2-26 Rotary Hammer Drill (26mm, 1850W)",
    description: "1850W rotary hammer with forward/reverse switch, 3 bits included, ideal for industrial drilling.",
    images: ["/images/bosch-power-tools/4bfc4bff-9feb-480e-958d-b71861209d00.jpg"],
    category: "Rotary Hammers & Drills",
  },
  {
    slug: "powertex-ppt-rh-26-e-rotary-hammer",
    name: "Powertex PPT-RH-26-E Rotary Hammer Drill (Eco, 800W)",
    description: "Reliable 800W eco-series rotary hammer, available in stock for quick delivery.",
    images: ["/images/bosch-power-tools/a82723d8-416f-4d3a-9429-4edf4e793553.jpg"],
    category: "Rotary Hammers & Drills",
  },

  // Bosch Power Tools
  {
    slug: "bosch-gco-metal-cutoff-machine",
    name: "Bosch Metal Cut-Off Machine (14\")",
    description: "Heavy-duty chop saw for cutting metal rods, pipes and angles with precision and speed.",
    images: ["/images/cutoff-machine-14-13mm-drill-machine-angle-grinder-cm4/76afcfc2-1376-4cf7-a6ca-d79dfc38fa6a.jpg"],
    category: "Bosch Power Tools",
  },
  {
    slug: "bosch-gsb-550-re-impact-drill",
    name: "Bosch GSB 550 RE Professional Impact Drill",
    description: "Professional impact drill with keyed chuck, supplied with a set of drill bits.",
    images: ["/images/cutoff-machine-14-13mm-drill-machine-angle-grinder-cm4/280caef9-1a8a-4c6c-9ba1-7a92c4155cb7.jpg"],
    category: "Bosch Power Tools",
  },
  {
    slug: "bosch-professional-power-tools-combo",
    name: "Bosch Professional Power Tools Range",
    description: "Full range of Bosch power tools available – impact drivers, jigsaws, angle grinders, cut-off machines and sanders.",
    images: ["/images/cutoff-machine-14-13mm-drill-machine-angle-grinder-cm4/54f84e3f-72a8-422f-8403-43a4baeb2e69.jpg"],
    category: "Bosch Power Tools",
  },
  {
    slug: "bosch-cordless-circular-saw",
    name: "Bosch Cordless Circular Saw (165mm)",
    description: "Battery-powered circular saw with 165mm blade, ideal for fast, clean wood cutting on site.",
    images: ["/images/cutoff-machine-14-13mm-drill-machine-angle-grinder-cm4/c6f8ae8b-a01a-4658-8cd4-d6a91011d3e8.jpg"],
    category: "Bosch Power Tools",
  },
  {
    slug: "bosch-gsb-16-re-impact-drill",
    name: "Bosch GSB 16 RE Heavy Duty Impact Drill",
    description: "Heavy-duty professional impact drill built for continuous industrial use.",
    images: ["/images/cutoff-machine-14-13mm-drill-machine-angle-grinder-cm4/d8fa1c43-e3fe-4843-879e-660fa5111702.jpg"],
    category: "Bosch Power Tools",
  },
  //Asian Paints
  {
    slug: "asian-paints-smartcare-damp-proof-1",
    name: "Asian Paints SmartCare Damp Proof Waterproofing (20L)",
    description: "Trusted waterproofing solution for damp-proofing walls and ceilings, in stock in bulk quantity.",
    images: ["/images/asian-paints-colour-world/d6f14681-461e-4f5c-9eaf-17dc5aa92185.jpg"],
    category: "Asian Paints",
  },
  {
    slug: "asian-paints-smartcare-damp-proof-2",
    name: "Asian Paints SmartCare Damp Proof Waterproofing (20L) – Combo Stock",
    description: "20L pails of SmartCare Damp Proof, stocked alongside UltraTech and Dr. Fixit waterproofing brands.",
    images: ["/images/asian-paints-colour-world/9166e3f5-7c6f-4273-8c92-30bcddfad4a2.jpg"],
    category: "Asian Paints",
  },
  {
    slug: "asian-paints-smartcare-damp-proof-3",
    name: "Asian Paints SmartCare Damp Proof Waterproofing (20L) – Storefront Stock",
    description: "Genuine Asian Paints waterproofing solution, always available at our storefront.",
    images: ["/images/asian-paints-colour-world/70fb3632-1ba8-4d6a-bae1-a71b2d851545.jpg"],
    category: "Asian Paints",
  },

  // Electrical Items
  {
    slug: "salefi-c32-double-pole-mcb",
    name: "Salefi C32 Double Pole MCB (32A)",
    description: "Reliable double pole miniature circuit breaker rated 240/415V for home and industrial wiring.",
    images: ["/images/electrical-items/73a9cae9-57e2-4dbc-b38d-c8d3675f7646.jpg"],
    category: "Electrical Items",
  },
  {
    slug: "shree-ganga-ceiling-fan",
    name: "Shree Ganga High Speed Ceiling Fan (400 RPM)",
    description: "High air-delivery ceiling fan with double ball bearing, noiseless operation and energy-efficient motor.",
    images: ["/images/electrical-items/651133e5-00aa-4632-bf7f-f0b497179c8d.jpg"],
    category: "Electrical Items",
  },

  // Finolex Pipes
  {
    slug: "finolex-pipes-authorized-dealer",
    name: "Finolex Pipes – Authorized Dealer",
    description: "We are an authorized dealer for genuine Finolex pipes and fittings.",
    images: ["/images/finolex-pipes/fa3bc68c-8358-4734-bcd3-417c0ec03971.jpg"],
    category: "Finolex Pipes",
  },
  {
    slug: "finolex-flowguard-plus-cpvc-pipes",
    name: "Finolex FlowGuard Plus CPVC Pipes",
    description: "Hot-water rated CPVC pipes suitable up to 93°C, with a smooth inner surface and 50+ year lifespan.",
    images: ["/images/finolex-pipes/e5934aa0-7c24-488d-a87c-3e758fa82563.jpg"],
    category: "Finolex Pipes",
  },
  {
    slug: "finolex-cpvc-pvc-pipes-fittings-range",
    name: "Finolex CPVC & PVC Pipes with Fittings",
    description: "Complete range of Finolex CPVC and PVC pipes with elbows, tees and couplers for plumbing and drainage.",
    images: ["/images/finolex-pipes/a9e43d97-d7de-4846-a48b-eef84b55ed26.jpg"],
    category: "Finolex Pipes",
  },
  {
    slug: "finolex-pvc-pipes-fittings-set",
    name: "Finolex PVC Pipes & Fittings Set",
    description: "PVC pipes bundled with ball valves, unions and elbow fittings for water supply lines.",
    images: ["/images/finolex-pipes/976eddce-ae66-4bd3-80e7-02f2631fe1e1.jpg"],
    category: "Finolex Pipes",
  },
  {
    slug: "finolex-pipes-fittings-solvent-cement",
    name: "Finolex Pipes, Fittings & Solvent Cement",
    description: "Pipes and fittings supplied together with Finolex solvent cement and primer for leak-proof joints.",
    images: ["/images/finolex-pipes/cef5432a-8fe1-48df-8c38-1fe68c435ff3.jpg"],
    category: "Finolex Pipes",
  },

  // Hand Tools
  {
    slug: "knipex-pliers-range",
    name: "Knipex Professional Pliers Range",
    description: "Wide selection of Knipex pliers – water pump, combination, cutting and long-nose types.",
    images: ["/images/hand-tools/2163c1f1-e438-4dca-8641-347575e4b10b.jpg"],
    category: "Hand Tools",
  },
  {
    slug: "deko-combination-tool-set",
    name: "DEKO Combination Tool Set (Wrenches, Pliers & Sockets)",
    description: "All-in-one tool case with spanners, pliers, adjustable wrench, sockets and ratchet handle.",
    images: ["/images/hand-tools/1bfe046c-f677-4af1-86e3-865a1f73c70a.jpg"],
    category: "Hand Tools",
  },
  {
    slug: "hand-tools-assortment",
    name: "Hand Tools Assortment (Hammer, File, Wrench & More)",
    description: "Everyday hand tools stocked including hammers, files, wrenches, chisels and tape measures.",
    images: ["/images/hand-tools/f82d0220-02b3-442e-acb4-2914201d2d56.jpg"],
    category: "Hand Tools",
  },
  {
    slug: "jackson-hand-tools-range",
    name: "Jackson Hand Tools Range",
    description: "Jackson-branded pliers, hand saws, hammers, wrenches and screwdriver sets available in stock.",
    images: ["/images/hand-tools/21b290f6-fb17-4fbc-a61b-72784a5ec38b.jpg"],
    category: "Hand Tools",
  },
  {
    slug: "pliers-collection",
    name: "Pliers Collection – Slip Joint, Locking & Linesman",
    description: "Full pliers lineup covering slip joint, tongue & groove, locking, wire stripper and cutting pliers.",
    images: ["/images/hand-tools/ab946371-5902-4835-a19e-13065e295d92.jpg"],
    category: "Hand Tools",
  },

  // Lifting Belts
  {
    slug: "polyester-lifting-sling-belts",
    name: "Polyester Lifting Sling Belts (1–6 Ton)",
    description: "Colour-coded flat lifting slings rated 1 to 6 tons, supplied with lifting sling certificate.",
    images: ["/images/lifting-belt/8065c84a-6aa1-4249-b48b-ee5e048500be.jpg"],
    category: "Lifting Belts",
  },
  {
    slug: "heavy-duty-lifting-slings-bundle",
    name: "Heavy-Duty Lifting Slings (2–6 Ton Bundle)",
    description: "Bundled stock of heavy-duty lifting slings for warehouse and crane lifting applications.",
    images: ["/images/lifting-belt/fd1abc5e-2a6c-4736-96db-294b5380819b.jpg"],
    category: "Lifting Belts",
  },

  // Nuts, Bolts & Fasteners
  {
    slug: "ms-hex-nuts-bulk",
    name: "MS Hex Nuts (Bulk Pack)",
    description: "Mild steel hex nuts in bulk quantity for construction and fabrication use.",
    images: ["/images/nut-bolt-wedge-anchor-screws/9198755b-dc06-4347-9115-1e99eae3b4b5.jpg"],
    category: "Nuts, Bolts & Fasteners",
  },
  {
    slug: "ms-coupler-nuts-bulk",
    name: "MS Coupler Nuts (Bulk Stock)",
    description: "Long coupler-type hex nuts stocked in bulk for rod coupling applications.",
    images: ["/images/nut-bolt-wedge-anchor-screws/26f32c20-ab82-4593-8d56-8f00949d4395.jpg"],
    category: "Nuts, Bolts & Fasteners",
  },
  {
    slug: "ss-button-head-allen-bolts",
    name: "Stainless Steel Button Head Allen Bolts",
    description: "Corrosion-resistant SS button head socket bolts, available in assorted sizes.",
    images: ["/images/nut-bolt-wedge-anchor-screws/f70a1f71-dcca-4c2d-b052-aba00f295bad.jpg"],
    category: "Nuts, Bolts & Fasteners",
  },
  {
    slug: "ss304-wedge-anchor-bolts",
    name: "SS304 Wedge Anchor Bolts (8x80mm)",
    description: "Stainless steel 304 wedge anchors for heavy-duty fastening into concrete, 100 pcs per box.",
    images: ["/images/nut-bolt-wedge-anchor-screws/25141ea2-12ac-45c9-9525-ce1e48966ed6.jpg"],
    category: "Nuts, Bolts & Fasteners",
  },
  {
    slug: "nylon-insert-lock-nuts",
    name: "Nylon Insert Lock Nuts (Nylock)",
    description: "Self-locking nylon insert nuts that resist loosening under vibration.",
    images: ["/images/nut-bolt-wedge-anchor-screws/a9f6df1e-a10c-4cfb-b26b-a10fd28ba06c.jpg"],
    category: "Nuts, Bolts & Fasteners",
  },
  {
    slug: "self-drilling-roofing-screws",
    name: "Self-Drilling Roofing Screws (Bulk Pack)",
    description: "Self-drilling screws with washers for roofing sheets and metal fixing jobs.",
    images: ["/images/nut-bolt-wedge-anchor-screws/21ad31a3-9acd-4786-90bb-d32f5528c4a6.jpg"],
    category: "Nuts, Bolts & Fasteners",
  },
  {
    slug: "ms-hex-bolts-nuts-heavy-duty",
    name: "MS Hex Bolts & Nuts – Heavy Duty (Box Pack)",
    description: "Heavy-duty mild steel hex bolts with matching nuts, supplied in box packs.",
    images: ["/images/nut-bolt-wedge-anchor-screws/a203c706-1263-4ec4-8a84-1fbe2f08804e.jpg"],
    category: "Nuts, Bolts & Fasteners",
  },
  {
    slug: "brass-coated-hex-bolts-nuts",
    name: "Brass-Coated Hex Bolts & Nuts",
    description: "Brass-finish hex bolts and nuts, ideal for fittings requiring a decorative, rust-resistant finish.",
    images: ["/images/nut-bolt-wedge-anchor-screws/62bdaf4b-0adf-47d5-8381-cf64caa8579b.jpg"],
    category: "Nuts, Bolts & Fasteners",
  },
  {
    slug: "black-oxide-socket-countersunk-screws",
    name: "Black Oxide Socket Countersunk Screws (Grade 10.9)",
    description: "High-tensile grade 10.9 countersunk Allen screws with black oxide finish.",
    images: ["/images/nut-bolt-wedge-anchor-screws/c44e457a-67c9-44bb-8b02-3849e1e4bda1.jpg"],
    category: "Nuts, Bolts & Fasteners",
  },

  // Pix V-Belts
  {
    slug: "pix-power-transmission-v-belts",
    name: "Pix Power Transmission V-Belts",
    description: "Pix Terminator, Muscle and X'tra series V-belts for industrial power transmission.",
    images: ["/images/pix-brand-v-belts/601f50f7-ea07-4c2a-b9cc-23a8e76d7730.jpg"],
    category: "Pix V-Belts",
  },

  // Pneumatic Fittings
  {
    slug: "pneumatic-push-fit-elbow-fittings",
    name: "Pneumatic Push-Fit Elbow Fittings Assortment",
    description: "Assorted brass and plastic push-fit elbow fittings for pneumatic air lines.",
    images: ["/images/pneumatic-push-fitting-pipe/3d7c24ae-1757-43c7-88ea-54cb7c476cb8.jpg"],
    category: "Pneumatic Fittings",
  },
  {
    slug: "pneumatic-push-fit-straight-fittings",
    name: "Pneumatic Push-Fit Straight Union Fittings Assortment",
    description: "Range of straight push-fit union fittings in multiple tube sizes.",
    images: ["/images/pneumatic-push-fitting-pipe/9604e5de-436a-4194-b74a-dc8ade2cfebb.jpg"],
    category: "Pneumatic Fittings",
  },
  {
    slug: "pneumatic-fittings-reference-1",
    name: "Pneumatic Fitting Types – PC, PL, PV & Muffler",
    description: "Complete pneumatic fitting range including straight, elbow, muffler and rotary joint types.",
    images: ["/images/pneumatic-push-fitting-pipe/c4c69506-1995-4f30-af20-00c24d3317c0.jpg"],
    category: "Pneumatic Fittings",
  },
  {
    slug: "pneumatic-fittings-reference-2",
    name: "Pneumatic Fitting Types – Union, Tee & Y Fittings",
    description: "Union, tee, Y-type and speed control valve fittings for pneumatic tubing systems.",
    images: ["/images/pneumatic-push-fitting-pipe/e329d197-481f-4473-9b6a-3bacd4626293.jpg"],
    category: "Pneumatic Fittings",
  },

  // Power Tools
  {
    slug: "man-power-mp-801-angle-grinder",
    name: "Man Power MP-801 100mm Angle Grinder (850W)",
    description: "850W angle grinder built for industrial use with spindle lock and adjustable safety guard.",
    images: ["/images/power-tools/53cb55ec-b207-4a8c-a7d5-afd34a0102b7.jpg"],
    category: "Power Tools",
  },
  {
    slug: "eternity-angle-grinder-850w",
    name: "Eternity 100mm Angle Grinder (850W)",
    description: "Ergonomic 850W angle grinder from Eternity's P3 series for grinding and cutting work.",
    images: ["/images/power-tools/40cf103a-eea5-4d6c-b7c3-c5ce5a7d0abe.jpg"],
    category: "Power Tools",
  },
  {
    slug: "electric-drill-range",
    name: "Electric Drill Range (Bosch, Clif Plus & Eternity)",
    description: "Wide stock of electric and impact drills from Bosch, Clif Plus, Eternity and Saw Classic Master.",
    images: ["/images/power-tools/5095c830-6888-46a4-bd0d-687c240fc0b0.jpg"],
    category: "Power Tools",
  },
  {
    slug: "eternity-impact-drill-stanley-grinder-combo",
    name: "Eternity Impact Drill & Stanley Angle Grinder Combo",
    description: "Eternity 13mm impact drill and Stanley 620W small angle grinder, both in stock.",
    images: ["/images/power-tools/82b2ae4a-014d-4cb0-af05-f46a89ec14a5.jpg"],
    category: "Power Tools",
  },
  {
    slug: "eternity-marble-cutter-electric-blower",
    name: "Eternity Marble Cutter Machine (110mm, 1150W)",
    description: "1150W marble/tile cutter machine along with Clif Champ cutter and Golden Bullet blower in stock.",
    images: ["/images/power-tools/c50a4304-d820-425a-8826-372fd6bc0911.jpg"],
    category: "Power Tools",
  },
  {
    slug: "golden-bullet-electric-blower",
    name: "Golden Bullet BTP 40 Electric Blower (600W)",
    description: "600W electric blower with high air volume, useful for cleaning workshops and dust removal.",
    images: ["/images/power-tools/bb06eace-d961-4ae8-9875-7d275a7e2cdd.jpg"],
    category: "Power Tools",
  },
  {
    slug: "hid-801-angle-grinder",
    name: "HID-801 100mm Angle Grinder",
    description: "Durable 100mm angle grinder from HID Power Tools, built for everyday grinding tasks.",
    images: ["/images/power-tools/8b4f68bc-3e9b-41ff-81d1-1c3f7b03fb11.jpg"],
    category: "Power Tools",
  },

  // PVC Handle Hammers
  {
    slug: "python-pvc-handle-sledge-hammer",
    name: "Python PVC Handle Sledge Hammer (12 lb)",
    description: "Heavy 12lb sledge hammer with a durable PVC-coated fibreglass handle for safer, comfortable use.",
    images: ["/images/pvc-handle-hammer/6c83b20f-b549-4182-a853-646f8e2f52ef.jpg"],
    category: "PVC Handle Hammers",
  },

  // Safety Harness Belts
  {
    slug: "full-body-safety-harness-1",
    name: "Full Body Safety Harness with Rope & Hooks",
    description: "Full body harness with rope lanyard and snap hooks for working-at-height safety.",
    images: ["/images/safety-harness-belt/db76e05b-d85e-4ce8-852e-3580dad9b5f2.jpg"],
    category: "Safety Harness Belts",
  },
  {
    slug: "full-body-safety-harness-2",
    name: "Full Body Safety Harness – Double Hook Lanyard",
    description: "Adjustable full body safety harness with double locking hooks for secure fall protection.",
    images: ["/images/safety-harness-belt/76e7c712-1549-4166-8421-2b6c9c32ba18.jpg"],
    category: "Safety Harness Belts",
  },
  {
    slug: "full-body-safety-harness-3",
    name: "Full Body Safety Harness with Steel Snap Hooks",
    description: "Safety harness fitted with heavy-duty steel snap hooks for industrial and construction sites.",
    images: ["/images/safety-harness-belt/3d471912-399a-441b-bcb8-67274a18b84b.jpg"],
    category: "Safety Harness Belts",
  },

  // SS304 Pipe Fittings
  {
    slug: "ss304-union-pipe-fitting",
    name: "SS304 Union Pipe Fitting (Threaded)",
    description: "Stainless steel 304 threaded union fitting for corrosion-resistant piping connections.",
    images: ["/images/ss-304-pipe-fitting/bd9cec4a-53f1-47ba-91d8-6fca0112263b.jpg"],
    category: "SS304 Pipe Fittings",
  },
  {
    slug: "ss304-tee-fittings-assortment",
    name: "SS304 Tee Pipe Fittings Assortment",
    description: "Assorted stainless steel 304 tee fittings for branching pipe lines.",
    images: ["/images/ss-304-pipe-fitting/1b4d0488-477a-4a31-8421-03e345e66235.jpg"],
    category: "SS304 Pipe Fittings",
  },
  {
    slug: "ss304-hex-nipple-hose-barb-set",
    name: "SS304 Hex Nipple & Hose Barb Fittings (Multi-Size Set)",
    description: "Stainless steel hex nipple to hose barb adapters in a range of sizes.",
    images: ["/images/ss-304-pipe-fitting/ada28f40-efce-4a06-b258-8397fee0314b.jpg"],
    category: "SS304 Pipe Fittings",
  },
  {
    slug: "ss304-hex-nipple-hose-barb-adapter",
    name: "SS304 Hex Nipple to Hose Barb Adapter",
    description: "Single stainless steel adapter connecting threaded pipe to hose barb.",
    images: ["/images/ss-304-pipe-fitting/91b46946-cf59-41dc-8b60-2c2fe6d89fb4.jpg"],
    category: "SS304 Pipe Fittings",
  },

  // Taparia Tools
  {
    slug: "taparia-t-handle-hex-key",
    name: "Taparia T-Handle Hex Key",
    description: "Single T-handle hex key with comfortable grip for quick fastening jobs.",
    images: ["/images/taparia-products/96634bc0-ff06-49e8-855e-27c71df0a244.jpg"],
    category: "Taparia Tools",
  },
  {
    slug: "taparia-9pc-t-handle-hex-key-set",
    name: "Taparia 9-Piece T-Handle Hex Key Set",
    description: "Complete set of T-handle hex keys from 1.5mm to 10mm in a stand, ISO 9001 certified.",
    images: ["/images/taparia-products/8eeaee5a-70e8-4912-843e-d9be39353140.jpg"],
    category: "Taparia Tools",
  },
  {
    slug: "taparia-tin-cutters",
    name: "Taparia Tin Cutters with Spring (TCS Series)",
    description: "Spring-loaded tin cutters available in TCS 08/10/12/14 sizes for sheet metal cutting.",
    images: ["/images/taparia-products/0515381e-6dd2-4b40-ba9e-82a47762586c.jpg"],
    category: "Taparia Tools",
  },
  {
    slug: "taparia-ring-spanner-set",
    name: "Taparia Ring Spanner Set (Double End)",
    description: "Full range of double-ended ring spanners in a graduated size set.",
    images: ["/images/taparia-products/1753b305-ec6d-4eba-b0c8-102f2d724799.png"],
    category: "Taparia Tools",
  },
  {
    slug: "taparia-econ-diagonal-cutting-plier",
    name: "Taparia ECON Diagonal Cutting Plier",
    description: "Durable diagonal cutting plier with insulated handles for electrical and general work.",
    images: ["/images/taparia-products/4ebd4f5e-f046-457c-8100-0394b625c2ec.png"],
    category: "Taparia Tools",
  },
  {
    slug: "taparia-adjustable-wrench",
    name: "Taparia Adjustable Wrench (24\")",
    description: "Heavy-duty 24-inch adjustable wrench for large nuts, bolts and pipe fittings.",
    images: ["/images/taparia-products/dab11803-e4f2-4cfe-a447-651e3d6f5e2a.png"],
    category: "Taparia Tools",
  },
  {
    slug: "taparia-socket-wrench-set",
    name: "Taparia Socket Wrench Set with Ratchet",
    description: "26-piece socket set with ratchet handle, extensions and universal joint in a carry case.",
    images: ["/images/taparia-products/5cdd46e1-ab0d-472a-8977-77095ac1c671.png"],
    category: "Taparia Tools",
  },
  {
    slug: "taparia-g-clamp",
    name: "Taparia G-Clamp (Drop Forged)",
    description: "Drop-forged G-clamp for secure workpiece holding during woodwork and fabrication.",
    images: ["/images/taparia-products/20b60455-44a7-43ea-9ca9-f213a3703d72.jpg"],
    category: "Taparia Tools",
  },
  {
    slug: "taparia-pipe-wrench",
    name: "Taparia Pipe Wrench (10\")",
    description: "10-inch pipe wrench with a strong grip jaw for plumbing and pipe fitting work.",
    images: ["/images/taparia-products/4d82e461-272f-4cb9-be63-910054fe63e9.jpg"],
    category: "Taparia Tools",
  },
  {
    slug: "taparia-allen-key-set",
    name: "Taparia Allen Key Set (10-Piece)",
    description: "10-piece hex Allen key set in a compact storage case, covering common metric sizes.",
    images: ["/images/taparia-products/cacadda8-06ad-4df6-a202-1ee576f7142c.jpg"],
    category: "Taparia Tools",
  },

  // Teflon & PU Wheels
  {
    slug: "pu-caster-wheels-red-set",
    name: "Heavy-Duty PU Caster Wheels (Swivel, Red) – Set",
    description: "Heavy-duty polyurethane caster wheels with swivel mounting plates, sold as a set.",
    images: ["/images/teflon-wheel-pu-wheel/ed2c18d7-14c0-4f43-ad96-905e3d90351b.jpg"],
    category: "Teflon & PU Wheels",
  },
  {
    slug: "pu-caster-wheel-white-3inch",
    name: "PU Caster Wheel 3\" (White)",
    description: "3-inch white PU caster wheel available in revolving and fixed variants, sold in sets of 4.",
    images: ["/images/teflon-wheel-pu-wheel/bd309adf-41a8-4063-9316-c4ece0456b5d.jpg"],
    category: "Teflon & PU Wheels",
  },
];
