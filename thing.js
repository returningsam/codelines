var colors = ["#993240","#9a5726","#94873d","#494c55","#85878b","#537d4b","#494c55","#85878b","#494c55","#85878b","#494c55","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b"];
function randbool(prob){
      return Math.random()<prob; // Readable, succint
};

function randboolconst(){
      return Math.random()<0.5; // Readable, succint
};

function makeblock() {
  var block = document.createElement("div");
  block.className = " block";
  block.style.width = Math.floor((Math.random()*200)+20).toString() + "px";
  if (randboolconst()) {
    block.style.marginRight = "3px";
  }
  block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  return block
}

var filledheight = 0;
function dothathing(previndent, prevprob, depth, prevperline) {
  var perline = prevperline - 2;
  var prob = prevprob-0.15;
  var indent = previndent+50
  if (randbool(prob)) {
    for (var i = 0; i < Math.floor(Math.random() * perline) +3; i++) {
      var line2 = document.createElement("div");
      document.getElementById("container").appendChild(line2);
      line2.className += " line";
      line2.style.marginLeft = indent.toString() + "px";
      for (var i = 0; i < Math.floor(Math.random() * 5) +3; i++) {

        line2.appendChild(makeblock());
      }
      console.log(depth);
      if (depth < 5) {
        dothathing(indent, prob, depth+1, perline);
      }
      else{
        filledheight += depth * 5;
      }

    }
  }
}

window.onload = function() {
  var breakline = document.createElement("div");
  breakline.className += " line";
  document.getElementById("container").appendChild(breakline);
  var wheight = 1000;//document.getElementById('container').clientHeight;

  while (filledheight < wheight) {
    dothathing(-40,1.2, 0, 15);
    console.log("fuck");

    var breakline = document.createElement("div");
    breakline.className += " line";
    document.getElementById("container").appendChild(breakline);
    if (randboolconst()) {
      var breakline = document.createElement("div");
      breakline.className += " line";
      document.getElementById("container").appendChild(breakline);
      if (randboolconst()) {
        var breakline = document.createElement("div");
        breakline.className += " line";
        document.getElementById("container").appendChild(breakline);
      }
    }


  }
}
