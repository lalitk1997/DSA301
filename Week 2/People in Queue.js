function runProgram(input) { 
    input = input.split("\n");
    let size_tc = input[0].split(" ").map(Number);
    let size = size_tc[0];
    let tc = size_tc[1];
    let line = 1;
    // console.log(size, tc);
    for(let i=0; i<tc; i++){
        let op_ele = input[line].split(" ").map(Number);
        // console.log(op_ele);
        if(op_ele[0] == 1){
            enqueue(op_ele[1], size);
        }else{
            dequeue();
        }
        line++;
    }
}

var queue = [];

function enqueue(ele, size){
    // console.log("..");
    if(queue.length < size){
        queue.push(ele);
        console.log(ele);
    }else{
        console.log(-1);
    }
}

function dequeue(){
    if(queue.length == 0){
        console.log(-1);
    }else{
        console.log(queue.shift());
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