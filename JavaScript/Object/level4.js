const obj = {
    computer: 42,
    maths: 42,
    science: 50
}

//calculate the percentage he scored in the exams out of total 150 score
let sum=0
const totalMarks=150
for(item in obj){
  sum=sum+obj[item]
}
totalSubjects=Object. keys(obj).length

let percentage= sum/totalMarks*100
console.log(percentage)
//
a=percentage.toFixed(2)
percentageObtained=parseFloat(a)

//pushing key and value to object
obj.percentageObtained=percentageObtained
obj




const userDetails={
    name: "kaylin",
    maths: 23,
    science: 35,
    gk:30
}

// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S', 'G'],
//     subjectScores: [23,35,30]
// }
a=Object.keys(userDetails)
let subjects=[]
let subjectScores=[]
a.map((item)=>{
  if (item !='name')
    subjects.push(item[0])
  return(item[0])
  
})
b=Object.values(userDetails)
b.map((item)=>{
      if (item!='kaylin')
        subjectScores.push(item)
  return(item)
      })
subjectScores

const newObj={
  userName:userDetails.name
  
 
}
newObj.subjectCodes=subjects
newObj.subjectScores=subjectScores
console.log(newObj)



