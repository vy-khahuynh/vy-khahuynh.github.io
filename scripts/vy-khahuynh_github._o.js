function addStars(){
  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  var cur = document.getElementById('stars-container');
  var num = Math.floor(Math.random() * 75) + 100;
  for(let i = 0 ; i < num ; i++){
    var star = document.createElement('div');
    star.classList.add("star");
    star.style.top = Math.floor(Math.random() * 0.99 * height)+"px";
    star.style.left = Math.floor(Math.random() * 0.99 * window.innerWidth)+"px";
    cur.appendChild(star);
  }
  var bigstars = document.querySelectorAll(".star:nth-child(n)");
  for(let i = 0 ; i < bigstars.length ; i++){
    var delay = Math.floor(Math.random() * 20);
    bigstars[i].style.animation = `glow 5s ease infinite ${delay}s`;
  }
}

function activateSuperlaser(){
  var ds = document.getElementById('death-beam-container');

  var but =  document.getElementById('superlaser');

  ds.classList.toggle('active');
  
  but.disabled = true;

  setTimeout(function(){
    ds.classList.toggle('active');
    but.disabled = false;
  }, 
  7000);
}

addEventListener("load", addStars);
addEventListener("load", introloop);

function scrolltop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let names = ["Vy-Kha Huynh", "a Software Engineer", "a Blackhole fanatic", "a LEGO enthusiast"];

function introloop(){
  var i = 1;
  
  intro(0);
  
  setInterval(function(){
    intro(i);
    i = (i + 1) % names.length;
  }, 15000)
}

function intro(i){
  var cur = document.querySelectorAll('#switch')[0];
  cur.classList.remove('active');
  cur.innerHTML = '';
  for(var j = 0 ; j < names[i].length ; j++){
    var letter = document.createElement('span');
    letter.innerHTML = names[i][j];
    cur.appendChild(letter);
  }
  cur.classList.add('active');
}

// let options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.3
// }

// let callback = (entries) => {
//   entries.forEach((entry) =>{
//   });
// };

// const observer = new IntersectionObserver(callback, options);

