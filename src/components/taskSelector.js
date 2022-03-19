import React from "react";
import Intro from "./intro";
import Task1 from "./tasks/task1";
import Task2 from "./tasks/task2";
import Task3 from "./tasks/task3";
import Task4 from "./tasks/task4";
import Task5 from "./tasks/task5";

const TaskSelector = () => {
    return (
        <>
            <Intro />
            <Task1 />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
        </>
    )
}

export default TaskSelector;