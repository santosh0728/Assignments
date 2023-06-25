
const arr=[2,5,6,7]
//calculate the sum of the array using either for of or for in
sum=0
for(let i of arr){
  sum=sum+i
}




//high level
const users =['hari', 'shyam', 'hari']
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate

const removeDupe = [...new Set(users)];

console.log(removeDupe)
 




// const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array
const newArr = [[4, 5], [5, 7], [7, 2]];
let sum = 0;

for (const innerArr of newArr) {
  for (const num of innerArr) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
}

console.log(sum); 

// const myDetails = [
//   {id:3, name: 'hari'},
//   {id:5, name: 'shyam'},
//   {id:6, name: 'gopal'},
// ]

// return only array of ids: expected output  [3,5,6]
const myDetails = [
  {id:3, name: 'hari'},
  {id:5, name: 'shyam'},
  {id:6, name: 'gopal'},
]
newArr=[]
// return only array of ids: expected output  [3,5,6]
for(i=0;i<myDetails.length;i++){
newArr.push(myDetails[i].id)
}
console.log(newArr)

const userDetails= [
  {score: 0, name:'hari', marks: [10,3,23]},
  {score: 0, name:'shyam', marks: [50,23,23]},
  {score: 0, name:'shyam',marks: [20,13,43]},
]
//loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]
for (i=0; i<userDetails.length;i++){
  let score=0
  a=userDetails[i].marks
  for(j=0;j<a.length;j++){
    
    score=score+a[j]
    userDetails[i].score=score
  }
  
}
userDetails