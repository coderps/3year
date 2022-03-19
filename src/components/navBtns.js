import React from "react";
import Countdown from "react-countdown";
import showTask from "./tasks/showTask";

const NavBtns = () => {

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return completed ? <Completionist /> : <span>{days}d {hours}h {minutes}m {seconds}s</span>;
    };

    return (
        <div className="navBtns">
            <div onClick={() => showTask("t1")}>
                <div>Unlocks in:</div>
                <Countdown date={new Date("April 03, 2022 00:00:00")} renderer={renderer}/>
            </div>
            <div>
                <div>Unlocks in:</div>
                <Countdown date={new Date("April 03, 2022 09:00:00")}>
                    <Completionist />
                </Countdown>
            </div>
            <div>
                <div>Unlocks in:</div>
                <Countdown date={new Date("April 03, 2022 12:00:00")}>
                    <Completionist />
                </Countdown>
            </div>
            <div>
                <div>Unlocks in:</div>
                <Countdown date={new Date("April 03, 2022 15:00:00")}>
                    <Completionist />
                </Countdown>
            </div>
            <div>
                <div>Unlocks in:</div>
                <Countdown date={new Date("April 03, 2022 18:00:00")}>
                    <Completionist />
                </Countdown>
            </div>
        </div>
    )
}

export default NavBtns;