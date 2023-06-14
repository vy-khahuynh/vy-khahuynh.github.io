var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

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
  for(var i = 0 ; i < an.length ; i++){
    observer.observe(an[i]);
  }
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}


// Add reveal on scroll animation
let callback = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('scroll-animation');
    }
    else{
      entry.target.classList.remove('scroll-animation');
    }
  });
};

var animated = document.querySelectorAll('.to-show-on-scroll');

animate(callback, animated, options);


// Minimize footer and header on top
let minimize = (entries) =>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      document.querySelector("#nav-bar > ul").classList.add("minimized_t");
      document.querySelector("#socials").classList.add("inverted");
      document.querySelector("#socials").classList.add("minimized_b");
    }
    else{
      document.querySelector("#nav-bar > ul").classList.remove("minimized_t");
      document.querySelector("#socials").classList.remove("inverted");
      document.querySelector("#socials").classList.remove("minimized_b");
    }
  });
}

var home = document.querySelectorAll('#home');

animate(minimize, home, {threshold: 0.7});

