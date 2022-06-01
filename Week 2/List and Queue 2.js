function runProgram(input) { 
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let op_ele = input[line].split(" ");
        if(op_ele[0] == 'Push'){
            // console.log("...");
            pushOp(+op_ele[1]);
        }else{
            popOp();
        }
        line++;
    }
}

let stk = [];

function pushOp(ele){
    stk.push(ele);
}

function popOp(){
    if(stk.length == 0){
        console.log("Empty");
    }else{
        console.log(stk.pop());
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