import AboutDesc from "./aboutdesc";

const About = () => {
    return (
      <div className="bg-slate-100 flex justify-center flex-col w-screen items-center mt-40">
        <div className="w-28 h-7 flex justify-center bg-slate-500 rounded-3xl mt-10">
          <h1>About me</h1>
        </div>
        <div className="">
          <AboutDesc />
        </div>
      </div>
    );
  };
  
  export default About;