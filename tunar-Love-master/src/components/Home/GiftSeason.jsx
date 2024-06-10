import { Link } from "react-router-dom";
import Unisex from "../../assets/jewellery/Unisex.png";

const GiftSeason = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center md:items-start w-11/12 mx-auto my-16 bg-[#E5A97D33]"
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className="w-full md:w-1/2 my-auto p-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-5xl text-center tangerine-regular text-gray-900 mb-4">
          Gifts of the season
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          "My love, as we intertwine our lives, I wanted to give you something
          as unique and everlasting as the connection we share. These bracelets,
          carefully chosen and personalized, symbolize the beautiful journey
          we've embarked on together. The intertwining designs mirror our
          entwined destinies, and the engraved initials are a testament to our
          unique bond. Every time you glance at your wrist, remember that my
          heart beats in rhythm with yours. Here's to us and the countless
          memories we're yet to create. I love you beyond words, and these
          bracelets are a small reflection of that infinite love."
        </p>
        <Link className="py-2 px-4 border border-gray-800 rounded-md hover:shadow-md">
          SHOP GIFTS
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <img className="w-full h-auto" src={Unisex} alt="Top Story" loading="lazy"/>
      </div>
    </div>
  );
};

export default GiftSeason;
