import Nav from "./nav";
import Desc from "./desc";
import Info from "./info";
import Social from "./ sociallogo";

function Main() {
  return (
    <div className="m-2">
      <Nav />
      <div className="md:flex justify-center">
        <div className="md:flex justify-center flex-col">
          <Desc />
          <Info />
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Main;
