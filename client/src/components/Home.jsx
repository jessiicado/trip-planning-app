import Cover from "../assets/Cover.svg";
import Stock1 from "../assets/stockimg.svg";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
// import { useState } from "react";
import github from "../assets/github-mark.png";
const Home = () => {
  // const [isFAQ, setisFAQ] = useState(false);
  return (
    <>
      <div className="flex flex-col pt-10 md:flex-row md:pt-0">
        <div className="items-center justify-center flex flex-col text-center md:justify-start md:items-start md:px-10 md:py-50 md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold">
            Your Group Trip's Best Friend
          </h1>
          <h2 className="pt-10 font-medium text-lg md:text-2xl md:text-left md:pt-10">
            From weekend hangouts to group getaways, Plann’d keeps everyone on
            the same page.
          </h2>

          <div className="pt-10 md:mt-20">
            <NavLink
              to="/signup"
              className="!bg-black text-white border-2 rounded-full font-bold px-5 w-1/3 py-2"
            >
              Join Now
            </NavLink>
          </div>
          <div className="justify-center items-center mt-10">
            <img src={Cover} className="h-full " alt="coverpage" />
          </div>
        </div>
      </div>

      <div className="h-full pt-10">
        <h1 className="text-center mt-20 font-bold text-slate-700 pb-10 text-5xl">
          Pick. Plan. Party.
        </h1>
        {/* PLAN TOGETHER */}
        <div className="flex flex-col justify-start items-start px-5 gap-y-5 text-left">
          <h1 className="font-bold text-2xl">Plan Together with Ease</h1>
          <p className="font-medium">
            Invite your group trip mates with a single link. Everyone can share
            their availability, vote on dates, and contribute ideas—no more
            endless group chats.
          </p>
          <img src={Stock1} alt="stockimg" />
        </div>
      </div>
      {/* CUSTOMIZE ROOM/RIDE */}
      <div className="h-full pt-20">
        <div className="flex flex-col justify-start items-start px-5 gap-y-5 text-left">
          <h1 className="font-bold text-2xl">Less chaos, more control.</h1>
          <p className="font-medium">
            Create group settings based on sleep habits, social dynamics, or
            noise tolerance. The app catches potential conflicts and suggests
            smoother arrangements—no more drama over who’s bunking with whom.
          </p>
          <img
            src="https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg"
            alt="stockimg"
          />
        </div>
      </div>
      {/* CONTROL ITINERARY */}
      <div className="h-full pt-20">
        <div className="flex flex-col justify-start items-start px-5 gap-y-5 text-left">
          <h1 className="font-bold text-2xl">Build Your Itinerary</h1>
          <p className="font-medium">
            Customize your trip schedule, or let Plann’d surprise you with an
            itinerary tailored to your group vibe.
          </p>
          <img
            src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
            alt="stockimg"
          />
        </div>
      </div>

      <div className="h-full pt-20">
        <div className="flex flex-col justify-start items-start px-5 gap-y-5 text-left">
          <h1 className="font-bold text-2xl">
            Simplify the planning, amplify the fun.
          </h1>
          <p className="font-medium">
            Explore our features to make the most out of your trip, whether you
            need a solid plan or just a spark of inspiration.
          </p>
          <img
            src="https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_93_3235_3304/master/3235.jpg?width=445&dpr=1&s=none&crop=none"
            alt="stockimg"
          />
        </div>
      </div>

      <div className="h-screen pt-20 justify-center items-center text-center">
        <h1 className="text-2xl font-bold">Got Questions?</h1>
        <p className="font-medium pt-5">Learn more in our FAQ section.</p>
        <div className="w-full justify-center items-center flex flex-col pt-10">
          <button className="accordian border w-full">FAQ</button>
          <button className="accordian border w-full">FAQ</button>
          <button className="accordian border w-full">FAQ</button>
          <button className="accordian border w-full">FAQ</button>
        </div>
      </div>

      <div className="h-full !bg-gray-100 justify-center items-center text-center">
        <NavLink to="/" className="gap-x-5 items-center flex justify-center">
          <img alt="Plannd logo" className="h-16 sm:h-20" src={logo} />
        </NavLink>
        <div className="flex flex-rows items-center justify-center pt-5">
          <ul>
            <li>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" width="36" height="36" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center pt-10 gap-y-5">
          <NavLink to="/faq">Support & FAQ</NavLink>
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
