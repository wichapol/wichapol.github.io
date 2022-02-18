function askMyName () {
    const name = prompt("What's your name");

    if (name != null) {
        document.getElementById("what-my-name").innerHTML = "My name is " + name;
     }
}

function helloWorld() {
    const h1message = document.getElementById("what-my-name").innerHTML 
       alert(h1message + '  งดแปลว่ายังทำได้อยู่')
    }

function calAge() {
    const YearBorn = prompt("what year were you born");
    const YearNow  = new Date().getFullYear();    
    let Age = YearNow-YearBorn; 
    const message = "ยินดีคุณทนอยู่ในประเทศนี้มา" 
    const message2 = "ปีแล้ว"
    alert(`${message} ${Age} ${message2}`);
}


function loadProfile() {
    const name2 = wichapol
    const province = jaimaung

    document.getElementById("my-name").innerHTML = name2;
    document.getElementById("my-province").innerHTML = province;
}