type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  category: string;
};

export default function ProductCard({
  name,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <span className="text-sm text-blue-600 font-medium">
          {category}
        </span>

        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          {name}
        </h3>

        <p className="mt-3 text-2xl font-bold text-gray-900">
          {price}
        </p>

        <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}