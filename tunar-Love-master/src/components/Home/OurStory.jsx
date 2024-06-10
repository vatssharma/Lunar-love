import ProductCard from "./ProductCard";
import image2 from "../../assets/jewellery/image 2.png";
import image from "../../assets/jewellery/image 3.png";
import image3 from "../../assets/jewellery/Wedding.png";
import anillo from "../../assets/jewellery/anillo.png";
import img1 from "../../assets/jewellery/image 1.png";

const productData = [
  {
    image: image2,
    title: "Silver Bracelet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum. Dolor et volutpat in non. Luctus sit libero urna viverra.",
    sizes: ["S", "M", "L"],
    price: "680.90",
  },
  {
    image: image,
    title: "Silver Bracelet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum. Dolor et volutpat in non. Luctus sit libero urna viverra.",
    sizes: ["S", "M", "L"],
    price: "280.90",
  },
];

const OurStory = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start w-11/12 mx-auto my-16">
        <div
          className="w-full md:w-1/2 p-4"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img className="w-full h-auto" src={img1} alt="Top Story"  loading="lazy"/>
        </div>
        <div
          className="w-full md:w-1/2 my-auto p-4"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-5xl text-center tangerine-regular text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg">
            Indulge in the epitome of elegance at LUNAR LOVE. Our handcrafted
            jewelry captures the essence of your love, marrying premium quality
            with timeless design. Elevate your journey with pieces that speak to
            the heart of your unique union.
          </p>
        </div>
      </div>
      {/* Jewels tells */}
      <div className="flex  flex-col-reverse md:flex-row-reverse items-center md:items-start w-11/12 mx-auto my-16  relative">
        <div
          className="w-full md:w-1/2 p-4"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img
            className="w-full h-auto"
            src={anillo}
            alt="Top Story"
            loading="lazy"
          />
        </div>
        <div
          className="w-full md:w-1/2 my-auto p-4"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-5xl text-center tangerine-regular text-gray-900 mb-4">
            Jewels tells eternal stories
          </h2>
          <div className="flex gap-x-6 text-center">
            <div className="">
              <h3 className="font-bold text-2xl tangerine-regular">Diamond</h3>
              <p className="text-gray-700 text-sm">
                For your Diamond relationships our special diamonds from Surat
              </p>
            </div>

            <div className="">
              <h3 className="font-bold text-2xl tangerine-regular">Silver</h3>
              <p className="text-gray-700 text-sm">
                Our most premium silver from Sterling for the people who care
                about each other
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 100% gold */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full my-16 relative">
        <div
          className="absolute z-[8] top-1/2 transform -translate-y-1/2 text-center md:text-left md:left-8 lg:left-16"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl md:text-5xl font-tangerine text-gray-900 mb-4">
            100% Gold
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            For your Gold Beauty partner, something from us
          </p>
        </div>
        <div className="w-full md:w-3/4 lg:w-2/3 p-4 relative">
          <img
            className="h-[60vh] md:h-[80vh] lg:h-[120vh] w-full object-contain rounded-lg"
            src={image3}
            alt="Gold Jewelry"
            loading="lazy"
          />
        </div>
      </div>

      {/* Product */}
      <div className="relative w-11/12 mx-auto">
        {productData.map((e, i) => (
          <ProductCard
            key={i}
            id={i}
            image={e.image}
            title={e.title}
            description={e.description}
            sizes={e.sizes}
            price={e.price}
          />
        ))}
      </div>
    </section>
  );
};

export default OurStory;
