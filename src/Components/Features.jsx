import Features1 from "../assets/study-group.svg";
import Features2 from "../assets/voice-connected.svg";
import Features3 from "../assets/coach.svg";
import Features4 from "../assets/just-chillin.svg";
import { AiOutlineDownload } from "react-icons/ai";

const Features = () => {
  return (
    <>
      <section className="bg-white">
        <div className="wrapper py-8 md:py-12 lg:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-20">
            <div className="basis-2/3">
              <img src={Features1} alt="" />
            </div>
            <div className="space-y-4 md:space-y-8 basis-1/3">
              <h2 className="text-3xl md:text-5xl">
                Create an invite-only place where you belong
              </h2>
              <p>
                Discord servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="wrapper py-8 md:py-12 lg:py-20">
          <div className=" flex flex-col md:flex-row-reverse items-center justify-between gap-6 lg:gap-20">
            <div className="basis-2/3">
              <img src={Features2} alt="" />
            </div>
            <div className="space-y-4 md:space-y-8 basis-1/3">
              <h2 className="text-3xl md:text-5xl">
                Where hanging out is easy
              </h2>
              <p>
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="wrapper py-8 md:py-12 lg:py-20">
          <div className=" flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-20">
            <div className="basis-2/3">
              <img src={Features3} alt="" />
            </div>
            <div className="space-y-4 md:space-y-8 basis-1/3">
              <h2 className="text-3xl md:text-5xl">From few to a fandom</h2>
              <p>
                Get any community running with moderation tools and custom
                member access. Give members special powers, set up private
                channels, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="wrapper py-8 md:py-12 lg:py-20">
          <div className="">
            <div className="space-y-4 md:space-y-8 text-center px-4">
              <h1 className="font-poppins fluid-text">
                RELIABLE TECH FOR STAYING CLOSE
              </h1>
              <p>
                Low-latency voice and video feels like you’re in the same room.
                Wave hello over video, watch friends stream their games, or
                gather up and have a drawing session with screen share.
              </p>
            </div>

            <img src={Features4} alt="" className="w-full" />
          </div>
          <div className="grid gap-8 place-items-center stars-bg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl">
              Ready to start you journey
            </h2>
            <button className="btn-blue flex items-center">
              <AiOutlineDownload className="mr-2" size={25} /> Download for
              Windows
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
