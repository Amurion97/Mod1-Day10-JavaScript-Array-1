const sample = [];
document.getElementById("add").addEventListener("click", function (){
    sample.push(document.getElementById("input").value);
    document.getElementById("input").value = "";
    document.getElementById("notification").innerHTML = "Successfully added to position " + sample.length;
})
document.getElementById("display").addEventListener("click",function (){
    let result = "";
    for (let i = 0; i < sample.length; i++ ){
        result += "<p>Element " + (i+1).toString() + " = " + sample[i] + "</p>";
    }
    document.getElementById("notification").innerHTML = "";
    document.getElementById("result").innerHTML = result;
})
function test(){

}
console.log(typeof test());