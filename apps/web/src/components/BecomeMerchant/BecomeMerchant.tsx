import { ArrowRight, Store } from "lucide-react";

const BecomeMerchant = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm lg:flex lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
              <Store className="h-7 w-7 text-blue-600" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Become a Merchant
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Grow your business by joining our global marketplace. Reach more
              customers, manage your products, receive assigned orders, and
              scale your business with a secure wallet-based platform.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
              Become Merchant
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              Learn More
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMerchant;