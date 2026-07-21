import marketplaceImage from "../../assets/marketplace.jpg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-slate-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-20">

        <div className="max-w-xl">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Admin Controlled Marketplace
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Buy Anything,
            <br />
            Sell Everywhere.
            <br />
            Trusted Global Marketplace
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Discover millions of products from verified merchants around the world with secure payments and admin-controlled quality assurance.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-700">
              Browse Products
            </button>

            <button className="rounded-xl border border-gray-300 px-7 py-4 font-semibold">
              Become Merchant →
            </button>

          </div>

        </div>

        <div>

          <img
            src={marketplaceImage}
            alt="Marketplace Hero"
            className="w-[520px] rounded-3xl shadow-xl object-cover"
          />

        </div>

      </div>
    </section>

    
  );
}