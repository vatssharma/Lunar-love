/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ShopByCategory = ({ categories }) => {
  return (
    <div className="w-11/12 mx-auto border rounded-lg py-4 text-center my-16 tangerine-regular shadow-md ">
      <h2 className="text-4xl text-gray-900">Shop by Category</h2>
      <p className="tangerine-regular">Indulge in what we offer</p>
      <div className="p-4 flex flex-wrap justify-center items-center space-y-8 md:space-y-0 md:space-x-8 mt-8 ">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="w-full md:w-1/6 pt-2 hover:pt-0"
          >
            <img
              className="w-full object-contain rounded-lg"
              src={category.image}
              alt={category.title}
              loading="lazy"
            />
            <h3 className="mt-4 text-lg text-gray-800">{category.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;


