
const calculate = async () => {

    const principal = document.querySelector("#principal").value;
    const rate = document.querySelector('#Rate').value;
    const time = document.querySelector('#time').value;

   // send data to server and get the response
    const response = await fetch("http://localhost:3000/?principal=" + principal + "&rate=" + rate + "&time=" + time);
   
        const data = await response.text();


        // Clearing previous result
        const previousResult = document.querySelector(".result");
        if (previousResult) {
            previousResult.remove();
        }

        // createing an element for displaying result
        const element = document.createElement("h2");
        element.classList.add("result");      // Add a class for easy access later

        element.innerHTML = "Simple Interest: "+ data;      // append data in element
        document.querySelector(".container").append(element);   // append elemt in in our container

}

document.querySelector('#button').addEventListener('click', calculate)  // trigger when calculate button clicked

