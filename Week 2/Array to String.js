function runProgram(input) {
    input = input.split("\n");
    let size = +input[0];
    let arr = input[1].split(" ").map(Number);
    arrToStr(size, arr);
}

function arrToStr(size, arr){
    let bag = '';
    for(let i=0; i<size; i++){
        if(arr[i] < 0){
            bag = bag + '0';
        }else{
            bag = bag + arr[i];
        }
    }
    console.log(bag);
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