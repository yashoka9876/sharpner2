// class ListNode{
//     constructor(data,next=null){
//         this.data=data;
//         this.next;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//     }


//    insertNodeAtEnd=(data)=>{
//     let currentNode=this.head;
//     if(currentNode){
//         while(currentNode.next!=null){
//             currentNode=currentNode.next;
//         }

// //         currentNode.next=new ListNode(data);
// //     }else{
// //         this.head=new ListNode(data);
// //     }
// //     return this.head;
// //    }

// // }

// // let linkedlist=new LinkedList();

// // let head=linkedlist.insertNodeAtEnd(1);
// // linkedlist.insertNodeAtEnd(2);
// // linkedlist.insertNodeAtEnd(3);
// // linkedlist.insertNodeAtEnd(4);
// // linkedlist.insertNodeAtEnd(5);
// // linkedlist.insertNodeAtEnd(6);
// // linkedlist.insertNodeAtEnd(7);
// // linkedlist.insertNodeAtEnd(8);
// // linkedlist.insertNodeAtEnd(9);



// function fun(arr){
//     let i=0,j=0;
//     let max=0;
//     let map=new Map();
//     while(j<arr.length){
//         if(map.has(arr[j])){
//             map.set(arr[j],map.get(arr[j])+1);
//         }else{
//             map.set(arr[j],1);
//         }
//         if(map.size==j-i+1){
//             if(max<map.size){
//                 max=map.size;
//             }
//         }else{
//             while(map.size<j-i+1){
//                 map.set(arr[i],map.get(arr[i])-1);
//                 if(map.get(arr[i])==0){
//                     map.delete(arr[i]);
//                 }
//                 i++;
//             }
//         }
//         j++;
//     }
//     return max;

// }
// fun("awwkew");

//selection sort 
//how you will find out the maximum into array is this rally work or not but one minuite why 

// function max_ind(arr,first,last){
//     let max=first;
//     for(let i=first;i<=last;i++){
//       //   max=first;
//         if(arr[max]<arr[i]){
//             max=i;
//         }
//     }
//     return max;
// }
// function swap(arr,first,last){
//     let temp=arr[first]
//     arr[first]=arr[last];
//     arr[last]=temp;
// }
// let arr=[5,4,3,2,1];

// // for(let i=0;i<arr.length;i++){
// //     let last =arr.length-i-1;
// //     let max_index=max_ind(arr,0,last);
// //     swap(arr,max_index,last);
// // }
// // console.log(arr);  


// //insertino sort
// function MAXINDEX(arr,first,last){
//     let max=first;
//     for(let i=0;i<=last;i++){
//         if(arr[max]<arr[i]){
//             max=i;
//         }
//     }
//     return max;
// }
// function swap(arr,first,last){
//     let temp=arr[first];
//     arr[first]=arr[last];
//     arr[last]=temp;
// }
// function selection(arr){
//     // for(let i=0;i<arr.length;i++){
//     //     let last=arr.length-i-1;
//     //     let max_index=MAXINDEX(arr,0,last);
//     //     swap(arr,max_index,last);
//     // }
//     // console.log(arr);

//     // for(let i=0;i<arr.length-1;i++){
//     //     for(let j=i+1;j>0;j--){
//     //         if(arr[j]<arr[j-1]){
//     //             let temp=arr[j-1];
//     //             arr[j-1]=arr[j];
//     //             arr[j]=temp;
//     //         }else{
//     //             break;
//     //         }
//     //     }
//     // }

//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     console.log(arr);
// }

// selection([5,4,3,2,1]);

// //insertion sort;









/*
Students are going to give the exams .Some of them forgot to bring the pen 
for writing , but some students have extra pen. You have given an array of 
integers where negative integer represents the extra pens the student has.
positive integers shows the need of pens that student has .Assume they are 
seating horizontally on different benches  the work for giving the pen to 
adjacent bench is 1 unit . find minimum number of work required to fulfil the
needs of all students
*/

// var pens_need = function(arr) {
  
//     let work=0, borrow;
//     for(let i=0;i<arr.length;i++){
//       if(arr[i] == 0){
//         continue
//       }
//       if(arr[i]>0)
//       borrow=true
//       else{
//         borrow = false
//       }
      
//       for(let j=i+1;j<arr.length;j++){
      
//        if(borrow && arr[j]<0){
//          if((arr[i]+arr[j])<=0){
//            arr[j]=arr[i]+arr[j];
//            work+=(j-i)*arr[i];
//            arr[i] =0
        
//          } else {
//            arr[i] = arr[i]+arr[j];
//            work+=(j-i)*Math.abs(arr[j])
//            arr[j] =0;
//          }
//        }
       
       
//        else if(!borrow && arr[j]>0){
//          if((arr[i]+arr[j])<=0){
//            arr[i] = arr[i]+arr[j]
//            work+=(j-i)*arr[j]
//            arr[j] = 0;
//          } else{
//            arr[j] = arr[i]+arr[j]
//            work+=(j-i)*Math.abs(arr[i])
//            arr[i]=0
//          }
//        }
//       }
//     }
//      return work;
      
//   };
  
// //   console.log(pens_need([2, -1, 3, -2, 1,-3]));
// //   console.log(pens_need([5,-4,1,-3,1]));
//   console.log(pens_need([-1000,-1000,-1000,1000,1000,1000]));


// function fun(arr){
//     let count=0;
//     let total_work=0;
//     let i=0,j=0;
//     while(j!=arr.length){
//         if(arr[j]==0 || arr[i]==arr[j]){
//             j++;
//             continue;
//         }
//         if(arr[i]>0&&arr[j]<0){
//             while(arr[i]!=0 && arr[j]!=0){
//                 arr[i]--;
//                 arr[j]++;
//                 count++;
//             }
//             let d=j-i;
//             total_work+=count*d;
//             count=0;

//         }
//         if(arr[i]<0&&arr[j]>0){
//             while(arr[i]!=0 && arr[j]!=0){
//                 arr[i]++;
//                 arr[j]--;
//                 count++
//             }
//             let d=j-i;
//             total_work+=count*d;
//             count=0;
//         }
//         if(arr[i]==0){
//             i++;
//             continue;
//         }
//         j++;
//     }

//     console.log(arr);
//     console.log(total_work);
// }
// fun([-1000,-1000,-1000,1000,1000,1000])



// function countWays(a,n){
//     let count=0;
//     for(let i=0;i<a.length-1;i++){
//       for(let j=i+1;j<a.length;j ++){
//         let flag=a[j]+''+a[i]==n;
//         let flag1=a[i]+''+a[j]==n;
//         console.log(flag);
//         console.log(flag1);
//         if(flag){
//           count++;
//         }
//         if(flag1){
//           count++;
//         }
//       }
//     }
//     return count;
//   }
//   let ab=countWays([1,212,12,12],1212);
  
//   console.log(ab);

// let arr1=[];
// function sort(obj){
//     if(arr1.length==0){
//         arr1.push(obj);
//         return;
//     }else{
//         arr1.push(obj)
//     }
//     for(let j=arr1.length-1;j>0;j--){
//         if(arr1[j].count>arr1[j-1].count){
//             let temp=arr1[j];
//             arr1[j]=arr1[j-1];
//             arr1[j-1]=temp;
//         }else if(arr1[j].count==arr1[j-1].count){
//             if(arr1[j].length>arr[j-1].length){
//                 let temp=arr1[j];
//                 arr1[j]=arr1[j-1];
//                 arr1[j-1]=temp;
//             }
//         }else{
//             break;
//         }
//     }
// }



// function fun(arr){
//     let count=0;
//     let ch='a';
//     let map=new Map();
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             if(arr[i][j]=='a'){
//                 count++;
//             }
//         }
//         sort({word:arr[i],count:count,length:arr[i].length})
//         //map.set(arr[i],{Count:count,W_length:arr[i].length})
//         count=0;
//     }
//    // console.log(map);
// }


// let arr=["vaibhav","almanad","almanac","is","fat","button","aabaca"];
// fun(arr);
// console.log(arr1);



// Javascript program for above approach

// function to return number of
// unique character in a word
// function countDistinct(string){
//     // Initialize map
//     let obj = {};
//     for(let i = 0; i < string.length; i++){
//         // count distinct characters
//         if(string[i] in obj){
//             obj[string[i]] += 1;
//         }
//         else{
//             obj[string[i]] = 1;
//         }
//     }
//     let cnt = 0;
//     for(ele in obj) cnt++;
//     return cnt;
//     }
    
//     // Function to perform sorting
//     function compare(s1, s2){
//     if(countDistinct(s1) == countDistinct(s2)){
//         return (s2.length-s1.length);
//     }
//     else{
//         return (countDistinct(s1) - countDistinct(s2));
//     }
//     }
//    // do in not Mississippi Bananas grow
    
    
//     // Function to print the sorted Array of string
//     function printArraytString(str){
//     console.log(str.join(" "));
//     }
    
//     // Driver code
//     array1 = ["Bananas", "do","not", "grow", "in","Mississippi"];
//     // function call
//     array1.sort(compare);
    
//     // print resultant Array
//     printArraytString(array1)
    
//     // This code is contributed by Aditya Sharma
    













// function fun(arr){
//     let count=0;
//     let total_work=0;
//     let i=0,j=0;
//     while(j!=arr.length){
//             if(i!=j){
//                 if(arr[i]>0&&arr[j]<0){
//                     while(arr[i]!=0&&arr[j]!=0){
//                         arr[i]--;
//                         arr[j]++;
//                         count++;
//                     }
//                     total_work+=count*(j-i);
//                     count=0;
//                 }
//                 if(arr[i]<0&&arr[j]>0){
//                     while(arr[i]!=0&&arr[j]!=0){
//                         arr[i]++;
//                         arr[j]--;
//                         count++
//                 }
//                 total_work+=count*(j-i);
//                     count=0;
//             }
//             if(arr[i]==0){
//                 i++;
//                 continue;
//             }
//         }
        
//         j++;
//     }    
//     console.log(total_work);
// }
// fun([-1000,-1000,-1000,1000,1000,1000])


// function Count(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a'){
//             count++;
//         }
//     }
//     return count;
// }




// function fun(){
//     let arr=["vaibhav","almanad","almanac","is","fat","button","aabaca"];
//     arr.sort((a,b)=>{
//         if(Count(a)==Count(b)){
//             return a.length-b.length;
//         }else{
//             return Count(b)-Count(a);
//         } 
//     })
//     console.log(arr);
// // }
// // fun();



// // let arr=[50,40,30,20,10]
// // let a=arr.sort((a,b)=>{
// //     return b-a;
// // })
// // console.log(a);









// // function fun(arr){
// //     let max=0;
// //         let map=new Map();
// //         let i=0,j=0;
// //         while(j!=arr.length){
// //             if(map.has(arr[j])){
// //                 map.set(arr[j],map.get(arr[j])+1);
// //             }else{
// //                 map.set(arr[j],1);
// //             }
            
// //             if(map.get(0)==map.get(1)){
// //                 if(max<j-i+1){
// //                     max=j-i+1;
// //                 }
// //             }
// //             j++
// //             if(j==arr.length){
// //                 while(i!=arr.length-1){
// //                     i++
// //                     if(map.get(0)==map.get(1)){
// //                         if(max<j-i+1){
// //                             max=j-i+1;
// //                         }
// //                     }
// //                 }
// //             }
// //         }
// //         return max;
// // }
// // fun([ 0, 1, 0, 0, 0, 0,])



// function minColorChanges(N, colors) {
//     let minChanges = N;
  
//     for (let i = 0; i < N; i++) {
//       let changesIfBlack = 0;
//       let changesIfWhite = 0;
  
//       // Simulate changes if the current plank is made black
//       for (let j = i; j >= 1; j--) {
//         if (colors[j] === colors[j - 1]) {
//           changesIfBlack++;
//           colors[j - 1] = colors[j] === 'black' ? 'white' : 'black';
//         } else {
//           break;
//         }
//       }
  
//       // Reset colors to the original state
//       for (let j = i; j >= 1; j--) {
//         if (changesIfBlack > 0) {
//           colors[j - 1] = colors[j];
//           changesIfBlack--;
//         } else {
//           break;
//         }
//       }
  
//       // Simulate changes if the current plank is made white
//       for (let j = i; j >= 1; j--) {
//         if (colors[j] === colors[j - 1]) {
//           changesIfWhite++;
//           colors[j - 1] = colors[j] === 'black' ? 'white' : 'black';
//         } else {
//           break;
//         }
//       }
  
//       // Reset colors to the original state
//       for (let j = i; j >= 1; j--) {
//         if (changesIfWhite > 0) {
//           colors[j - 1] = colors[j];
//           changesIfWhite--;
//         } else {
//           break;
//         }
//       }
  
//       // Update minChanges with the minimum of changesIfBlack and changesIfWhite
//       minChanges = Math.min(minChanges, Math.min(changesIfBlack, changesIfWhite));
//     }
  
//     return minChanges;
//   }
  
//   // Example usage:
//   const N = 6;
//   const initialColors = ['B', 'B', 'W', 'W', 'W', 'B'];
//   const minChanges = minColorChanges(N, initialColors);
//   console.log(`Minimum number of changes required: ${minChanges}`);
  
  






// function sandyPlanks(S) {
//     let count = 0;
//     const N = S.length;
//     S = S.split(''); 

//     for (let i = 0; i < N; i++) {
//     }

//     return count;
// }

// console.log(sandyPlanks("bbwwwb"));
