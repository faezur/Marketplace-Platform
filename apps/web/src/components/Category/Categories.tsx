import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Electronics",
    image: "https://plus.unsplash.com/premium_vector-1752497859383-87fdb3872bd7?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Furniture",
    image: "https://plus.unsplash.com/premium_vector-1724552052083-31a9234a7ac2?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Construction",
    image: "https://plus.unsplash.com/premium_vector-1682299692411-5bd547d070c1?q=80&w=581&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Fashion",
    image: "https://plus.unsplash.com/premium_vector-1725973825187-d80d12a03bdc?q=80&w=907&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Automotive",
    image: "https://plus.unsplash.com/premium_vector-1716902818030-b5430754a5af?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Industrial",
    image: "https://plus.unsplash.com/premium_vector-1723469862555-42ebc0794f74?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D6",
  },
];

export default function Categories() {
  return (
    <section  id="categories"
         className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20">

      <h2 className="text-4xl font-bold text-gray-900">
        Shop by Category
      </h2>

      <p className="mt-3 text-gray-500">
        Browse products from verified merchants.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
}