function runProgram(input) { 
    input = input.split("\n");
    let str1 = input[0];
    let str2 = input[1];
    compStr(str1, str2);
}

function compStr(str1, str2){
    let obj1 = {};
    
    for(let i=0; i<str1.length; i++){
        if(obj1[str1[i]] == undefined){
            obj1[str1[i]] = 1;
        }else{
            obj1[str1[i]]++;
        }
    }
    
    let obj2 = {};
    
    for(let i=0; i<str2.length; i++){
        if(obj2[str2[i]] == undefined){
            obj2[str2[i]] = 1;
        }else{
            obj2[str2[i]]++;
        }
    }
    
    // console.log(obj1, obj2);
    
    for(key in obj1){
        let flag = false;
        for(keys in obj2){
            if(key == keys){
                if(obj1[key] == obj2[keys]){
                    flag = true;
                    break;
                }
            }
        }
        if(flag == false){
            console.log("No");
            return;
        }
    }
    console.log("Yes");
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