// let a=[50,60,70,80,10,20,30,40];
// let s=0;
// let target=40;
// let l=a.length-1;
// let mid=Math.floor((s+l)/2);


// while(s<=l){
//     mid=Math.floor((s+l)/2);
//     if(a[mid]==target){
//         console.log(a[mid]);
//         console.log(mid);
//         break;
//     }
//     if(a[s]<a[mid]){
//         if(target>=a[s]&&target<=a[mid]){
//             l=mid-1;
//         }else{
//             s=mid+1;
//         }
//     }else{
//         if(target>=a[mid] && target<=a[l]){
//             s=mid+1;
//         }else{
//             l=mid-1;
//         }
//     }
// }

// //can you do same question using recursion but how you will do this question using recurstion and not by other me




// //selection sort 
// let arr=[500,600,3,20,100];

// //Now swapping we need to do now let see how this happen now



// for(let i=0;i<arr.length;i++){
//     let max_ind=max_index(arr,i);
//     let last=arr.length-1-i;
//     swap(arr,last,max_ind);
// }
// console.log(arr);

// function swap(arr,last,max_index){
//     let temp=arr[last];
//     arr[last]=arr[max_index];
//     arr[max_index]=temp;
// }

// function max_index(arr,end){
//     let max=0;
//     for(let i=0;i<arr.length-end;i++){
//         if(arr[max]<arr[i]){
//             max=i;
//         }
//     }
//     return max;
// }

// let arr=[5,4,3,2,1];
// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j>0;j--){
//         if(arr[j]<arr[j-1]){
//             swap(arr,j,j-1)
//         }else{
//             break;
//         }
//     }
// }
// console.log(arr);
// function swap(arr,last,max_index){
//         let temp=arr[last];
//         arr[last]=arr[max_index];
//         arr[max_index]=temp;
//     }


// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = originalArray.slice();
  
// // Output: [1, 2, 3, 4, 5]
// console.log(copiedArray);

// let months = ["January", "February", "Monday", "Tuesday"];
// let days = months.splice(0);

// console.log(months);
// console.log(days); // ["Monday", "Tuesday"]




// let arr=[10,20,30,40,100,60,70];
// //I think this would be one recursion funciotn 
// function mergesort(unsorted_array){
//     if(unsorted_array.length==1){
//         return unsorted_array;
//     }
    
//     let mid=Math.floor((unsorted_array.length)/2);
//     let left_sub_array=unsorted_array.splice(0,mid);
//     let arr1=mergesort(left_sub_array);
//     let arr2=mergesort(unsorted_array);
//     return merge_array(arr1,arr2);
// }
// console.log(mergesort(arr));


// function merge_array(a,b){
//     // let a=[1,3,5,7,100,200,300];
//     // let b=[2,4,6,8];
//     let i=0,j=0,k=0;
//     let arr=[];
//     while(i<a.length && j<b.length){
//         if(a[i]<b[j]){
//             arr[k]=a[i]
//             i++;
//             k++;
//         }else{
//             arr[k]=b[j]
//             j++;
//             k++;
//         }
//     }

//     //putting the reamaining element;
//     if(i>a.length-1){
//         while(j<b.length){
//             arr[k]=b[j];
//             j++;
//             k++;
//         }
//     }else{
//         while(i<a.length){
//             arr[k]=a[i];
//             i++;
//             k++;
//         }
//     }
//     return arr;
// }

// let a=[40];
// let b=[20];
// console.log(merge_array(a,b));










// // Javascript program in-place Merge Sort

// // Merges two subarrays of arr[].
// // First subarray is arr[l..m]
// // Second subarray is arr[m+1..r]
// // Inplace Implementation
// function merge(arr, start, mid, end)
// {
// 	let start2 = mid + 1;

// 	// If the direct merge is already sorted
// 	if (arr[mid] <= arr[start2])
// 	{
// 		return;
// 	}

// 	// Two pointers to maintain start
// 	// of both arrays to merge
// 	while (start <= mid && start2 <= end)
// 	{
		
// 		// If element 1 is in right place
// 		if (arr[start] <= arr[start2])
// 		{
// 			start++;
// 		}
// 		else
// 		{
// 			let value = arr[start2];
// 			let index = start2;

// 			// Shift all the elements between element 1
// 			// element 2, right by 1. 
// 			while (index != start)
// 			{
// 				arr[index] = arr[index - 1];
// 				index--;
// 			}
// 			arr[start] = value;

// 			// Update all the pointers
// 			start++;
// 			mid++;
// 			start2++;
// 		}
// 	}
// }

// /* l is for left index and r is right index
// of the sub-array of arr to be sorted */
// function mergeSort(arr, l, r)
// {
// 	if (l < r)
// 	{
		
// 		// Same as (l + r) / 2, but avoids overflow
// 		// for large l and r
// 		let m = l + Math.floor((r - l) / 2);

// 		// Sort first and second halves
// 		mergeSort(arr, l, m);
// 		mergeSort(arr, m + 1, r);

// 		merge(arr, l, m, r);
// 	}
// }

// /* UTILITY FUNCTIONS */
// /* Function to print an array */
// function printArray(A, size)
// {
// 	let i;
// 	for(i = 0; i < size; i++)
// 		document.write(A[i] + " ");
		
// 	document.write("<br>");
// }

// // Driver code
// // let arr = [ 12, 11, 13, 5, 6, 7 ];
// let arr=[12,11];
// let arr_size = arr.length;

// mergeSort(arr, 0, arr_size - 1);
// printArray(arr, arr_size);

// This code is contributed by rag2127













// let sum =0;

// let n=5;  //(you can take any number manually)

// for(let  i=0;i<10;i=i+2){
// if(i==n){
// break;
// }
// sum =sum+i;
// }

// console.log(sum);
// let sum_val=0;
// let n=5;
// let i=0;
// function sum(i){
//     if(i==5){
//         return sum_val;
//     };
//     if(i>9){
//         return sum_val;
//     }
//     sum_val=sum_val+i;
//     i+=2;
//     sum(i);
// }

// sum(0);
// console.log(sum_val)



// function fibonacci(n){
//     /* Function to return the nth fibonacci number*/
   
//    if(n==0 ){
//        return 0;
//    }
//    if(n==1){
//        return 1;
//    }
//    return fibonacci(n-1)+fibonacci(n-2)
   
// }

// console.log(fibonacci(5));






















//this is finally Kuna kushwaha problme get solve;

// function mergeSortInPlace(arr,s,e){
//     if(e-s==1){
//         return;
//     }
//     let mid=Math.floor((s+e)/2);
//     mergeSortInPlace(arr,s,mid);
//     mergeSortInPlace(arr,mid,e);

//     mergeInplace(arr,s,mid,e);
// }


// function mergeInplace(arr,s,m,e){
//     let mix=[];
//     let i=s;
//     let j=m;
//     let k=0;
//     while(i<m&&j<e){
//         if(arr[i]<arr[j]){
//             mix[k]=arr[i];
//             i++;
//         }else{
//             mix[k]=arr[j]
//             j++
//         }
//         k++;
//     }
//     while(i<m){
//         mix[k]=arr[i];
//         i++;
//         k++;
//     }
//     while(j<e){
//         mix[k]=arr[j];
//         j++;
//         k++
//     }
//     for(let l=0;l<mix.length;l++){
//         arr[s+l]=mix[l];
//     }
// }



// let arr=[50,40,100,60,10];
// mergeSortInPlace(arr,0,arr.length);

// console.log(arr);




// function permutation(p,up){
//     if(up.length == 0){
//         //console.log(p);
//         return;
//     }

//     let ch=up.charAt(0);
//     for(let i=0;i<=p.length;i++){
//         let f= p.substring(0,i);
//         let s=p.substring(i,p.length);
//         permutation(f+ch+s,up.substring(1));
//     }
// }
// permutation("","abc");




// function permutation(p,up){
//     if(up.length==0){
//         console.log(p);
//         return
//     }
//     let ch = up.charAt(0);
//     for(let i=0;i<=p.length;i++){
//         let f=p.substring(0,i);
//         let s=p.substring(i,p.length)
//         permutation(f+ch+s,up.substring(1));
//     }
// }
// permutation("","abc");

// function subseq(p,up){
//     if(up.length==0){
//         if(p.length>0){
//             console.log(p)
//         }
//         return ;
//     }
//     //let ch=up[0];
//     let arr1=[...p,up[0]];
//     let arr2=[...p];
//    let arr3=[];
//    for(let i=1;i<up.length;i++){
//     arr3.push(up[i]);
//    }
//     subseq( arr1,arr3);
//     subseq( arr2,arr3);
// }
// let a=[];
// let b=[1,2,3]
// subseq(a,b);








//Let's write the two code to merge the two array


// function merge(arr1,arr2){
//     // let arr1=[40,50,60,70];
//     // let arr2=[10,20,70,90,100,200];
//     let p1=0;
//     let p2=0;
//     let k=0;
//     let sort=[];

//     while(p1<=arr1.length-1 && p2<=arr2.length-1){
//         if(arr1[p1]<=arr2[p2]){
//             sort[k]=arr1[p1];
//             p1++;
//         }else{
//             sort[k]=arr2[p2]
//             p2++;
//         }
//         k++;
//     }
//     if(p1>=arr1.length){
//         while(p2<=arr2.length-1){
//             sort[k]=arr2[p2];
//             p2++;
//             k++;
//         }
        
//     }
//     if(p2>=arr2.length){
//         while(p1<=arr1.length-1){
//             sort[k]=arr1[p1];
//             p1++;
//             k++;
//         }
//     }
//     return sort;
// }


// function merge_sort(arr,s,e){
//     if(arr.length==1){
//         let list=[...arr];
//         return list;
//     }
//     let m=Math.floor(arr.length/2);
    
//     let arr1=merge_sort(arr.splice(0,m));
//     let arr2=merge_sort(arr);
//     return merge(arr1,arr2);
// }
// let arr=[5,4,3,2,1,0];
// console.log(merge_sort(arr));



// let a=merge();
// console.log(a);

// let arr = ["a","a","c","d"];
// // // arr.forEach(arg=>{
// // //     console.log(arg.charCodeAt(0));
// // // })

// // console.log(arr.charCodeAt(0));
// let text = "HELLO WORLD";
// let code = text.charCodeAt(0);
// console.log(code);

// arr.forEach((letter)=>{
//     console.log(letter.charCodeAt(0));
// })


// const spiceGirl=[
//     {name:"ahoik",age:10},
//     {nama:"yadav",age:2000},
//     {name:"prateek",age:50},
//     {name:"harish",age:100}
// ]
// let a=spiceGirl.sort((a,b)=>{
//     return a.age-b.age;
// })

// console.log(a);


// class Employee{
//     constructor(a,b){
//         this.Name=a;
//         this.salary=b;
//     }
// }
// const obj=new Employee("ashok",100);
// const obj1=new Employee("ashok",90);
// const obj2=new Employee("ashok",80);
// const obj3=new Employee("ashok",70);
// const obj4=new Employee("ashok",60);
// let arr_of_obj=[obj,obj1,obj2,obj3,obj4];
// let sorted_array=arr_of_obj.sort((a,b)=>{
//     return a.salary-b.salary
// })
// console.log(sorted_array);s

// Javascript program to Implement a stack
// using singly linked list
// import package

// A linked list node
// class Node
// {
// 	constructor()
// 	{
// 		this.data=0;
// 		this.link=null;
// 	}
// }

// // Create Stack Using Linked list
// class StackUsingLinkedlist
// {
// 	constructor()
// 	{
// 		this.top=null;
// 	}
	
// 	// Utility function to add an element x in the stack
// 	push(x)
// 	{
// 		// create new node temp and allocate memory
// 		let temp = new Node();

// 		// check if stack (heap) is full. Then inserting an
// 		// element would lead to stack overflow
// 		if (temp == null) {
// 			document.write("<br>Heap Overflow");
// 			return;
// 		}

// 		// initialize data into temp data field
// 		temp.data = x;

// 		// put top reference into temp link
// 		temp.link = this.top;

// 		// update top reference
// 		this.top = temp;
// 	}
	
// 	// Utility function to check if the stack is empty or not
// 	isEmpty()
// 	{
// 		return this.top == null;
// 	}
	
// 	// Utility function to return top element in a stack
// 	peek()
// 	{
// 		// check for empty stack
// 		if (!this.isEmpty()) {
// 			return this.top.data;
// 		}
// 		else {
// 			document.write("Stack is empty<br>");
// 			return -1;
// 		}
// 	}
	
// 	// Utility function to pop top element from the stack
// 	pop() // remove at the beginning
// 	{
// 		// check for stack underflow
// 		if (this.top == null) {
// 			document.write("<br>Stack Underflow");
// 			return;
// 		}

// 		// update the top pointer to point to the next node
// 		this.top = this.top.link;
// 	}
	
// 	display()
// 	{
// 		// check for stack underflow
// 		if (this.top == null) {
// 			document.write("<br>Stack Underflow");
			
// 		}
// 		else {
// 			let temp = this.top;
// 			while (temp != null) {

// 				// print node data
// 				document.write(temp.data+"->");

// 				// assign temp link to temp
// 				temp = temp.link;
// 			}
// 		}
// 	}
// }

// // main class

// // create Object of Implementing class
// let obj = new StackUsingLinkedlist();
// // insert Stack value
// obj.push(11);
// obj.push(22);
// obj.push(33);
// obj.push(44);

// // print Stack elements
// obj.display();

// // print Top element of Stack
// document.write("<br>Top element is ", obj.peek()+"<br>");

// // Delete top element of Stack
// obj.pop();
// obj.pop();

// // print Stack elements
// obj.display();

// // print Top element of Stack
// document.write("<br>Top element is ", obj.peek()+"<br>");

// // This code is contributed by rag2127

// class StackNode{
//         constructor(a){
//             this.data = a;
//             this.next = null;
//         }
//     }


// class MyStack
// {
    
//     // class StackNode{
//     //     constructor(a){
//     //         this.data = a;
//     //         this.next = null;
//     //     }
//     // }
//     constructor(){
//         this.top = null; 
//     }
    
//     /**
//      * @param {number} a
//     */
    
//     //Function to push an integer into the stack.
//     push(a)
//     {
//         // code here
//         let temp=new StackNode(a);
//         this.next=this.top;
//         this.top=temp;
//     }
    
//     /**
//     */
    
//     //Function to remove an item from top of the stack.
//     pop()
//     {
//         // code here
//         if(this.top==null){
//             return;
//         }
//         this.top=this.top.next;
//     }
//     show(){
//         console.log("hai"+this.top.data);
//     }
// }

// let stack=new MyStack();
// stack.push(10);

// stack.show();




// var str = "My name is Yash Prasad, age is 25, address is Prestige Falcon City, Bangalore";
// console.log(str.split(","));

// function fun(s){
//     let a=[];
//     for(let i=0;i<s.length;i++){
//         if(s[i]=='(' || s[i]=="[" || s[i]=="{"){
//             a.push(s[i]);
//         }else{
//             if(s[i]==')' && a[a.length-1]=='(' || s[i]=='}' && a[a.length-1]=='{' || s[i]==']' && a[a.length-1]=='['){
//                 a.pop();
//             }else{
//                 return false;
//             }
//         }
//     }
//     if(a.length==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// fun("()[]{}")
// let a=Number.Max_VALUE



// let person={
//     firstName:'ashok',
//     lastName:'yadav'
// };


// (function(){
//     console.log("hai this is ashok yadav")
// })()

// let str='yadav';
// function fun(){
//     let str="ashoka";
//     console.log(str)
// }
// fun()

// let obj={
//     name:"ashok",
//     last:"yadav",
//     hello:function(){
//         console.log("bro this is a hello function");
//     }
// }
// obj.preet=function(){
//     console.log("this is preet function");
// }

// obj.hello();
// obj.preet();

let obj={
    name:"ajsohk",
    full:"yadav",

    get getName(){
        return this.name.toUpperCase();
    },
    set setName(a){
        this.name=a.toUpperCase();
    }
}
obj.setName="ahosikkkk";
console.log(obj.getName);