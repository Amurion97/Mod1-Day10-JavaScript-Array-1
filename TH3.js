document.getElementById("search").addEventListener("click",function (){
    let key = document.getElementById("input").value;
    let length = arr.length;
    let last = arr[length-1];
    arr[length-1] = key;
    let i = 0;
    while (arr[i] !== key){
        i ++;
    }
    arr[length-1] = last;
    if ((i < length - 1) || (last === key)){
        document.getElementById("notification").innerHTML = `<hr/> ${key} is located in position ${i+1}`;
    } else {
        document.getElementById("notification").innerHTML = "<hr/> Not found";
    }
    displayArr();
})
