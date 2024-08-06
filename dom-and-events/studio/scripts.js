// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeoffButton = this.document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function(event) {
       let answer = window.confirm("Confirm shuttle is ready for launch"); 
       if (answer) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
       }
    });

    let landButton = this.document.getElementById("landing");
    landButton.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;

    });
    
    let abortButton = this.document.getElementById("missionAbort");
    abortButton.addEventListener("click" , function(event) {
        let answer = window.confirm("Confirm that you want to abort the mission.");
        if (answer) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });
    
    let rocketImage = this.document.getElementById("rocket");
    rocketImage.setAttribute("style", "position:relative; left:0px; top:0px;");

    let upButton = this.document.getElementById("up");
    upButton.addEventListener("click", function(event) {
        let tempNumber = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        tempNumber += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = tempNumber;
        let currentHeight = rocketImage.getAttribute()
        rocketImage.setAttribute();
    });

    let downButton = this.document.getElementById("down");
    downButton.addEventListener("click", function(event) {
        let tempNumber = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        tempNumber -= 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = tempNumber;

    });    

    let rightButton = this.document.getElementById("right");
    rightButton.addEventListener("click", function(event) {

    });    

    let leftButton = this.document.getElementById("left");
    leftButton.addEventListener("click", function(event) {

    });
});