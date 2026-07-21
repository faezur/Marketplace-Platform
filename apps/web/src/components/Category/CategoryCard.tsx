import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  image: string;
};

export default function CategoryCard({ title, image }: Props) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>

          <ArrowRight className="text-blue-600 transition group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}