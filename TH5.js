const N = 5;
let table = `<table>`;
for (let i = 0; i < N; i++) {
    table += `<tr>`;
    for (let j = 0; j < N; j++) {
        table += `<td id="row-${i}-col-${j}">0</td>`
    }
    table += `</tr>`;
}
table += `</table>`;
document.getElementById("result").innerHTML = table;
document.getElementById("change").addEventListener("click", function (){
    let x = parseInt(prompt("x :"));
    let y = parseInt(prompt("y :"));
    document.getElementById(`row-${x}-col-${y}`).innerHTML = "x";
})