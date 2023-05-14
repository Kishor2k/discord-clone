import BgImage1 from "../assets/relax.svg";
import BgImageMd from "../assets/relax-2.svg";
import Clouds from "../assets/clouds.svg";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  return (
    <div className="lg:min-h-[calc(100vh-6rem)] bg-discord-blue relative overflow-x-hidden">
      <div className=" wrapper grid gap-6 mt-20 py-8 lg:text-center lg:gap-10 lg:place-items-center">
        <div className="max-w-md grid gap-4 md:gap-8 lg:max-w-3xl z-20">
          <h1 className="font-poppins uppercase text-4xl text-white md:text-5xl lg:text-7xl">
            Imagine a place...
          </h1>
          <p className="text-white md:text-lg tracking-wider">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 z-10">
          <button className="btn-light flex items-center">
            <AiOutlineDownload className="mr-2" size={25} /> Download for
            Windows
          </button>
          <button className="btn-dark">Open Discord in your broswer</button>
        </div>
        <div className="relative md:absolute md:w-full md:h-full inset-0">
          <img
            src={Clouds}
            alt=""
            className="hidden md:block absolute min-w-[2500px] -left-[600px] bottom-0"
          />
          <img
            src={BgImageMd}
            alt=""
            className="hidden md:block md:absolute -right-1/3 xl:-right-1/4 bottom-0  "
          />
          <img
            src={BgImage1}
            alt=""
            className="-translate-x-16 md:hidden lg:block lg:absolute bottom-0 lg:-left-1/3 xl:-left-1/4 lg:-translate-x-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
