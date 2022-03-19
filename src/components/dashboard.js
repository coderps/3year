import React from "react";
import Header from "./header";
import NavBtns from "./navBtns";
import TaskSelector from "./taskSelector";
import Timeline from "./timeline";
import "../static/style.scss";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header />
            <NavBtns />
            <TaskSelector />
            <Timeline />
        </div>
    )
}

export default Dashboard;