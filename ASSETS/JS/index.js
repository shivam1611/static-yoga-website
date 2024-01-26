$(document).ready(function(){
  $("#flex-1").click(function(){
    $("#panel-1").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flex-2").click(function(){
    $("#panel-2").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flex-3").click(function(){
    $("#panel-3").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flex-4").click(function(){
    $("#panel-4").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flex-5").click(function(){
    $("#panel-5").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flex-6").click(function(){
    $("#panel-6").slideToggle("slow");
  });
});

$(document).ready(function(){
  $(".bars").click(function(){
    $(".right").toggleClass(".nav-open");
  });
});

var bars = document.getElementById('bars');
var right = document.getElementById('right');

bars.onclick = function(){
  if(right.style.left == "0rem")
  {
    right.style.left = "-200rem"
    bars.style.right = "1.5rem"

  }
  else{
    right.style.left = "0rem";
    bars.style.right = "2rem"

  }
}