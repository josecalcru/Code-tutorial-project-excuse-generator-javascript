function Excuse (){

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let whoR =who[getRandomInt(who.length)];
let actionR =action[getRandomInt(action.length)];
let whatR =what[getRandomInt(what.length)];
let whenR =when[getRandomInt(when.length)];

document.getElementById('excuse').innerHTML = "<h1>"+ whoR+ " "+ actionR + " "+ whatR + " " + whenR+"</h1>"

}