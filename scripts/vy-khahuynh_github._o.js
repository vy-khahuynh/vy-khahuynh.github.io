function addStars(){
  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  const cur = document.getElementById('stars-container');
  const num = Math.floor(Math.random() * 100) + 100;
  for(let i = 0 ; i < num ; i++){
    var star = document.createElement('div');
    star.classList.add("star"); 
    star.style.top = Math.floor(Math.random() * 0.97 * height)+"px";
    star.style.left = Math.floor(Math.random() * 0.97 * window.innerWidth)+"px";
    cur.appendChild(star);
  }
  var bigstars = document.querySelectorAll(".star:nth-child(3n)");
  for(let i = 0 ; i < bigstars.length ; i++){
    var delay = Math.floor(Math.random() * 30);
    bigstars[i].style.animation = `glow 5s ease infinite ${delay}s`;
  }
}

function populate(){
  const names = ["Vy-Kha Huynh", "a Full-Stack Developer", "a Software Engineer", "a Blackhole fanatic", "a LEGO enthusiast"];
  var sw = document.querySelectorAll('#switch')[0];

  for(let i = 0 ; i < names.length ; i++){
    var name = document.createElement('span');
    name.style.animationDelay = `${i * 10}s`;
    for(let j = 0 ; j < names[i].length ; j++){
      var letter = document.createElement('span');
      letter.innerHTML = names[i][j];
      letter.style.animationDelay = `${i * 10}s`;
      name.appendChild(letter);
    }
    sw.appendChild(name);
  }
}

function animateBH(){
  let front = document.querySelectorAll("#front-disc > .stripe");
  let event = document.querySelectorAll("#singularity > .stripe");
  for(let i = 0 ; i < front.length ; i++){
    front[i].style.animationDelay = `${i * 2}s`;
    event[i].style.animationDelay = `${i * 2}s`;
  }
}

function intro(){ 
  addStars();
  populate();
  animateBH();
}

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
      document.querySelector("#nav-bar").classList.add("minimized");
      document.querySelector("#socials").classList.add("minimized");
    }
    else{
      document.querySelector("#nav-bar").classList.remove("minimized");
      document.querySelector("#socials").classList.remove("minimized");
    }
  });
}

animate(minimize, document.querySelectorAll('#home'), options);

const scrollProgressBar = () => {
  const progressBar = document.querySelector('.progressBar');
  const section = document.querySelector('body');
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
window.addEventListener("load", intro);

window.addEventListener('scroll', () => {
  let { scrollY } = window;
  const small = document.querySelectorAll(".star:nth-child(3n)");
  const medium = document.querySelectorAll(".star:nth-child(3n+1)");
  const big = document.querySelectorAll(".star:nth-child(3n+2)");
  for(let i = 0 ; i < small.length ; i++){
    small[i].style.translate = `0px ${-0.1 * scrollY}px`;
  }
  for(let i = 0 ; i < medium.length ; i++){
    medium[i].style.translate = `0px ${-0.2 * scrollY}px`;
  }
  for(let i = 0 ; i < big.length ; i++){
    big[i].style.translate = `0px ${-0.5 * scrollY}px`;
  }
});

window.addEventListener('scroll', () => {
  let homeY = window.scrollY + document.querySelector('#home-anchor').getBoundingClientRect().top // Y
  let aboutY = window.scrollY + document.querySelector('#about-anchor').getBoundingClientRect().top // Y
  let workY = window.scrollY + document.querySelector('#work-anchor').getBoundingClientRect().top // Y
  let projectY = window.scrollY + document.querySelector('#projects-anchor').getBoundingClientRect().top // Y
  let curY = window.scrollY;
  let sections = document.querySelectorAll("#nav-bar > ul > li > a");
  if(curY >= (projectY-10)){
    for(let i = 0 ; i < sections.length ; i++){
      if(sections[i].innerHTML === "Projects"){
        sections[i].classList.add("active");
      }
      else{
        sections[i].classList.remove("active");
      }
    }
  }
  else if(curY >= (workY-10)){
    for(let i = 0 ; i < sections.length ; i++){
      if(sections[i].innerHTML === "Work"){
        sections[i].classList.add("active");
      }
      else{
        sections[i].classList.remove("active");
      }
    }
  }
  else if (curY >= (aboutY-10)){
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