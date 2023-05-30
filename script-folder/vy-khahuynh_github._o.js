function addStars(){
    var cur = document.getElementById('sky');
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
    var fun = document.querySelectorAll(".fun");
    var srs = document.querySelectorAll(".serious");
    
    if(mode.checked){
      for(let i = 0 ; i < fun.length ; i++){
        fun[i].classList.replace('inactive', 'active');
      }
      for(let i = 0 ; i < srs.length; i++){
        srs[i].classList.replace('active', 'inactive');
      }
    }
    else{
      for(let i = 0 ; i < fun.length ; i++){
        fun[i].classList.replace('active', 'inactive');
      }
      for(let i = 0 ; i < srs.length; i++){
        srs[i].classList.replace('inactive', 'active');
      }
    }
  }

  function activateSuperlaser(){
    var ds = document.getElementById('death-beam-container');
    ds.classList.toggle('active');

    setTimeout(function(){
      ds.classList.toggle('active');
    }, 
    7000);
  }