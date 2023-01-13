const arr = [];
document.getElementById("add").addEventListener("click", function (){
    arr.push(document.getElementById("input").value);
    document.getElementById("input").value = "";
    document.getElementById("notification").innerHTML = "<hr/> Successfully added to position " + arr.length;
})
document.getElementById("display").addEventListener("click", displayArr);
function displayArr(){
    let result = "<hr/>";
    for (let i = 0; i < arr.length; i++ ){
        result += "<p>Element " + (i+1).toString() + " = " + arr[i] + "</p>";
    }
    // document.getElementById("notification").innerHTML = "";
    document.getElementById("result").innerHTML = result;
    return 1;
}
