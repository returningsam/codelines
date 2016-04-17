
var colors = ["#993240","#9a5726","#94873d","#494c55","#85878b","#537d4b","#3b788f","#494c55","#85878b","#494c55","#85878b","#494c55","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b"];

var bgColor = "#1b1c20"

var space = 10;
var indent = 3 * space;

function randboolconst(){
  return Math.random()<.5; // Readable, succint
};

function randbool(prob){
      return Math.random()<prob; // Readable, succint
};

function randnum(num){
  return Math.floor((Math.random() * (num))-0.0001);
};

function randlen(maxlen, minlen) {
  return (Math.floor(Math.random() * (maxlen-(minlen))*space)+(space*minlen)).toString() + "px";
}

// returns a block
function makeOp() {
  var operator = document.createElement("div");
  operator.className = " block";
  operator.style.width = space.toString() + "px";
  operator.style.backgroundColor = colors[0];
  operator.style.marginRight = space.toString() + "px";
  operator.style.marginLeft = space.toString() + "px";
  return operator;
}

// returns a block
function makeFuncCallName() {
  var funccallname = document.createElement("div");
  funccallname.className = " block";
  funccallname.style.width = randlen(20,3);
  funccallname.style.backgroundColor = colors[2];
  return funccallname;
}

// returns a block
function makeNum() {
  var num = document.createElement("div");
  num.className = " block";
  num.style.width = randlen(10,1);
  num.style.backgroundColor = colors[1];
  return num;
}

// returns a line
function makeRet(prevIndent) {
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = (prevIndent + indent).toString() + "px";
  var ret = document.createElement("div");
  ret.className = " block";
  ret.style.width = "60px";
  ret.style.backgroundColor = colors[5];
  line.appendChild(ret);
  line.appendChild(makeSpace());
  var choice1 = randnum(7);
  if (choice1 == 0) {
    // variable
    line.appendChild(makeVar());
  }
  else if (choice1 == 1) {
    // number
    line.appendChild(makeNum());
  }
  else if (choice1 == 2) {
    // string
    line.appendChild(makeStr());
  }
  else if (choice1 == 3) {
    // functioncall
    blocklist = makeFuncCall();
    for (var i = 0; i < blocklist.length; i++) {
      line.appendChild(blocklist[i]);
    }
  }
  else if (choice1 == 4) {
    // variable op variable
    line.appendChild(makeVar());
    line.appendChild(makeOp());
    line.appendChild(makeVar());
  }
  else if (choice1 == 5) {
    // num op num
    line.appendChild(makeNum());
    line.appendChild(makeOp());
    line.appendChild(makeNum());
  }
  else if (choice1 == 6) {
    // string op string
    line.appendChild(makeStr());
    line.appendChild(makeOp());
    line.appendChild(makeStr());
  }
  line.appendChild(makeSmallThing());
  return line;
}

// returns a block
function makeVar() {
  var variable = document.createElement("div");
  variable.className = " block";
  variable.style.width = randlen(20,3);
  variable.style.backgroundColor = colors[4];
  return variable;
}

// returns a block
function makeStr() {
  var string = document.createElement("div");
  string.className = " block";
  string.style.width = randlen(20,2);
  string.style.backgroundColor = colors[6];
  return string;
}

// returns a block
function makeSmallThing() {
  var oneblock = document.createElement("div");
  oneblock.className = " block";
  oneblock.style.width = space.toString() + "px";
  oneblock.style.backgroundColor = colors[4];
  return oneblock;
}

// returns a block
function makeSpace() {
  var oneblock = document.createElement("div");
  oneblock.className = " block";
  oneblock.style.width = space.toString() + "px";
  oneblock.style.backgroundColor = bgColor;
  return oneblock;
}

// returns a list of blocks
function makeFuncCall() {
  var retlist = [];
  retlist.push(makeFuncCallName());
  retlist.push(makeSmallThing());
  var choice1 = randnum(6);
  if (choice1 != 0) {
    retlist.push(makeSpace());
  }
  if (choice1 == 1) {
    // (variable)
    retlist.push(makeSpace());
    retlist.push(makeVar());
    retlist.push(makeSpace());
  }
  else if (choice1 == 2) {
    // (string)
    retlist.push(makeStr());
  }
  else if (choice1 == 3) {
    // (number)
    retlist.push(makeNum());
  }
  else if (choice1 == 4) {
    // (number op number)
    retlist.push(makeNum());
    retlist.push(makeOp());
    retlist.push(makeNum());
  }
  else if (choice1 == 5) {
    // (functioncall)
    var blocklist = makeFuncCall();
    for (var i = 0; i < blocklist.length; i++) {
      retlist.push(blocklist[i]);
    }
  }
  if (choice1 != 0) {
    retlist.push(makeSpace());
  }
  retlist.push(makeSmallThing());
  return retlist;
}

// returns a line
function makeline(prevIndent) {
  // line
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = (prevIndent + indent).toString() + "px";
  var choice1 = randnum(2);

  if (choice1 === 0) {
    line.appendChild(makeVar());
    var choice2 = randnum(2);
    if (choice2 === 0) {
      // do var.somefunctioncall
      var blocklist = makeFuncCall();
      for (var i = 0; i < blocklist.length; i++) {
        line.appendChild(blocklist[i]);
      }
    }
    else{
      // do variable = ...
      line.appendChild(makeOp());
      var choice3 = randnum(6);
      if (choice3 === 0) {
        // = just a number
        line.appendChild(makeNum());
      }
      else if (choice3 == 1) {
        // = just a string
        line.appendChild(makeStr());
      }
      else if (choice3 == 2) {
        // = number op number
        line.appendChild(makeNum());
        line.appendChild(makeOp());
        line.appendChild(makeNum());
      }
      else if (choice3 == 3) {
        // = just a variable
        line.appendChild(makeVar());
      }
      else if (choice3 == 4) {
        // = just a function call
        var blocklist = makeFuncCall();
        for (var i = 0; i < blocklist.length; i++) {
          line.appendChild(blocklist[i]);
        }
      }
      else if (choice3 == 5) {
        // = variable.functioncall
        line.appendChild(makeVar());
        var blocklist = makeFuncCall();
        for (var i = 0; i < blocklist.length; i++) {
          line.appendChild(blocklist[i]);
        }
      }
    }
  }
  else {
    // do function call
    var blocklist = makeFuncCall();
    for (var i = 0; i < blocklist.length; i++) {
      line.appendChild(blocklist[i]);
    }
  }
  line.appendChild(makeSmallThing());
  return line;
}

// returns a list of lines
function makeIf(prevIndent) {
  var linelist = []
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = (prevIndent + indent).toString() + "px";
  // if
  var if_ = document.createElement("div");
  if_.className = " block";
  if_.style.width = (space*2).toString() + "px";
  if_.style.backgroundColor = colors[5];
  line.appendChild(if_);
  line.appendChild(makeSpace());
  line.appendChild(makeSmallThing());

  var choice1 = randnum(6);

  if (choice1 == 0) {
    // (variable)
    line.appendChild(makeVar());
  }
  else if (choice1 == 1) {
    // (functioncall)
    blocklist = makeFuncCall();
    for (var i = 0; i < blocklist.length; i++) {
      line.appendChild(blocklist[i]);
    }
  }
  else if (choice1 == 2) {
    // (var op num)
    line.appendChild(makeVar());
    line.appendChild(makeOp());
    line.appendChild(makeNum());
  }
  else if (choice1 == 3) {
    // (num op var)
    line.appendChild(makeNum());
    line.appendChild(makeOp());
    line.appendChild(makeVar());
  }
  else if (choice1 == 4) {
    // (str op var)
    line.appendChild(makeStr());
    line.appendChild(makeOp());
    line.appendChild(makeVar());
  }
  else {
    // (var op str)
    line.appendChild(makeVar());
    line.appendChild(makeOp());
    line.appendChild(makeStr());
  }

  line.appendChild(makeSmallThing());
  line.appendChild(makeSpace());
  line.appendChild(makeSmallThing());
  linelist.push(line);

  // Inside if

  for (var i = 0; i < randnum(10) +1; i++) {
    var choice2 = randnum(3);
    console.log("got here");
    if (choice2 == 0) {
      // just a line
      linelist.push(makeline(prevIndent + indent));
    }
    else if (choice2 == 1) {
      // another if
      linelist2 = makeIf(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 6) {
      // for loop
      linelist = makefor(prevIndent + indent);
      for (var line in linelist) {
        linelist.push(line);
      }
    }
    else if (choice2 == 6) {
      // while loop
      linelist = makewhile(prevIndent + indent);
      for (var i = 0; i < linelist.length; i++) {
        linelist.push(linelist[i]);
      }
    }
    else if (choice2 == 2) {
      // return
      linelist.push(makeRet(prevIndent + indent));
      break;
    }
  }


  var lineend = document.createElement("div");
  lineend.className += " line";
  lineend.style.marginLeft = (prevIndent + indent).toString() + "px";
  lineend.appendChild(makeSmallThing());
  linelist.push(lineend);
  return linelist;

}

function makeElseIf() {

}

function makeElse() {

}

function makefor() {



  for (var variable in object) {

  }
}

function makewhile() {

}

function makefunc() {
  linelist = makeIf(5);
  for (var i = 0; i < linelist.length; i++) {
    document.getElementById("container").appendChild(linelist[i]);
  }
}

window.onload = function() {
  for (var i = 0; i < 100; i++) {
    makefunc();
  }
}
