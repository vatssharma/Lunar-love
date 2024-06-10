/* eslint-disable react/prop-types */
const ProductCard = ({ image, title, price }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 mx-auto ">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-80 object-cover" />
        <div className="absolute bottom-4 left-4 bg-white p-2 rounded-sm w-[88%]">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="font-semibold">{price}</p>
          <button className="mt-2 hover:underline bg-black text-white rounded-md px-4 py-2">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

import product1 from "../../assets/jewellery/p1.png";
import product2 from "../../assets/jewellery/p2.png";
import product3 from "../../assets/jewellery/p3.png";

const ProductGrid = () => {
  const products = [
    {
      image: product1,
      title: "Birthday Gifts From",
      price: "50$",
    },
    {
      image: product2,
      title: "Birthday Gifts From",
      price: "50$",
    },
    {
      image: product3,
      title: "Birthday Gifts From",
      price: "50$",
    },
  ];

  return (
    <div
      className="container w-11/12 mx-auto px-4 my-16"
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className="flex flex-wrap -mx-2">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
