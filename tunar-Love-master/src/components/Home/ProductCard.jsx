/* eslint-disable react/prop-types */
const ProductCard = ({ id, image, title, description, sizes, price }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center bg-white rounded-lg ${
        id === 1 ? "md:flex-row-reverse" : "md:flex-row"
      } w-11/12 mx-auto`}
    >
      {/* Left Side Image */}
      <div
        className="w-full md:w-1/2 flex justify-center items-center"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>
      {/* Right Side Details */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center items-start "
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="mb-4">
          <span className="text-gray-900 font-bold">Size</span>
          <div className="flex space-x-4 mt-2">
            {sizes.map((size) => (
              <label key={size} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-black focus:ring-black"
                  name="size"
                  value={size}
                />
                <span className="ml-2">{size}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Add to Cart
          </button>
          <span className="text-2xl font-bold text-gray-900">{price} $</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
