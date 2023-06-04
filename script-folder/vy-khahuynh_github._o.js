function addStars(){
  const body = document.body;
const html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);
    var cur = document.getElementById('stars-container');
    var num = Math.floor(Math.random() * 75) + 100;
    for(let i = 0 ; i < num ; i++){
      var star = document.createElement('div');
      star.classList.add("star");
      star.style.top = Math.floor(Math.random() * height)+"px";
      star.style.left = Math.floor(Math.random() * window.innerWidth)+"px";
      cur.appendChild(star);
    }
    var bigstars = document.getElementsByClassName("big");
    for(let i = 0 ; i < 15 ; i++){
      var delay = Math.floor(Math.random() * 20);
      bigstars[i].style.animation = `glow 5s ease infinite ${delay}s`;
    }
  }
  
  function switchMode(){
    var mode = document.getElementsByName('mode')[0];
    var sw = document.querySelectorAll(".sw");
    var srs = document.querySelectorAll(".srs");
    
    if(mode.checked){
      const html = document.documentElement.style.overflowY="hidden";
      for(let i = 0 ; i < sw.length ; i++){
        sw[i].classList.replace('inactive', 'active');
      }
      for(let i = 0 ; i < srs.length; i++){
        srs[i].classList.replace('active', 'inactive');
      }
    }
    else{
      const html = document.documentElement.style.overflowY="auto";
      for(let i = 0 ; i < sw.length ; i++){
        sw[i].classList.replace('active', 'inactive');
      }
      for(let i = 0 ; i < srs.length; i++){
        srs[i].classList.replace('inactive', 'active');
      }
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
