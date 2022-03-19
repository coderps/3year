import React from "react";

const Timeline = () => {
    const [chars, setChars] = React.useState("-");

    React.useEffect(() => {
        setChars("-".repeat(parseInt(window.innerWidth/12)));
        window.addEventListener('resize', () => {setChars("-".repeat(parseInt(window.innerWidth/12)))}, true);
    }, [setChars]);

    return (
        <div className="timeline">
            {chars.split('').map((char, idx) => {
                return <span key={idx} className={idx > parseInt(chars.length * 0.3) ? "" : "blue"}>{char}</span>
            })}
        </div>
    )
}

export default Timeline;