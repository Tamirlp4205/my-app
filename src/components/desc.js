import Pic from "../assets/Pic.png";

const Desc = () => {
  return (
    <div className="mt-10 flex flex-col justify-center md:flex md:flex-row-reverse md:max-w-7xl md:justify-center">
      <div className="flex justify-center">
        <div className="w-60 h-60 mx-auto relative">
          <img className="w-full h-full z-20 relative" src={Pic}></img>
          <div className="w-full h-full z-10 transform translate-x-4 translate-y-4 bg-slate-500 absolute top-0"></div>
        </div>
      </div>
      <div>
      <h1 className="text-4xl font-bold flex justify-center mt-10">
        Hi, I’m Tamir 👋
      </h1>
      <p className="text-gray-600 tracking-wide mt-4">
        I'm a full stack developer (React.js & Node.js) with a focus on creating
        (and occasionally designing) exceptional digital experiences that are
        fast, accessible, visually appealing, and responsive. Even though I have
        been creating web applications for over 7 years, I still love it as if
        it was something new.
      </p>
      </div>
    </div>
  );
};

export default Desc;
