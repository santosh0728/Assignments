// Q1 find if hari is in allUsers array or not/
// expected output is : 
// true
const name= 'hari'
const allUsers = ['hari','shyam','thakur']

console.log(allUsers.includes(name)
)


//Q2 find number of duplicates
//expected output is : 2
//true
const user= 'hari'
const userArr = ['hari','shyam','hari','thakur']
let count=0
for(let i=0; i<userArr.length; i++){
  
    if(userArr[i]==user){
        count++;
    }

}
console.log(count)
