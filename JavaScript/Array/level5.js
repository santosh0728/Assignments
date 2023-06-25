
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

console.log(sum); // Output: 17
