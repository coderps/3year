const showTask = (task) => {
    switch(task) {
        case "1": 
            document.getElementById("intro").className = "hidden"; 
            document.getElementById("t1").className = "tasks"; 
            document.getElementById("t2").className = "hidden"; 
            document.getElementById("t3").className = "hidden"; 
            document.getElementById("t4").className = "hidden";
            document.getElementById("t5").className = "hidden";
            break;
        case "2": 
            document.getElementById("intro").className = "hidden"; 
            document.getElementById("t1").className = "hidden"; 
            document.getElementById("t2").className = "tasks"; 
            document.getElementById("t3").className = "hidden"; 
            document.getElementById("t4").className = "hidden";
            document.getElementById("t5").className = "hidden";
            break;
        case "3": 
            document.getElementById("intro").className = "hidden"; 
            document.getElementById("t1").className = "hidden"; 
            document.getElementById("t2").className = "hidden"; 
            document.getElementById("t3").className = "tasks"; 
            document.getElementById("t4").className = "hidden";
            document.getElementById("t5").className = "hidden";
            break;
        case "4": 
            document.getElementById("intro").className = "hidden"; 
            document.getElementById("t1").className = "hidden"; 
            document.getElementById("t2").className = "hidden"; 
            document.getElementById("t3").className = "hidden"; 
            document.getElementById("t4").className = "tasks";
            document.getElementById("t5").className = "hidden";
            break;
        case "5": 
            document.getElementById("intro").className = "hidden"; 
            document.getElementById("t1").className = "hidden"; 
            document.getElementById("t2").className = "hidden"; 
            document.getElementById("t3").className = "hidden"; 
            document.getElementById("t4").className = "hidden";
            document.getElementById("t5").className = "tasks";
            break;
        default: 
            document.getElementById("intro").className = "intro"; 
            document.getElementById("t1").className = "hidden"; 
            document.getElementById("t2").className = "hidden"; 
            document.getElementById("t3").className = "hidden"; 
            document.getElementById("t4").className = "hidden";
            document.getElementById("t5").className = "hidden";
            break;
    }
}

export default showTask;