function addStars(){
    var cur = document.getElementById('stars-container');
    var classes = ["small", "medium", "big"];
    var num = Math.floor(Math.random() * 75) + 100;
    for(let i = 0 ; i < num ; i++){
      var star = document.createElement('div');
      star.classList.add("star");
      star.classList.add(classes[Math.floor(Math.random() * classes.length)]);
      star.style.top = Math.floor(Math.random() * 0.99 * window.innerHeight)+"px";
      star.style.left = Math.floor(Math.random() * 0.99 * window.innerWidth)+"px";
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
      for(let i = 0 ; i < sw.length ; i++){
        sw[i].classList.replace('inactive', 'active');
      }
      for(let i = 0 ; i < srs.length; i++){
        srs[i].classList.replace('active', 'inactive');
      }
    }
    else{
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