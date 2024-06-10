import VideoBgSection from "../components/Home/VideoBgSection";
import Bestsellers from "../components/Home/BestSellers";
import OurStory from "../components/Home/OurStory";

import ShopByCategory from "../components/Home/ShopByCategory";
import GiftSeason from "../components/Home/GiftSeason";
import ProductGrid from "../components/Home/ProductCard ";
import { categories } from "../utils/categories";

const Home = () => {
  return (
    <>
      <div className="w-full mt-40 h-[60vh] flex flex-col justify-center items-center  text-gray-950 relative heroBg ">
        <div className="absolute top-[10%]"   data-aos="fade-up">
          <h2 className="tangerine-regular text-2xl md:text-4xl" >
            Eternal Embrace
          </h2>
          <h1 className="tangerine-regular text-4xl md:text-8xl">
            GLAMIRA MARTOX
          </h1>
        </div>
      </div>
      <VideoBgSection />
      <Bestsellers />
      <OurStory />
      <ShopByCategory categories={categories} />
      <GiftSeason />
      <ProductGrid />

      <div className=""></div>
    </>
  );
};

export default Home;
