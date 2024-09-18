let doboz = document.getElementById("doboz");
let megmatekolvavaze = document.getElementById("megmatekolvavaze");    

doboz.addEventListener("input",function(){
    let karakterA = this.value;
    let karakterekB = karakterA.length;
    megmatekolvavaze.textContent = karakterekB;
});