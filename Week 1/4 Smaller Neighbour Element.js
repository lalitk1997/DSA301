function runProgram(input) { 
    input = input.split("\n");
    let size = +input[0];
    let arr = input[1].split(" ").map(Number);
    check(size, arr);
}

function check(size, arr){
    let stk = [];
    let ans = [];
    for(let i=0; i<size; i++){
        while(stk[stk.length-1] >= arr[i] && stk.length !== 0){
            stk.pop();
        }
        if(stk.length === 0){
            stk[stk.length-1] = arr[i];
            ans.push(-1);
        }else if(stk[stk.length-1] < arr[i]){
            ans.push(stk[stk.length-1]);
        }
        stk.push(arr[i]);
    }
    console.log(ans.join(" "));
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