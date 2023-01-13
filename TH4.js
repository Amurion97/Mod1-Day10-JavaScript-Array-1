document.getElementById("max").addEventListener("click",function (){
    let length = arr.length;
    if (length){
        let max = arr[0];
        let maxLocation = 0;
        for (let i = 1; i < length; i ++){
            if (arr[i] > max){
                max = arr[i];
                maxLocation = i;
            }
        }
        document.getElementById("notification").innerHTML = `<hr/> Maximum value is located in position ${maxLocation+1}`;
        displayArr();
    } else {
        document.getElementById("notification").innerHTML = `<hr/> Array is empty`;
    }
})