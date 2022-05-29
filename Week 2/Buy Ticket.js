function runProgram(input) { 
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    queue = [];
    for(let i=0; i<tc; i++){
        let op_ele = input[line].split(" ");
        if(op_ele[0] == 'E'){
            enqueue(+op_ele[1]);
        }else{
            dequeue();
        }
        line++;
    }
}

var queue = [];

function enqueue(ele){
    queue.push(ele);
    console.log(queue.length)
}

function dequeue(){
    if(queue.length == 0){
        console.log(-1, queue.length);
    }else{
        console.log(queue.shift(), queue.length);
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