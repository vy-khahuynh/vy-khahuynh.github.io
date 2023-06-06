var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

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
addEventListener("load", intro);

function scrolltop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let names = ["Vy-Kha Huynh", "a Full-Stack Developer", "a Software Engineer", "a Blackhole fanatic", "a LEGO enthusiast"];

function intro(){
  populate();
  animateNext(1);
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

// function animateNext(i){
//   var cur = document.querySelector('#switch');
//   var child = document.querySelector(`#switch > span:nth-child(${i})`);
  
//   child.classList.add('active');
  
//   child.addEventListener('animationend', () => {
//     child.classList.remove('active');
//     if(i==cur.children.length){
//       i = 0;
//       // alert("done");
//     }
//     else{
//       animateNext(i+1);
//     }
//   });
// }

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

