function runProgram(input) {
    // 1
    // 5
    // 2 3 5 8 3
    input = input.split("\n");
    let size = +input[0];
    let line = 1;
    for(let i=0; i<size; i++){
        let len = +input[line];
        line++;
        let arr = input[line].split(" ").map(Number);
        line++
        greaterEven(len, arr);
    }
}

function greaterEven(len, arr){
    let stk = [];
    let ans = [];
    let sum = 0;
    for(let i=arr.length-1; i>=0; i--){
        while(stk.length !== 0 && stk[stk.length-1] <= arr[i]){
            stk.pop();
        }
        if(stk.length === 0){
            ans.push(-1);
        }else if(stk[stk.length-1] > arr[i]){
            ans.push(stk[stk.length-1]);
        }
        stk.push(arr[i]);
    }
    // console.log(ans);
    for(let i=0; i<ans.length; i++){
        if(ans[i] % 2 === 0){
            sum = sum + arr[i];
        }
    }
    console.log(sum);
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