function runProgram(input) {
    input = input.split("\n");
    let size = +input[0];
    let line = 1;
    for(let i=0; i<size; i++){
        let brac = input[line].split("");
        stk = [];
        isBalance(brac);
        line++;
    }
}

var stk = [];

function isBalance(brac){
    for(let i=0; i<brac.length; i++){
        if(brac[i] === '{' ||
        brac[i] === '[' ||
        brac[i] === '('){
            pushOp(brac[i]);
        }else if(brac[i] === '}'){
            if(stk[stk.length-1] === '{'){
                popOp();
            }else{
                pushOp(brac[i]);
            }
        }else if(brac[i] === ']'){
            if(stk[stk.length-1] === '['){
                popOp();
            }else{
                pushOp(brac[i]);
            }
        }else if(brac[i] === ')'){
            if(stk[stk.length-1] === '('){
                popOp();
            }else{
                pushOp(brac[i]);
            }
        }
    }
    if(stk.length === 0){
        console.log("balanced");
    }else{
        console.log("not balanced");
    }
}

function pushOp(ele){
    stk.push(ele)
}

function popOp(ele){
    if(stk.length === 0){
        return false;
    }else{
        stk.pop();
    }
}

if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }