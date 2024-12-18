const isMobile = window.matchMedia('(max-width: 990px)').matches;

function addStars(){
  const cur = document.getElementById('stars-container');
  let numstars = 100;

  if (!isMobile){
    numstars*=2;
  }

  for(let i = 0 ; i < numstars ; i++){
    var star = document.createElement('div');
    star.classList.add("star");
    star.style.top = Math.floor(Math.random() * 0.95 * window.innerHeight)+"px";
    star.style.left = Math.floor(Math.random() * 0.95 * window.innerWidth)+"px";
    star.style.opacity = (Math.random() * 0.8) + 0.2;
    cur.appendChild(star);
  }
  var bigstars = document.querySelectorAll(".star:nth-child(3n)");
  for(let i = 0 ; i < bigstars.length ; i++){
    var delay = Math.floor(Math.random() * 30);
    bigstars[i].style.animation = `glow 10s ease infinite ${delay}s`;
  }
}

function populate(){
  const names = ["Vy-Kha Huynh", "an Aspiring SWE", "a Blackhole Enthusiast", "a LEGO Hobbyist", "a Star Wars Fan"];
  var sw = document.querySelector('#switch');

  for(let i = 0 ; i < names.length ; i++){
    var name = document.createElement('span');
    name.style.animationDelay = `${i * 10}s`;
    for(let j = 0 ; j < names[i].length ; j++){
      var letter = document.createElement('span');
      letter.classList.add('letter');
      letter.innerHTML = names[i][j];
      letter.style.animationDelay = `${i * 10}s`;
      name.appendChild(letter);
    }
    sw.appendChild(name);
  }
}

function animateBH(){
  let eventhorizon = document.querySelector("#event-horizon");
  let accretiondisc = document.querySelector("#accretion-disc");
  for(let i = 0 ; i < 10 ; i++){
    var stripe = document.createElement('span');
    stripe.classList.add("stripe", "blackhole");
    stripe.style.animationDelay = `${(i)}s`;
    eventhorizon.appendChild(stripe);
  }

  for(let i = 0 ; i < 10 ; i++){
    var stripe = document.createElement('span');
    stripe.classList.add("stripe", "blackhole");
    stripe.style.animationDelay = `${(i)}s`;
    accretiondisc.appendChild(stripe);
  }
}

function intro(){
  addStars();
  animateBH();
  populate();
}

window.addEventListener("load", intro);

function animate(cb, an, op){
  const observer = new IntersectionObserver(cb, op);
  for(let i = 0 ; i < an.length ; i++){
    observer.observe(an[i]);
  }
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
}

// Minimize footer and header on top
let minimize = (entries) =>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      document.querySelector("header").classList.add("minimized");
      document.querySelector("#socials").classList.add("minimized");
    }
    else{
      document.querySelector("header").classList.remove("minimized");
      document.querySelector("#socials").classList.remove("minimized");
    }
  });
}

animate(minimize, document.querySelectorAll('#home'), options);

animate((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      document.querySelector("main").style.background = 'rgba(0, 0, 0, 0)';
    }
    else{
      document.querySelector("main").style.background = 'rgba(0, 0, 0, 0.5)';
    }
  })
}, document.querySelectorAll('#home'), options)

window.addEventListener('scroll', () => {
  let aboutY = window.scrollY + document.querySelector('#about-anchor').getBoundingClientRect().top // Y
  let workY = window.scrollY + document.querySelector('#work-anchor').getBoundingClientRect().top // Y
  let projectY = window.scrollY + document.querySelector('#projects-anchor').getBoundingClientRect().top // Y
  let curY = window.scrollY;
  let sections = document.querySelectorAll("#nav-bar > ul > li > a");
  if(curY >= (projectY-0.2*window.innerHeight)){
    for(let i = 0 ; i < sections.length ; i++){
      if(sections[i].innerHTML === "Projects"){
        sections[i].classList.add("active");
      }
      else{
        sections[i].classList.remove("active");
      }
    }
  }
  else if(curY >= (workY-0.2*window.innerHeight)){
    for(let i = 0 ; i < sections.length ; i++){
      if(sections[i].innerHTML === "Work"){
        sections[i].classList.add("active");
      }
      else{
        sections[i].classList.remove("active");
      }
    }
  }
  else if (curY >= (aboutY-0.2*window.innerHeight)){
    for(let i = 0 ; i < sections.length ; i++){
      if(sections[i].innerHTML === "About"){
        sections[i].classList.add("active");
      }
      else{
        sections[i].classList.remove("active");
      }
    }
  }
  else{
    for(let i = 0 ; i < sections.length ; i++){
      if(sections[i].innerHTML === "Home"){
        sections[i].classList.add("active");
      }
      else{
        sections[i].classList.remove("active");
      }
    }
  }
});