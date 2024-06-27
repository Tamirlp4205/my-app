import Location from "./loc";
import Greenpoint from "./greenpoint"


const Info = () =>{
    return(
        <div className="flex flex-col gap-2 mt-16">
            <div className="flex gap-1 ">
                <Location/>
                <p>Tamir , Mongolian</p>
            </div>
            <div className="flex gap-1">
                <Greenpoint/>
                <p>Available for new projects</p>
            </div>
        </div>
    )
}

export default Info;