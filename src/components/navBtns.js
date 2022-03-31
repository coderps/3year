import React from "react";
import Countdown from "react-countdown";
import showTask from "./tasks/showTask";

const NavBtns = () => {

    const renderer1 = ({ days, hours, minutes, seconds, completed }) => {
        return completed 
            ? <div onClick={() => showTask("1")} className="activator">Jiaa 1</div> 
            : <span>{days}d {hours}h {minutes}m {seconds}s</span>;
    };

    const renderer2 = ({ days, hours, minutes, seconds, completed }) => {
        return completed 
            ? <div onClick={() => showTask("2")} className="activator">Jiaa 2</div> 
            : <span>{days}d {hours}h {minutes}m {seconds}s</span>;
    };

    const renderer3 = ({ days, hours, minutes, seconds, completed }) => {
        return completed 
            ? <div onClick={() => showTask("3")} className="activator">Jiaa 3</div> 
            : <span>{days}d {hours}h {minutes}m {seconds}s</span>;
    };

    const renderer4 = ({ days, hours, minutes, seconds, completed }) => {
        return completed 
            ? <div onClick={() => showTask("4")} className="activator">Jiaa 4</div> 
            : <span>{days}d {hours}h {minutes}m {seconds}s</span>;
    };

    const renderer5 = ({ days, hours, minutes, seconds, completed }) => {
        return completed 
            ? <div onClick={() => showTask("5")} className="activator">Jiaa 5</div> 
            : <span>{days}d {hours}h {minutes}m {seconds}s</span>;
    };

    return (
        <div className="navBtns">
            <div>
                <div>Jiaaa in:</div>
                <Countdown date={new Date("April 03, 2022 00:00:00")} renderer={renderer1}/>
            </div>
            <div>
                <div>Jiaaa in:</div>
                <Countdown date={new Date("April 03, 2022 09:00:00")} renderer={renderer2}/>
            </div>
            <div>
                <div>Jiaaa in:</div>
                <Countdown date={new Date("April 03, 2022 12:00:00")} renderer={renderer3}/>
            </div>
            <div>
                <div>Jiaaa in:</div>
                <Countdown date={new Date("April 03, 2022 15:00:00")} renderer={renderer4}/>
            </div>
            <div>
                <div>Jiaaa in:</div>
                <Countdown date={new Date("April 03, 2022 18:00:00")} renderer={renderer5}/>
            </div>
        </div>
    )
}

export default NavBtns;