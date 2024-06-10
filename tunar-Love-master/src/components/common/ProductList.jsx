/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import bg from "../../assets/jewellery/Group 7.png";

const ProductList = ({ categories }) => {
  const { categoryId } = useParams();
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <p>Category not found</p>;
  }

  return (
    <section className="py-12">
      <div className="mb-8 mt-14 md:mt-0">
        <img src={bg} alt="" />
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
        <p className="mb-8">Some of our trending {category.title} showcase exquisite craftsmanship and timeless elegance</p>
        <div className="flex flex-wrap justify-center mb-4 gap-4">
          <button className="px-4 py-2 mx-2 mb-2 sm:mb-0 sm:mx-0 bg-gray-200 hover:bg-gray-400 rounded">
            Popularity
          </button>
          <button className="px-4 py-2 mx-2 mb-2 sm:mb-0 sm:mx-0 bg-gray-200 hover:bg-gray-400 rounded">
            Type
          </button>
          <button className="px-4 py-2 mx-2 mb-2 sm:mb-0 sm:mx-0 bg-gray-200 hover:bg-gray-400 rounded">
            Gemstone
          </button>
          <button className="px-4 py-2 mx-2 mb-2 sm:mb-0 sm:mx-0 bg-gray-200 hover:bg-gray-400 rounded">
            Price
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {category.subcategories.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg ">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
