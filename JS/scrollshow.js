  window.onscroll = function arrow() {
      if(window.innerWidth  < 740) return;
        if(window.pageYOffset>300){
          document.getElementById('Top').style.display="block";
          document.getElementById('fixed_nav').style.display="block";
        }
        else{
           document.getElementById('Top').style.display="none";
           document.getElementById('fixed_nav').style.display="none";
        }
      }

