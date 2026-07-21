import {
  Globe,
  ShieldCheck,
  Package,
  Wallet,
  Truck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Marketplace",
    description:
      "Connect with buyers and merchants across multiple industries worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Merchants",
    description:
      "Every merchant goes through verification to maintain trust and quality.",
  },
  {
    icon: Package,
    title: "Wide Product Selection",
    description:
      "Explore products across B2B and B2C categories from trusted suppliers.",
  },
  {
    icon: Wallet,
    title: "Secure Wallet System",
    description:
      "Transparent wallet-based transactions designed for merchants and platform operations.",
  },
  {
    icon: Truck,
    title: "Reliable Fulfillment",
    description:
      "Efficient order assignment and fulfillment workflow for faster processing.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our support team is always available to help merchants and customers.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Marketplace
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            A modern multi-vendor marketplace built for businesses, merchants,
            and global commerce with security, scalability, and simplicity.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;