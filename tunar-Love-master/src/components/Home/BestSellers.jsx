import { Link } from "react-router-dom";
import Rose from "../../assets/jewellery/Rose Ring Milgrain.png";
import HARRY from "../../assets/jewellery/HARRY.png";
import Envero from "../../assets/jewellery/Envero.png";

const BestSellers = () => {
  const bestSellersData = [
    {
      id: 1,
      image: (Rose),
      title: "THE MULE MARQUIS MIDI RING",
      price: "250",
    },
    {
      id: 2,
      image: (HARRY),
      title: "Dazzling Elegance Necklace",
      price: "750.35",
    },
    {
      id: 3,
      image: (Envero),
      title: "Sapphire Serenity Ring",
      price: "850.50",
    },
  ];

  return (
    <div className=" w-11/12  mx-auto text-center my-16 ">
      <h2 className="text-4xl md:text-6xl text-gray-900 border-b border-gray-950 pb-1 inline-block tangerine-regular">
        Bestsellers
      </h2>
      <div className="w-full flex flex-wrap justify-center my-16"  data-aos="fade-up">
        {bestSellersData.map((item) => (
          <Link
            // to={`/cart/${item.id}`}
            key={item.id}
            className="mx-4 cursor-pointer my-2 hover:my-0 hover:shadow-lg rounded-2xl"
          >
            <div className="max-w-xs rounded-md overflow-hidden mx-auto">
              <img
                className="w-full aspect-square"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className="px-6 py-4">
                <h3 className="text-lg mb-2 text-left">{item.title}</h3>
                <p className="text-gray-700 text-base text-left">
                  ${item.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
