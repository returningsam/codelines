
var colors = ["#993240","#9a5726","#94873d","#494c55","#85878b","#537d4b","#3b788f","#494c55","#85878b","#494c55","#85878b","#494c55","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b","#85878b"];



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
  return (Math.floor(Math.random() * ((maxlen-minlen)*10))+(10*minlen)).toString + "px";
}

function makeOp() {
  var operator = document.createElement("div");
  operator.className = " block";
  operator.style.width = "10px";
  operator.style.backgroundColor = colors[0];
  operator.style.marginRight = "10px";
  operator.style.marginLeft = "10px";
  return operator;
}

function makeFuncCallName() {
  var funccallname = document.createElement("div");
  funccallname.className = " block";
  funccallname.style.width = randlen(10,3);
  funccallname.style.backgroundColor = colors[1];
  return funccallname;
}

function makeNum() {
  var num = document.createElement("div");
  num.className = " block";
  num.style.width = randlen(3,1);
  num.style.backgroundColor = colors[1];
  return num;
}

function makeRet() {
  var line = document.createElement("div");
  var ret = document.createElement("div");
  ret.className = " block";
  ret.style.width = "60px";
  ret.style.backgroundColor = colors[5];
  retlist.push(ret);
  var choice1 = randnum(3);
  if (choice1 == 0) {
    retlist.push()
  }
  else if (choice1 == 1) {

  }
  else if (choice1 == 2) {

  }
  return retlist;
}

function makeVar() {
  var variable = document.createElement("div");
  variable.className = " block";
  variable.style.width = randlen(10,3);
  variable.style.backgroundColor = colors[4];
  return variable;
}

function makeStr() {
  var string = document.createElement("div");
  string.className = " block";
  string.style.width = randlen(40,2);
  string.style.backgroundColor = colors[6];
  return string;
}

function makeSmallThing() {
  var oneblock = document.createElement("div");
  oneblock.className = " block";
  oneblock.style.width = "10px";
  oneblock.style.backgroundColor = colors[4];
  return oneblock;
}

function makeFuncCall() {
  var retList = [];
  retlist.push(makeFuncCall());
  retlist.push(makeSmallThing());
  var choice1 = randnum(6);
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
    retlist.push(makeFuncCall());
  }
  retlist.push(makeSmallThing());
  return retlist;
}

function makeline() {
  // line
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = "10px";
  var choice1 = randnum(2);
  if (choice1 === 0) {
    line.appendChild(makeVar());
    var choice2 = randnum(2);
    if (choice2 == 0) {
      // do var.somefunctioncall
      list = makeFuncCall();
      for (var block in list) {
        line.appendChild(block);
      }
    }
    else{
      // do variable = ...
      line.appendChild(makeOp());
      var choice3 = randnum(6)
      if (choice3 == 0) {
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
        line.appendChild(makeFuncCall());
      }
      else if (choice3 == 5) {
        // = variable.functioncall
        line.appendChild(makeVar());
        line.appendChild(makeFuncCall());
      }
    }
  }
  else {
    // do function call
    line.appendChild(makeFuncCall());
  }
  line.appendChild(makeSmallThing());
  return line;
}

function makeIf() {
  var linelist = []
  var line = document.createElement("div");

  // if
  var if_ = document.createElement("div");
  if_.className = " block";
  if_.style.width = "20px";
  if_.style.backgroundColor = colors[5];
  line.appendChild(if_);

  line.appendChild(makeSmallThing());

  var choice1 = randnum(6);

  if (choice1 == 0) {
    // (variable)
    line.appendChild(makeVar());
  }
  else if (choice1 == 1) {
    // (functioncall)
    line.appendChild(makeFuncCall());
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
  line.appendChild(makeSmallThing());
  linelist.push(line);
  for (var i = 0; i < Math.floor(Math.random() * 5) +3; i++) {
    var choice2 = randnum();

    if (choice2 == 0) {
      // just a line
    }
    else if (choice2 == 0) {
      // another if
    }
    else if (choice2 == 0) {
      // for loop
    }
    else if (choice2 == 0) {
      // while loop
    }
    else if (choice2 == 0) {

    }
  }
  var lineend = document.createElement("div");
  lineend.appendChild(makeSmallThing());


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

  // line
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = "10px";

  // funcname
  var funcname = document.createElement("div");
  funcname.className = " block";
  funcname.style.width = Math.floor((Math.random()*20)+2).toString() + "px";
  funcname.style.backgroundColor = colors[2];


  var breakline = document.createElement("div");
  breakline.className += " line";
  var line = document.createElement("div");
  line.className += " line";
  line.style.marginLeft = "10px";
  ///////// Put function text
  var func = document.createElement("div");
  func.className = " block";
  func.style.width = "20px";
  func.style.backgroundColor = colors[5];
  line.appendChild(func);
  ///////// Put function name
  var funcname = document.createElement("div");
  funcname.className = " block";
  funcname.style.width = Math.floor((Math.random()*20)+2).toString() + "px";
  funcname.style.backgroundColor = colors[2];
  line.appendChild(funcname);
  ///////// Put function args
  var fun = document.createElement("div");
  funcarg.className = " block";
  funcarg.style.width = "20px";
  funcarg.style.backgroundColor = colors[2];
  line.appendChild(funcarg);
  for (var i = 0; i < Math.floor(Math.random() * 5) +3; i++) {
    var funcarg = document.createElement("div");
    funcarg.className = " block";
    funcarg.style.width = "20px";
    funcarg.style.backgroundColor = colors[2];
    line.appendChild(funcarg);
  }

}

window.onload = function() {
  for (var i = 0; i < 30; i++) {
    makefunc();
  }
}
