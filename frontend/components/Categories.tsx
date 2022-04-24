import Link from "next/link";
import { ICategory } from "lib/types";

const Categories = ({ categories }: { categories: ICategory[] }) => (
  <>
    {categories.map((category) => (
      <div
        key={category.id}
        className="card col-span-full flex flex-col gap-y-4"
      >
        <h2 className="font-semibold text-3xl">{category.name}</h2>
        <p className="text-neutral-200">{category.description}</p>
        <div>
          {category.subCategories?.map((subCategory) => (
            <Link key={subCategory.id} href={`/sub-category/${subCategory.id}`}>
              <a className="flex justify-between items-center p-2 rounded-lg hover:bg-neutral-700 transition-colors">
                <h3 className="font-medium text-lg text-brand-400">
                  {subCategory.name}
                </h3>
                <div className="flex flex-col items-center">
                  <h4 className="font-medium text-lg text-brand-400">
                    {subCategory.threadsCount}
                  </h4>
                  <p className="text-sm">Threads</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default Categories;
