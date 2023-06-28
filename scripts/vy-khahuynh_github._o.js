function addStars(){
  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  var cur = document.getElementById('stars-container');
  var num = Math.floor(Math.random() * 100) + 100;
  for(let i = 0 ; i < num ; i++){
    var star = document.createElement('div');
    star.classList.add("star");
    star.style.top = Math.floor(Math.random() * 0.99 * height)+"px";
    star.style.left = Math.floor(Math.random() * 0.99 * window.innerWidth)+"px";
    cur.appendChild(star);
  }
  var bigstars = document.querySelectorAll(".star:nth-child(3n)");
  for(let i = 0 ; i < bigstars.length ; i++){
    var delay = Math.floor(Math.random() * 20);
    bigstars[i].style.animation = `glow 5s ease infinite ${delay}s`;
  }
}

function scrolltop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let names = ["Vy-Kha Huynh", "a Full-Stack Developer", "a Software Engineer", "a Blackhole fanatic", "a LEGO enthusiast"];

function intro(){ 
  addEventListener("load", addStars);
  addEventListener("load", populate);
  animateBH();
}

function populate(){
  var sw = document.querySelectorAll('#switch')[0];

  for(var i = 0 ; i < names.length ; i++){
    var name = document.createElement('span');
    for(var j = 0 ; j < names[i].length ; j++){
      var letter = document.createElement('span');
      letter.innerHTML = names[i][j];
      name.appendChild(letter);
    }
    sw.appendChild(name);
  }
}

intro()

function animate(cb, an, op){
  const observer = new IntersectionObserver(cb, op);
  for(let i = 0 ; i < an.length ; i++){
    observer.observe(an[i]);
  }
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}


// Minimize footer and header on top
let minimize = (entries) =>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      document.querySelector("#nav-bar").classList.add("minimized");
      document.querySelector("#socials").classList.add("minimized");
    }
    else{
      document.querySelector("#nav-bar").classList.remove("minimized");
      document.querySelector("#socials").classList.remove("minimized");
    }
  });
}

var home = document.querySelectorAll('#home');

animate(minimize, home, {threshold: 0.5});

let highlight = (entries) =>{
  entries.forEach((entry) => {
    let inner = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
    let navbar = document.querySelectorAll("#nav-bar > ul > li > a")
  
    for(let i = 0 ; i < navbar.length ; i++){
      if(navbar[i].innerHTML == `${inner}`){
        var activenav = navbar[i]
        break
      }
    }
    if(entry.isIntersecting){
      activenav.classList.add("active")
    }
    else{
      activenav.classList.remove("active")
    }
  });
}

var sections = document.querySelectorAll("section")
// animate(highlight, sections, options);

const progressBar = document.querySelector('.progressBar');
const section = document.querySelector('body');

const scrollProgressBar = () => {
    let scrollDistance = -(section.getBoundingClientRect().top);
    let progressPercentage =
        (scrollDistance /
            (section.getBoundingClientRect().height - 
                document.documentElement.clientHeight)) * 100;

    let val = Math.floor(progressPercentage);
    progressBar.style.width = val + '%';

    if (val < 0) {
        progressBar.style.width = '0%';
    }
};

window.addEventListener('scroll', scrollProgressBar);

function animateBH(){
  let front = document.querySelectorAll("#front-disc > .stripe");
  let back = document.querySelectorAll("#back-disc > .stripe");
  let event = document.querySelectorAll("#singularity > .stripe");
  for(let i = 0 ; i < front.length ; i++){
    front[i].style.animationDelay = `${i * 2}s`;
    back[i].style.animationDelay = `${i * 2}s`;
    event[i].style.animationDelay = `${i * 2}s`;
  }
}