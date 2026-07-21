import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    name: "Tesla Cybertruck",
    price: "$65,000",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1727994527246-68e26082d0fd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "MacBook Pro",
    price: "$2,499",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1660485651003-39b761a38546?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Luxury Sofa",
    price: "$899",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Power Drill",
    price: "$149",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      id="featured-products"
      className="scroll-mt-24 bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Featured Products
        </h2>

        <p className="mt-3 text-gray-500">
          Explore some of the most popular products from our marketplace.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}