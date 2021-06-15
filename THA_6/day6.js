//Q1
function is_array(arr){
    return Array.isArray(arr);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Q2
function array_Clone(arr){
    return arr.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Q3
function first(arr,n){
    if(n==null){
        return arr[0];
    }
    return arr.slice(0,n);


}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//Q4
function join(mycolor){
    
    
        console.log(mycolor.join("+"));
        console.log(mycolor.join(","));
        console.log(mycolor.join(" "));
    

}
mycolor = ["Red", "Green", "White", "Black"];
join(mycolor);

//Q5
function times(arr){
    let count=0;
    let max_element=1;
    let max;
    for(let i=0;i<arr.length;i++){
        count=0;
        for(let j=i;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;

            }
            if(max_element<count){
                max_element=count;
                max=arr[i];
            }
            


        }
    }
    console.log(max,"(",max_element,"times )");
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
times(arr1);