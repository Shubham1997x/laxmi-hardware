export const siteConfig = {
  name: "Laxmi Hardware and Industrial",
  ownerName: "Bhavesh Prajapati",
  email: "bhaveshprajapati804@gmail.com",
  phoneDisplay: "+91 99139 22368",
  phoneHref: "tel:+919913922368",
  whatsappNumber: "919913922368",
  address:
    "Plot No.15-16, Near Mogal Dham, Beside Laxmi Lime, Opp. Gupta Mill, GIDC Pipodara",
};

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export function mailtoHref(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${siteConfig.email}?${params.toString()}`;
}
