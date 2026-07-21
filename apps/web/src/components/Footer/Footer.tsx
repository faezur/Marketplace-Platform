import {
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Marketplace
            </h2>

            <p className="mt-4 max-w-md leading-7 text-gray-600">
              A global multi-vendor marketplace connecting merchants,
              businesses, and buyers through a secure, scalable,
              and modern commerce platform.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100"
              >
                <Mail size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100"
              >
                <Phone size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="font-semibold text-gray-900">Marketplace</h3>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li><a href="#">Products</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Merchants</a></li>
              <li><a href="#">Deals</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900">Company</h3>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900">Support</h3>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Marketplace Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;