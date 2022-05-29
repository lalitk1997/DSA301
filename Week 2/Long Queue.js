function runProgram(input) {
    input = input.split("\n");
    let size = +input[0];
    let arr = input[1].split(" ").map(Number);
    longQueue(size, arr);
}

function longQueue(size, arr){
    let count = 0;
    for(let i=0; i<size; i++){
        if(arr[i] > arr[i+1]){
            count++;
        }
    }
    console.log(count+1);
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