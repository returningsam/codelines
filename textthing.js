
var colors = ["#993240", "#9a5726", "#94873d", "#494c55", "#85878b", "#537d4b", "#3b788f"];

var space = 10;
var indent = 3 * space;

var curvar = 1;
var curfunc = 1;



function randomchar() {
  var x = 33;
  var y = 127;
  var r = Math.floor(Math.random() * ((y - x) + 1) + x);
  return String.fromCharCode(r);
}

function randboolconst(){
  return Math.random()<.5;
};

function randbool(prob){
      return Math.random()<prob;
};

function randnum(num){
  return Math.floor((Math.random() * (num))-0.0001);
};

function randlen(maxlen, minlen) {
  return (Math.floor(Math.random() * (maxlen-(minlen))*space)+(space*minlen)).toString() + "px";
}

// returns a block
function makeEq() {
  var eq = document.createElement("p");
  eq.className = " textblock";
  eq.innerHTML = " = ";
  eq.style.color = colors[0];
  return eq;
}

// returns a block
function makeDiffEq() {
  var oplist = [" >= ", " <= ", " > ", " < "];
  var diffeq = document.createElement("p");
  diffeq.className = " textblock";
  diffeq.innerHTML = oplist[Math.floor(Math.random() * oplist.length)];
  diffeq.style.color = colors[0];
  return diffeq;
}

// returns a block
function makeOp() {
  var oplist = [" + ", " - ", " / ", " * "];
  var op = document.createElement("p");
  op.className = " textblock";
  op.innerHTML = oplist[Math.floor(Math.random() * oplist.length)];
  op.style.color = colors[0];
  return op;
}

// returns a block
function makeLogOp() {
  var oplist = [" && ", " || "];
  var logop = document.createElement("p");
  logop.className = " textblock";
  logop.innerHTML = oplist[Math.floor(Math.random() * oplist.length)];
  logop.style.color = colors[0];
  return logop;
}

// returns a block
function makeIncOp() {
  var oplist = [" -- ", " ++ "];
  var incop = document.createElement("p");
  incop.className = " textblock";
  incop.innerHTML = oplist[Math.floor(Math.random() * oplist.length)];
  incop.style.color = colors[0];
  return incop;
}

// returns a block
function makeIn() {
  var in_ = document.createElement("p");
  in_.className = " textblock";
  in_.innerHTML = " in ";
  in_.style.color = colors[0];
  return operator;
}

// returns a block
function makeFuncCallName() {
  var funccallname = document.createElement("p");
  funccallname.className = " textblock";
  funccallname.innerHTML = "function" + Math.floor(Math.random() * curfunc).toString();
  funccallname.style.color = colors[2];
  return funccallname;
}

// returns a block
function makeNum() {
  var num = document.createElement("div");
  num.className = " textblock";
  num.style.width = Math.floor(Math.random() * 100).toString();
  num.style.backgroundColor = colors[1];
  return num;
}

// returns a block
function makeVarIndicator() {
  var num = document.createElement("div");
  num.className = " textblock";
  num.style.width = (space*3).toString() + "px";
  num.style.backgroundColor = colors[0];
  return num;
}

// returns a line
function makeRet(prevIndent) {
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = (prevIndent + indent).toString() + "px";
  var ret = document.createElement("div");
  ret.className = " textblock";
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
  variable.className = " textblock";
  variable.style.width = randlen(20,3);
  variable.style.backgroundColor = colors[4];
  return variable;
}

// returns a block
function makeStr() {
  var string = document.createElement("div");
  string.className = " textblock";
  string.style.width = randlen(20,2);
  string.style.backgroundColor = colors[6];
  return string;
}

// returns a block
function makeSmallThing() {
  var oneblock = document.createElement("div");
  oneblock.className = " textblock";
  oneblock.style.width = space.toString() + "px";
  oneblock.style.backgroundColor = colors[4];
  return oneblock;
}

// returns a block
function makeSpace() {
  var oneblock = document.createElement("div");
  oneblock.className = " textblock";
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
    retlist.push(makeVar());
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
function makelinebreak() {
  // line
  var line = document.createElement("div");
  line.className += " line";
  return line;
}

// returns a line
function makeline(prevIndent) {
  // line
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = (prevIndent + indent).toString() + "px";
  var choice1 = randnum(2);

  if (choice1 === 0) {
    if (randboolconst()) {
      line.appendChild(makeVarIndicator());
      line.appendChild(makeSpace());
    }
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
  if_.className = " textblock";
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
    var choice2 = randnum(8);

    if (choice2 == 0 || choice2 == 1 || choice2 == 2 || choice2 == 3) {
      // just a line
      linelist.push(makeline(prevIndent + indent));
    }
    else if (choice2 == 4) {
      // another if
      if (randboolconst()) {
        linelist2 = makeIf(prevIndent + indent);
        for (var i = 0; i < linelist2.length; i++) {
          linelist.push(linelist2[i]);
        }
      }
    }
    else if (choice2 == 5) {
      // for loop
      linelist2 = makefor(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 6) {
      // while loop
      linelist2 = makewhile(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 7) {
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
  if (randbool(0.3)) {
    var linelist2 = makeElseIf(prevIndent);
    for (var i = 0; i < linelist2.length; i++) {
      linelist.push(linelist2[i]);
    }
  }
  if (randbool(0.3)) {
    var linelist2 = makeElse(prevIndent);
    for (var i = 0; i < linelist2.length; i++) {
      linelist.push(linelist2[i]);
    }
  }
  linelist.push(makelinebreak());
  return linelist;

}

function makeElseIf(prevIndent) {
  var linelist = []
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = (prevIndent + indent).toString() + "px";

  // if
  var else_ = document.createElement("div");
  else_.className = " textblock";
  else_.style.width = (space*4).toString() + "px";
  else_.style.backgroundColor = colors[5];
  line.appendChild(else_);
  line.appendChild(makeSpace());
  // if
  var if_ = document.createElement("div");
  if_.className = " textblock";
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

  // Inside else if

  for (var i = 0; i < randnum(10) +1; i++) {
    var choice2 = randnum(8);

    if (choice2 == 0 || choice2 == 1 || choice2 == 2 || choice2 == 3) {
      // just a line
      linelist.push(makeline(prevIndent + indent));
    }
    else if (choice2 == 4) {
      // another if
      if (randboolconst()) {
        linelist2 = makeIf(prevIndent + indent);
        for (var i = 0; i < linelist2.length; i++) {
          linelist.push(linelist2[i]);
        }
      }
    }
    else if (choice2 == 5) {
      // for loop
      linelist2 = makefor(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 6) {
      // while loop
      linelist2 = makewhile(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 7) {
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
  if (randbool(0.2)) {
    var linelist2 = makeElseIf(prevIndent);
    for (var i = 0; i < linelist2.length; i++) {
      linelist.push(linelist2[i]);
    }
  }
  return linelist;

}

function makeElse(prevIndent) {
  var linelist = []
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = (prevIndent + indent).toString() + "px";

  // else
  var else_ = document.createElement("div");
  else_.className = " textblock";
  else_.style.width = (space*4).toString() + "px";
  else_.style.backgroundColor = colors[5];
  line.appendChild(else_);
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

  // Inside else

  for (var i = 0; i < randnum(10) +1; i++) {
    var choice2 = randnum(8);

    if (choice2 == 0 || choice2 == 1 || choice2 == 2 || choice2 == 3) {
      // just a line
      linelist.push(makeline(prevIndent + indent));
    }
    else if (choice2 == 4) {
      // another if
      if (randboolconst()) {
        linelist2 = makeIf(prevIndent + indent);
        for (var i = 0; i < linelist2.length; i++) {
          linelist.push(linelist2[i]);
        }
      }
    }
    else if (choice2 == 5) {
      // for loop
      linelist2 = makefor(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 6) {
      // while loop
      linelist2 = makewhile(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 7) {
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
  if (randbool(0.2)) {
    var linelist2 = makeElseIf(prevIndent);
    for (var i = 0; i < linelist2.length; i++) {
      linelist.push(linelist2[i]);
    }
  }
  return linelist;

}

function makefor(prevIndent) {
  var linelist = []
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = (prevIndent + indent).toString() + "px";

  // for
  var for_ = document.createElement("div");
  for_.className = " textblock";
  for_.style.width = (space*3).toString() + "px";
  for_.style.backgroundColor = colors[5];
  line.appendChild(for_);
  line.appendChild(makeSpace());

  line.appendChild(makeSmallThing());

  var choice1 = randnum(2);

  if (choice1 == 0) {
    // for each
    line.appendChild(makeVarIndicator());
    line.appendChild(makeSpace());
    line.appendChild(makeVar());
    line.appendChild(makeSpace());
    line.appendChild(makeIn());
    line.appendChild(makeSpace());
    line.appendChild(makeVar());
  }
  else if (choice1 == 1) {
    // for i
    line.appendChild(makeVarIndicator());
    line.appendChild(makeSpace());
    line.appendChild(makeSmallThing());
    line.appendChild(makeOp());
    line.appendChild(makeNum());
    line.appendChild(makeSmallThing());
    line.appendChild(makeSpace());
    line.appendChild(makeSmallThing());
    line.appendChild(makeOp());
    line.appendChild(makeVar());
    line.appendChild(makeSmallThing());
    line.appendChild(makeSpace());
    line.appendChild(makeSmallThing());
    line.appendChild(makeIn());
  }
  line.appendChild(makeSmallThing());
  line.appendChild(makeSpace());
  line.appendChild(makeSmallThing());
  linelist.push(line);

  // Inside for loop

  for (var i = 0; i < randnum(10) +1; i++) {
    var choice2 = randnum(8);

    if (choice2 == 0 || choice2 == 1 || choice2 == 2 || choice2 == 3) {
      // just a line
      linelist.push(makeline(prevIndent + indent));
    }
    else if (choice2 == 4) {
      // another if
      if (randboolconst()) {
        linelist2 = makeIf(prevIndent + indent);
        for (var i = 0; i < linelist2.length; i++) {
          linelist.push(linelist2[i]);
        }
      }
    }
    else if (choice2 == 5) {
      // for loop
      linelist2 = makefor(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 6) {
      // while loop
      linelist2 = makewhile(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 7) {
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
  return linelist
}

function makewhile(prevIndent) {
  var linelist = []
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = (prevIndent + indent).toString() + "px";

  // while
  var for_ = document.createElement("div");
  for_.className = " textblock";
  for_.style.width = (space*5).toString() + "px";
  for_.style.backgroundColor = colors[5];
  line.appendChild(for_);
  line.appendChild(makeSpace());

  line.appendChild(makeSmallThing());

  var choice1 = randnum(7);

  if (choice1 == 0) {
    // while var
    line.appendChild(makeVar());
  }
  else if (choice1 == 1) {
    // while var op var
    line.appendChild(makeVar());
    line.appendChild(makeOp());
    line.appendChild(makeVar());
  }
  else if (choice1 == 2) {
    // while var op int
    line.appendChild(makeVar());
    line.appendChild(makeOp());
    line.appendChild(makeNum());
  }
  else if (choice1 == 3) {
    // while int op var
    line.appendChild(makeNum());
    line.appendChild(makeOp());
    line.appendChild(makeVar());
  }
  else if (choice1 == 4) {
    // while var op string
    line.appendChild(makeVar());
    line.appendChild(makeOp());
    line.appendChild(makeStr());
  }
  else if (choice1 == 5) {
    // while string op var
    line.appendChild(makeStr());
    line.appendChild(makeOp());
    line.appendChild(makeVar());
  }
  else if (choice1 == 6) {
    // while functioncall
    var blocklist = makeFuncCall();
    for (var i = 0; i < blocklist.length; i++) {
      line.appendChild(blocklist[i]);
    }
  }
  line.appendChild(makeSmallThing());
  line.appendChild(makeSpace());
  line.appendChild(makeSmallThing());
  linelist.push(line);

  // Inside while loop

  for (var i = 0; i < randnum(10) +1; i++) {
    var choice2 = randnum(8);

    if (choice2 == 0 || choice2 == 1 || choice2 == 2 || choice2 == 3) {
      // just a line
      linelist.push(makeline(prevIndent + indent));
    }
    else if (choice2 == 4) {
      // another if
      if (randboolconst()) {
        linelist2 = makeIf(prevIndent + indent);
        for (var i = 0; i < linelist2.length; i++) {
          linelist.push(linelist2[i]);
        }
      }
    }
    else if (choice2 == 5) {
      // for loop
      linelist2 = makefor(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 6) {
      // while loop
      linelist2 = makewhile(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 7) {
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
  return linelist
}

function makefunc(prevIndent) {
  var linelist = []
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = (prevIndent + indent).toString() + "px";

  // function
  var fucntion_ = document.createElement("div");
  fucntion_.className = " textblock";
  fucntion_.style.width = (space*8).toString() + "px";
  fucntion_.style.backgroundColor = colors[5];
  line.appendChild(fucntion_);

  line.appendChild(makeSpace());

  // functionname
  var functionname = document.createElement("div");
  functionname.className = " textblock";
  functionname.style.width = randlen(10,3);
  functionname.style.backgroundColor = colors[2];
  line.appendChild(functionname);


  line.appendChild(makeSmallThing());

  if (randboolconst()) {
    line.appendChild(makeVar());
    if (randboolconst()) {
      line.appendChild(makeSpace());
      line.appendChild(makeVar());
      if (randboolconst()) {
        line.appendChild(makeSpace());
        line.appendChild(makeVar());
        if (randboolconst()) {
          line.appendChild(makeSpace());
          line.appendChild(makeVar());
        }
      }
    }
  }

  line.appendChild(makeSmallThing());
  line.appendChild(makeSpace());
  line.appendChild(makeSmallThing());
  linelist.push(line);

  // Inside function

  for (var i = 0; i < randnum(10) +1; i++) {
    var choice2 = randnum(8);

    if (choice2 == 0 || choice2 == 1 || choice2 == 2 || choice2 == 3) {
      // just a line
      linelist.push(makeline(prevIndent + indent));
    }
    else if (choice2 == 4) {
      // another if
      if (randboolconst()) {
        linelist2 = makeIf(prevIndent + indent);
        for (var i = 0; i < linelist2.length; i++) {
          linelist.push(linelist2[i]);
        }
      }
    }
    else if (choice2 == 5) {
      // for loop
      linelist2 = makefor(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 6) {
      // while loop
      linelist2 = makewhile(prevIndent + indent);
      for (var i = 0; i < linelist2.length; i++) {
        linelist.push(linelist2[i]);
      }
    }
    else if (choice2 == 7) {
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
  linelist.push(makelinebreak());
  if (randboolconst()) {
    linelist.push(makelinebreak());
  }
  for (var i = 0; i < linelist.length; i++) {
    document.getElementById("container").appendChild(linelist[i]);
  }
}

window.onload = function() {
  for (var i = 0; i < 100; i++) {
    makefunc(-20);
  }
}
