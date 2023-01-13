document.getElementById("reverse").addEventListener("click",function (){
    let length = arr.length;
    for (let i = 0; i < length/2; i++){
        let temp = arr[i];
        arr[i] = arr[length-1-i];
        arr[length-1-i] = temp;
    }
    document.getElementById("notification").innerHTML = "<hr/> Successfully reverse the array";
    document.getElementById("result").innerHTML = "";
})

