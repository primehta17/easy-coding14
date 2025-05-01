function rotate(arr) {
    let newArr=[], a=arr[arr.length-1];
    for(let i=0;i<arr.length;i++){
       newArr.push(arr[i-1])
    }
    newArr[0]= a;
    return newArr;
    
}
console.log(rotate([10,20,30,40]))