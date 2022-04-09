import Link from "next/link";
import { ICategory } from "../lib/types";

const Categories = ({ categories }: { categories: ICategory[] }) => {
  return (
    <>
      {categories.map((category) => (
        <div
          key={category.id}
          className="card col-span-full flex flex-col gap-y-4"
        >
          <h2 className="font-extrabold text-3xl text-brand-400">
            {category.name}
          </h2>
          <p>{category.description}</p>

          {category.subCategories?.map((subCategory) => (
            <Link key={subCategory.id} href={`/sub-category/${subCategory.id}`}>
              <a className="flex justify-between items-center rounded-md outline outline-8 outline-neutral-800 hover:outline-neutral-700 hover:bg-neutral-700 transition-all">
                <h3 className="font-bold text-lg text-brand-400">
                  {subCategory.name}
                </h3>
                <div className="flex flex-col items-center">
                  <h4 className="font-bold text-lg text-brand-400">
                    {subCategory.threadsCount}
                  </h4>
                  <p className="text-sm">Threads</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
};

export default Categories;
