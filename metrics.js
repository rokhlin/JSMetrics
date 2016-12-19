//JavaScript metrics:
console.log("\n"+"------------ JavaScript metrics:");
var d = document.getElementById("second");
console.log("clientWidth: "+ d.clientWidth+" -- padding(77) + width(100) + padding(77)"+"\n");
console.log("clientHeight: "+ d.clientHeight+" -- padding(77) + height(11) + padding(77)"+"\n");

console.log("clientHeight: "+ d.offsetHeight+" "+"\n");
console.log("offsetWidth: "+ d.offsetWidth+" "+"\n");

console.log("offsetLeftt: "+ d.offsetLeft+" "+"\n");
console.log("offsetTop: "+ d.offsetTop+" "+"\n");



//JQuery metrics:
console.log("\n"+"----------- JQuery metrics:");
var d =$("div");

console.log("d: " + d +"\n");
console.log("d.outerWidth(true): " + d.outerWidth(true) +"\n");
console.log("d.outerWidth(false): " + d.outerWidth(false) +"\n");
console.log("d.position().top: " + d.position().top +"\n");
console.log("d.position().left): " + d.position().left +"\n");


var dd =$("div div");//inner div
console.log("dd: " + dd +"\n");
console.log("dd.outerWidth(true): " + dd.outerWidth(true) +"\n");
console.log("dd.outerWidth(false): " + dd.outerWidth(false) +"\n");
console.log("dd.position().top: " + dd.position().top +"\n");
console.log("dd.position().left): " + dd.position().left +"\n");

//screen metrics JavaScript
var d = document.getElementById("second");
document.getElementById("but").click = function(){
    console.log("\n"+"----------- Screen metrics JavaScript:");
    console.log("d.getBoundingClientRect().top: " + d.getBoundingClientRect().top + "\n");
    console.log("d.getBoundingClientRect().left: " + d.getBoundingClientRect().left + "\n");
}