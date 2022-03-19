import React from "react";
import us from "../static/img/us.jpg";
import showTask from "./tasks/showTask";

const Header = () => {
    return (
        <div className="header-img" onClick={() => showTask("intro")}>
            <img src={us} alt="This is Us!"/>
            <div>3YA</div>
        </div>
    )
}

export default Header;