function runProgram(input) {
    input = input.split("\n");
    let size_k = input[0].split(" ").map(Number);
    let size = size_k[0];
    let k = size_k[1];
    let arr = input[1].split(" ");
    maxTop(size, k, arr);
}

function maxTop(size, k, arr){
    if(size === 1 && k % 2 === 0){
        console.log(arr[0]);
    }else if(size === 1 && k % 2 === 1){
        console.log(-1);
    }else if(size <= k){
        console.log(findMax(arr, arr.length));
    }else if(size > k){
        let temp = findMax(arr, k-1);
        if(temp > arr[k]){
            console.log(temp);
        }else{
            console.log(arr[k]);
        }
    }
}

function findMax(arr, size){
    let max = -1;
    for(let i=0; i<size; i++){
        if(+arr[i] > +max){
            max = arr[i];
        }
    }
    return max;
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