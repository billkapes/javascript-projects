//Code Your Solution Below
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let testnameInput = document.querySelector("input[name=testName]");
        let testdateInput = document.querySelector("input[name=testDate]");
        let boostercountInput = document.querySelector("input[name=boosterCount]");
        //let windratingInput = document.querySelector("input[name=windRating]:checked");
        //alert("wind ", windratingInput.value);

        if (testnameInput.value === "" || testdateInput.value === "" || boostercountInput.value === "") {
            alert("All fields are required.");
            event.preventDefault();
        }
    
    });
});