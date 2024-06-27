import { Allpic,Workname, Desc, Allskills } from "../assets/workcon";

const Work = () => {
  return (
    <div className=" flex justify-center flex-col w-screen  items-center bg-white">
      <div className="w-28 h-7 flex justify-center bg-slate-300 rounded-3xl mt-10 ">
        <h1>Work</h1>
      </div>
      <p className="m-4">Some of the noteworthy projects I have built:</p>
      {Allpic.map((el,i) => {
        return (
          <div className="bg-slate-100 m-4 mt-6 w-11/12 rounded-lg shadow-md md:flex max-w-6xl">
            <div className="m-4">
              <img src={el.img} />
            </div>
            <div className="bg-white rounded-b-xl">
              <h1 className="text-black font-bold m-2">{Workname[i].title}</h1>
              <p className="m-2 text-slate-500">{Desc[i].text}</p>
              <div className="flex flex-wrap gap-4 justify-start items-center">
              {Allskills.map((el) =>{
                return(
                  <div className="m-2">
                    <div className="bg-slate-300 rounded-lg ">
                    <p>{el.skill}</p>
                  </div>
                  </div>
                )
              })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
