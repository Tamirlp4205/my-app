import Js from "../assets/icon-javscript.png";
import Ty from "../assets/icon-typescript.png";
import React from "../assets/icon-react.png";
import Next from "../assets/icon-nextjs.png";
import Node from "../assets/icon-nodejs.png";
import Ex from "../assets/icon-express.png";
import Nest from "../assets/icon-nest.png";
import Sock from "../assets/icon-socket.png";
import SQL from "../assets/icon-postgresql.png";
import DB from "../assets/icon-mongodb.png";
import Sass from "../assets/icon-sass.png";
import TL from "../assets/icon-tailwindcss.png";
import Figma from "../assets/icon-figma.png";
import Cyp from "../assets/icon-cypress.png";
import SB from "../assets/icon-storybook.png";
import Git from "../assets/icon-git.png";

const Skill = () => {
  const Tools = [
    {
      image: Js,
      text: "Javascript",
    },
    {
      image: Ty,
      text: "Typescript",
    },
    {
      image: React,
      text: "React",
    },
    {
      image: Next,
      text: "Next.js",
    },
    {
      image: Node,
      text: "Node.js",
    },
    {
      image: Ex,
      text: "Express.js",
    },
    {
      image: Nest,
      text: "Nest.js",
    },
    {
      image: Sock,
      text: "Socket.io",
    },
    {
      image: SQL,
      text: "PostgreSQL",
    },
    {
      image: DB,
      text: "MongoDB",
    },
    {
      image: Sass,
      text: "Sass/Scss",
    },
    {
      image: TL,
      text: "Tailwindcss",
    },
    {
      image: Figma,
      text: "Figma",
    },
    {
      image: Cyp,
      text: "Cypress",
    },
    {
      image: SB,
      text: "Storybook",
    },
    {
      image: Git,
      text: "Git",
    },
  ];
  return (
    <div className=" flex justify-center flex-col w-screen items-center md:max-w-4xl">
      <div className="w-28 h-7 flex justify-center bg-slate-300 rounded-3xl mt-10 ">
        <h1>Skills</h1>
      </div>
      <p className="m-5 ">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex flex-wrap gap-10 m-7 justify-center items-center">
        {Tools.map((el) => {
          return (
            <div className="w-16">
              <div className="">
              <img src={el.image} />
              <p> {el.text}</p>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
