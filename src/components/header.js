import React from "react";
import us1 from "../static/img/us1.jpg";
import us2 from "../static/img/us2.jpg";
import us3 from "../static/img/us3.jpg";
import us4 from "../static/img/us4.jpg";
import us5 from "../static/img/us5.jpg";
import us6 from "../static/img/us6.jpg";
import us7 from "../static/img/us7.jpg";
import us8 from "../static/img/us8.jpg";
import us9 from "../static/img/us9.jpg";
import us10 from "../static/img/us10.jpg";
import us11 from "../static/img/us11.jpg";
import us12 from "../static/img/us12.jpg";
import us13 from "../static/img/us13.jpg";
import us14 from "../static/img/wedding.mp4";
import showTask from "./tasks/showTask";

const Header = () => {

    const [backdrop, setBackdrop] = React.useState(<img src={us1} alt="This is Us!"/>);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            const newUs = (parseInt(Math.random() * 100) % 13) + 1;
            setBackdrop(newUs < 13
                ? <img src={[us1, us2, us3, us4, us5, us6, us7, us8, us9, us10, us11, us12, us13][newUs]} alt="This is Us!"/>
                : <video playsInline autoPlay muted id="vid"><source src={us14} type="video/mp4"/></video>
            );
            if (newUs >= 13) {
                sleep(100).then(() => {
                    document.getElementById("vid").currentTime = 15;
                });
            }
        }, 9000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="header-img" onClick={() => showTask("intro")}>
            {backdrop}
            <div>3YA</div>
        </div>
    )
}

export default Header;