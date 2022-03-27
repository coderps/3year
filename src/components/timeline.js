import React from "react";
import bb from "../static/img/bigbang.png";
import dino from "../static/img/dino.png";
import human from "../static/img/human.png";

const Timeline = () => {
    const [chars, setChars] = React.useState("-");

    React.useEffect(() => {
        setChars("-".repeat(parseInt(window.innerWidth/12)));
        window.addEventListener('resize', () => {setChars("-".repeat(parseInt(window.innerWidth/12)))}, true);
    }, [setChars]);

    return (
        <div className="timeline">
            <div>
                {chars.split('').map((char, idx) => {
                    return (
                        <>
                            {!idx ? <img id="bb" src={bb} alt="Big Bang!" /> : <></>}
                            {idx === parseInt(chars.length * 0.2) ? <img id="dino" src={dino} alt="Dino!" /> : <></>}
                            {idx === parseInt(chars.length * 0.3) ? <img id="human" src={human} alt="Human!" /> : <></>}
                            <span key={idx} className={idx > parseInt(chars.length * 0.3) ? "" : "blue"}>{char}</span>
                        </>
                )})}
            </div>
        </div>
    )
}

export default Timeline;