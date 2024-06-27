import Upicon from "../assets/Clip path group.png";
import { Timeline, Jobs, Allcon } from "../assets/timeline";

const Exp = () => {
  return (
    <div className=" flex justify-center flex-col w-screen items-center bg-slate-100 ">
      <div className="w-28 h-7 flex justify-center bg-slate-300 rounded-3xl mt-10 ">
        <h1>Experience</h1>
      </div>
      <p className="m-4">
        Here is a quick summary of my most recent experiences:
      </p>
      {Timeline.map((el, i) => {
        return (
          <div className="bg-white m-4 mt-6 w-11/12 rounded-lg md:max-w-2xl">
            <div className="m-4">
              <img src={Upicon} />
              <h2 className="text-black text-lg mt-2">{el.date}</h2>
              <h1 className="text-black text-2xl mt-2 font-bold">
                {Jobs[i].jobtitle}
              </h1>
              {Allcon[i].map((el) => {
                return <li className="text-slate-700">{el.point}</li>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Exp;
