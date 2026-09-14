export const siteConfig = {
  name: "Placeholder Cleaning Co.",
  tagline: "Residential, commercial & specialty cleaning you can trust.",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@placeholdercleaning.com",
  address: "123 Main Street, Suite 100, Your City, ST 00000",
  serviceArea: "Serving Your City and surrounding areas",
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Residential Cleaning", href: "/" },
  { label: "Office & Commercial", href: "/office-commercial-cleaning" },
  { label: "Post-Construction", href: "/post-construction-cleaning" },
  { label: "Deep Cleaning", href: "/deep-cleaning" },
];
