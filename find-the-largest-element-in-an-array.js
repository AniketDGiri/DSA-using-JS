//Problem Statement: Given an array, we have to find the largest element in the array.
/*
Example 1:
Input:
 arr[] = {2,5,1,3,0};
Output:
 5
Explanation:
 5 is the largest element in the array. 

Example2:
Input:
 arr[] = {8,10,5,7,9};
Output:
 10
Explanation:
 10 is the largest element in the array. 
 */

 //Approach 1 (Brute Force Approach)

 function largestElementInArray(arr){
    let maxEle=Number.MIN_VALUE;
    for(const val of arr){
        if(val>maxEle){
            maxEle=val;
        }
    }
    return maxEle;
 }

 const arr=[8,10,5,19,9];
 const ans=largestElementInArray(arr);
 console.log("Largest Element in the array is:", ans);


 //Recursive Approach

 let maxEle=Number.MIN_VALUE;
 function recursiveLargestElementInArray(arr){
    
    //Here we will be deleting each element from the array using each recursive call
    //So, we will be using three new methods to delete the elements from the array
    //1. pop
    //2. shift
    //3. splice

    if(arr.length===0) return;

    if(arr[arr.length-1]>maxEle){
        maxEle=arr[0];
    }
    //arr.shift();
    arr.pop()
    recursiveLargestElementInArray(arr)
 }

recursiveLargestElementInArray(arr);
 console.log("using recursive function is:",maxEle)