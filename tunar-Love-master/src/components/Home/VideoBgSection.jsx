import { Link } from "react-router-dom";

const VideoBgSection = () => {
  return (
    <div className="relative w-full h-[50vh] flex justify-center items-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover hue-rotate-180"
        src="https://s3-figma-videos-production-sig.figma.com/video/1368817601487480810/TEAM/ce08/0a4d/-0ce0-4284-96e8-ef3a5024aa15?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pIx2vBPr3V4uWSPLxle1FiZcekPLp0pgxuHyMX1tr~ol~m6ln9NouCiQTRjtsoelFKzbZX5FUJfCjiggPOKSAYYExY11vb8m1v1cSqvsmzPNEcvORuhVqvAYU2ZausNrwP5SdyixOarV6YLn0bpV6sXFrixuWcLkS5jaTpEAapg~6Q5sUVByIRY39EPaR-ktYTJdzRo6I5T1A4EEbRFGUDzq7VJ9pGwtklGsX-ffbnlrwatibgkma33Q1qlHa8VkG8Ac~2Z8JKjKn2CQYZj6w1uAqasuVxEl7KO434qWIvHDOBn~GEQci44UzoGjBTx~W1AfSUk0VdBh7c9Oso53lg__"
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
      <Link to="/explore" className="relative w-32 h-14 rounded-lg shadow-md flex justify-center items-center overflow-hidden cursor-pointer  filter hue-rotate-180">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://s3-figma-videos-production-sig.figma.com/video/1368817601487480810/TEAM/ce08/0a4d/-0ce0-4284-96e8-ef3a5024aa15?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pIx2vBPr3V4uWSPLxle1FiZcekPLp0pgxuHyMX1tr~ol~m6ln9NouCiQTRjtsoelFKzbZX5FUJfCjiggPOKSAYYExY11vb8m1v1cSqvsmzPNEcvORuhVqvAYU2ZausNrwP5SdyixOarV6YLn0bpV6sXFrixuWcLkS5jaTpEAapg~6Q5sUVByIRY39EPaR-ktYTJdzRo6I5T1A4EEbRFGUDzq7VJ9pGwtklGsX-ffbnlrwatibgkma33Q1qlHa8VkG8Ac~2Z8JKjKn2CQYZj6w1uAqasuVxEl7KO434qWIvHDOBn~GEQci44UzoGjBTx~W1AfSUk0VdBh7c9Oso53lg__"
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
        <p className="absolute inset-0 flex justify-center items-center text-black font-bold">
          Explore Now
        </p>
      </Link>
    </div>
  );
};

export default VideoBgSection;
