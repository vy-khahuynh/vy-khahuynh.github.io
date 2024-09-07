function addStars(){
  const cur = document.getElementById('stars-container');

  let initial = 50;
  let add = 10;
  const numstars = Math.floor(Math.random() * add) + initial;

  for(let i = 0 ; i < numstars ; i++){
    var star = document.createElement('div');
    star.classList.add("star");
    star.style.top = Math.floor(Math.random() * 0.95 * window.innerHeight)+"px";
    star.style.left = Math.floor(Math.random() * 0.95 * window.innerWidth)+"px";
    star.style.opacity = (Math.random() * 0.9) + 0.1
    cur.appendChild(star);
  }
  var bigstars = document.querySelectorAll(".star:nth-child(3n)");
  for(let i = 0 ; i < bigstars.length ; i++){
    var delay = Math.floor(Math.random() * 30);
    bigstars[i].style.animation = `glow 10s ease infinite ${delay}s`;
  }
}

function addSuperLaser(){
  var ds = document.getElementById('death-beam-container');
  for(let i = 0 ; i < 9 ; i++){
    let deathBeam = document.createElement('span');
    deathBeam.classList.add("death-beam");
    ds.appendChild(deathBeam);
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

addEventListener("load", addSuperLaser);

addEventListener("load", addStars);