function askMyName () {
    const name = prompt("What's your name");

    if (name != null) {
        document.getElementById("what-my-name").innerHTML = "My name is " + name;
     }
}

function helloWorld() {
    const h1message = document.getElementById("what-my-name").innerHTML 
       alert(h1message + 'งดแปลว่ายังทำได้อยู่')
    }