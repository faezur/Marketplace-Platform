import {
  Search,
  ShoppingCart,
  Wallet,
  User,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
            M
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Marketplace
            </h1>

            <p className="text-xs text-gray-500">
              Global Marketplace
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 lg:flex">
          <a href="#categories" className="font-medium text-gray-700 hover:text-blue-600">
            Categories
          </a>

          <a href="#featured-products" className="font-medium text-gray-700 hover:text-blue-600">
            Products
          </a>

          <a href="#" className="font-medium text-gray-700 hover:text-blue-600">
            Merchants
          </a>

          <a href="#" className="font-medium text-gray-700 hover:text-blue-600">
            Deals
          </a>

          <a href="#" className="font-medium text-gray-700 hover:text-blue-600">
            About
          </a>
        </nav>

        {/* Search */}
        <div className="hidden w-80 items-center rounded-xl border border-gray-300 px-4 lg:flex">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full border-none bg-transparent px-3 py-3 outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">

          <button className="text-gray-700 hover:text-blue-600">
            <Wallet />
          </button>

          <button className="text-gray-700 hover:text-blue-600">
            <ShoppingCart />
          </button>

          <button className="text-gray-700 hover:text-blue-600">
            <User />
          </button>

        </div>
      </div>
    </header>
  );
}