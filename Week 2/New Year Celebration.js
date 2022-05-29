function runProgram(input) { 
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let op_ele = input[line].split(" ");
        if(op_ele[0] == 1){
            enqueue(+op_ele[1]);
        }else if(op_ele[0] == 2){
            pushOp(+op_ele[1]);
        }else if(op_ele[0] == 3){
            dequeue();
        }else if(op_ele[0] == 4){
            popOp();
        }else{
            jumpOp();
        }
        line++;
    }
}

var stk = [];
var queue = [];

function enqueue(ele){
    queue.push(ele);
}

function dequeue(){
    if(queue.length == 0){
        console.log(-1);
    }else{
        console.log(queue[0]);
    }
}

function pushOp(ele){
    stk.push(ele);
}

function popOp(){
    if(stk.length == 0){
        console.log(-1);
    }else{
        console.log(stk[stk.length-1]);
    }
}

function jumpOp(){
    stk.push(queue[0]);
    queue.shift();
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