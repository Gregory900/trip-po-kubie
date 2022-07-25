let box=document.querySelector("#container2");
let box1=document.querySelector("#container3");
let box2=document.querySelector("#container4");
let box3=document.querySelector("#container5");

box.firstElementChild.classList.remove("h2");
box.firstElementChild.classList.add("h2out");

 let time = setInterval(function () {box.getBoundingClientRect().top <=650 ? changeClass()
   : null},400);

function changeClass() {
   box.firstElementChild.classList.remove("h2out");
   box.firstElementChild.classList.add("h2");
   clearInterval(time);
}

box1.firstElementChild.classList.remove("h2");
box1.firstElementChild.classList.add("h2out");

let time1 = setInterval(function () {box1.getBoundingClientRect().top <=650 ? changeClass1()
   : null},400);

function changeClass1() {
   box1.firstElementChild.classList.remove("h2out");
   box1.firstElementChild.classList.add("h2");
   clearInterval(time1);
}

box2.firstElementChild.classList.remove("h2");
box2.firstElementChild.classList.add("h2out");

 let time2 = setInterval(function () {box2.getBoundingClientRect().top <=650 ? changeClass2()
   : null},400);

function changeClass2() {
   box2.firstElementChild.classList.remove("h2out");
   box2.firstElementChild.classList.add("h2");
   clearInterval(time2);
}

box3.firstElementChild.classList.remove("h2");
box3.firstElementChild.classList.add("h2out");

 let time3 = setInterval(function () {box3.getBoundingClientRect().top <=650 ? changeClass3()
   : null},400);

function changeClass3() {
   box3.firstElementChild.classList.remove("h2out");
   box3.firstElementChild.classList.add("h2");
   clearInterval(time3);
}




  


