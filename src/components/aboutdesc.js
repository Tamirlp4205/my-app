import Pac from "../assets/pac.png";
import Greenpoint from "./greenpoint";

const AboutDesc = () => {
  return (
    <div className="m-20 md:flex ">
      <div className="w-60 h-60 mx-auto relative mt-16 md:w-[500px] md:h-[800px]" >
        <img className="w-full h-full z-20 relative" src={Pac}></img>
        <div className="w-full h-full z-10 transform translate-x-4 translate-y-4 bg-slate-500 absolute top-0"></div>
      </div>
      <div className="ml-10 md:max-w-3xl">
        <h1 className="text-4xl font-bold flex justify-center mt-10">
          Curious about me? Here you have it:
        </h1>
        <p className="text-gray-600 tracking-wide mt-4">
          I'm a passionate, self-proclaimed designer who specializes in full
          stack development (React.js & Node.js). I am very enthusiastic about
          bringing the technical and visual aspects of digital products to life.
          User experience, pixel perfect design, and writing clear, readable,
          highly performant code matters to me.
        </p>
        <p className="text-gray-600 tracking-wide mt-4">
          I began my journey as a web developer in 2015, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, in my early
          thirties, 7 years after starting my web development journey, I'm
          building cutting-edge web applications using modern technologies such
          as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </p>
        <p className="text-gray-600 tracking-wide mt-4">
          I am very much a progressive thinker and enjoy working on products end
          to end, from ideation all the way to development.
        </p>
        <p className="text-gray-600 tracking-wide mt-4">
          When I'm not in full-on developer mode, you can find me hovering
          around on twitter or on indie hacker, witnessing the journey of early
          startups or enjoying some free time. You can follow me on Twitter
          where I share tech-related bites and build in public, or you can
          follow me on GitHub.
        </p>
        <p className="text-gray-600 tracking-wide mt-4">
          Finally, some quick bits about me.
        </p>
        <div className="flex">
          <div className="w-1/2 flex flex-col">
            <p className="flex gap-2">
              <Greenpoint color="black" />
              B.E. in Computer Engineering
            </p>
            <p className="flex gap-2">
              <Greenpoint color="black" />
              Full time freelancer
            </p>
          </div>
          <div className="w-3/5 flex flex-col" >
            <p className="flex gap-2">
              <Greenpoint color="black" />
              Avid learner
            </p>
            <p className="flex gap-2">
              <Greenpoint color="black" />
              Aspiring indie hacker
            </p>
          </div>
        </div>
        <p className="text-gray-600 tracking-wide mt-4">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
      </div>
    </div>
  );
};

export default AboutDesc;
